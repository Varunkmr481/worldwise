import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../config/config";

const CitiesContext = createContext();

// eslint-disable-next-line
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
        // console.log(cities);
      } catch (err) {
        alert("Error occured ");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      alert("Error occured ");
    } finally {
      setIsLoading(false);
    }
  }

  // eslint-disable-next-line
  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log("data", data);
      setCities((prevCities) => [...prevCities, data]);
    } catch (err) {
      alert("There was an error creating city");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      setCities((prevCities) => prevCities.filter((city) => city.id !== id));
    } catch (err) {
      alert("There was an error deleting city");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

// function useCities() {
//   const context = useContext(CitiesContext);
//   if (context === undefined)
//     throw new Error(
//       "The CitiesContext has been used outside the scope of the CitiesProvider"
//     );
//   return context;
// }

export { CitiesProvider, CitiesContext };
