import ContentList from "../lists/contentList.json";
import "../stylesheets/portfolioStyles.css";
import PopUp from "./PopUp";
import ImageComponent from "./ImageComponent";
import VideoComponent from "./VideoComponent";
import SideBar from "./SideBar";
import { useState } from "react";

function Body() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [RenderList, setRenderList] = useState(
    ContentList.map((e) => ({ ...e }))
  );
  const [popUp, setPopUp] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Nutze Index, um das aktuelle Bild zu tracken

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    updateRenderList(category);
  };

  const resetRenderList = () => {
    setRenderList(ContentList.map((e) => ({ ...e })));
  };

  const updateRenderList = (selectedCategory: string) => {
    if (selectedCategory === "all") {
      resetRenderList();
    } else {
      setRenderList(
        ContentList.filter((cont) => cont.category === selectedCategory)
      );
    }
  };

  const handleImageClick = (imageId: string) => {
    const selectedItemIndex = RenderList.findIndex(
      (item) => item.title === imageId
    );
    if (selectedItemIndex !== -1) {
      setActiveIndex(selectedItemIndex); // Setze den Index des angeklickten Bildes
      togglePopUp();
    }
  };

  const togglePopUp = () => {
    setPopUp(!popUp);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? RenderList.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === RenderList.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (popUp) {
    document.body.classList.add("scroll-blocker");
  } else {
    document.body.classList.remove("scroll-blocker");
  }

  return (
    <div className="body">
      {popUp && (
        <PopUp
          closePopUp={togglePopUp}
          activeItem={RenderList[activeIndex]} // Übergebe das aktive Item basierend auf dem Index
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}

      <SideBar onSelectCategory={handleSelectCategory} />
      <div className="grid-container">
        {RenderList.map((content) => {
          return (
            <ImageComponent
              key={content.title}
              type={content.type}
              imagePath={content.path}
              imageWidth={content.width}
              imageHeight={content.height}
              imageTitle={content.title}
              onImageClick={() => handleImageClick(content.title)} // Titel wird übergeben
            />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
