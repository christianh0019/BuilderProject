import React from 'react';

interface VideoPlayerProps {
    videoId: string;
    poster?: string;
    autoplay?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, poster, autoplay = false }) => {
    return (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
            ></iframe>
        </div>
    );
};

export default VideoPlayer;
