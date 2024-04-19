'use client'

import React, { useState, FormEvent, ChangeEvent } from "react";
import { useId } from 'react'
import { Button } from '@/components/Button'

function TextInput({
    label,
    ...props
  }: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
    let id = useId()
  
    return (
      <div className="group relative z-0 transition-all focus-within:z-10">
        <input
          type="text"
          id={id}
          {...props}
          placeholder=" "
          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
        >
          {label}
        </label>
      </div>
    )
  }

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("https://www.formbackend.com/f/799cb3cb33c13c15", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ name, email, phone, message }),
    })
    .then((response) => {
      if (response.status === 422) {
        throw new Error("Validation error");
      } else if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return response.json();
    })
    .then(data => {
      // You can even use `data` here. Access `data.submission_text`, `data.values` etc.
      setSuccessMessage("Form submitted successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }

  return (
    <>
      {successMessage.length == 0 && <form onSubmit={handleSubmit}>
      <h2 className="font-display text-base font-semibold text-neutral-950">
          Send your Enquiry
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" onChange={(e) => setName(e.target.value)} />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)} 
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" onChange={(e) => setPhone(e.target.value)} />
          <TextInput label="Message" name="message" onChange={(e) => setMessage(e.target.value)} />
        </div>
        <Button type="submit" className="mt-10">
          Submit
        </Button>
      </form>}

      {successMessage.length > 0 && <p>{successMessage}</p>}
    </>
  )
}