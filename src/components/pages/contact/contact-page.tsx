import { Input } from "@/components//ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export function ContactPage() {
  return (
    <section className="pt-12 pb-7 px-5">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-4xl font-bold text-gray-800 sm:text-5xl">
          Contact Us
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-700 font-light tracking-wide">
        Have a question about Acme Inc.? Please don’t hesitate to get in touch
        with us if you have a query or want to give some feedback.
      </p>

      <form
        method="POST"
        encType="multipart/form-data"
        className="mx-auto max-w-xl mt-6"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <Input label="Name" name="name" id="name" required />
            <Input label="Email" name="email" id="email" required />
          </div>
          <Input label="Subject" name="subject" id="subject" required />
          <Input label="Company" name="company" id="company" />
          <Textarea
            label="Message"
            name="message"
            id="message"
            rows={4}
            required
          />
        </div>
        <div className="mt-10">
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
}
