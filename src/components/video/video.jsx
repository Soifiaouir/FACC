import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

function Video({ videoSource, width = 560, height = 315, type = 'facebook' }) {
  switch (type) {
    case 'instagram':
      return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url={videoSource} width={width} />
        </div>
      );
    case 'facebook':
      return (
        <iframe
          title="Vidéo Facebook"
          src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoSource)}&show_text=0&width=${width}`}
          width={width}
          height={height}
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      );
    case 'local':
      return (
        <video
          width={width}
          height={height}
          controls
          style={{ maxWidth: '100%' }}
        >
          <source src={videoSource} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      );
    default:
      return <p>Type de vidéo non supporté</p>;
  }
}

export default Video;