import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

import logo from "../assets/NicePng_reddit-logo-png_389764.png";

type Props = {
  children: React.ReactNode;
};

const AuthModal: React.FC<Props> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className=" flex items-center lg:w-full w-[70%] flex-col text-center lg:px-20 md:py-20 md:px-16 px-14 py-10">
        <DialogHeader className=" flex flex-col items-center">
          <div className=" w-9 h-9">
            <img alt="logo" src={logo} />
          </div>
          <h1 className=" text-black text-2xl font-medium">Welcome Back</h1>
        </DialogHeader>
        <DialogDescription className=" text-black">
          By continuing, you are setting up a Nutedit account and aggre to our user Aggrement and Privacy Police
        </DialogDescription>
        <Button className=" bg-black text-white w-full rounded-md">Google</Button>
        <DialogFooter>
          New to Nutedit? <span className=" underline"> Sign Up</span>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
