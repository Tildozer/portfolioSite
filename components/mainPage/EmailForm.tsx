"use client";
import React, { useState } from "react";
import { Button } from "..";
import { ToastContainer, toast } from 'react-toastify';
import axios, { AxiosError } from "axios";
import { emailFetch } from "@/fetchCalls";
import { GiAchillesHeel } from "react-icons/gi";
import { MdOutlineSend } from "react-icons/md";


interface Props {}

const EmailForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  async function sendEmail(ev: React.MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    try {
      await emailFetch(email, name);
      setName("");
      setEmail("");
      toast.success("Email sent!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        icon: MdOutlineSend
      })
    } catch (error: AxiosError | unknown) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        // setError(error.response?.data || "Error");
        toast.error(error.response?.data || "Error", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          icon: GiAchillesHeel
          });
      } else {
        console.error(error);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }

  return (
    <>
      <ToastContainer />
      <div className={error ? "animate-bounce" : ""}>{error}</div>
      <form className="flex flex-col items-center bg-coolGray pb-5 pt-5 mb-5 rounded-md border-2 shadow-lg shadow-onyx border-onyx w-10/12">
        <div className="m-2">
          To get an email with more info about where to reach me, fill out this
          form.
        </div>
        <label htmlFor="Email">Email</label>
        <input
          className="m-3 w-8/12 max-w-[34rem] pl-2 text-black rounded-md border-2 border-mountainBatten"
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(ev.target.value)
          }
          value={email}
          placeholder="Enter your email..."
          type="text"
        />
        <label htmlFor="Name">Name</label>
        <input
          className="m-3 w-8/12 max-w-[34rem] pl-2 text-black rounded-md border-2 border-mountainBatten"
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setName(ev.target.value)
          }
          value={name}
          placeholder="Enter your name..."
          type="text"
        />
        <Button callback={sendEmail} message="Send Email" />

      </form>
    </>
  );
};

export default EmailForm;
