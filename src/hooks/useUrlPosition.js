import { useSearchParams } from "react-router-dom";

function useUrlPosition() {
  const [searchParams] = useSearchParams("form");
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  //   console.log("lat, lng", lat, lng);
  return [lat, lng];
}

export default useUrlPosition;
