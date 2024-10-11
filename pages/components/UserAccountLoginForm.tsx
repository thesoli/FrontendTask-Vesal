"use client";
import type { NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { PERSIAN_TITLES } from "../components/meta/fa";
import InputField from "../components/LoginForm/InputField";
import SubmitButton from "../components/LoginForm/SubmitButton";
import formImageSrc from "../../app/images/formDesign.png";

const UserAccountLoginForm: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const validatePhoneNumber = (phoneNumber: string) => {
    const pattern = /^09\d{9}$/;
    return pattern.test(phoneNumber) || PERSIAN_TITLES.phoneNumberIsWrong;
  };

  function isNotEmpty(password: string) {
    return password.trim() !== "" || PERSIAN_TITLES.passwordFieldIsEmpty;
  }

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await fetch("/api/endpoint", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="body bg-dark flex justify-center h-screen w-screen items-center bg-gray-100 gradiant">
      <div className="flex w-4/6 h-4/6 justify-around formcard">
        <div className="max-w-[600px] size-full rounded-lg shadow-md w-full">
          <Image
            className="w-full h-full object-fill"
            src={formImageSrc}
            alt="an image of soldier for designing form"
            width={750}
            height={0}
          />
        </div>
        <div className="flex flex-col justify-center max-w-[600px] size-full bg-slate-950 w-5/6 p-6 rounded-lg shadow-md form">
          <h2 className="text-2xl font-bold text-center text-gray-200 mb-5">
            {PERSIAN_TITLES.userAccountLogin}
          </h2>
          <p className="formtitle-underline mb-7 ml-10"></p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <InputField
              id="phoneNumber"
              type="text"
              placeholder="| 📱"
              label={PERSIAN_TITLES.enterPhoneNumber}
              register={register}
              required
              validate={validatePhoneNumber}
              error={errors.phoneNumber}
            />
            <InputField
              id="password"
              type="password"
              placeholder="| 🔒"
              label={PERSIAN_TITLES.enterPassword}
              register={register}
              required
              validate={isNotEmpty}
              error={errors.password}
            />
            <SubmitButton
              loading={loading}
              label={PERSIAN_TITLES.enteringUserPanel}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserAccountLoginForm;
