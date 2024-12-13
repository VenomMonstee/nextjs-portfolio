import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
      {/* Video tag for background */}
      <video
        className="min-w-full min-h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        {/* Path to video file in the public folder */}
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black overlay with 50% opacity */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    </div>
  );
};

export default BackgroundVideo;
