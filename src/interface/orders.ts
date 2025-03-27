interface IOder {
    id: number | string;
    name: string;
    phone: string;
    address: string;
    items: {
        name: string;
        price: number;
        quantity: number;
        image: string;
    }[];
    total: number | string;
}

export default IOder