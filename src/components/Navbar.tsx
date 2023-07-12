import logo from "../assets/NicePng_reddit-logo-png_389764.png";
import AuthModal from "./AuthModal";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import user from "../assets/WhatsApp Image 2023-05-31 at 18.49.17.jpeg";
import DropdownNav from "./DropdownNav";

const Navbar = () => {
  return (
    <div className=" w-full fixed top-0 inset-x-0 h-16 bg-zinc-50 border-b border-zinc-300 z-10 py-2">
      <div className=" max-w-7xl container mx-auto flex items-center justify-between h-full">
        {/* logo */}
        <div className=" flex space-x-2 items-center">
          <div className=" w-9 h-9 overflow-hidden object-cover">
            <img alt="logo" src={logo} className=" w-full h-full object-cover" />
          </div>
          <h1 className=" font-semibold text-lg">Nutedit</h1>
        </div>
        {/* Seacrh bar */}
        <div className=""></div>
        {/* Button */}
        {/* <AuthModal>
          <Button>Sign In</Button>
        </AuthModal> */}
        <DropdownNav>
          <Avatar className=" w-9 h-9">
            <AvatarImage src={user} alt="user" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
        </DropdownNav>
      </div>
    </div>
  );
};

export default Navbar;
