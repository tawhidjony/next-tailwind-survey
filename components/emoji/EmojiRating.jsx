import React from "react";
import classNames from "classnames";

const EmojiRating = ({title, listNumber, children, className }) => {
  return (<>
    <div className="flex justify-start">
        <div className="xs:mr-3 sm:mr-6">{listNumber}</div>
        <div className="w-full">
            <div className="mb-4 xs:text-[16px] xs:font-bold sm:text-base">
                {title}
            </div>
            <div className={classNames(className)}>
                {children}
            </div>
        </div>
    </div>
  </>);
};

export default EmojiRating;
