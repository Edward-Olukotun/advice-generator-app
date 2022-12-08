import React, { useState } from "react";
import axios from "axios";
import Dice from "./images/icon-dice.svg";
import mobile from "./images/pattern-divider-mobile.svg";
import desktop from "./images/pattern-divider-desktop.svg";

function Apicall() {
  const [text, setText] = useState("");
  const [num, setNum] = useState("");
  const getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log(response);
        setText(response.data.slip.advice);
        setNum(response.data.slip.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className=" bg-Dark-Grayish-Blue w-[100%] md:w-[40%] mt-10  h-fit rounded-md  flex flex-col mx-auto ">
        <div>
          <p className="text-Neon-Green text-center font-semibold text-sm  p-5">
            Advice #{num}
          </p>
          <p className=" text-Light-Cyan pt-7 text-center font-semibold text-sm mx-2 md:tracking-wide">
            "{text}"
          </p>
        </div>
        <div className="mt-[5%] my-10  md:hidden mx-2">
          <img className="  h-5 w-fit" src={mobile} alt="" />
        </div>
        <div className="hidden md:flex justify-center  my-10 mx-4">
          <img className="  h-5 w-fit" src={desktop} alt="" />
        </div>
      </div>
      <div className="w-10 h-10  mx-auto flex justify-center rounded-3xl -mt-5 bg-Neon-Green">
        <img
          className="h-5 w-5 my-auto hover:shadow-2xl  hover:cursor-pointer shadow-Neon-Green"
          onClick={getAdvice}
          src={Dice}
          alt="/"
        />
      </div>
    </>
  );
}

export default Apicall;
