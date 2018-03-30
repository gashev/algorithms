import java.lang.*;
import java.util.Random;
import java.util.*;

class Population {
    private ArrayList<Chromosome> population;
    private int[] arguments;
    
    public Population(int[] arguments) {
        this.population = new ArrayList<Chromosome>();
        this.arguments = arguments;
    }

    private int getRandom(int high) {
        Random r = new Random();
        return r.nextInt(high) + 1;
    }

    private Chromosome createChromosome(int high) {
        return new Chromosome(new int[] {
            this.getRandom(high),
            this.getRandom(high),
            this.getRandom(high),
            this.getRandom(high)
        });
    }

    public ArrayList<Chromosome> getPopulation() {
        return this.population;
    }

    public void createPopulation(int high) {
        for (int i = 0; i < 5; i++) {
            this.population.add(this.createChromosome(high));
        };
    }

    public void add(Chromosome chromosome) {
        this.population.add(chromosome);
    }

    public int getFitnes(Chromosome chromosome) {
        int fitnes = (-1) * this.arguments[this.arguments.length - 1];
        int[] data = chromosome.getData();
        for (int i = 0; i < data.length; i++) {
            fitnes += this.arguments[i] * data[i];
        }

        return Math.abs(fitnes);
    }

    public void print(){
        System.out.println("Population:");
        for (int i = 0; i < this.population.size(); i++) {
            this.population.get(i).print();
        }
    }

    public double[] getLikelihood() {
        double[] likelihood = {0, 0, 0, 0, 0};

        int[] fitnes = {0, 0, 0, 0, 0};
        double multiplicativeInverses = 0;

        for (int i = 0; i < this.population.size(); i++) {
            fitnes[i] = this.getFitnes(this.population.get(i));
            multiplicativeInverses += 1.0/fitnes[i];
        }
        for (int i = 0; i < population.size(); i++) {
            likelihood[i] = (1.0/fitnes[i])/multiplicativeInverses * 100;
        }

        return likelihood;
    }

    public ArrayList<int[]> createSelection(double[] likelihood) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        for (int i = 0; i < likelihood.length; i++) {
            for (int j = 0; j < Math.round(likelihood[i] /10); j++) {
                list.add(i);
            }
        }   

        ArrayList<int[]> selections = new ArrayList<int[]>();

        for (int i = 0; i < list.size() / 2; i++) {
            int[] item = {list.get(i), list.get(list.size() - i - 1)};

            if (item[0] == item[1]) {
                item[1] = list.get(list.size() - i - 2);
            }
            selections.add(item);
            System.out.println("selection: " + item[0] + ", " + item[1]);
        }    

        return selections; 
    }

    public Population crossover(ArrayList<int[]> selections) {
        Population newPopulations = new Population(this.arguments); 
        
        for (int i = 0; i < selections.size(); i++) {
            int[] selection = selections.get(i);
            int[] chromosome0 = this.population.get(selection[0]).getData();
            int[] chromosome1 = this.population.get(selection[1]).getData();
            Chromosome newChromosome0 = new Chromosome(new int[] {
                chromosome0[0],
                chromosome1[1],
                chromosome1[2],
                chromosome1[3]
            });

            newPopulations.add(newChromosome0);
            if (newPopulations.getPopulation().size() == 5) {
                break;
            }
            Chromosome newChromosome1 = new Chromosome(new int[] {
                chromosome0[0],
                chromosome0[1],
                chromosome1[2],
                chromosome1[3]
            });
            newPopulations.add(newChromosome1);
        }

        return newPopulations;
    }

    public Population mutation() {
        Population newPopulation = new Population(this.arguments);
        for (int i = 0; i < this.population.size(); i++) {
            int[] item = this.population.get(i).getData();
            int index = this.getRandom(4) - 1;
            item[index] = this.getRandom(30);
            newPopulation.add(new Chromosome(item));
        }

        return newPopulation;
    }
}
