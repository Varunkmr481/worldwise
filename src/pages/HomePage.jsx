import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

export default function HomePage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1 className="test">WORLDWISE</h1>

      <Link to="/app">Go to the app</Link>
    </div>
  );
}
