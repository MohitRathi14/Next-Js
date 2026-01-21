import { products } from "../data";
export default async function GenralProduct({ params }) {
  let { slug } = await params;
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
    </>
  );
}
