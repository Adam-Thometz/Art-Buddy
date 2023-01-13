import './Video.css';

const Video = ({ uri }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${uri}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>
  );
};

export default Video;