'use client';
import React from "react";
import { products } from "../data";
import { useRouter } from "next/navigation"; 

// export default async function GenralProduct({ params }) { //for server component


export default function GenralProduct({ params }) {
  // let { slug } = await params; //for server component
  let {slug} = React.use(params);
  const router = useRouter();
  let filteredProduct = products.filter(
    (product) =>
      product.category.toLocaleLowerCase() === slug.toLocaleLowerCase()
  );
  return (
    <>
        <h1>Products in {slug} category</h1>
        {
            filteredProduct.map((productIteam) => (
                <div key={productIteam.title}>
                    <h2>{productIteam.title}</h2>
                    <br></br>

                    <h3>{productIteam.price}</h3>
                </div>
            ))
        }
        <button className='text-center bg-blue-300 rounded-lg text-amber-50 p-1.5 hover:bg-blue-400 hover:p-2 ' onClick={()=>router.push('/products')}>Go to Product Page</button>
    </>
  );
}
