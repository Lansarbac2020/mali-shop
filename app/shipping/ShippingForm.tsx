import FormWrap from "../components/FormWrap";
import Heading from "../components/Heading";

const ShippingPage = () => {
    return ( <div>
       
        <FormWrap>
            <Heading title="Shipping Policy" center/>
            <div className="pb-4">
            <h2 className="font-semibold pb-4">1. Shipping Methods and Delivery Timeframes: </h2>
            <ul>
                <li> . We offer several shipping methods to cater to your needs.</li>
                <li>. Standard Shipping: maximum 2 weeks</li>
                <li>. Expedited Shipping:  maximum one 1 week</li>
                <li>. Please note that delivery times may vary depending on your location and product availability.</li>
            </ul>
            <h2 className="font-semibold pt-4">2. Shipping Costs:</h2>
            <p>Shipping costs are calculated based on the weight of your order and your location.
Free shipping may be offered for orders exceeding a certain amount. Check our website for current promotions.</p>
<h2 className="font-semibold pt-4">3. Contact Information:</h2>
<p>If you have any questions or concerns regarding our shipping policy, please don't hesitate to contact us at <a href="phoneto5411622294">05411622294</a></p>
<h2 className="font-semibold pt-4">4. Policy Updates</h2>
<p>We reserve the right to update our shipping policy at any time. Please check this page periodically for any changes.</p>
            </div>
        </FormWrap>
    </div> );
}
 
export default ShippingPage;