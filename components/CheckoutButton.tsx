"use client";
import {useSession} from 'next-auth/react';


const CheckoutButton = () => {   
    const {data:session}=useSession();

  const createCheckoutSession = () => {

    if(!session) return;
    //push document into fs db

    // ... stribe extens on firebase will create a checkout session

    //redirect to user check page
  };
  return (
    <div className="flex flex-col space-y-2">
      {/* {if sub show me the user is subed} */}
      <button
        onClick={() => createCheckoutSession()}
        className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign Up
      </button>
    </div>
  );
};

export default CheckoutButton;
