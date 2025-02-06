export class Product{
    id!: number;
    img!: string;
    name!: string;
    brand!: string;
    desc!: string;
    price!: number;
    color!: string;
    size!: string[];
    isInInventory!: boolean;
    productInStock!: number;
    discountedPrice?: number;
}