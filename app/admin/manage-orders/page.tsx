import Container from "@/app/components/container";
import { getCurrentUser } from "@/actions/getCurrentuser";
import NullData from "@/app/components/NullData";
import ManageOrdersClient from "./ManageOrdersClient";
import getOrders from "@/actions/getOrders";

const ManageOrders =  async () => {

const orders = await getOrders();
const currentUser = await getCurrentUser()

if(!currentUser || currentUser.role!== "ADMIN"){
    return <NullData title="Opps!! Access denied for an User "/>
}


    return ( <div className="pt-8"> 
        <Container>
            <ManageOrdersClient orders={orders}/>
        </Container>
         </div> );
}
 
export default ManageOrders;