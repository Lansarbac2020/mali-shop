import Container from "@/app/components/container";
import { getCurrentUser } from "@/actions/getCurrentuser";
import NullData from "@/app/components/NullData";

import getOrdersByUserId from "@/actions/getOrderByUserId";
import OrdersClient from "./OrderClient";

const Orders =  async () => {
const currentUser = await getCurrentUser()



if(!currentUser){
    return <NullData title="Opps! Access denied "/>
}
const orders= await getOrdersByUserId(currentUser.id)

 

    return ( <div className="pt-8"> 
        <Container>
            <OrdersClient orders={orders}/>
        </Container>
         </div> );
}
 
export default Orders;