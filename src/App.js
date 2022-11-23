import { CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import "./styles.css";

const ConvertPage = lazy(() => import("./pages/ConvertPage"));
const HomePage = lazy(() => import("./pages/HomePage"));

export default function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <CircularProgress color="secondary" />
          </div>
        }
      >
        <Routes>
          <Route exact path="/convert" element={<ConvertPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
