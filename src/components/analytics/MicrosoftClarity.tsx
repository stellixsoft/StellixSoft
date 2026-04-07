"use client";

import { useEffect } from "react";
import clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = "w84jf5u0ln";

export default function MicrosoftClarity() {
  useEffect(() => {
    clarity.init(CLARITY_PROJECT_ID);
  }, []);

  return null;
}
