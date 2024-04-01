import React from 'react';
import { useForm } from 'react-hook-form';
import FormWrap from '../components/FormWrap';
import Button from '../components/Button';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        // Handle form submission here
        console.log(data);
    };

    return (
        <FormWrap>
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <label htmlFor="firstName" className='font-bold '>First Name:</label>
                <div className={errors.firstName ? 'input-error' : ''}>
                    <input 
                        autoComplete='off'
                        className={`w-full 
                      
                        
                        peer p-4 pt-6 outline-none bg-white font-light border-2 rounded-md transition disabled:opacity-70 ${errors.firstName ? 'border-red-500' : ''}`}
                        id="firstName"
                        {...register('firstName', { required: true })}
                    />
                    {errors.firstName && <span className='text-rose-500'>First name is required</span>}
                </div>
            
                <label htmlFor="lastName" className='font-bold'>Last Name:</label>
                <div className={errors.lastName ? 'input-error' : ''}>
                    <input
                        autoComplete='off'
                        className={`w-full peer p-1 pt-6 outline-none bg-white font-light border-2 rounded-md transition disabled:opacity-70 ${errors.lastName ? 'border-red-500' : ''}`}
                        id="lastName"
                        {...register('lastName', { required: true })}
                    />
                    {errors.lastName && <span className='text-rose-500'>Last name is required</span>}
                </div>
            
                <label htmlFor="email" className='font-bold'>Email:</label>
                <div className={errors.email ? 'input-error' : ''}>
                    <input
                        autoComplete='off'
                        className={`w-full peer p-1 pt-6 outline-none bg-white font-light border-2 rounded-md transition disabled:opacity-70 ${errors.email ? 'border-red-500' : ''}`}
                        id="email"
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i, validate: value => value.includes('@') })}
                    />
                    {errors.email && errors.email.type === 'required' && <span className='text-red-600' >Email address is required </span> }
                    {errors.email && errors.email.type === 'pattern' && <span className='text-red-600' >Invalid email address </span> }
                    {errors.email && errors.email.type === 'validate' && <span className='text-red-600' >Email address must contain '@' </span> }
                </div>
            
                <button className='mt-6 disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-full border-slate-700 flex items-center justify-center gap-2 bg-slate-700 text-white text-md font-semibold' type="submit">SEND</button>
            </form>
        </FormWrap>
    );
};

export default ContactForm;
