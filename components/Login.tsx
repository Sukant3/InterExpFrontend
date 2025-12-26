"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Share, TrendingUp, Users } from "lucide-react";
import { BorderBeam } from "./ui/border-beam";

const FormSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
});

const Login = () => {



  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  let students = ["m@example.com"]

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    console.log(data.email)

    if(students.includes(data.email))
    {
      alert("Login Successfully");
      router.push("/hero");
    }
    
  }


  return (
    <div id="Hero" className=" flex flex-col items-center justify-center">


      <div className="flex items-center justify-between gap-90">
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto group">

            <div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl 
      transition-transform duration-500 ease-in-out  group-hover:rotate-2">
            </div>

            <div className="relative w-90 bg-white shadow-lg sm:rounded-3xl sm:p-15 h-120">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-black  text-2xl font-semibold">Login</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div
                    className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">

                      <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="w-2/3 space-y-6"
                        >
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select a verified email to display" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormDescription>
                                  You can manage email addresses in your{" "}
                                  <Link href="/examples/forms">email settings</Link>.
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button  className="bg-cyan-500 text-white rounded-md px-4 py-2 w-full hover:bg-cyan-600 transition" type="submit"  >Submit</Button>
                        </form>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-center mt-4">
                <button
                  className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 
          text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none 
          focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"
                    viewBox="-0.5 0 48 48" version="1.1">
                    <path d="M9.8,24c0-1.5,0.3-3,0.7-4.4L2.6,13.6C1.1,16.7,0.2,20.3,0.2,24c0,3.7,0.9,7.3,2.4,10.4l7.9-6.1
              C10.1,26.9,9.8,25.5,9.8,24" fill="#FBBC05"></path>
                    <path d="M23.7,10.1c3.3,0,6.3,1.2,8.7,3.1l6.8-6.8C35,2.8,29.7,0.5,23.7,0.5c-9.3,0-17.3,5.3-21.1,13.1
              l7.9,6.1C12.4,14.1,17.5,10.1,23.7,10.1" fill="#EB4335"></path>
                    <path d="M23.7,37.9c-6.2,0-11.3-4-13.2-9.6l-7.9,6.1c3.8,7.8,11.8,13.1,21.1,13.1
              c5.7,0,11-2.1,15.3-5.9l-7.5-5.8C29.4,37.1,26.7,37.9,23.7,37.9" fill="#34A853"></path>
                    <path d="M46.1,24c0-1.4-0.2-2.9-0.5-4.3H23.7v8.6h12.6c-0.6,3-2.3,5.7-4.8,7.2l7.5,5.8
              C43.3,37.6,46.1,31.6,46.1,24" fill="#4285F4"></path>
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>


        <div>
          <div className="flex-1 max-w-lg text-center lg:text-left order-2 lg:order-1">
            {/* Logo */}
           
            <div className="mb-8">
              
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                InterviewShare
              </h1>
               
              <p className="text-purple-200 text-lg">
                A Platform to share all Your Interview Experiences
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6 mb-8 ">
              <div className=" bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Share className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">Share Experiences</h3>
                </div>
                <p className="text-purple-200 text-sm">
                  Share your real interview stories and help others prepare better
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">Community Driven</h3>
                </div>
                <p className="text-purple-200 text-sm">
                  Connect with a community of job seekers and professionals
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">Real-Time Insights</h3>
                </div>
                <p className="text-purple-200 text-sm">
                  Get insights from recent interview trends and patterns
                </p>
              </div>
            </div>

          </div>
        </div>





      </div>
   


   



    </div>
  );
};

export default Login;
