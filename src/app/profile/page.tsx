"use client";

import dynamic from "next/dynamic";
import useIsMobile from "@/hooks/useIsMobile";


const ProfileMobile = dynamic(() => import("./ProfileMobile"), { ssr: false });
const ProfileDesktop = dynamic(() => import("./ProfileDesktop"), { ssr: false });

export default function ProfilePage() {
  const isMobile = useIsMobile();
  return (
    <>
        {isMobile ? <ProfileMobile /> : <ProfileDesktop />}
    </>
  );
}
