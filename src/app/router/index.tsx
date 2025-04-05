import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterPage } from "../../pages/RegisterPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        {/* Тут будут другие маршруты */}
      </Routes>
    </BrowserRouter>
  );
};
