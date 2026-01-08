"use client";
import { CustomInput } from "@/common/CustomInput";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { loginUser } from "@/services/api.auth";
import { useAuth } from "@/context/AuthContext";

const schema = yup.object({
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(`^[0-9]{10}$`, "Phone Number must be 10 digits"),

  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{6,}$/,
      "Password must contain letters, numbers, and a special character"
    ),
});

const Page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { router, loading, setLoading, setUser, user, token } = useAuth();

  if (user && token) {
    return router.push("/chats");
  }

  const onSubmit = (data) => {
    loginUser(data, router, setLoading, setUser);
    reset();
  };

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="min-h-full mt-10 w-10/12 md:w-8/12 mx-auto space-y-6 flex flex-col items-center justify-center"
        >
          {[
            {
              label: "Phone Number",
              placeholder: "Enter your Phone",
              type: "text",
              name: "phone",
            },
            {
              label: "Password",
              placeholder: "Enter your Password",
              type: "password",
              name: "password",
            },
          ].map((input, index) => (
            <CustomInput
              key={index}
              label={input.label}
              placeholder={input.placeholder}
              type={input.type}
              register={register}
              registerName={input.name}
              errors={errors}
            />
          ))}

          <button
            disabled={loading}
            className={`bg-green ${
              loading ? "cursor-not-allowed opacity-95" : "cursor-pointer"
            } hover:opacity-95 focus:scale-95 font-semibold tracking-wide text-lg text-fontgreen p-2 rounded-lg w-full mt-2 transition-all duration-300 `}
          >
            {loading ? "Logging In..." : "Login"}
          </button>

          <span className="text-sm mx-auto">
            Don&apos;t have an account ?{" "}
            <Link
              href="/"
              className="font-semibold underline underline-offset-2 cursor-pointer"
            >
              Sign Up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Page;
