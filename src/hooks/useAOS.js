// src/hooks/useAOS.js
import { useEffect } from "react";
import AOS from "aos";

export default function useAOS() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 120 });
  }, []);
}
