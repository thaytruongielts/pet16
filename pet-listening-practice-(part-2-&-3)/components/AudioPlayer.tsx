import React from 'react';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8 bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
      <div className="p-4 bg-slate-100 border-b border-slate-200">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Audio Track</h3>
      </div>
      <iframe
        width="100%"
        height="166" // Reduced height for cleaner look, still functional
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={src}
        title="Audio Player"
        className="w-full"
      ></iframe>
    </div>
  );
};

export default AudioPlayer;