// "use client";

// import { XIcon } from "lucide-react";
// import { useState } from "react";
// import { Input } from "../ui/input";

// type RowData = {
//   from: string;
//   to: string;
//   date: string;
// };

// export default function Multicity() {
//   const [rows, setRows] = useState<RowData[]>([
//     { from: "", to: "", date: "" }, // start with 1 row
//   ]);

//   // Add a new row
//   const handleAddRow = () => {
//     if (rows.length >= 5) {
//       alert("You can add up to 5 rows only");
//       return;
//     }
//     setRows([...rows, { from: "", to: "", date: "" }]);
//   };

//   // Update input value
//   const handleChange = (
//     index: number,
//     field: keyof RowData,
//     value: string
//   ) => {
//     const newRows = [...rows];
//     newRows[index][field] = value;
//     setRows(newRows);
//   };

//   // Remove a row
//   const handleRemove = (index: number) => {
//     const newRows = [...rows];
//     newRows.splice(index, 1);
//     setRows(newRows);
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 space-y-4">
//       {rows.map((row, idx) => (
//         <div
//           key={idx}
//           className=""
//         >
//           <div className="flex space-x-2 flex-row w-full">
//             <div className="w-1/3">
//             <Input
//               type="text"
//               placeholder="From"
//               value={row.from}
//               onChange={(e) => handleChange(idx, "from", e.target.value)}
//             className="bg-project-white/25 border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white "
//             />
//             </div>
//              <div className="w-1/3">
//             <Input
//               type="text"
//               placeholder="To"
//               value={row.to}
//               onChange={(e) => handleChange(idx, "to", e.target.value)}
//             className="bg-project-white/25 border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white "
//             />

//           </div>
//            <div className="w-1/3">
//           <Input
//             type="date"
//             value={row.date}
//             onChange={(e) => handleChange(idx, "date", e.target.value)}
//             className="bg-project-white/25 border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white "
//           />
// </div>
//           {rows.length > 1 && (
//             <button
//               onClick={() => handleRemove(idx)}
//               className="text-red-500 hover:text-red-700"
//             >
//              <XIcon/>
//             </button>
//           )}
//         </div>

// </div>
//       ))}
//       <div className="flex flex-row">
//       <button
//         onClick={handleAddRow}
//         className="text-white w-full  justify-center px-3 mt-3 py-1 text-center font-normal bg-white/25 h-10 hover:text-white hover:bg-white/30  "
//         disabled={rows.length >= 5}
//       >

//               Add Another City
//       </button>
// </div>
//       {rows.length >= 5 && (
//         <p className="text-red-500 mt-2">Maximum 5 rows allowed</p>
//       )}
//     </div>
//   );
// }

"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Plus, XIcon } from "lucide-react";
import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Date } from "../datepicker/Date";
import { Input } from "../ui/input";

type RowData = {
  from: string;
  to: string;
  date: string;
};
type QuoteFormValues = {
  from: string;
  to: string;
  date: string;
};
const schema: any = yup.object().shape({
  from: yup.string().required("From place is required").trim("From place is required"),
  to: yup.string().required("To place is required").trim("To place is required"),
  date: yup.string().required("Date is required").trim("Date is required"),
});
export default function Multicity() {
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm<QuoteFormValues>({
    resolver: yupResolver(schema) as any,
  });
  const [rows, setRows] = useState<RowData[]>([
    { from: "", to: "", date: "" }, 
  ]);

  // Add a new row
  const handleAddRow = () => {
    if (rows.length >= 5) {
     
      return;
    }
    setRows([...rows, { from: "", to: "", date: "" }]);
  };

  // Update input value
  const handleChange = (index: number, field: keyof RowData, value: string) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  // Remove a row
  const handleRemove = (index: number) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

 const onSubmit = (data: QuoteFormValues) => {
   console.log("Form Submitted:", data);
 };
  return (
    <>
        <div className="max-w-md mx-auto space-x-2" onSubmit={handleSubmit(onSubmit)}>
          {rows.map((row, idx) => (
            <div key={idx} className="space-y-2">
              {/* From + To in one line */}
              <div className="flex  w-full gap-4 mt-2">
                <div className="flex-2 space-x-10 ">
                  <Input
                    type="text"
                    {...register("from")}
                    placeholder="From"
                    // value={row.from}
                    // onChange={(e) => handleChange(idx, "from", e.target.value)}
                    className="bg-project-white/25 border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white w-full"
                  />
                  
                  {errors.from && (
                    <p className="text-red-400 text-xs">{errors.from.message || ""}</p>
                  )}
                </div>
                <div className="flex-2">
                  <Input
                    type="text"
                    placeholder="To"
                    {...register("to")}
                    // value={row.to}
                    // onChange={(e) => handleChange(idx, "to", e.target.value)}
                    className="bg-project-white/25 border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white w-full"
                  />{" "}
                  {errors.to && <p className="text-red-400 text-xs">{errors.to?.message || ""}</p>}
                </div>
              </div>

              {/* Date + Remove button */}
              <div className="flex items-center gap-4 w-full mt-3">
                <div className="flex-2 w-1/2">
                  {/* <Input
          type="date"
            placeholder="date"
            value={row.date}
            onChange={(e) => handleChange(idx, "date", e.target.value)}
            className="bg-project-white/25  border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white w-full"
          /> */}
                  <Date />

                  {/* <Button
                        variant="outline"
                        data-empty={!date}
                        className="text-white w-full justify-start px-3 py-1 text-left font-normal bg-white/25 h-10 hover:text-white hover:bg-white/30  "
            // onSelect={(e) => handleChange(idx, "date", e.target.value)}
                      >
                        <CalendarIcon  mode="single" selected={date} onSelect={setDate} />
                        {date ? format(date, "PPP") : <span className="">Date</span>}
                      </Button> */}
                  {/* <DatePicker
                // label="Date"
                selectorButtonPlacement="start"
                className=" gap-1 text-white w-full border font-normal rounded bg-white/25 px-3 py-1 text-center  h-10 hover:text-white hover:bg-white/30"
              /> */}
                </div>

                {rows.length > 1 && (
                  <button
                    onClick={() => handleRemove(idx)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <XIcon />
                  </button>
                )}

                <div className="flex-2 w-1/2 ">
                  {idx === rows.length - 1 && rows.length < 5 && (
                    <button
                      onClick={handleAddRow}
                      className="flex flex-row gap-1 items-center text-white w-full border font-normal rounded bg-white/25 justify-center px-3 py-1 text-center  h-10 hover:text-white hover:bg-white/30"
                      disabled={rows.length >= 5}
                    >
                      <Plus />
                      Add City
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Add Another button in same line as empty space */}

          {rows.length >= 5 && <p className="text-red-500 mt-2">Maximum 5 rows allowed</p>}
        </div>
     
    </>
  );
}
