import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-6">
      <FaInstagram size={24} />
      <SlSocialFacebook size={24} />
      <RiYoutubeLine size={24} />
    </div>
  );
}
