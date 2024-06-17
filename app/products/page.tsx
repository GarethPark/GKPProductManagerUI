
import Link from "next/link";

export default function ProductList() {
    return (
      <>

      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"><Link href={`/products/${1}`}>Go to Product 1</Link></li>
          <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"><Link href={`/products/${1}`}>Go to Product 2</Link></li>
          <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"><Link href={`/products/${1}`}>Go to Product 3</Link></li>
          <li className="w-full px-4 py-2 rounded-b-lg"><Link href={`/products/${1}`}>Go to Product 4</Link></li>
      </ul>

      </>
    );
  }