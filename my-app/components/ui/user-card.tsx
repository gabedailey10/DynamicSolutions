import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { UserProfile } from "@auth0/nextjs-auth0/client";
  import Image from "next/image";

  import React from 'react'

 
  function UserCard({ user } : {user: any}) {
    console.log(user);
    const userCapitalized = user.given_name.charAt(0).toUpperCase() + user.given_name.slice(1);
    return (
        <div className="">
            <Card>
                <CardHeader>
                    <Image src={user.picture} alt={user.name}  width={150} height={150}/>
                </CardHeader>
                <CardContent>
                    <CardTitle>Welcome back {userCapitalized}</CardTitle>
                    <CardDescription>{user.email}</CardDescription>
                </CardContent>
                <CardFooter>
                    <a href="/api/auth/logout">Logout</a>
                </CardFooter>
            </Card>
        </div>
    );
}
  
  export default UserCard;