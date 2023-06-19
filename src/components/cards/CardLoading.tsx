import React from "react";

const CardLoading = () => {
  return (
    <div className="w-full md:max-w-sm  relative min-h-[320px] overflow-hidden border rounded-lg flex flex-col justify-between ">
      <div
        className="
        flex-1
        w-full
        transition
        bg-slate-200
        animate-pulse
      "
      ></div>

      <div className="flex flex-col justify-between h-36 border-t px-4 py-5">
        <div className="animate-pulse bg-slate-200 w-3/4 h-7 rounded-md"></div>

        <div className="flex items-center justify-between">
          <div className="w-full flex items-center gap-2">
            <div className="animate-pulse h-8 w-8 bg-slate-200 rounded-full"></div>
            <div className="animate-pulse h-4 bg-slate-200 w-2/4 rounded-md col-span-1"></div>
          </div>

          <div className="flex items-center gap-2">
            <div className="animate-pulse h-6 w-6 bg-slate-200 rounded-full"></div>
            <div className="animate-pulse h-6 w-6 bg-slate-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
