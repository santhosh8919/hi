import React, { createContext, useState, useEffect, useContext } from "react";

interface Payment {
  number: string;
  category: string;
  amount: number;
}

interface Expense {
  category: string;
  amount: number;
}

interface FinanceContextType {
  payments: Payment[];
  expenses: Expense[];
  setPayments: React.Dispatch<React.SetStateAction<Payment[]>>;
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
}

const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

interface FinanceProviderProps {
  children: React.ReactNode; // Add this line to specify that children are expected
}

export const FinanceProvider: React.FC<FinanceProviderProps> = ({
  children,
}) => {
  // Use FinanceProviderProps here
  const [payments, setPayments] = useState<Payment[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // Load data from localStorage if available
  useEffect(() => {
    const storedPayments = localStorage.getItem("payments");
    const storedExpenses = localStorage.getItem("generalExpenses");

    if (storedPayments) setPayments(JSON.parse(storedPayments));
    if (storedExpenses) setExpenses(JSON.parse(storedExpenses));
  }, []);

  useEffect(() => {
    localStorage.setItem("payments", JSON.stringify(payments));
  }, [payments]);

  useEffect(() => {
    localStorage.setItem("generalExpenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <FinanceContext.Provider
      value={{ payments, expenses, setPayments, setExpenses }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = (): FinanceContextType => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error("useFinance must be used within a FinanceProvider");
  }
  return context;
};
export default FinanceContext;
