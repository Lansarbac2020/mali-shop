import { getCurrentUser } from "@/actions/getCurrentuser";
import FormWrap from "../components/FormWrap";
import Container from "../components/container";
import RegisterForm from "./RegisterForm";

const Register =  async() => {
    const currentUser = await getCurrentUser();
    return ( <Container>
        <FormWrap>
            <RegisterForm currentUser={currentUser}/>
        </FormWrap>
    </Container> );
}
 
export default Register;