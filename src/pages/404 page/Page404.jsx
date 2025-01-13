import React from "react";

import { Link } from "react-router-dom";

import Particles from "@/components/ui/particles";
import Meteors from "@/components/ui/meteors";



export default function Page404() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <main className="grid min-h-full place-items-center relative overflow-hidden bg-[#05071A] h-[800px] px-6 py-24 sm:py-32 lg:px-8">
        <Meteors number={30} />
       <Particles
        className="absolute inset-0"
        quantity={400}
        ease={80}
        color={'#ffffff'}
        refresh
      />
          <div className="text-center">
            <p className="text-9xl font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-white">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/home"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </Link>
              <Link to="/contact" className="text-sm font-semibold text-white">
                Contact support <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }
  