import "../stylesheets/portfolioStyles.css";

interface VideoComponentProps {
  videoPath: string;
  videoWidth: string;
  videoHeight: string;
}

function ImageComponent({
  videoPath,
  videoWidth,
  videoHeight,
}: VideoComponentProps) {
  if (videoWidth == "double" && videoHeight == "double") {
    return (
      <div className="ratio ratio-16x9 myImage single">
        <iframe src={videoPath} title="YouTube video" allowFullScreen></iframe>
      </div>
    );
  } else if (videoWidth == "double") {
    return (
      <div className="ratio ratio-16x9 myImage double-width">
        <iframe src={videoPath} title="YouTube video" allowFullScreen></iframe>
      </div>
    );
  } else if (videoHeight == "double") {
    return (
      <div className="ratio ratio-16x9 myImage double-height">
        <iframe src={videoPath} title="YouTube video" allowFullScreen></iframe>
      </div>
    );
  }
  return (
    <div className="ratio ratio-16x9 myImage single">
      <iframe src={videoPath} title="YouTube video" allowFullScreen></iframe>
    </div>
  );
}

export default ImageComponent;
