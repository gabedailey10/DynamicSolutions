import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MeetingList from "@/components/ui/meetings"
import { IoAddCircle } from "react-icons/io5";

import React from 'react'

const usermenu = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col min-h-screen ">
      <Tabs defaultValue="meetings" className="w-[1000px] font-bold text-lg">
  <TabsList>
    <TabsTrigger value="meetings">Meeting List</TabsTrigger>
    <TabsTrigger value="files">My Files</TabsTrigger>
    <TabsTrigger value="messages">Messages</TabsTrigger>
    <TabsTrigger value="new-meeting"><IoAddCircle />New Meeting Request</TabsTrigger>
  </TabsList>
  <TabsContent value="meetings"><MeetingList/></TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
    </div>
  )
}

export default usermenu
