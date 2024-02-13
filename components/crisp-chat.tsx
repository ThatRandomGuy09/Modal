"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5a005a11-9543-477d-8905-c8f03b29b964");
  }, []);

  return null;
};
