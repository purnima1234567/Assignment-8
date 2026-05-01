'use client'
import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    console.log(user, "session");


    return (
        <div className='container mx-auto flex justify-between items-center mt-6 px-4'>

            {/* Logo */}
            <div>
                <h1 className="text-3xl font-bold text-orange-500 flex items-center">
                    🌞<span className='text-yellow-600'>SummerVibe</span>
                </h1>
            </div>

            {/* Links */}
            <div>
                <ul className='flex items-center gap-6 font-medium text-gray-700'>
                    <NavLink href={"/"}><li className='hover:text-orange-500'>Home</li></NavLink>
                    <NavLink href={"/products"}><li className='hover:text-orange-500'>Products</li></NavLink>
                    <NavLink href={"/my-profile"}><li className='hover:text-orange-500'>My Profile</li></NavLink>
                </ul>
            </div>

            {/* Button */}

            {user ? (
                <div className='flex items-center gap-2'>
                    <Image
                        src={user?.image} alt='User avatar'
                        width={50}
                        height={50}
                        className='rounded-full'
                    />
                    <button className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md' onClick={async () => await authClient.signOut()}>Logout</button>
                </div>
            ) : (
                <Link href={'/auth/login'}>
                    <button className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md'>
                        Login
                    </button>
                </Link>
            )}

        </div>
    );
};

export default Navbar;