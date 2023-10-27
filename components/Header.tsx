import React, { useContext } from "react";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import { MessagesSquareIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import { Button } from "./ui/button";
import {UserButton} from "./UserButton";
import CreateChatButton from "./CreateChatButton";
import { authOptions } from "@/auth";


 async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);
  
    


  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />

        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* {language select} */}

          {/* {dark mode toggle} */}
          <DarkModeToggle />
          {session ? (
            <>
              <Link href={"/chat"} prefetch={false}>    
              <MessagesSquareIcon className="text-black dark:text-white"/>
              </Link>
              <CreateChatButton />
            </>
          ):(
            <Link href='/pricing'>
            Pricing
        </Link>
          )}

          {/* {user button} */}
          <UserButton session={session}/>
        </div>
      </nav>

      {/* {upgrade Banner} */}
    </header>
  );
}

export default Header;
