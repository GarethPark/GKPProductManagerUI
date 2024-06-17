
import Link from "next/link";

export default function ProductList() {
    return (
      <>
        <h1>Product List</h1>
        <h2>Product 1</h2>
        <h2>Product 2</h2>
        <h2>Product 3</h2>

        

        <Link href={`/products/${1}`}>Go to Product 1</Link>
        <Link href={`/products/${2}`}>Go to Product 2</Link>
      </>
    );
  }