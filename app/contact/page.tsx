'use client'
import React from 'react';
import ContactForm from './ContactForm';
import Heading from '../components/Heading';
// Import du composant ContactForm

const ContactPage: React.FC = () => {
    return (
        
        <div className='pt-6'>
            <Heading center title='Contact-Us'/>
            
            <p className='text-center'>Fill out the form below to contact us:</p>
            <ContactForm /> {/* Utilisation du composant ContactForm */}
        </div>
    );
};

export default ContactPage;
