import Link from "next/link";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import React from "react";

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex w-[1917px] h-[100px] justify-between items-center  py-9 px-[350px]">
      <Link href={"/"}>
        <div className="flex ">
          <button className="flex gap-2.5 items-center ">
            <img className="w-9 h-9" src="/Logo.svg" alt="" />
            <img src="/MetaBlog.svg" alt="" />
          </button>
        </div>
      </Link>

      <div className="flex gap-10 justify-center text-base items-center">
        <button
          className="text-base font-normal text-[#3B3C4A]"
          onClick={() => router.push("/")}
        >
          Home
        </button>
        <Link href={"/link/Blogjump"}>
          <button className="text-base font-normal text-[#3B3C4A] ">
            Blog
          </button>
        </Link>

        <Link href={"/link/Contact"}>
          <button className="text-base font-normal text-[#3B3C4A]">
            Contact
          </button>
        </Link>
        <div className="h-[36px] bg-[#F4F4F5]  rounded-md px-[16px] py-[8px] gap-[12px] items-center flex">
          <input type="Search" className="bg-zinc-100" />
          <FiSearch />
        </div>
      </div>
    </div>
  );
}
