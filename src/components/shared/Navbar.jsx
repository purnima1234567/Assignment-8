'use client'
import React, { useState } from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [open, setOpen] = useState(false);

    return (
        <div className='container mx-auto px-4 mt-6'>

            <div className='flex justify-between items-center'>

                {/* Logo */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-orange-500 flex items-center">
                        🌞<span className='text-yellow-600'>SummerVibe</span>
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-6 font-medium text-gray-700'>
                        <NavLink href={"/"}>
                            <li className='hover:text-orange-500'>Home</li>
                        </NavLink>

                        <NavLink href={"/products"}>
                            <li className='hover:text-orange-500'>Products</li>
                        </NavLink>

                        <NavLink href={"/my-profile"}>
                            <li className='hover:text-orange-500'>My Profile</li>
                        </NavLink>
                    </ul>
                </div>

                {/* Desktop Button */}
                <div className='hidden md:flex items-center gap-2'>
                    {user ? (
                        <>
                            <Image
                                src={user?.image}
                                alt='User avatar'
                                width={45}
                                height={45}
                                className='rounded-full'
                            />

                            <button
                                className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md'
                                onClick={async () => await authClient.signOut()}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link href={'/auth/login'}>
                            <button className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md'>
                                Login
                            </button>
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className='md:hidden text-3xl'
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {
                open && (
                    <div className='md:hidden mt-4 bg-white shadow-lg rounded-xl p-4'>

                        <ul className='flex flex-col gap-4 font-medium text-gray-700'>

                            <NavLink href={"/"}>
                                <li>Home</li>
                            </NavLink>

                            <NavLink href={"/products"}>
                                <li>Products</li>
                            </NavLink>

                            <NavLink href={"/my-profile"}>
                                <li>My Profile</li>
                            </NavLink>

                        </ul>

                        <div className='mt-4'>
                            {user ? (
                                <div className='flex items-center gap-3'>
                                    <Image
                                        src={user?.image}
                                        alt='User avatar'
                                        width={45}
                                        height={45}
                                        className='rounded-full'
                                    />

                                    <button
                                        className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md'
                                        onClick={async () => await authClient.signOut()}
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Link href={'/auth/login'}>
                                    <button className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md w-full'>
                                        Login
                                    </button>
                                </Link>
                            )}
                        </div>

                    </div>
                )
            }

        </div>
    );
};

export default Navbar;