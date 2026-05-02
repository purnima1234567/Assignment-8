'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter, } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

    const router = useRouter();


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();


    const handleRegisterFunc = async (data) => {
        console.log(data, 'data');
        const { email, name, photo, password } = data;
        console.log(name, photo);

        const { data: res, error } = await authClient.signUp.email({
            name: name, 
            email: email, 
            password: password, 
            image: photo,
            callbackURL: "/",

        });

        console.log(res, error);
        if(error) {
            alert(error.message);
        }

        if(res) {
            alert("Signup succesfull");
            router.push("/");
        }

    };



    return (
        <div className='container w-[100vh] mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 mt-12'>
            <div className='p-8 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Register your accout</h2>


                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>

                    <fieldset className='fieldset'>
                        <legend className='fieldset-legend'>Name</legend>
                        <input
                            type="type"
                            className='input'
                            placeholder='Type here name'
                            {...register("name", { required: "Name field is required" })}
                        />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>

                    <fieldset className='fieldset'>
                        <legend className='fieldset-legend'>Photo URL</legend>
                        <input
                            type="text"
                            className='input'
                            placeholder='Type here photo'
                            {...register("photo", { required: "Photo field is required" })}
                        />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </fieldset>
                    <fieldset className='fieldset'>
                        <legend className='fieldset-legend'>Email</legend>
                        <input
                            type="email"
                            className='input'
                            placeholder='Type here email'
                            {...register("email", { required: "Email field is required" })}
                        />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className='fieldset'>
                        <legend className='fieldset-legend'>Password</legend>
                        <input
                            type="password"
                            className='input'
                            placeholder='Type here password'
                            {...register("password", { required: "Password field is required" })}
                        />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    </fieldset>

                        <button className="mt-2 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
                            Register
                        </button>
                </form>


            </div>
        </div>
    );
};

export default RegisterPage;