import ProductBuilder from "./ProductBuilder";

class Client_and_director {
  public static main(args: string[]): void {
    const director = new ProductBuilder()
      .addSomeConfig('some param value')
      .addAnotherConfig('another param value')
    
    const product = director.build();
  }
}