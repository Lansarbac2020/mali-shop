'use client'
import React from 'react';
import ShippingForm from './ShippingForm';
// Import du composant ContactForm

const ShippingPage: React.FC = () => {
    return (
        
        <div className='pt-6'>
           
            
            <p className='p-4'>At <strong>Malishop</strong>, we're committed to providing you with a seamless shopping experience from start to finish. As part of our dedication to transparency and customer satisfaction, we've developed this shipping policy to outline the details of how we handle shipping, delivery, and related matters.</p>
          <ShippingForm/>
        </div>
    );
};

export default ShippingPage;
