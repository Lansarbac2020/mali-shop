import FormWrap from "@/app/components/FormWrap";
import Container from "@/app/components/container";
import AddProductForm from "./AddProductForm";
import { getCurrentUser } from "@/actions/getCurrentuser";
import NullData from "@/app/components/NullData";

const AddProducts = async () => {

    const currentUser = await getCurrentUser()

    if(!currentUser || currentUser.role!== "ADMIN"){
        return <NullData title="Opps!! Access denied for an User "/>
    }
    return ( <div className="p-8">
        <Container>
            <FormWrap>
                <AddProductForm/>
            </FormWrap>
        </Container>
    </div> );
}
 
export default AddProducts;