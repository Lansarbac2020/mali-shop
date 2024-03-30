import { getCurrentUser } from "@/actions/getCurrentuser";
import FormWrap from "../components/FormWrap";
import Container from "../components/container";
import LoginForm from "./LoginForm";

const Login = async () => {
    const currentUser = await getCurrentUser();
    return (  <Container>
        <FormWrap>
            <LoginForm currentUser={currentUser}/>
        </FormWrap>
    </Container>);
}
 
export default Login;