"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import CustomSelect from "../custom-select/CustomSelect";
import { DatePicker } from "../datepicker/date-picker";
import { DateRangePicker } from "../datepicker/DateRangePicker";
import RedioGroup from "../redio group/RedioGroup";
import Multicity from "./Multicity";
import { WHATSAPP_URL } from "@/app/constant";

type QuoteFormValues = {
  bookingType: string;
  departure: string;
  returnDate?: string;
  fullName: string;
  arrival: string;
  departurePlace: string;
  passengers: number;
  email: string;
  phone: string;
  message: string;
  countryCode: string;
};

const Validationschema: any = yup.object().shape({
  bookingType: yup.string().required("Booking type is required"),
  departure: yup
    .date()
    .typeError("Please select a departure date")
    .required("Departure date is required"),
  returnDate: yup
    .date()
    .typeError("Please select a return date")
    .required("Return date is required")
    .min(yup.ref("departure"), "Return date cannot be before departure"),
  fullName: yup.string().required("Full name is required").trim("Full name is required"),
  arrival: yup.string().required("Arrival place is required").trim("Arrival place is required"),
  departurePlace: yup
    .string()
    .required("Departure place is required")
    .trim("Departure place is required"),
  passengers: yup
    .number()
    .typeError("Passenger count must be a number")
    .integer("Passenger count must be a whole number")
    .positive("Passenger count must be greater than zero")
    .required("Passenger count is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number required"),
  message: yup.string().optional(),
  countryCode: yup.string().required("Country code required"),
});

