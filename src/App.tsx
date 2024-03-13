import { useState, useCallback, useMemo } from "react";

import "./App.css";
import { Checkbox } from "./components/Checkbox";

const countries: string[] = ["Spain", "India", "USA", "France", "Germany"];

interface CheckedCountries {
  [key: string]: boolean;
}

function App() {
  const [checkedCountries, setCheckedCountries] = useState<CheckedCountries>(() =>
    countries.reduce((acc, country) => ({ ...acc, [country]: false }), {})
  );

  const handleSelection = useCallback((country: string, isSelected: boolean) => {
    setCheckedCountries((prev) => ({ ...prev, [country]: isSelected }));
  }, []);

  const handleSelectionAll = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedCountries(() =>
      countries.reduce((acc, country) => ({ ...acc, [country]: e.target.checked }), {})
    );
  }, []);

  const allChecked = useMemo(
    () => Object.values(checkedCountries).every((checked) => checked),
    [checkedCountries]
  );

  return (
    <>
      <section className="h-screen w-screen bg-black/90 flex justify-center pt-20">
        <div className="flex flex-col w-min h-min border px-20 py-10 gap-6 bg-black/80 border-lime-600/80 shadow rounded-2xl shadow-lime-400  ">
          <h1 className=" text-lime-600/80  text-center text-2xl font-mono">Checkbox Challenge</h1>
          <ul>
            <li className="group hover:bg-lime-600/80 ">
              <label className="font-mono text-lime-600/80 group-hover:text-black/90 cursor-pointer">
                <input
                  type="checkbox"
                  id="selectAll"
                  checked={allChecked}
                  className="mr-2 bg-black border checked:accent-lime-600/80 cursor-pointer"
                  onChange={handleSelectionAll}
                />
                Select All
              </label>
            </li>
            {countries.map((country) => (
              <Checkbox
                key={country}
                country={country}
                isSelected={checkedCountries[country]}
                onChange={(isSelected: boolean) => handleSelection(country, isSelected)}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
