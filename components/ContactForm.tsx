"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

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
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "./ScrollReveal";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/rseif1218@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        form.reset();
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact-form" className="py-24 bg-background border-b border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent uppercase tracking-widest text-xs font-bold mb-4 block">
                Get in Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Start Your Design Journey
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" />
            </div>

            <div className="bg-muted/30 p-8 md:p-12 border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-widest text-[10px] font-bold text-foreground/60">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              disabled={isSubmitting}
                              className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent transition-colors py-6 text-lg disabled:opacity-50"
                              {...field}
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
                          <FormLabel className="uppercase tracking-widest text-[10px] font-bold text-foreground/60">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@example.com"
                              disabled={isSubmitting}
                              className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent transition-colors py-6 text-lg disabled:opacity-50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-[10px] font-bold text-foreground/60">
                          Project Details
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your vision..."
                            disabled={isSubmitting}
                            className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent transition-colors min-h-[150px] resize-none text-lg py-4 disabled:opacity-50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="pt-4 flex justify-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-accent hover:bg-accent/90 text-white uppercase tracking-widest font-bold px-12 py-8 text-sm transition-all rounded-none min-w-[200px]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
