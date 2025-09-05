import { useState } from "react";
import { Link } from "react-router-dom";

const Buttons: { name: string; BtnColor: string; Link: string }[] = [
  { name: "Employee", BtnColor: "#007BFF", Link: "/login" },
  { name: "Admin", BtnColor: "#28a745", Link: "/login" },
  { name: "User", BtnColor: "#ff9800", Link: "/gate" },
];

const ButtonSection = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6"
      id="GetStart"
    >
      {Buttons.map(
        (
          Button: { name: string; BtnColor: string; Link: string },
          idx: number
        ) => (
          <Link to={Button.Link} key={idx}>
            <div
              style={{ borderColor: Button.BtnColor }}
              className="border-2 rounded-2xl shadow-lg p-6 text-center cursor-pointer 
                         hover:scale-105 hover:shadow-xl transition transform duration-300"
            >
              <div
                style={{ backgroundColor: Button.BtnColor }}
                className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-lg"
              >
                {Button.name.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold">{Button.name}</h3>
              <p className="text-gray-500 text-sm mt-2">
                {Button.name === "User"
                  ? `Park Your Car `
                  : `Click to login as ${Button.name}`}
              </p>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

function GetStarted() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="text-center flex flex-col justify-center gap-5 items-center bg-[#2a0f55c2]  p-5">
      <h1 className="text-[4rem] text-white font-bold">Get Started Now</h1>
      <h2 className="text-[2rem] font-medium text-white">
        Start Parking Your Vechile <span className="text-amber-300">Or</span>{" "}
        Use Our System
      </h2>
      <button
        className="bg-black  border-3 border-amber-950 text-white  p-3 rounded-md shadow-lg hover:bg-white hover:text-black duration-300 cursor-pointer"
        onClick={() => setShow(true)}
      >
        Verify Your Self
      </button>
      {show && (
        <>
          <div className="flex  gap-5">
            <ButtonSection />
          </div>
        </>
      )}
    </div>
  );
}

export default GetStarted;
