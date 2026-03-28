import React, { useState, useRef, useEffect } from 'react';

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
  const [showVideo, setShowVideo] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Show video after 3 seconds
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadedData = () => {
    // Video has loaded enough data to start playing
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, but that's okay
      });
    }
  };

  const handleError = () => {
    setHasError(true);
    setShowVideo(false);
  };

  return (
    <div className="relative w-full h-full" onClick={onClick}>
      {/* Thumbnail - shows for first 3 seconds or if there's an error */}
      {(!showVideo || hasError) && (
        <img
          src={thumbnail}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover ${className}`}
        />
      )}

      {/* Video - starts loading immediately, shows after 3 seconds */}
      {!hasError && (
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
          preload="auto"
          className={`w-full h-full object-cover transition-opacity duration-700 ${className} ${
            showVideo ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={handleLoadedData}
          onError={handleError}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoWithFallback;