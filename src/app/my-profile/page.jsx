"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import userAvatar from "@/assets/user.png";

const MyProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  if (!user) {
    return (
      <div className="container mx-auto mt-10 text-center">
        <p className="text-red-500 text-lg">
          Please login first to see your profile
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto bg-orange-50 mt-10 min-h-[70vh] flex justify-center items-center">

      <div className="p-8 bg-white rounded-xl shadow-lg w-[350px] text-center">

        {/* Profile Image */}
        <Image
          src={user.image || userAvatar}
          alt="User"
          width={100}
          height={100}
          className="rounded-full mx-auto shadow-md"
        />

        {/* Name */}
        <h2 className="text-2xl font-bold mt-4 text-gray-800">
          {user.name}
        </h2>

        {/* Email */}
        <p className="text-gray-600 mt-2">
          📧 {user.email}
        </p>

        {/* Password (hidden) */}
        <p className="text-gray-400 mt-2">
          🔒 Password: ********
        </p>

        {/* Button */}
        <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">
          Update Info
        </button>

      </div>

    </div>
  );
};

export default MyProfilePage;