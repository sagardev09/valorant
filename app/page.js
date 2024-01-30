"use client"
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";


export default function Home() {




  return (
    <main className="overflow-hidden bg-[#ECE8E1]">
      <Header />
      <News />
      <Hero />
    </main>
  );
}
