import ListGroup from "./components/ListGroup";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import ImageComponent from "./components/ImageComponent";

function App() {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Munich",
    "Berlin",
    "Frankfurt",
    "Altötting",
    "eins",
    "zwei",
    "drei",
    "vier",
    "fünf",
    "sechs",
    "sieben",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
