import Container from "@/app/components/container";
import ProductDetails from "./productDetails";
import ListRating from "./ListRating";

import getProductsById from "@/actions/getProductsById";
import NullData from "@/app/components/NullData";
import AddRating from "./AddRating";
import { getCurrentUser } from "@/actions/getCurrentuser";

interface IParams{
    productId?: string;
}

const Product = async ({params}: { params: IParams}) => {
   
const product = await getProductsById(params)
const user = await getCurrentUser()
   
if(!product) return <NullData title="Oops! product with the given id does not exist"/>


    return (<div className="p-8"> 
        <Container>
            <ProductDetails product = {product}/>
            <div className="flex flex-col mt-20 gap-4">
                <AddRating product={product} user={user}/>
                <ListRating product={product}/>
            </div>
        </Container>
    </div>);
}
 
export default Product;