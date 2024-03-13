import React from "react";

type Props = {
  country: string;
  isSelected: boolean;
  onChange: (isSelected: boolean) => void;
};

export const Checkbox = React.memo(({ country, isSelected, onChange }: Props) => {
  return (
    <li className="group hover:bg-lime-600/80">
      <label className="font-mono group-hover:text-black/90 text-lime-600/80 cursor-pointer">
        <input
          className="mr-2 text-red-900 checked:accent-lime-600/80 cursor-pointer"
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onChange(e.target.checked)}
        />

        {country}
      </label>
    </li>
  );
});
