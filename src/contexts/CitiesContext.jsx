import { createContext, useCallback, useEffect, useReducer } from "react";
import { BASE_URL } from "../config/config";

const CitiesContext = createContext();

// eslint-disable-next-line
function CitiesProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "loading":
        return { ...state, isLoading: true };

      case "cities/loaded":
        return {
          ...state,
          isLoading: false,
          cities: action.payload,
        };

      case "city/loaded":
        return {
          ...state,
          isLoading: false,
          currentCity: action.payload,
        };

      case "city/created":
        return {
          ...state,
          isLoading: false,
          cities: [...state.cities, action.payload],
          currentCity: action.payload,
        };

      case "city/deleted":
        return {
          ...state,
          isLoading: false,
          cities: state.cities.filter((city) => city.id !== action.payload),
          currentCity: {},
        };

      case "rejected":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };

      default:
        throw new Error("Unknown action type");
    }
  }

  const initialState = {
    isLoading: false,
    cities: [],
    currentCity: {},
    error: "",
  };

  const [{ isLoading, cities, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function fetchCities() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
        // console.log(cities);
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading data ...",
        });
      }
    }

    fetchCities();
  }, []);

  const getCity = useCallback(
    async function getCity(id) {
      console.log(id, currentCity.id);
      if (Number(id) === currentCity.id) return;

      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        dispatch({ type: "city/loaded", payload: data });
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: "There was an error getting city...",
        });
      }
    },
    [currentCity.id]
  );

  async function createCity(newCity) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log("data", data);
      // setCities((prevCities) => [...prevCities, data]);
      dispatch({ type: "city/created", payload: data });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "There was an error creating city...",
      });
    }
  }

  async function deleteCity(id) {
    try {
      dispatch({ type: "loading" });
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      // setCities((prevCities) => prevCities.filter((city) => city.id !== id));
      dispatch({ type: "city/deleted", payload: id });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting city...",
      });
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
        error,
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
