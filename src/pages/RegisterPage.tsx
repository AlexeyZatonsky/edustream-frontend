// src/pages/RegisterPage.tsx
import { useState } from "react";
import { RegisterForm } from "../modules/ui/RegisterForm";
import { registerUser } from "../modules/auth/api/authApi";

export const RegisterPage = () => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await registerUser(data);
      console.log("Пользователь зарегистрирован:", response);
      setRegistrationSuccess(true);
      
      // Сохраняем токен в localStorage
      localStorage.setItem('token', response.access_token);
      
      // Здесь можно сделать редирект на другую страницу
      // Например: window.location.href = '/dashboard';
    } catch (error) {
      console.error("Ошибка регистрации", error);
      throw error; // Пробрасываем ошибку дальше для обработки в форме
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "2rem" }}>
      <h2>Регистрация</h2>
      {registrationSuccess ? (
        <div style={{ color: 'green', marginBottom: '20px' }}>
          Регистрация успешно завершена! Вы можете войти в систему.
        </div>
      ) : (
        <RegisterForm onSubmit={handleSubmit} />
      )}
    </div>
  );
};
