import { ChevronRight } from "lucide-react";
import React from "react";

const SettingsSidePanel = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="text-3xl font-medium tracking-wide font-poppins ">
        Settings
      </h2>
      {/* Profile */}
      <div className="w-full flex items-center justify-between bg-hovergreen p-4 rounded-xl">
        {/* Profile's Data  */}
        <div className="w-full flex gap-4 items-center justify-center">
          {/* Profile Image  */}
          <div className="size-16 bg-icongreen rounded-full shrink-0"></div>
          {/* Profile's Name  */}
          <div className="flex flex-col w-full font-roboto">
            <h3 className="text-xl font-medium text-gray-300">Zaid Achhwa</h3>
            <p className="text-sm">fjngbebgn</p>
          </div>
        </div>
        {/* Arrow */}
        <ChevronRight />
      </div>
    </div>
  );
};

export default SettingsSidePanel;
