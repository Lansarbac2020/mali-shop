import Link from "next/link";
import Container from "../container";
import FooterList from "./FooterList";
import {MdFacebook} from 'react-icons/md';
import {AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';

const Footer = () => {
    return <footer className="bg-slate-700
    text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row
            justify-between pt-16 pb-8">
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Shop Categories</h3>
                    <Link href="#">Phones</Link>
                    <Link href="#">Laptops</Link>
                    <Link href="#">Desktops</Link>
                    <Link href="#">Watches</Link>
                    <Link href="#">Tvs</Link>
                    <Link href="#">Accesories</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold 
                    mb-2">Customer Services </h3>
                    <Link href="/contact">Contact-Us</Link>
                    <Link href="#">Shipping Policy</Link>
                    <Link href="#">Returns & Exchanges</Link>
                    <Link href="#">FAQs</Link>
                
                </FooterList>
                <div className="w-full md:w-1/3 mb-6
                md:mb-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387218.5247643652!2d-122.41941555021886!3d37.77492958737761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858062b45d26a5%3A0xa6f81ad88cd1cb6b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1648827197402!5m2!1sen!2sin" width="500" height="300" className="border-0" loading="lazy"  ></iframe>
                    <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved</p>
                </div>
                <FooterList>
                <h3 className="text-base font-bold 
                    mb-2">Follows Us </h3>
                    <div className="flex gap-2">
                    <Link href="https://www.facebook.com/profile.php?id=100064973313047">
                        <MdFacebook size={24}/>
                    </Link>
                   
                    <Link href="https://www.instagram.com/21_lansar?igsh=MXZxczZuNGNramx5NQ==">
                        <AiFillInstagram size={24}/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/lansarbacoroceolansarcenter/">
                        <AiFillLinkedin size={24}/>
                    </Link>
                    </div>
                </FooterList>
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6">
               

                    </div>
            </div>
        </Container>
        </footer>;

}
 
export default Footer;