import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        Population population = new Population(new int[] {1, 2, 3, 4, 30});
        population.createPopulation(300);
        int generation = 0;
        while (true) {
            generation++;
            System.out.println("\nGeneration: " + generation);
            population.print();
            for (int i = 0; i < population.getPopulation().size(); i++) {
                Chromosome chromosome = population.getPopulation().get(i);
                if (population.getFitnes(chromosome) == 0) {
                    System.out.println("Found:");
                    chromosome.print();
                    return;
                }
            }

            double[] likelihood = population.getLikelihood();
            ArrayList<int[]> selections = population.createSelection(likelihood);
            Population newPopulation = population.crossover(selections);
            Population newPopulation2 = newPopulation.mutation();
            population = newPopulation2;
        }
    }
}
