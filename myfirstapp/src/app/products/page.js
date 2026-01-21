import Link from "next/link"
export default function Product() {
    let products = [
        {
            id:1,
            category:"Phones"
        },
        {
            id:2,
            category:"laptop"
        },
        {
            id:3,
            category:"camera"
        },
        {
            id:4,
            category:"Earbuds"
        },
        {
            id:5,
            category:"Tvs"
        },
    ]
  return (
    <div>
        <h1>Products Page</h1>
        <ul>
        {
            products.map((product)=>(
                    <li key={product.id}><Link href={`/products/${product.category}`}>{product.category}</Link></li>
            ))
        }
        </ul>
    </div>
  )
}
