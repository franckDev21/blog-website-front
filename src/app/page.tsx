import EmailLink from "@/components/pages/Home/EmailLink";
import HomeLayout from "@/components/pages/Layouts/HomeLayout";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <HomeLayout>
      <section className="flex text-center flex-col items-center">
        <div className="space-y-4 flex text-center flex-col items-center">
          <div className="rounded-full border-primary overflow-hidden border-8 relative">
            <Image
              className=" rounded-full w-[250px] hover:scale-105 transition h-[250px]"
              alt="profil"
              src="/images/photo1.jpg"
              width={300}
              height={300}
            />
          </div>
          <div>
            <h1 className=" text-4xl font-extrabold">
              Hi 👋🏽, am{" "}
              <span className="text-primary text-opacity-60">
                Francklin Tiomela
              </span>
              .
            </h1>
            <p>
              A <span className="text-primary text-opacity-60">Full-stack</span>{" "}
              developer and{" "}
              <span className="text-primary text-opacity-60">DevOps</span>{" "}
              Lover.
            </p>
          </div>
          <div className=" flex space-x-6 pt-2">
            <a href="/" className=" text-2xl text-primary p-2 rounded-m bg-gray-100 rounded-md transition">
              <FaTwitter />
            </a>
            <a href="https://github.com/franckDev21" target="_blank" className=" text-2xl text-primary p-2 rounded-m bg-gray-100 rounded-md transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/francklin-tiomela/" target="_blank" className=" text-2xl text-primary p-2 rounded-m bg-gray-100 rounded-md transition">
              <FaLinkedin />
            </a>
            <EmailLink />
          </div>
        </div>

        <Link href='/view' className="py-2 mt-20  px-4 cursor-pointer rounded-md button-down  bg-primary flex justify-center items-center ">
          <FaChevronDown className="  text-xl text-white" />
        </Link>
      </section>

      <div className=" absolute bottom-0 left-0 right-0 h-4 w-full bg-primary "></div>
      </HomeLayout>
  );
}
