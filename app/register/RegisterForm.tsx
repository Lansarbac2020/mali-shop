
'use client';

import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import {signIn} from 'next-auth/react';
import { useRouter } from "next/navigation";
import { safeUser } from "@/types";

interface RegisterFormProps{
    currentUser: safeUser | null
 }
const RegisterForm: React.FC<RegisterFormProps> = ({currentUser}) => {


    const [isLoading, setIsLoading] = useState(false)
    const {
        register, handleSubmit, formState:
    {errors}} = useForm<FieldValues>({
        defaultValues:{
         
            name:"",
            email:"",
            password: "",
        },
    });

    const router= useRouter();


  useEffect(()=> {
    if(currentUser){
      router.push('/cart');
      router.refresh();

    }
  }, []);

    const onsubmit:SubmitHandler<FieldValues> = (data)=>
    {
        setIsLoading(true)
        axios.post('/api/register', data).then(()=>{
            toast.success('Account created')

            signIn('credentials',
            {
                email: data.email,
                password: data.password,
                redirect: false,
            }).then((callback)=>{
        if(callback?.ok){
          router.push('/cart')
          router.refresh( );
          toast.success('Logged In')

        }

        if(callback?.error){

            toast.error(callback.error)
        }
            });
        }).catch(()=>toast.error('Something went wrong')).finally(()=>{
            setIsLoading(false);
        } 
        
        )

    };

    if(currentUser){

        return <p className="text-center"> Logged in. Redirecting...</p>;
    }
    return(
        <>
    <Heading title="Sign Up for E-shop"/>
    <Button
    outline
    label="Continue with google"
    icon={AiOutlineGoogle}
    onClick={() => {signIn('google')}}
    />
    <hr className="bg-slate-300 w-full h-px"/>
      <Input
      id="name"
      label="Name"
      disabled={isLoading}
      register={register}
      errors={errors}
      required
      />
           <Input
      id="email"
      label="E-mail"
      disabled={isLoading}
      register={register}
      errors={errors}
      required
      />
           <Input
      id="password"
      label="Password"
      disabled={isLoading}
      register={register}
      errors={errors}
      required
      type="password"
      />
      <Button label={isLoading ? "Loading" : "Sign Up"} onClick={handleSubmit(onsubmit)}/>
      <p className="text-sm">
        Already have an account ?{" "} <Link className="underline" href='/login' >
        Log In
        </Link>
      </p>
      </>
      
    );
};
 
export default RegisterForm;