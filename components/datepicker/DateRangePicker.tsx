"use client";

import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format, parseISO } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as React from "react";

interface DateRangePickerProps {
  departure?: string;
  returnDate?: string;
  onChange?: (dates: { departure: string | undefined; returnDate: string | undefined }) => void;
}

export function DateRangePicker({
  departure: controlledDeparture,
  returnDate: controlledReturn,
  onChange,
}: DateRangePickerProps) {
  // internal fallback
  const [internalDeparture, setInternalDeparture] = React.useState<string | undefined>(
    controlledDeparture
  );
  const [internalReturn, setInternalReturn] = React.useState<string | undefined>(controlledReturn);

  const departure = controlledDeparture ?? internalDeparture;
  const returnDate = controlledReturn ?? internalReturn;

  const [openType, setOpenType] = React.useState<"departure" | "return" | null>(null);

  const handleChange = (dates: { departure?: Date; returnDate?: Date }) => {
    const formatted = {
      departure: dates.departure ? format(dates.departure, "yyyy-MM-dd") : undefined,
      returnDate: dates.returnDate ? format(dates.returnDate, "yyyy-MM-dd") : undefined,
    };

    if (onChange) onChange(formatted);
    else {
      setInternalDeparture(formatted.departure);
      setInternalReturn(formatted.returnDate);
    }
  };

  const isActive = openType !== null;

  return (
    <div
      className={cn(
        "flex items-center justify-between space-x-2 overflow-hidden border w-full rounded-standard bg-muted/30 h-10 backdrop-blur-md text-foreground/90 transition-all duration-200 border-project-white",
        isActive ? "border-project-white ring-white/50 ring-2" : ""
      )}
    >
      {/* Departure Date */}
      <CalendarIcon className="text-white ml-2 h-4" />
      <Popover
        open={openType === "departure"}
        onOpenChange={(open) => setOpenType(open ? "departure" : null)}
      >
        <PopoverTrigger asChild>
          <button
            className={cn(
              "text-sm px-3 text-left flex-1 py-1 truncate hover:bg-primary/30 text-white transition-colors rounded-standard h-full ",
              !departure && "text-project-white font-light"
            )}
          >
            {departure ? format(parseISO(departure), "PP") : "Departure"}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-background border shadow-md rounded-standard">
          <Calendar
            mode="single"
            selected={departure ? parseISO(departure) : undefined}
            onSelect={(date) => {
              handleChange({
                departure: date,
                returnDate: returnDate ? parseISO(returnDate) : undefined,
              });
              setOpenType(null);
            }}
            disabled={(date) => (returnDate ? date > parseISO(returnDate) : false)}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <span className="text-white/70">-</span>

      {/* Return Date */}
      <CalendarIcon className="text-white w-4 h-4" />
      <Popover
        open={openType === "return"}
        onOpenChange={(open) => setOpenType(open ? "return" : null)}
      >
        <PopoverTrigger asChild>
          
          <button
            className={cn(
              "text-sm px-3 text-left flex-1 py-1 truncate hover:bg-primary/30 text-white rounded-standard transition-colors h-full",
              !returnDate && "text-project-white font-light"
            )}
          >
            {returnDate ? format(parseISO(returnDate), "PP") : "Return"}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-background border shadow-md rounded-standard">
          <Calendar
            mode="single"
            selected={returnDate ? parseISO(returnDate) : undefined}
            onSelect={(date) => {
              handleChange({
                departure: departure ? parseISO(departure) : undefined,
                returnDate: date,
              });
              setOpenType(null);
            }}
            disabled={(date) => (departure ? date < parseISO(departure) : false)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
