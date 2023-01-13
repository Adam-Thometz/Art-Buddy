import './Video.css';

const Video = ({ uri }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${uri}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen></iframe>
  );
};

export default Video;