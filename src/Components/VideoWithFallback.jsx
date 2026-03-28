import React, { useState, useRef } from 'react';

const VideoWithFallback = ({ 
  src, 
  thumbnail, 
  alt, 
  className = "",
  onClick,
  autoPlay = true,
  loop = true,
  muted = true 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  const handleCanPlayThrough = () => {
    // Video is fully loaded and ready to play
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className="relative w-full h-full" onClick={onClick}>
      {/* Thumbnail - shows until video is loaded or if there's an error */}
      {(!isLoaded || hasError) && (
        <img
          src={thumbnail}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover ${className}`}
        />
      )}

      {/* Video - always loading in background, becomes visible when ready */}
      {!hasError && (
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
          preload="auto"
          className={`w-full h-full object-cover transition-opacity duration-700 ${className} ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onCanPlayThrough={handleCanPlayThrough}
          onError={handleError}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Optional: Loading indicator */}
      {!isLoaded && !hasError && (
        <div className="absolute bottom-2 right-2 z-10">
          {/* <div className="w-6 h-6 border-2 border-white/60 border-t-transparent rounded-full animate-spin" /> */}
        </div>
      )}
    </div>
  );
};

export default VideoWithFallback;