import type { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

interface ISelection {
  id: string;
}

function useSelections<T extends ISelection>(options: T[], initOption?: T | null) {

  const [selectedOption, setSelectedOption] = useState<{ opt?: T | null; optIndex: number }>({
    opt: initOption ? initOption : null,
    optIndex: options.findIndex((option) => option.id === initOption?.id),
  });

  const getAriaAttributes = () => ({
    "aria-expanded": false,
  });

  const handleSelectionChange = (e: SelectChangeEvent<string>) => {
    const selectedOption = options.find((option) => option.id === e.target.value);
    setSelectedOption({
      opt: selectedOption,
      optIndex: options.findIndex((option) => option.id === e.target.value),
    });
  };


  return {
    selectedOption: selectedOption.opt,
    selectedOptionIndex: selectedOption.optIndex,
    getAriaAttributes,
    handleSelectionChange,
  };
}

export default useSelections;