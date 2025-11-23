import { CgProfile } from "react-icons/cg";
import { IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <div className="max-w-6xl mx-auto  flex justify-between items-center py-4">
      {/* Nav left side  logo */}
      <div>
        <h2 className="text-2xl"> 3legent</h2>
      </div>

      {/* Nav middle side  for links  */}
      <div>
        <ul className="flex items-center gap-10">
          <li>
            <NavLink to={"/"}> Home </NavLink>{" "}
          </li>
          <li>
            <NavLink to={"shop"}> Shop </NavLink>
          </li>
          <li>
            <NavLink to={"product"}> Product </NavLink>
          </li>
          <li>
            <NavLink to={"contactUs"}> Contact Us</NavLink>{" "}
          </li>
        </ul>
      </div>

      {/* nav right side   for icons*/}
      <div className="flex items-center gap-4">
        {/* search logo  */}
        <span>
          <IoSearchOutline size={24} />
        </span>
        {/* Profile logo */}
        <span>
          <CgProfile size={24} />
        </span>
        {/* Cart log */}
        <span>
          <IoBagHandleOutline size={24} />
        </span>
      </div>
    </div>
  );
}
