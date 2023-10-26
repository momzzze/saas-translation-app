'use client'
import React from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import {Session} from 'next-auth';
import { Button } from "./ui/button";

export const UserButton = ({session}:{session: Session | null}) => {
    const router = useRouter();

    if(!session) return (
        <Button variant={'outline'} onClick={()=>router.push('/sign-in')}>
            Sign In
        </Button>
    )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar name="Nikola Ninov" image='https://github.com/shadcn.png'/>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
