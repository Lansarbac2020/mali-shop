import FormWrap from "../components/FormWrap";
import Container from "../components/container";
import CheckoutClient from "./CheckoutClient";

const Checkout
 = () => {
    return (  <div className="p-8">
        <Container>
            <FormWrap>
                <CheckoutClient/>
            </FormWrap>
        </Container>
    </div>);
}
 
export default Checkout
;