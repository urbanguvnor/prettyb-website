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
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const slowConnection =
      connection &&
      (connection.effectiveType === 'slow-2g' ||
        connection.effectiveType === '2g' ||
        connection.effectiveType === '3g');

    if (slowConnection) {
      setShowVideo(false);
      setIsLoading(false);
    }
  }, []);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div className={`relative ${className}`} onClick={onClick}>
      
      {/* VIDEO (always mounted) */}
      {showVideo && !hasError && (
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoadedData={handleLoadedData}
          onError={handleError}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* THUMBNAIL OVERLAY */}
      {(isLoading || hasError || !showVideo) && (
        <img
          src={thumbnail}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* OPTIONAL LOADER */}
      {isLoading && showVideo && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          {/* <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" /> */}
        </div>
      )}
    </div>
  );
};

export default VideoWithFallback;
