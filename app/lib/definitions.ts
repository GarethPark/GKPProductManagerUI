export type Product = {
    id: string;
    productName: string;
    category: string;
    brand: string;
    description: string;
    price: string;
    // In TypeScript, this is called a string union type.
    // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
    status: 'pending' | 'paid';
  };