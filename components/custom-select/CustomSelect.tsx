"use client";

import Select, { Props as SelectProps, StylesConfig } from "react-select";

export const customStyles: StylesConfig = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#F0F0F040",
    backdropFilter: "blur(4px)",
    border: "1px solid rgba(255,255,255)",
    borderRadius: "var(--radius-standard)",
    padding: "4px 12px",
    cursor: "pointer",
    minHeight: "40px",
    boxShadow: state.isFocused
      ? "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.5) 0px 0px 0px 2px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      : "none",
    transition: "all 0.2s ease",
    "&:hover": {
      border: "1px solid rgba(255,255,255)",
    },
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "var(--radius-standard)",
    marginTop: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    overflow: "hidden",
    zIndex: 100,
    padding: 4,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  valueContainer: (base) => ({
    ...base,
    padding: 0,
    paddingRight: 4,
    fontSize: 14,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? "var(--primary)" : state.isFocused ? "#00000022" : "#fff",
    color: state.isSelected ? "#fff" : "#000",
    cursor: "pointer",
    padding: "4px 12px",
    borderRadius: "var(--radius-standard)",
    marginBottom: 4,
    fontSize: 14,
    "&:last-child": {
      marginBottom: 0,
    },
    "&:active": {
      backgroundColor: "var(--primary)",
      color: "#fff",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "var(--project-white)",
    fontWeight: 300,
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--project-white)",
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    padding: 0,
    color: state.isFocused ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.6)",
    "&:hover": {
      color: "rgba(255,255,255,0.9)",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  input: (base) => ({
    ...base,
    color: "#fff",
    padding: 0,
  }),
};

export default function CustomSelect({
  options,
  placeholder = "Select...",
  ...props
}: SelectProps) {
  return <Select options={options} 
  styles={customStyles}
   placeholder={placeholder} {...props} />;
}
