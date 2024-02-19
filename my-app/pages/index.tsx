import Image from "next/image";
import React, { useState, useEffect } from "react";
import LandingNav from "@/components/ui/landing-nav";
import { Button } from "@/components/ui/button";
import { GoArrowDown } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { GabeCard } from "@/components/ui/team/gabe-card";
import { NolanCard } from "@/components/ui/team/nolan-card";
import ContactCard from "@/components/ui/contact-card";
import LinksCard from "@/components/ui/links-card";
import { useUser } from "@auth0/nextjs-auth0/client"
import UserCard from "@/components/ui/user-card";
import Dashboard from "@/components/ui/userdash/dashboard";


export default function Home() {
  const [opacity, setOpacity] = useState(0);
  const { user, error, isLoading } = useUser();
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(100);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  //if(user) {
  //return (
  //  <>
  //  hello
  //  </>
  //)   
//}


  return (
    <div className="">
      <div
        className="relative bg-no-repeat bg-cover bg-center h-screen flex flex-col items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80')",
        }}
      >
        <div className="bg-transparent flex flex-row my-4 md:my-0">
          <LandingNav />
        </div>

        {/* Centered Content */}
        <div className="flex flex-col items-center justify-center h-full md:w-6/12 break-words -mt-36">
          <h1 className="  font-bold text-black md:mb-8 md:text-xl text-center">
            Elevate Your Business with AI Expertise.
          </h1>
          <p className="text-xs text-gray-500 text-center my-10 mx-2 md:m-10">
            <b>
              At Dynamic Solutions, we specialize in integrating sophisticated
              machine learning technologies into the fabric of small businesses.
              Our focus is on customizing this advanced technology to meet your
              specific business needs, ensuring that even smaller enterprises
              can leverage the same powerful tools that have transformed large
              corporations.
            </b>
          </p>
          <Button className="text-lg bg-gradient-to-r from-violet-600 to-indigo-600">
            <a href='/api/auth/login'>Sign up</a>
            <GoArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Arrow at the Bottom */}
        <div
          className="absolute bottom-5 w-full flex justify-center animate-bounce"
          style={{ opacity: `${opacity}%` }}
        >
          <GoArrowDown size={50} />
        </div>
      </div>

      {/* Service */}
      <div className="w-full bg-slate-300">
        <div className="container mx-auto py-16">
          <div className="flex flex-col md:flex-row m-4">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl text-gray-800 font-bold leading-tight">
                Our Services
              </h2>
              <p className="text-gray-600 md:text-xl py-4">
                Transform your business operations with the fusion of the latest
                machine learning technology and expert business consulting. Our
                state-of-the-art solutions are tailored to optimize your
                inventory and order management processes, ensuring unparalleled
                efficiency and profitability. Embrace our innovative strategies
                to redefine your business approach, gaining a competitive edge
                in the market. Explore how our advanced models can revolutionize
                your operations, propelling your business towards success.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <Image
                src="/images/busy1.jpeg"
                alt="Busy1"
                width={532}
                height={267}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="w-full bg-slate-300">
        <div className="container mx-auto py-16">
          <div className="flex flex-col-reverse md:flex-wrap md:flex-row items-center m-4 w-80%">
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <Image
                src="/images/busy2.avif"
                alt="Busy2"
                width={532}
                height={356}
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl text-gray-800 font-bold leading-tight m-2">
                The Process
              </h2>
              <ul className="list-style-none">
                <li className="m-2">
                  <b>Understanding your business: </b>
                  We start by learning about your business, your challenges, and
                  your goals.
                </li>
                <li className="m-2">
                  <b>Tailoring the Solution: </b>
                  Our team designs ML solutions that are specifically crafted to
                  address the challenges and opportunities unique to your
                  business.
                </li>
                <li className="m-2">
                  <b>Continuous Support: </b>
                  We provide ongoing support and insights, ensuring that your
                  business continues to benefit from ML advancements.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="w-full h-auto md:h-700 bg-transparent flex flex-col justify-center items-center space-between mt-64 md:my-6">
          <h1 className="font-serif text-6xl font-bold mx-2">Meet the team</h1>
          <div className="flex flex-col md:flex-row w-screen items-center justify-center">
            <div className="m-8 shadow-lg">
              <GabeCard />
            </div>
            <div className="m-8 shadow-2xl">
              <NolanCard />
            </div>
          </div>
        </div>
        {/*footer*/}
        <div className=" h-164 w-screen bg-white flex justify-center items-center p-4 my-4">
          <ul className="w-screen list-none flex flex-col md:flex-row items-center justify-center md:m-4">
            <li>
              <ContactCard />
            </li>
            <li>
              <LinksCard />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
