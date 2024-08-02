import React from 'react';

function Video({ videoUrl, width = 560, height = 315 }) {

  return (

<iframe
  title="Vidéo"
  src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=0&width=${width}`}
  width={width}
  height={height}
  style={{ border: 'none', overflow: 'hidden' }}
  scrolling="no"
  frameBorder="0"
  allowFullScreen={true}
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
></iframe>
  );
}

export default Video;