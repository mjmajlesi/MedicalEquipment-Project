import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import Header from "@/Components/Header/Header";
import Products from "@/Components/Product/Products";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Header />
      <About />
      <Products />
      <Contact />
    </div>
  );
}

