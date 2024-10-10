import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

export function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error(
      "The CitiesContext has been used outside the scope of the CitiesProvider"
    );
  return context;
}
