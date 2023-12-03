import { logo } from "@/public";
import Image from "next/image";
import { FC } from "react";
import { Github, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
  const social = [
    {
      id: 0,
      img: <Linkedin width={30} height={30} />,
      link: "https://www.linkedin.com/in/omar-dugha-b3a2b129b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 1,
      img: <Github width={30} height={30} />,
      link: "https://github.com/OmarDugha03",
    },
    {
      id: 2,
      img: <Youtube width={30} height={30} />,
      link: "https://youtube.com/@OmarDugha?si=aTBYHD_iIJq-puWm",
    },
    {
      id: 3,
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 012.703 2.703 2.707 2.707 0 01-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 01-2.547 2.548 2.55 2.55 0 01-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"></path>
        </svg>
      ),
      link: "https://www.upwork.com/freelancers/~010376979918c3549d",
    },
  ];

  return (
    <nav className="container pt-8 flex justify-between items-center">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          className="lg:w-52"
          width={100}
          height={100}
        />
      </Link>

      <div className="flex   items-center justify-between gap-x-2 lg:-me-20 md:gap-x-6 lg:gap-x-20">
        {social.map((item) => (
          <div key={item.id}>
            <Link target="_blank" href={item.link}>
              <p className="hover:text-rose-500 transition-all   lg:m-1   duration-200 delay-100">
                {item.img}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SideBar;
