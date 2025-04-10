import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
//import { useState } from "react";

import SignupForm from "./SignUp";

const checkedState = {
  culture: false,
  events: false,
  community: false,
};

type checkedkey = keyof typeof checkedState;
//TS only expects specific string, therefore when we're passing specific strings, we need to identify and label what each of the things within the object form is
const form: { id: checkedkey; label: string }[] = [
  {
    id: "culture",
    label: "Are you interested in Nepali Culture and Traditions?",
  },

  {
    id: "events",
    label: "Do you want to particate in fun events and socials?",
  },

  {
    id: "community",
    label:
      "Are you excited to be a part of a welcoming and supportive community?",
  },
];

//checked is the current state, whereas setChecked is the function that updates the state

const Join_US_v2 = () => {
  const [checked, setChecked] = useState({
    culture: false,
    events: false,
    community: false,
  });

  //getting the values of the object (t or f) and then putting them into an array
  const allChecked = Object.values(checked).every((value) => value === true);

  //difference betwen TS - doesn't trust dynamic indexing
  //need to give it a type so that it can verify
  const handleChange = (id: keyof typeof checked) => {
    //updating the checked state, but first the most recent version of it is given first, and then a new version is returned based on that
    setChecked((prev) => ({
      ///copying everything from the previous state
      ...prev,
      //looking at the checkbox that the user clicked
      //assigns the id the opposite boolean value
      [id]: !prev[id],
    }));
  };
  return (
    <div className=" mt-5 flex justify-center min-h-[100vh] w-full" id="join">
      <div className="w-[80%] lg:w items-center ">
        <h1 className="text-white text-7xl font-bold mt-20 ">Join Us</h1>
        <hr className=" border-black mt-10"></hr>
        <div className="flex flex-col xl:flex-row lg:items-stretch gap-8 mt-10 pb-5">
          <div className="flex-1 flex text-left items-start ">
            <p className="text-xl text-white lg:text-2xl leading-relaxed">
              UWNSA’s goal is to celebrate Nepalese culture, empower our
              community and foster meaningful connections. Through cultural
              events, educational initiatives and collaborations across Nepalese
              Student Associations across Universities in Ontario, we aim to
              create a space where members can explore their heritage, learn
              from shared experiences, and connect with a supportive network in
              the UW community. <br /> <br />
              <span className=" font-semibold">
                Together, we strengthen our identity, uplift one another, and
                build a vibrant Nepali Community{" "}
              </span>
            </p>
          </div>
          <div className="flex-1 flex justify-center ">
            <Card className="relative w-full h-full bg-[#FAEDD6] shadow-lg rounded-xl p-6">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-[#780001]">
                  Ready to Join NSA?
                </CardTitle>
                <CardDescription className="mt-2 text-2xl">
                  Fill out our form and become a part of a thriving Nepali
                  Community at UW!
                </CardDescription>
              </CardHeader>
              <CardContent>
                {form.map((question) => (
                  <div
                    key={question.id}
                    className="flex items-baseline space-x-3 mt-3"
                  >
                    <Checkbox
                      id={question.id}
                      className="border-black"
                      //checked is an object that holds checked state of each checkbox
                      //this checked will either output a true of a false, as it will be like
                      //checked["culture"] -> is the checkbox for culture checked off?
                      checked={checked[question.id]}
                      //assigning a function to the onCheckedChange prop of the <Checkbox/> component
                      //When checkbox is clicked, call the handleChange function and within it, pass question.id
                      onCheckedChange={() => handleChange(question.id)}
                    />
                    <label htmlFor={question.id} className="text-xl">
                      {" "}
                      {question.label}
                    </label>
                  </div>
                  //this pulls out the values and puts them into an array
                ))}
              </CardContent>
            </Card>
            {allChecked && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                <Card className=" relative bg-white rounded-2xl p-8 shadow-xl max-w-3xl w-full border border-black">
                  <button
                    className="absolute top-3 right-10 text-2xl font-bold text-gray-600 hover:text-black"
                    onClick={() =>
                      setChecked({
                        culture: false,
                        events: false,
                        community: false,
                      })
                    }
                  >
                    &times;
                  </button>
                  <CardHeader>
                    <CardTitle className="flex flex-col justify-between text-3xl text-[#780001]">
                      Join the NSA Community
                    </CardTitle>
                    <CardContent className="text-xl">
                      <SignupForm
                        onClose={() =>
                          setChecked({
                            culture: false,
                            events: false,
                            community: false,
                          })
                        }
                      />
                    </CardContent>
                  </CardHeader>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join_US_v2;
