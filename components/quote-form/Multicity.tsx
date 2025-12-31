import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DatePicker } from "../datepicker/date-picker";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type FormData = {
  firstName: string;
  lastName: string;
  arrival: string;
  departurePlace: string;
  passengers: number;
};

export default function App() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  // firstName and lastName will have correct type
  const [items, setItems] = useState<string[]>([]); // store added items
  const [inputValue, setInputValue] = useState(""); // track input

  const handleAddItem = () => {
    if (!inputValue.trim()) return;
    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} className="">
      <div className="w-full flex gap-4 flex-row ">
        <div className="space-y-1 w-1/2">
          <label>FROM</label>
          <Input
            placeholder="From"
            {...register("departurePlace")}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="bg-project-white/25 border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white "
          />{" "}
          {errors.departurePlace && (
            <p className="text-red-400 text-xs">{errors.departurePlace?.message || ""}</p>
          )}
        </div>
        <div className="space-y-1 w-1/2">
          <label>TO</label>
          <Input
            placeholder="To"
            {...register("arrival")}
            className="bg-project-white/25 border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white "
          />
          {errors.arrival && (
            <p className="text-red-400 text-xs">{errors.arrival?.message || ""}</p>
          )}{" "}
        </div>
      </div>
      <div className="w-full flex gap-4 flex-row mt-4 mb-4">
        <div className="w-[50%] space-y-1">
          <label>DATE</label>
          <DatePicker />
        </div>
        <div className="space-y-1 w-1/2">
          <label>Travellers & Class</label>
          <Input
            placeholder="Number Of passengers"
            type="number"
            {...register("passengers")}
            className="bg-project-white/25 border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white "
          />
        </div>
      </div>
      {/* <button type="submit" className="w-full  border bg-white border-primary p-2 text-primary font-medium"> <PlusIcon /> Add Another City</button> */}
      <Button
        variant="outline"
        onClick={handleAddItem}
        className="text-white w-full justify-center px-3 mt-3 py-1 text-left font-normal bg-white/25 h-10 hover:text-white hover:bg-white/30  "
      >
        <PlusIcon />
        Add Another City
      </Button>

      <div className="">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-2 bg-white border rounded shadow text-gray-700 flex justify-between items-center"
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </form>
  );
}
