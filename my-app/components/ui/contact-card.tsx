import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoArrowRight } from "react-icons/go";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactCard = () => {
  return (
    <div className="w-80 m-12">
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>Lets get the conversation started. </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
          <Input placeholder="Full Name" className="my-2" />
          <Input placeholder="Email" className="my-2"/>
            <Textarea placeholder="How could we help..." className="my-2"/>
          </p>
        </CardContent>
        <CardFooter>
          <p>
            <Button className="text-lg bg-gradient-to-r from-violet-600 to-indigo-600">
              Submit
              <GoArrowRight className="ml-2" />
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactCard;
