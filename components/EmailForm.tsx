import React, { useState } from "react";
import { Button } from ".";
import axios, { AxiosError, AxiosHeaders } from "axios";
import { emailFetch } from "@/fetchCalls";

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
      setName("");
    } catch (error: AxiosError | unknown) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data || "Error");
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
      <div className={error ? "animate-bounce" : ""}>{error}</div>
      <form className="flex flex-col items-center">
        <input
          className="m-3 w-8/12 pl-2 text-black rounded-sm placeholder:text-teal-700 placeholder:opacity-40"
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(ev.target.value)
          }
          value={email}
          placeholder="Enter your email..."
          type="text"
        />
        <input
          className="m-3 w-8/12 pl-2 text-black rounded-sm placeholder:text-teal-700 placeholder:opacity-40"
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