export default function QuoteForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormValues>({
    resolver: yupResolver(Validationschema) as any,
    mode: "onChange",
    defaultValues: {
      bookingType: "oneway",
      departure: undefined,
      returnDate: undefined,
      countryCode: "+91",
    },
  });
  const bookingType = watch("bookingType");
  console.log(errors);
  const onSubmit = (data: QuoteFormValues) => {
    // console.log({ ...data, tripType });
    // alert(`Submitted (${tripType})`);
    console.log(data);
    reset();
  };
  const renderContent = () => {
    if (bookingType === "oneway")
      return (
        <>
          <DatePicker />
        </>
      );

    if (bookingType === "return")
      return (
        <>
          <DateRangePicker />
        </>
      );
    if (bookingType === "multi") return <Multicity />;
    return null;
  };
  const typeOptions = [
    { value: "oneway", label: "One Way" },
    { value: "return", label: "Roundtrip" },
    { value: "multi", label: "Multi-City" },
  ];
  const countryOptions = [
    { value: "+1", label: "+1" },
    { value: "+44", label: "+44" },
    { value: "+91", label: "+91" },
    { value: "+971", label: "+971" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-white w-full space-y-4">
      {/* Input Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Departure / Return */}
        <Controller
          name="bookingType"
          control={control}
          render={({ field }) => (
            // <CustomSelect
            //   className="min-w-[120px] col-span-full w-max"
            //   {...field}
            //   options={typeOptions}
            //   value={typeOptions.find((i) => i.value === field.value)}

            // />
            <RedioGroup
              name="bookingType"
              value={field.value}
              onChange={field.onChange}
              options={typeOptions}
            />
          )}
        />
        <Controller
          name="bookingType"
          control={control}
          render={({ field, fieldState }) => renderContent()}
        />
        {/* <Controller
          name="departure"
          control={control}
          render={({ field, fieldState }) => (
            <Controller
              name="returnDate"
              control={control}
              render={({ field:  returnField, fieldState }) => bookingType === 'return' ? 
              (
                <div className="space-y-1">
                  <DateRangePicker
                    departure={field.value}
                    returnDate={returnField.value}
                    onChange={({ departure, returnDate }) => {
                      field.onChange(departure);
                      returnField.onChange(returnDate);
                    }}
                  />
                  {(fieldState.error || errors.returnDate) && (
                    <p className="text-red-400 text-xs">
                      {fieldState.error?.message || errors.returnDate?.message}
                    </p>
                  )}
                </div>)
               :(
                  <div className="space-y-1">
                    <DatePicker/>
                    </div>
              ) 
            }
            />
          )}
        /> */}

        {bookingType !== "multi" && (
          <div className="w-full flex flex-row gap-4 xl:flex-row">
            {/* Departure place */}
            <div className="space-y-1 w-1/2 xl:w-full">
              <Input
                placeholder="Departure place"
                {...register("departurePlace")}
                className="bg-project-white/25 border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white "
              />{" "}
              {errors.departurePlace && (
                <p className="text-red-400 text-xs">{errors.departurePlace?.message || ""}</p>
              )}
            </div>
            {/* Arrival place */}
            <div className="space-y-1 w-1/2 xl:w-full">
              <Input
                placeholder="Arrival place"
                {...register("arrival")}
                className="bg-project-white/25 border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white "
              />
              {errors.arrival && (
                <p className="text-red-400 text-xs">{errors.arrival?.message || ""}</p>
              )}
            </div>
          </div>
        )}
        <div className="w-full flex flex-row gap-4">
          {/* Name  input */}
          <div className="space-y-1 w-1/2">
            <Input
              placeholder="Full Name"
              {...register("fullName")}
              className="bg-project-white/25 border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white"
            />
            {errors.fullName && (
              <p className="text-red-400 text-xs">{errors.fullName?.message || ""}</p>
            )}
          </div>
          <div className="space-y-1 w-1/2">
            <Input
              placeholder="No. Of Passengers"
              type="number"
              {...register("passengers")}
              className="bg-project-white/25 border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white "
            />
            {errors.passengers && (
              <p className="text-red-400 text-xs">{errors.passengers?.message || ""}</p>
            )}
          </div>
        </div>
        <div className="w-full flex flex-row gap-4">
          <div className="space-y-1 w-1/2">
            <Input
              placeholder="Email Address"
              type="email"
              {...register("email")}
              className="bg-project-white/25 border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white "
            />
            {errors.email && <p className="text-red-400 text-xs">{errors.email?.message || ""}</p>}
          </div>
          <div className="space-y-1 w-1/2">
            <div className="flex gap-2 md:col-span-1 items-start relative">
              <Controller
                name="countryCode"
                control={control}
                render={({ field }) => (
                  <CustomSelect
                    {...field}
                    options={countryOptions}
                    value={countryOptions.find((i) => i.value === field.value)}
                    onChange={(e: any) => {
                      field.onChange(e?.value || "+91");
                    }}
                    className="focus-visible:ring-white/50 w-20 focus-visible:ring-2 relative z-10"
                  />
                )}
              />
              <Input
                placeholder="Mobile No."
                {...register("phone")}
                className="absolute z-0 pl-21 bg-project-white/25 border border-project-white backdrop-blur-xs 
                placeholder:text-project-white placeholder:font-light text-white  flex-1 "
              />
            </div>
            {errors.countryCode && (
              <p className="text-red-400 text-xs">{errors.countryCode?.message || ""}</p>
            )}
            {errors.phone && <p className="text-red-400 text-xs">{errors.phone?.message || ""}</p>}
          </div>
        </div>
        <Textarea
          placeholder="Message"
          {...register("message")}
          className="md:col-span-1 bg-project-white/25 border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white"
        />
      </div>

      {/* Submit */}
      {bookingType !== "multi" && (
        <div className="pt-4 flex flex-col items-center">
          <Button
            type="submit"
            variant="secondary"
            disabled={isSubmitting}
            className="px-4 py-3 text-xl"
            onClick={() => {
              if (isSubmitting) {
                window.open({ WHATSAPP_URL }, "_blank");
              }
            }}

            // className="bg-white text-black font-semibold rounded-full px-8 py-2 hover:bg-gray-100"
          >
            {isSubmitting ? "Submitting..." : "Get Your FREE Quote Now"}
          </Button>
          <p className="text-[#E9EAEA] text-[13px] md:text-[17px] font-light mt-2">
            24/7 Support | Zero IVR Wait
          </p>
        </div>
      )}
    </form>
  );
}
