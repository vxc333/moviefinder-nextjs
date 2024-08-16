import MenuItem from "./MenuItem";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto ">
      <div className="flex gap-4">
        <MenuItem title="Início" address="/" Icon={FaHome} />
        <MenuItem title="Sobre" address="/sobre" Icon={FaInfoCircle} />
      </div>
      <Link href={"/"}>
        <span className="text-base font-bold text-slate-900 sm:text-2xl">
          movieFinder
        </span>
      </Link>
    </div>
  );
}
