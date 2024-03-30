import Container from "@/app/components/container";
import getOrdersById from "@/actions/getOrderById";
import OrderDetails from "./OrderDetails";
import NullData from "@/app/components/NullData";

interface IPrams{
    orderId?: string;
}

const Order = async ({params}: { params: IPrams}) => {

    const order = await getOrdersById(params);

    if(!order) return <NullData title="No order">
        
    </NullData>

    return (<div className="p-8"> 
        <Container>
            <OrderDetails order = {order}/>
        </Container>
    </div>);
}
export default Order;