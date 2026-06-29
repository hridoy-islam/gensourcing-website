"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/schemas";
import { homeContent } from "@/utils/content";
import { Mail, MapPin, ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { cn } from "@/utils/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// UI Imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Shadcn Select

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ContactSection() {
  const { title: formTitle, form, info } = homeContent.contactSection;
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Send to admin
      const adminRes = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Send confirmation to user
      const userRes = await fetch("/api/send-email-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (userRes.ok && adminRes.ok) {
        setIsSubmitted(true);
        reset(); // Reset form fields

        // Hide success message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 10000);
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // GSAP Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Info Side (Left)
      gsap.fromTo(infoRef.current?.children || [],
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      // Animate Form Card (Right)
      gsap.fromTo(formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

 return (
  <section
    ref={sectionRef}
    className="relative py-28  -mt-32  bg-gradient-to-b from-white to-slate-50 overflow-hidden"
  >
    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-start">

        {/* ---------- LEFT SIDE ---------- */}
        <div ref={infoRef} className="space-y-12 lg:pt-10">
          <div className="space-y-6">
            <span className="text-sm uppercase tracking-[4px] font-semibold text-primary">
              Contact
            </span>

            <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.1]">
              {info.title}
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              {info.description}
            </p>
          </div>

          <div className="space-y-8 pt-6">
            <ContactItem
              icon={MapPin}
              title={info.addressTitle}
              content={info.address}
            />

            <ContactItem
              icon={Mail}
              title="Email"
              content={info.email}
              href={`mailto:${info.email}`}
            />
            <ContactItem
              icon={PhoneCall}
              title="Phone"
              content={info.phone}
              href={`tel:${info.phone}`}
            />
          </div>
        </div>

        {/* ---------- RIGHT SIDE ---------- */}
        <div
          ref={formRef}
          className="relative bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12)] border border-white/40"
        >
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-5">
                <CheckCircle2 size={30} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Message Sent Successfully
              </h3>
              <p className="text-slate-500 mt-2">
                Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <h3 className="font-bold text-2xl text-slate-900 mb-3">
                  {formTitle}
                </h3>
                <p className="text-slate-500 text-sm">
                  Fill out the form and we’ll respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormInput
                    register={register("name")}
                    placeholder={form.placeholders.name}
                    error={errors.name?.message}
                  />
                  <FormInput
                    register={register("email")}
                    placeholder={form.placeholders.email}
                    error={errors.email?.message}
                  />
                </div>

                <FormInput
                  register={register("phone")}
                  placeholder={form.placeholders.phone}
                  error={errors.phone?.message}
                />

                <div className="space-y-2">
                  <Controller
                    control={control}
                    name="service"
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value || ""}
                      >
                        <SelectTrigger className="h-12 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-primary/30">
                          <SelectValue placeholder="Select a service..." />
                        </SelectTrigger>
                        <SelectContent>
                          {form.services.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.service && (
                    <p className="text-red-500 text-xs">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Textarea
                    {...register("message")}
                    placeholder={form.placeholders.message}
                    className="rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-primary/30 min-h-[140px]"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      {form.buttonText || "Send Message"}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  </section>
);

}

function FormInput({
  register,
  placeholder,
  error,
}: {
  register: any;
  placeholder: string;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <Input
        {...register}
        placeholder={placeholder}
        className="h-12 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-primary/30 transition-all"
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}


// Sub-component for clean code
function ContactItem({ icon: Icon, title, content, href }: { icon: any, title: string, content: string, href?: string }) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper href={href} className={cn("flex items-start gap-5 group", href && "hover:opacity-80 transition-opacity")}>
      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
        <Icon size={22} strokeWidth={2} />
      </div>
      <div className="pt-1">
        <h4 className="font-bold text-lg mb-0.5">{title}</h4>
        <p className="font-medium leading-relaxed text-[16px]">{content}</p>
      </div>
    </Wrapper>
  )
}