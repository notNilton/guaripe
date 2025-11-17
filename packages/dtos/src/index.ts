export interface UserDTO {
  id: string;
  email: string;
  fullName: string;
  role: "admin" | "user";
}

export const API_URL = "http://localhost:3333";
