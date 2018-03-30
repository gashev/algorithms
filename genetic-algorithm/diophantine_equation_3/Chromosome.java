class Chromosome {
    private int[] data;

    public Chromosome(int[] data) {
        this.data = data;
    }

    public int[] getData() {
        return this.data;
    }

    public void print() {
        for (int i = 0; i < this.data.length; i ++) {
            System.out.printf("%d ", this.data[i]);
        }
        System.out.println();
    }
}
