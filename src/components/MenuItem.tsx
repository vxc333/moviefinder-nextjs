import Link from "next/link";
import { IconType } from "react-icons";

interface MenuItemProps {
  title: string;
  address: string;
  Icon: IconType;
}
export default function MenuItem({ title, address, Icon }: MenuItemProps) {
  return (
    <Link href={address} className="hover:text-slate-600">
      <Icon className="text-xl sm:hidden"/>
      <p className="hidden sm:inline text-base">{title}</p>
    </Link>
  );
}
