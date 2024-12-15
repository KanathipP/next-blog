"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext , useEffect , useState } from "react";

const ThemeProvider = ({children}) => {
  const { theme } = useContext(ThemeContext);
  const [mounted,setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  //we use localstorage so we have to check first whether it's mounted or not !

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
