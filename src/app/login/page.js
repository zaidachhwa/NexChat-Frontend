import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-white p-5 min-h-screen w-full flex items-start md:items-center justify-center">
      {/* 1 */}
      <div className="w-full hidden bg-linear-to-tl from-icongreen to-fontgreen min-h-[90vh] rounded-2xl relative overflow-clip shadow-xl md:flex items-center justify-center">
        <Image
          src="/login.svg"
          alt="Login Vector"
          priority
          width={200}
          height={200}
          className="md:w-80 lg:w-120"
        />
      </div>
      {/* 2 */}
      <div className="w-full text-darkgreen min-h-full md:min-h-[70vh] flex flex-col items-center justify-start">
        <h1 className="text-4xl font-semibold text-green">Login Form</h1>
        <form className="min-h-full mt-10 w-10/12 md:w-8/12 mx-auto space-y-6 flex flex-col items-center justify-center">
          {[
            {
              label: "Phone Number",
              placeholder: "Enter your Phone",
              type: "text",
            },
            {
              label: "Password",
              placeholder: "Enter your Password",
              type: "password",
            },
          ].map((input, index) => (
            <CustomInput
              key={index}
              label={input.label}
              placeholder={input.placeholder}
              type={input.type}
            />
          ))}

          <button className="bg-green cursor-pointer hover:opacity-95 focus:scale-95 font-semibold tracking-wide text-lg text-fontgreen p-2 rounded-lg w-full mt-2 transition-all duration-300 ">
            Login
          </button>

          <span className="text-sm mx-auto">
            Don&apos;t have an account ?{" "}
            <b className="font-semibold underline underline-offset-2 cursor-pointer">
              Sign Up
            </b>
          </span>
        </form>
      </div>
    </div>
  );
};

const CustomInput = ({ label, type, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full outline-0 border border-bordergreen p-2 pl-4 rounded-lg placeholder:text-fontgreen focus:ring-2 focus:ring-fontgreen transition-all duration-300"
      />
    </div>
  );
};

export default page;
