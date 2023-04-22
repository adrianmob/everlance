import { Routes, Route } from "react-router-dom";
import { DetailUser } from "../pages/DetailUser";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="detailUser/:idUser" element={<DetailUser />}></Route>
      </Routes>
    </>
  );
};
