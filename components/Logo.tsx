import React from "react";
import ImageLogo from "@/images/logos/sova-logo.svg";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-14">
        <AspectRatio ratio={4 / 1} className="flex item-center justify-center">
          <Image
            priority
            alt="Anychat logo"
            className="mt-2 dark:filter dark:invert"
            src={ImageLogo}
          />
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
