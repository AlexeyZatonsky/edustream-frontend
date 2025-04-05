import api from '../../../shared/api/axios';
import type { UserCreate, TokenResponse } from "../model/types";

export const registerUser = async (data: UserCreate): Promise<TokenResponse> => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    throw error;
  }
};
