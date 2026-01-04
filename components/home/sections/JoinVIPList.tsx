"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Full name is required").trim("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

export default function JoinVIPList() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    // console.log({ ...data, tripType });
    // alert(`Submitted (${tripType})`);
    reset();
  };
  return (
    <section className="w-full py-6 md:py-12.5 max-w-[1200px] mx-auto px-6">
      {/* Heading */}
      {/* <div className="bg-blue-section shadow-[0px_4px_4px_0px_#00000040] rounded-lg grid md:grid-cols-2 grid-cols-1 gap-5"> */}
      <div className="bg-blue-section shadow-[0px_4px_4px_0px_#00000040] rounded-lg grid  grid-cols-1 gap-5">
        <div className="md:px-7 md:py-10 py-7 px-3">
          <h2 className="text-[15px] md:text-base lg:text-xl font-bold text-primary mb-2">
            YOUR TICKET TO HOME, HANDLED WITH CARE
          </h2>
          <p className="text-xs md:text-[15px] font-light text-primary">
            Special fares, genuine guidance, and a team that treats your travel like family.
          </p>
          <div className="flex flex-wrap gap-2 my-4 md:my-7 sm:gap-1">
            <div className="bg-project-pink px-2 border border-project-white py-1.5 rounded-standard text-[10px] font-medium text-white">
              VIP Price Alerts
            </div>
            <div className="bg-project-pink px-2 border border-project-white py-1.5 rounded-standard text-[10px] font-medium text-white">
              Exclusive Discounts
            </div>
            <div className="bg-project-pink px-2 border border-project-white py-1.5 rounded-standard text-[10px] font-medium text-white">
              24/7 Priority Support
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-white w-full space-y-4 grid grid-cols-1 md:grid-cols-2 md:gap-2 max-md:max-w-80"
          >
           
            <div className="space-y-1 ">
              <Input
                placeholder="Enter your name"
                {...register("name")}
                className="ml-2.5 bg-transparent border border-primary backdrop-blur-xs placeholder:font-normal placeholder:text-primary text-primary max-md:placeholder:text-sm max-md:text-sm focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-2"
              />
              {errors.name && <p className="text-red-400 text-xs">{errors.name?.message || ""}</p>}
            </div>
            <div className="space-y-1">
              <Input
                placeholder="Email Address"
                type="email"
                {...register("email")}
                className="ml-2.5 bg-transparent border border-primary backdrop-blur-xs placeholder:font-normal placeholder:text-primary text-primary focus-visible:border-primary max-md:placeholder:text-sm max-md:text-sm focus-visible:ring-primary/50 focus-visible:ring-2"
              />
              {errors.email && (
                <p className="text-red-400 text-xs">{errors.email?.message || ""}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="ml-2.5 px-4 py-2 w-full text-[15px] md:text-xl"
              // className="bg-white text-black font-semibold rounded-full px-8 py-2 hover:bg-gray-100"
            >
              Join the VIP List to Early Access
            </Button>
        
          </form>
        </div>
        <div className="hidden md:flex items-end justify-end relative">
          <div className="h-65 w-75 right-10 lg:h-75 lg:w-85 lg:right-15 bottom-5 bg-secondary rounded-lg absolute -z-10"></div>
          <Image
            src={"/images/vip-img.png"}
            alt="join-vip"
            width={500}
            height={300}
            className="object-contain mb-5 max-lg:h-90 max-lg:w-100"
          />
        </div>
      </div>
    </section>
  );
}
