"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { onSnapshot } from "firebase/firestore";
import { subscriptionRef } from "@/lib/converters/Subscription";

const SubscriptionProvider = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if(!session) return;

    return onSnapshot(subscriptionRef(session?.user?.id), (snapshot) => {
      if(snapshot.empty){
        console.log('No matching documents.');        
        return;
      }else{
        //set subscription
      }
    })
  }, [session]);

  return <div>SubscriptionProvider</div>;
};

export default SubscriptionProvider;
