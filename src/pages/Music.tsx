import React, { useRef, useState, useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import laguPertama from "@/assets/music/bethovenn.mp3";
import laguDua from "@/assets/music/moonlightReprise.mp3";
import laguTiga from "@/assets/music/divider.mp3";
import { Button } from "@/components/ui/button";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Helper function to format time in MM:SS
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${formattedMinutes}:${formattedSeconds}`;
};

const Music: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50); // Volume state from 0 to 100
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0); // State for current track

  const allMusics = [
    {
      id: 1,
      name: "Bethoven",
      url: laguPertama,
    },
    {
      id: 2,
      name: "Moonlight Reprise",
      url: laguDua,
    },
    {
      id: 3,
      name: "Divider",
      url: laguTiga,
    },
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = allMusics[currentTrackIndex].url;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentTrackIndex, isPlaying]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100; // HTMLAudioElement volume property ranges from 0.0 to 1.0
    }
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % allMusics.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + allMusics.length) % allMusics.length
    );
  };

  const handleMusicClick = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true); // Automatically play the selected track
  };

  const handleTrackEnd = () => {
    handleNext();
  };

  return (
    <>
      <div className="p-3 px-10">
        <h1 className="text-3xl font-bold mb-2">Entertainment</h1>
        <div className="bg-gray-50 w-full p-3 mb-5 text-primary rounded-md">
          <h1 className="text-3xl font-bold mb-2">Musik</h1>
          <ul className="list-decimal ml-5">
            {allMusics.map((music, index) => (
              <li
                key={music.id}
                className={`mb-2 underline underline-offset-2 font-semibold text-md cursor-pointer ${
                  index === currentTrackIndex ? "text-blue-600" : ""
                }`}
                onClick={() => handleMusicClick(index)}
              >
                <p>{music.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <audio
          ref={audioRef}
          src={allMusics[currentTrackIndex].url}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleTrackEnd} // Handle track end
        />
        <div className="flex items-center flex-col-reverse">
          <div className="flex items-center space-x-2 mt-5">
            <Button onClick={handlePrev} className="rounded-md">
              <SkipBack />
            </Button>
            <Button onClick={togglePlayPause} className="rounded-md">
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </Button>
            <Button onClick={handleNext} className="rounded-md">
              <SkipForward />
            </Button>
          </div>
          <div className="flex items-center">
            <label htmlFor="volume-slider" className="mr-2">
              Volume
            </label>
            <input
              id="volume-slider"
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="w-40"
            />
          </div>
          <Progress value={currentTime} max={duration} className="w-3/4 my-2" />
          <div>
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
