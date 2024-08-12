'use client';
import axios from 'axios';
import qs from 'qs';


const API_BASE_URL = process.env.NEXT_PUBLIC_TEST_API_URL;
const CODE_SYSTEM = process.env.CODE_SYSTEM ?? 5;

if (!API_BASE_URL || !CODE_SYSTEM) {
  throw new Error("API URL or CODE_SYSTEM is not defined in the environment variables");
}
const LOGIN_ENDPOINT_BACK = `/login/access-token/${CODE_SYSTEM}`;
const API_URL = `${API_BASE_URL}${LOGIN_ENDPOINT_BACK}`;

export const login = async (username: string, password: string) => {
  try {
    const payload = qs.stringify({ username, password });
    const response = await axios.post(API_URL, payload, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}
