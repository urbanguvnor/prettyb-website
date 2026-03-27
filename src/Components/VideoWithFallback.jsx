import React, { useState, useEffect, useRef } from 'react';

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
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(autoPlay);
  const videoRef = useRef(null);

  useEffect(() => {
    const connection = navigator.connection;
    const slow =
      connection &&
      ['slow-2g', '2g', '3g'].includes(connection.effectiveType);

    if (slow) {
      // Disable autoplay ONLY, but still allow loading
      setShouldAutoPlay(false);
    }
  }, []);

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div className={`relative ${className}`} onClick={onClick}>
      
      {/* VIDEO (always mounted → loads in background) */}
      {!hasError && (
        <video
          ref={videoRef}
          autoPlay={shouldAutoPlay}
          loop={loop}
          muted={muted}
          playsInline
          preload="auto"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onCanPlay={handleCanPlay}
          onError={handleError}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* THUMBNAIL (stays until video ready) */}
      {isLoading || hasError ? (
        <img
          src={thumbnail}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : null}

      {/* LOADER (optional) */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          {/* <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" /> */}
        </div>
      )}
    </div>
  );
};

export default VideoWithFallback;
