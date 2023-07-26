import "./App.css";
import { lazy } from "react";
const Homepage = lazy(() => import("./pages/Homepage"));
import { Suspense } from "react";
import Loader from "./components/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Homepage />
    </Suspense>
  );
}

export default App;
