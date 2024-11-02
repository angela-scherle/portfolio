import React, { useState, useEffect } from "react";
import "../stylesheets/portfolioStyles.css";

interface DynamicTextProps {}

const DynamicText: React.FC<DynamicTextProps> = () => {
  const texts = [
    "Grafikdesign für Web und Print",
    "Videos mit 2D + 3D Animationen",
    "Corporate Design mit Markenstrategie",
    "Ausstellungs- und Messedesign",
    "Fotorealistische Produktrenderings",
  ];
  const [currentText, setCurrentText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeTimeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < texts[currentTextIndex].length) {
            setCurrentText((prev) => prev + texts[currentTextIndex][charIndex]);
            setCharIndex((prev) => prev + 1);
          } else {
            // Wenn der Text komplett ist, beginnen wir mit dem Löschen nach einer Pause
            setTimeout(() => setIsDeleting(true), 1000); // Pause bevor das Löschen beginnt
          }
        } else {
          // Löschen der Buchstaben
          if (charIndex > 0) {
            setCurrentText((prev) => prev.slice(0, -1));
            setCharIndex((prev) => prev - 1);
          } else {
            // Wenn der Text vollständig gelöscht ist, zum nächsten Text wechseln
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    ); // Schnellere Löschgeschwindigkeit

    return () => clearTimeout(typeTimeout);
  }, [charIndex, currentTextIndex, isDeleting, texts]);

  return (
    <div className="dyn-text-container">
      <div className="header-text">
        <h1 className="myName">Angela Scherle</h1>
        <p className="typingText">{currentText}</p>
      </div>
    </div>
  );
};

export default DynamicText;
