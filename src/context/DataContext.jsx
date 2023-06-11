import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const updateData = async (url) => {
    const data = await fetch(url);
    const newData = await data.json();
    console.log(newData);
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};
