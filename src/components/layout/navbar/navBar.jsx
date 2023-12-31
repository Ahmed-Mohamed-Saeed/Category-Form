import Image from "next/image";
import { useState } from "react";
import priceIcon from "../../../assets/icon-price.png";
import notificationsIcon from "../../../assets/icon-notifications.png";
import favoriteIcon from "../../../assets/icon-favorite.png";
import DrobdownButton from "@/components/shared/drobdown";
import { MenuFoldOutlined } from "@ant-design/icons";
import Link from 'next/link'
function Navbar() {
  const [links, setLinks] = useState([
    {
      label: "الرئيسية",
      link: "/",
    },
    {
      label: "التصنيفات",
      link: "/category",
    },
    {
      label: "تسجيل الدخول",
      link: "/login",
    },
  ]);
  const itemsLang = [
    {
      label: "العربيه",
      key: "العربيه",
    },
    {
      label: "الانجليزيه",
      key: "الانجليزيه",
    },
  ];
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="z-50 backy relative ">
      <div className="container max-md:px-2 h-16 mx-auto flex justify-between items-center ">
        <MenuFoldOutlined
          className="text-white flex md:hidden cursor-pointer text-xl"
          onClick={() => setNavbar(!navbar)}
        />
        <nav
          className={
            navbar === true
              ? "absolute top-[60px] left-0 right-0 backy"
              : ` hidden md:flex sec1`
          }
        >
          <ul className="mx-5 md:flex md:items-center md:gap-[50px]">
            {links.map((item , index) => (
              <li key={index} className="max-md:my-3">
                <Link
                  href={`${item.link}`}
                  className={`${item.link}  text-white`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-[5px] md:gap-[20px]">
          <Image src={priceIcon} alt="priceIcon" />
          <Image src={notificationsIcon} alt="notificationsIcon" />
          <Image src={favoriteIcon} alt="favoriteIcon" />
          <DrobdownButton items={itemsLang} mainClass="search-button" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
