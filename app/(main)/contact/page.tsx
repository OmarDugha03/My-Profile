"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  emailAddress: z.string().email(),
  username: z.string().min(4),
  componyname: z.string().min(8),
  message: z.string().max(1000).optional(),
});

export default function Contact() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);
  }
  return (
    <section className="container  gap-x-4 mb-20 lg:mb-0  flex flex-col mt-12 gap-y-4 lg:justify-between items-start">
      <div>
        <h2 className="text-3xl lg:text-4xl  font-bold mt-1">
          Contact Me from here
        </h2>
      </div>
      <div className="w-full max-w-2xl mt-1 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Your Message"
                      className="h-36"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" variant="destructive">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
