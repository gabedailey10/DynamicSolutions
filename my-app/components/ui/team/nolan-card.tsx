import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import Image from "next/image";
  import ClipboardAlert from "@/components/ui/clipboard-alert"; // Import the ClipboardAlert component
  
  import React, { useState } from 'react'; // Ensure useState is imported
  
  import { LinkedinIcon } from "lucide-react";
  import { FaGithub } from "react-icons/fa";
  
  import { MailIcon } from "lucide-react";
  
  export const NolanCard = () => {
      const [showClipboardAlert, setShowClipboardAlert] = useState(false); // State for managing clipboard alert visibility
  
      const handleMailIconClick = async () => {
          const email = "nolanwhitley@example.com"; // Replace with Nolan's actual email
          try {
              await navigator.clipboard.writeText(email);
              setShowClipboardAlert(true); // Show the clipboard alert
              setTimeout(() => setShowClipboardAlert(false), 3000); // Hide the alert after 3 seconds
          } catch (error) {
              console.error("Could not copy email to clipboard", error);
          }
      };
  
      return (
          <Card>
              <div className="flex justify-center mt-4 rounded-2xl overflow-hidden">
                  <Image src='/images/nolan-headshot.jpg' alt='nolan' height={100} width={150} layout='fixed' className="rounded-2xl"/>
              </div>
              <CardHeader>
                  <CardTitle style={{ fontSize: "200%" }}>Nolan Whitley</CardTitle>
                  <CardDescription>Consultant/Data-scientist</CardDescription>
              </CardHeader>
              <CardContent>
                  <p className="font-serif font-bold">North Carolina State University</p>
              </CardContent>
              <CardFooter>
                  <div className="flex items-center justify-center space-x-2 w-full">
                      <a href="https://www.linkedin.com/"><LinkedinIcon size={40}/></a>
                      <a href='https://github.com/'><FaGithub size={40}/></a>
                      <a onClick={handleMailIconClick} className="cursor-pointer"><MailIcon size={40}/></a>
                  </div>
                  {/* Conditionally render ClipboardAlert */}
                  {showClipboardAlert && <ClipboardAlert show={showClipboardAlert} setShow={setShowClipboardAlert} />}
              </CardFooter>
          </Card>
      );
  };
  