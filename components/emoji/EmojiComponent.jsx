import React from "react";
import Image from "next/image";
import { Sad1st, Sad2st, Sad3rd, Smile, Love } from "../../constants/constant";

const EmojiComponent = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="xs:w-8 xs:h-8 sm:w-10 sm:h-10 border-2 hover:border-[#025AA2] hover:shadow-lg rounded-full  shadow-lg cursor-pointer">
          <Image src={Sad1st} className="xs:w-8 xs:h-8 sm:w-10 sm:h-10" />
        </div>
        <div className="xs:w-8 xs:h-8 sm:w-10 sm:h-10 border-2 hover:border-[#025AA2] hover:shadow-lg rounded-full  shadow-lg cursor-pointer">
          <Image src={Sad2st} />
        </div>
        <div className="xs:w-8 xs:h-8 sm:w-10 sm:h-10 border-2 hover:border-[#025AA2] hover:shadow-lg rounded-full  shadow-lg cursor-pointer">
          <Image src={Sad3rd} />
        </div>
        <div className="xs:w-8 xs:h-8 sm:w-10 sm:h-10 border-2 hover:border-[#025AA2] hover:shadow-lg rounded-full  shadow-lg cursor-pointer">
          <Image src={Smile} />
        </div>
        <div className="xs:w-8 xs:h-8 sm:w-10 sm:h-10 border-2 hover:border-[#025AA2] hover:shadow-lg rounded-full  shadow-lg cursor-pointer">
          <Image src={Love} />
        </div>
      </div>
      <div className="flex">
        <p className=" flex-1 mt-2 font-normal xs:text-[12px] sm:text-sm">Very dissatisfied</p>
        <p className=" flex-1 mt-2 text-right font-normal xs:text-[12px] sm:text-sm">Very satisfied</p>
      </div>
    </>
  );
};

export default EmojiComponent;
