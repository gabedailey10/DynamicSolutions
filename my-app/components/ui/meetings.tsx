import  {DataTable } from "@/meetings/data-table"
import {columns} from "@/meetings/columns"
import { Card } from "@/components/ui/card";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"


const meetings = [
    {
      id: "728ed52f",
      title: 'consultation to review our financial management and identify areas for improvement.',
      date: new Date("2021-01-01"),
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      title: 'Could we set up a time to talk about ways to enhance our customer engagement and retention?',
      date: new Date("2021-02-15"),
      status: "approved",
      email: "jane.doe@example.com",
    },
    {
      id: "123a456b",
      title: 'I need advice on scaling our business effectively; can we arrange a meeting to discuss this?',
      date: new Date("2021-03-20"),
      status: "update",
      email: "john.doe@example.com",
    },
    {
      id: "789c012d",
      title: "Can we schedule a session to brainstorm innovative approaches to our team's project management issues?",
      date: new Date("2021-04-10"),
      status: "pending",
      email: "alice.smith@example.com",
    },
    {
      id: "234d567e",
      title: "I'm seeking guidance on integrating the latest technology into our business processes; when could we meet?",
      date: new Date("2021-05-05"),
      status: "approved",
      email: "bob.jones@example.com",
    },
    {
      id: "890e123f",
      title: 'Id like to have a meeting to discuss how we can streamline our supply chain for better efficiency and cost savings.',
      date: new Date("2021-06-21"),
      status: "update",
      email: "carol.white@example.com",
    },
    {
      id: "345f678g",
      title: "Can we meet next week to explore potential solutions for our current marketing challenges?",
      date: new Date("2021-07-30"),
      status: "pending",
      email: "david.brown@example.com",
    },
    {
      id: "456g789h",
      title: "I would appreciate the opportunity to meet and discuss new market expansion possibilities for our product line.",
      date: new Date("2021-08-15"),
      status: "approved",
      email: "emily.green@example.com",
    },
    {
      id: "567h890i",
      title: "I'm interested in a consultation to review our financial management and identify areas for improvement.",
      date: new Date("2021-09-01"),
      status: "update",
      email: "frank.gray@example.com",
    },
    {
      id: "678i901j",
      title: "I would appreciate the opportunity to meet and discuss new market expansion possibilities for our product line.",
      date: new Date("2021-10-20"),
      status: "pending",
      email: "grace.black@example.com",
    }
  ];


const meetinglist = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col min-h-screen">
        <div className="flex justify-start items-center mb-4 m-15px">
        </div>
        <div>
            <DataTable data={meetings} columns={columns} />
        </div>
        <div className="p-5">
        <Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent><Card/></PopoverContent>
</Popover>
        </div>
      </div>
    
  )
}

export default meetinglist
