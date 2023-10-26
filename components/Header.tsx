'use client'
import React, { useContext } from "react";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import { MessagesSquareIcon } from "lucide-react";
import {UserButton,useClerk} from '@clerk/nextjs'
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

 function Header() {
  const {session} = useClerk();
  const router = useRouter();

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
            </>
          ):(
            <Button variant={'outline'} onClick={()=>router.push('/sign-in')}>
            Sign In
        </Button>
          )}

          {/* {user button} */}
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>

      {/* {upgrade Banner} */}
    </header>
  );
}

export default Header;
