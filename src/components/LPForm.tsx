'use client'

import React, { useState, FormEvent, ChangeEvent } from "react";
import { useId } from 'react'
import { Button } from '@/components/Button'

export default function LPForm() {
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      fetch("https://www.formbackend.com/f/5820d08315439710", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ fname, lname, email, phone }),
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
          <input type="hidden" name="form-name" value="welcome" />
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">About You</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Enter your details and Dr. Ben will be in contact to arrange an appointment</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fname"
                  id="first-name"
                  autoComplete="given-name"
                  onChange={(e) => setFName(e.target.value)} 
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  autoComplete="family-name"
                  onChange={(e) => setLName(e.target.value)} 
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)} 
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Mobile
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                  onChange={(e) => setPhone(e.target.value)} 
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
        </div>
        
    </form>}

{successMessage.length > 0 && <p>{successMessage}</p>}
    </>
  )
}