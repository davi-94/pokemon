import AOS from "aos";
import React, { useEffect } from "react";

import Pokemons from "@/components/Pokemons";

import Global from "./styles/global";

export default function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div id="app">
      <Pokemons />
      <Global />
    </div>
  );
}
