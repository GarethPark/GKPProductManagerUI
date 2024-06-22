// This file should be in the app directory, e.g., app/products/page.jsx

import React from 'react';

// Define the ProductList component
function ProductList({ products }) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-4">Product name</th>
                  <th scope="col" className="px-4 py-3">Category</th>
                  <th scope="col" className="px-4 py-3">Brand</th>
                  <th scope="col" className="px-4 py-3">Description</th>
                  <th scope="col" className="px-4 py-3">Price</th>
                  <th scope="col" className="px-4 py-3"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.name}
                    </th>
                    <td className="px-4 py-3">{product.category}</td>
                    <td className="px-4 py-3">{product.brand}</td>
                    <td className="px-4 py-3 max-w-[12rem] truncate">{product.description}</td>
                    <td className="px-4 py-3">${product.price}</td>
                    <td className="px-4 py-3">...actions...</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

// Define an async function to fetch the data on the server
async function fetchProducts() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Apple iMac 2",
      category: "PC",
      brand: "Apple",
      description: "A powerful computer with excellent graphics.",
      price: 2999,
    },
    {
        id: 2,
        name: "Apple iPhone 12",
        category: "Phone",
        brand: "Apple",
        description: "A powerful phone with excellent graphics.",
        price: 4000,
    },
    {
        id: 3,
        name: "Apple iPad 12",
        category: "Tablet",
        brand: "Apple",
        description: "A powerful iPad.",
        price: 10000,
    },
    
    // Add more product objects here
  ];

  // Simulate a delay to mimic data fetching
  await new Promise((resolve) => setTimeout(resolve, 500));

  return products;
}

// Define the page component that fetches the data and renders the ProductList
export default async function Page() {
  const products = await fetchProducts();

  return <ProductList products={products} />;
}
