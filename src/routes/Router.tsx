import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/404";
import Home from "../pages/home";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
