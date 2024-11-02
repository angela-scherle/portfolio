import "../stylesheets/portfolioStyles.css";

interface PopUpProps {
  closePopUp: () => void;
  activeItem: {
    title: string;
    type: string; // "image" oder "video"
    width: string;
    height: string;
    path: string;
    category: string;
    description: string;
  };
  onNext: () => void; // Funktion zum Navigieren zum nächsten Bild
  onPrevious: () => void; // Funktion zum Navigieren zum vorherigen Bild
}

function PopUp({ closePopUp, activeItem, onNext, onPrevious }: PopUpProps) {
  const { type, path, title, description } = activeItem;

  // Funktion zur Anpassung der Video-URL für autoplay, mute und loop
  const getVideoUrl = (url: string) => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = getYouTubeVideoId(url);
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&loop=1&playlist=${videoId}`;
    }
    return url; // Andere Videos (z.B. nicht YouTube) bleiben unverändert
  };

  // Funktion zum Extrahieren der YouTube-Video-ID, um die Loop-Funktion zu aktivieren
  const getYouTubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <div className="popup">
      <div className="overlay"></div>
      <div className="popup-container">
        {/* Button zum vorherigen Bild/Video */}
        <button className="popup-button" onClick={onPrevious}>
          &lt;
        </button>
        <div className="popup-content">
          {/* Hier wird bedingt entweder ein Bild oder ein Video angezeigt */}
          {type === "image" ? (
            <img className="popup-image" src={path} alt={title} />
          ) : type === "video" ? (
            <iframe
              className="popup-image"
              src={getVideoUrl(path)} // Hier wird die modifizierte URL für das Video gesetzt
              title={title}
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          ) : null}
          <div className="popup-text">
            {/* Titel und Beschreibung */}
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          {/* Button zum Schließen des Popups */}
          <button className="close-popup" onClick={closePopUp}>
            close
          </button>
        </div>

        {/* Button zum nächsten Bild/Video */}
        <button className="popup-button" onClick={onNext}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default PopUp;
