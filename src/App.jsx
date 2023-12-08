import React from "react";
import Navbar from "./componets/Navbar";
import Banner from "./componets/Banner";
import About from "./componets/About";

function App() {
  return (
    <>
      <main className="bg-slate-900 min-h-screen">
        <Navbar />
        <Banner />
        <About />
      </main>
    </>
  );
}

export default App;
