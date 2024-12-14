import { useRef, useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    if (event.target.name === "price") {
      setSelectedPriceRange(event.target.value);
    } else {
      setSelectedCategory(event.target.value);
    }
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query, priceRange) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    // Applying price range filter
    if (priceRange !== "all") {
      filteredProducts = filteredProducts.filter((product) => {
        const price = parseFloat(product.newPrice.replace("$", ""));
        if (priceRange === "0-10") return price >= 0 && price <= 10;
        if (priceRange === "10-20") return price > 10 && price <= 20;
        if (priceRange === "20-30") return price > 20 && price <= 30;
        if (priceRange === "30+") return price > 30;
        return true;
      });
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query, selectedPriceRange);

  return (
    <div className="App">
      <Header scrollToFooter={scrollToFooter}/>
      <div className="content">
        <Sidebar handleChange={handleChange} />
        <main>
          <Navigation query={query} handleInputChange={handleInputChange} />
          <Recommended handleClick={handleClick} />
          <Products result={result} />
        </main>
      </div>
      <Footer ref={footerRef}/>
    </div>
  );
}

export default App;