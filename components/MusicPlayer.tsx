'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Music, Pause, Play, SkipForward, Volume2 } from 'lucide-react';



const playlist = [
  {
    title: "XXL - Lany",
    src: "/music/9.mp3"
  },
  {
    title: "Cristmas Kids - Roar",
    src: "/music/2.mp3"
  },
  {
    title: "Take Me Home - Cash Cash",
    src: "/music/3.mp3"
  },
  {
    title: "Her -JVKE",
    src: "/music/4.mp3"
  },
  {
    title: "Dont Look Be Anger - Oasis",
    src: "/music/5.mp3"
  },
  {
    title: "Be Alright - Dean Lewis",
    src: "/music/6.mp3"
  },
  {
    title: "All I Want - Ollivia Rodrigo",
    src: "/music/7.mp3"
  },
  {
    title: "Perfect - Ed Sheeran",
    src: "/music/8.mp3"
  },
  {
    title: "10.000 Hours - Justin Bieber",
    src: "/music/1.mp3"
  }
];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);


  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  const playNext = () => {
    let nextIndex = currentTrackIndex + 1;

    if (nextIndex >= playlist.length) {
      nextIndex = 0;
    }
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
  };


  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrackIndex]);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-end gap-2 group">


      <audio
        ref={audioRef}
        onEnded={playNext}
      >
        <source src={playlist[currentTrackIndex].src} type="audio/mpeg" />
      </audio>


      <button
        onClick={togglePlay}
        className={`relative w-12 h-12 flex items-center justify-center rounded-full shadow-lg border-2 border-white transition-all duration-300 z-20 ${isPlaying ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 hover:scale-110'
          }`}
      >

        {isPlaying && (
          <span className="absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping"></span>
        )}

        <div className="relative z-10">
          {isPlaying ? <Pause size={20} /> : <Music size={20} />}
        </div>
      </button>


      <div className={`bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-gray-200 flex flex-col gap-2 transition-all duration-300 origin-bottom-left absolute left-14 bottom-0 w-48 ${isPlaying ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:pointer-events-auto'
        }`}>


        <div className="text-xs">
          <p className="text-gray-500 font-medium mb-1">Now Playing 🎵</p>
          <p className="text-blue-700 font-bold truncate">
            {playlist[currentTrackIndex].title}
          </p>
        </div>


        <button
          onClick={playNext}
          className="bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors w-full"
        >
          Next Song <SkipForward size={14} />
        </button>

      </div>

    </div>
  );
}