'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useRouter, useSearchParams } from 'next/navigation';

const LoginContent = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const redirect = searchParams.get("redirect") || "/";

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data);
    };

    const handleGithubSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
        console.log(data);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLoginFunc = async (data) => {

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: redirect,
        });

        console.log(res, error);
    };

    return (
        <div className='container w-[100vh] mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 mt-12'>
            <div className='p-8 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Login your account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>

                    <fieldset>
                        <legend>Email</legend>
                        <input
                            type="email"
                            className='input'
                            placeholder='Type here email'
                            {...register("email", { required: "Email field is required" })}
                        />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset>
                        <legend>Password</legend>
                        <input
                            type="password"
                            className='input'
                            placeholder='Type here password'
                            {...register("password", { required: "Password field is required" })}
                        />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className="mt-2 w-full bg-orange-500 text-white py-2 rounded">
                        Login
                    </button>

                    <div className="flex flex-col gap-2 mt-3">
                        <button className="btn text-orange-500" onClick={handleGoogleSignin}>
                            <FaGoogle /> Login with Google
                        </button>

                        <button className="btn text-orange-500" onClick={handleGithubSignin}>
                            <FaGithub /> Login with Github
                        </button>
                    </div>

                </form>

                <p className='mt-4'>
                    Don't have an account? <Link href={'/auth/register'} className='text-orange-500'>Register</Link>
                </p>

            </div>
        </div>
    );
};

export default LoginContent;