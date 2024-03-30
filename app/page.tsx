export const revalidate = 0;

import HomeBanner from "./components/HomeBanner";
import Container from "./components/container";
import ProductCard from "./components/products/ProductCard";
import getProducts, { IProductParams } from "@/actions/getProducts";
import NullData from "./components/NullData";


interface Homeprops{
  searchParams: IProductParams
}


export default  async function Home( {searchParams}: Homeprops) {

  const products = await getProducts(searchParams)

  if(products.length===0){
    return <NullData title='Oops! No produts found. Click "All" to clear filters'/>
  }
   //fisher yates shuffle algorithm
  function shuffleArray(array: any){
    for(let i = array.length -1; i>0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [array[i], array[j]]= [array[j], array[i]]
    }

    return array
  }

  const shuffleProducts = shuffleArray(products)
  return( 
  <div className="p-8">
    <Container>
      <div>
        <HomeBanner/>
      </div>
      <div className="grid grid-cols-2 
      sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
      2xl:grid-cols-6 gap-8">
        {shuffleProducts.map((product: any ) =>{
          return <ProductCard data={product} key={product.id}/>;
        })}
      </div>
    </Container>
  </div>
  );
}