import axios from "../../utilites/axiosInstance";

export const getViewAllTransactions = async () => {
  const response = await axios.get("/transactions");
  return response.data;
};

export const getViewIncomeTransactions = async (searchQuery) => {
  const response = await axios.get(`/transactions?${searchQuery}`);
  return response.data;
};

export const getViewExpenseTransactions = async (searchQuery) => {
  const response = await axios.get(`/transactions?${searchQuery}`);
  return response.data;
};
export const getViewBySearchTransactions = async (searchQuery) => {
  const response = await axios.get(`/transactions?q=${searchQuery}`);
  return response.data;
};
