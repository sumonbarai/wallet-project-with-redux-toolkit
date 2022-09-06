import axios from "../../utilites/axiosInstance";

export const getViewAllTransactions = async () => {
  const response = await axios.get("/transactions");
  return response.data;
};
