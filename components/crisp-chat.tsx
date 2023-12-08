"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("fcfd3366-abe2-48df-b29e-b799827d6f61");
  }, []);

  return null;
};