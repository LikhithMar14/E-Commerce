import ProductCard from "./product-card";
const ProductList = ({ data, title }: { data: any; title?: string }) => {
  console.log(data.length);
  return (
    <div className="my-10">
      <h2 className="h2 bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {data.map((product: any) => (
            <ProductCard key = {product.slug} product={product}/>
          ))}
        </div>
      ) : (
        <div>
          <p>No Products</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;