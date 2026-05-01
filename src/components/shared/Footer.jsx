import React from 'react';

const Footer = () => {
    return (
        <div className='mt-16 bg-orange-100'>
            <div className='container mx-auto px-4 py-15 grid md:grid-cols-3 gap-8'>

                {/* Logo / About */}
                <div>
                    <h2 className='text-2xl font-bold text-orange-500'>
                        🌞SummerVibe Shop
                    </h2>
                    <p className='text-gray-600 mt-2'>
                        Your ultimate summer essentials store. Stay cool, stay stylish ☀️
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className='font-semibold mb-2 text-gray-800'>Quick Links</h3>
                    <ul className='space-y-1 text-gray-600'>
                        <li className='hover:text-orange-500 cursor-pointer'>Home</li>
                        <li className='hover:text-orange-500 cursor-pointer'>Products</li>
                        <li className='hover:text-orange-500 cursor-pointer'>My Profile</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className='font-semibold mb-2 text-gray-800'>Contact</h3>
                    <p className='text-gray-600'>Email: support@summercart.com</p>
                    <p className='text-gray-600'>Phone: +880 1234 567890</p>
                </div>

            </div>

            {/* Bottom */}
            <div className='text-center py-4 text-gray-500 border-t'>
                © {new Date().getFullYear()} SummerVibe Shop. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;