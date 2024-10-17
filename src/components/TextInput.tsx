import { Dispatch, SetStateAction } from "react";
import { AppColors } from "../theme";

function TextInput({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <div>
      <label className="flex flex-col text-onSurface p-2 pb-0 mt-2 font-medium">
        {label}
      </label>
      <input
        className="py-2 px-4 rounded-md border-2 border-primary "
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default TextInput;
