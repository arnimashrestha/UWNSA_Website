//importing db instance, allows us to write data into the firebase firestore
import db from "@/firebase";

//collection allows us to refer to a specific folder in the firebase database
//add doc lets us add a new document to that collection
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

//onclose is a function that takes no arguments and returns nothing
type OncloseProp = {
  onClose: () => void;
};

const SignupForm = ({ onClose }: OncloseProp) => {
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");

  {
    /* event:React.FormEvent is needed because it allows TS to understand that when event is being passed into the handle submit function, what its type is*/
  }
  const handleSubmit = async (event: React.FormEvent) => {
    {
      /* preventDefault is needed so that the page does not refresh*/
    }
    event.preventDefault();
    if (!username || !email) return alert("Please fill both fields");
    //saving to Firebase
    try {
      await addDoc(collection(db, "signups"), {
        //passing
        username,
        email,
      });
      return alert(`Username: ${username}\nEmail: ${email}`);
      setuserName("");
      setEmail("");
      onClose();
    } catch (err) {
      console.error("Error", err);
      //change alert using shad CN in upcoming
      alert("Something went wrong, please try again");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between h-full w-[80%]"
    >
      <div className="flex flex-col gap-2 mt-5">
        <Label htmlFor="name">Name</Label>
        <Input
          type="name"
          id="name"
          name="name"
          value={username}
          onChange={(e) => setuserName(e.target.value)}
          placeholder="Please enter your name"
        />
      </div>
      <div className="flex flex-col gap-2 mt-5">
        <Label htmlFor="Email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Please enter your email"
        />
      </div>
    </form>
  );
};
export default SignupForm;
