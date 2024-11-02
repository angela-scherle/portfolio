import { useState, useEffect } from "react";
import "../stylesheets/portfolioStyles.css";

interface ImageComponentProps {
  type: string;
  imagePath: string;
  imageWidth: string;
  imageHeight: string;
  imageTitle: string;
  onImageClick: (title: string) => void;
}

function ImageComponent({
  type,
  imagePath,
  imageWidth,
  imageHeight,
  imageTitle,
  onImageClick,
}: ImageComponentProps) {
  const [sizeClassName, setSizeClassName] = useState("single");

  useEffect(() => {
    if (imageWidth === "double") {
      setSizeClassName("double-width");
    } else if (imageHeight === "double") {
      setSizeClassName("double-height");
    } else {
      setSizeClassName("single");
    }
  }, [imageWidth, imageHeight]); // Nur aktualisieren, wenn width/height sich ändern

  // Funktion zum Extrahieren der YouTube-Video-ID aus der URL
  const getYouTubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(imagePath);

  if (type === "video" && videoId) {
    return (
      <div
        className={`video-thumbnail myImage ${sizeClassName}`}
        onClick={(e) => {
          e.stopPropagation(); // Verhindere, dass das Klickereignis das Video beeinflusst
          onImageClick(imageTitle); // Auslösen der onClick-Funktion beim Klick
        }}
        style={{
          position: "relative",
          cursor: "pointer",
          backgroundImage: `url(https://img.youtube.com/vi/${videoId}/0.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        {/* Iframe für das Video, wird immer angezeigt und spielt automatisch */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
          title={imageTitle}
          allow="autoplay; encrypted-media"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            pointerEvents: "none", // WICHTIG: Klicks nicht an das iframe weitergeben
          }}
        ></iframe>
      </div>
    );
  }

  // Für Bilder
  return (
    <img
      src={imagePath}
      alt={imageTitle} // Verwende den Titel als Alt-Text
      className={`myImage ${sizeClassName}`}
      onClick={() => onImageClick(imageTitle)}
    />
  );
}

export default ImageComponent;
