export class Products {
    id: number;
    title: string;
    price: number;
    image: string;
    constructor(products: Products) {
        this.id = products.id;
        this.title = products.title;
        this.price = products.price;
        this.image = products.image; 
    }
}