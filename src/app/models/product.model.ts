class Product {
    constructor(
        public title: string,
        public description: string,
        public id: string,
        public price: number,
        public sku?: string,
        public image?: string,
    ) {}
}

export { Product };
