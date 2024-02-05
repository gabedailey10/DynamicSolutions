import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  fullName: z.string().min(1, "Full Name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  companyName: z.string().min(1, "Company Name is required."),
  jobTitle: z.string().min(1, "Job Title is required."),
  industryType: z.string().min(1, "Industry Type is required."),
  companySize: z.string().min(1, "Company Size is required."),
  businessLocation: z.string().min(1, "Business Location is required."),
  interestAreas: z.string().min(1, "Interest Areas are required."),
  businessGoals: z.string().min(1, "Business Goals are required."),
  preferredContactMethod: z.string(),
  preferredTime: z.string().optional(),
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  agreeTerms: z.boolean().refine(val => val, "You must agree to the terms and conditions.")
});

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      // ... other fields
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  // Form rendering logic
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
