
export enum Status {
    out = "OUT_OF_STOCK",
    in = "IN_STOCK"
}

export interface Product {
    image: string;
    name: string;
    price: number;
    category: string;
    status: Status
}

