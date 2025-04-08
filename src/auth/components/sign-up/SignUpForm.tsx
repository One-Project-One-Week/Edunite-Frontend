import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";


import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";


const loginSchema = z.object({
    name: z.string().nonempty("Name is required").min(2, { message: "Name must be at least 2 characters long" }),
    email: z.string().email().nonempty("Email is required"),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  }).refine((data) => data.confirmPassword === data.password, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });


export default function SignUpForm() {

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: z.infer<typeof loginSchema>) {
    console.log(data);
  }


  return (
    <section className="grid w-lvw h-lvh grid-cols-2">
      <div className="w-full h-full bg-gray-800"></div>
      <div className="flex w-full h-full items-center justify-center">
        <Form {...form}>
          <form className="w-1/2 space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <h1 className="text-center text-2xl font-bold text-gray-800">Create Account</h1>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your name"
                {...field}
                className="border-gray-300"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Email</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your email"
                {...field}
                className="border-gray-300"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Password</FormLabel>
            <FormControl>
              <Input
                type="password"
                placeholder="Enter your password"
                {...field}
                className="border-gray-300"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Comfirm Password</FormLabel>
            <FormControl>
              <Input
                type="password"
                placeholder="Enter your password"
                {...field}
                className="border-gray-300"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
              disabled={!form.formState.isValid}
            >
              Sign Up
            </Button>
            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
          Login
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </section>
  )
}
