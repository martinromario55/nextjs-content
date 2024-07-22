import Image from "next/image";
import Link from "next/link";
import React from "react";
import profileImg from "@/public/profile-img.png";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center text-dark">
      <div className="mr-2 w-12 overflow-hidden rounded-full border border-solid border-dark md:mr-4 md:w-16 dark:border-gray">
        <Image
          src={profileImg}
          alt="Logo"
          className="h-auto w-full rounded-full"
        />
      </div>
      <span className="text-xl font-bold">GH Blog</span>
    </Link>
  );
};

export default Logo;
