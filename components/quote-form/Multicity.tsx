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

import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Plus, XIcon } from "lucide-react";
import * as React from "react";
import { useState } from "react";
import { Input } from "../ui/input";
type RowData = {
  from: string;
  to: string;
  date: string;
};

export default function Multicity() {
    const [date, setDate] = React.useState<Date>();
  
  const [rows, setRows] = useState<RowData[]>([
    { from: "", to: "", date: "" }, // start with 1 row
  ]);

  // Add a new row
  const handleAddRow = () => {
    if (rows.length >= 5) {
      alert("You can add up to 5 rows only");
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

  return (
    <div className="max-w-md mx-auto space-x-2">
      {rows.map((row, idx) => (
        <div key={idx} className="space-y-2">
          {/* From + To in one line */}
          <div className="flex  w-full gap-4">
            <div className="flex-2 space-x-10">
              <Input
                type="text"
                placeholder="From"
                value={row.from}
                onChange={(e) => handleChange(idx, "from", e.target.value)}
                className="bg-project-white/25 border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white w-full"
              />
            </div>
            <div className="flex-2">
              <Input
                type="text"
                placeholder="To"
                value={row.to}
                onChange={(e) => handleChange(idx, "to", e.target.value)}
                className="bg-project-white/25 border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white w-full"
              />
            </div>
          </div>

          {/* Date + Remove button in one line */}
          <div className="flex items-center gap-4 w-full mt-3">
            <div className="flex-2 w-1/2">
              {/* <Input
          type="date"
            placeholder="date"
            value={row.date}
            onChange={(e) => handleChange(idx, "date", e.target.value)}
            className="bg-project-white/25  border border-project-white backdrop-blur-xs placeholder:text-project-white placeholder:font-light text-white w-full"
          /> */}
          {/* <DatePicker>Date</DatePicker> */}
             
              <Button
                        variant="outline"
                        data-empty={!date}
                        className="text-white w-full justify-start px-3 py-1 text-left font-normal bg-white/25 h-10 hover:text-white hover:bg-white/30  "
                        value={row.date}
            // onSelect={(e) => handleChange(idx, "date", e.target.value)}
                      >
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span className="">Date</span>}
                      </Button>
            </div>

            {rows.length > 1 && (
              <button onClick={() => handleRemove(idx)} className="text-red-500 hover:text-red-700">
                <XIcon />
              </button>
            )}

            <div className="flex-2 w-1/2">
              <button
                onClick={handleAddRow}
                className="text-white w-full border font-normal rounded bg-white/25 justify-center px-3 py-1 text-center  h-10 hover:text-white hover:bg-white/30"
                disabled={rows.length >= 5}
              >
                <Plus/>Add City
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Add Another button in same line as empty space */}

      {rows.length >= 5 && <p className="text-red-500 mt-2">Maximum 5 rows allowed</p>}
    </div>
  );
}
