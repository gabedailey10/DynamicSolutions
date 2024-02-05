"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import LoginEmail from "@/components/ui/login-email"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
})

export default function ProfileForm() {
// 1. Define your form.
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="JhonSnow123" {...field} />
              </FormControl>
              <FormDescription>
                This is your profile display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
  control={form.control}
  name="password"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Password</FormLabel>
      <FormControl>
        <Input type="password" placeholder="********" {...field} />
      </FormControl>
      <FormDescription>
        Enter your password
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
        <div className="flex row p-4 items-left">
        <Button type="submit" className="mr-1 ml-1">Submit</Button>
        <LoginEmail></LoginEmail>
        <Button className="mr-1 ml-1">Reset Password</Button>
        </div>
        <p>Dont have an account?<a href='/' className="text-blue-500"> register here</a></p>
      </form>
    </Form>
  )
}
