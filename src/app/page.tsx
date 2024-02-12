import Image from "next/image";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBookBookmark,
  faCity,
  faGlobe,
  faLocationDot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import UserProfile from "./UserProfile";

export default function Home() {
  return (
    <main className=" ">
      <Navbar />
      <div className="flex h-auto flex-wrap gap-2  overflow-hidden p-5 text-primary md:flex-nowrap md:p-8 lg:p-10">
        <UserProfile />
        <div className="w-full md:w-3/4 ">11</div>
      </div>
      <Footer />
    </main>
  );
}
