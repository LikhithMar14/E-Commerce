import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts  } from "@/actions/product";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";
const  Home = async()=>{
  const latestProducts = await getLatestProducts()

  return(
    <ProductList data = {latestProducts} title = "Newest Arrivals" limit={LATEST_PRODUCTS_LIMIT}/>
  );
}
export default Home