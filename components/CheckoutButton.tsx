"use client";
import { db } from "@/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";

const CheckoutButton = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    if (!session?.user?.id) return;
    //push document into fs db
    setLoading(true);

    const docRef = await addDoc(
      collection(db, "customers", session.user.id, "checkout_sessions"),
      {
        price: "price_1O5qykG6M56v4x9r7Y2HBRXy",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );
    // ... stribe extens on firebase will create a checkout session
    return onSnapshot(docRef, async (snap) => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;
      if (error) {
        alert(`An error occured: ${error.message}`);
        setLoading(false);
      }
      if (url) {
        window.location.assign(url);
        setLoading(false);
      }
    });
    //redirect to user check page
  };
  return (
    <div className="flex flex-col space-y-2">
      {/* {if sub show me the user is subed} */}
      <button
        onClick={() => createCheckoutSession()}
        className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {loading ? "loading..." : "Sign Up"}
      </button>
    </div>
  );
};

export default CheckoutButton;
