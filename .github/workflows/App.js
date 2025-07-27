import React, { useRef, useState } from "react";

const songs = [
  {
    title: "Song 1",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    title: "Song 2",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    title: "Song 3",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  }
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();

  const playSong = () => {
    audioRef.current.play();
    setPlaying(true);
  };

  const pauseSong = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  const nextSong = () => {
    let next = (current + 1) % songs.length;
    setCurrent(next);
    setPlaying(false);
    setTimeout(() => playSong(), 100);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "auto" }}>
      <h2>Simple Music Player 🎵</h2>
      <p><b>{songs[current].title}</b></p>
      <audio
        ref={audioRef}
        src={songs[current].url}
        onEnded={nextSong}
        controls
        style={{ width: "100%" }}
      />
      <div style={{ marginTop: "10px" }}>
        {!playing ? (
          <button onClick={playSong}>Play</button>
        ) : (
          <button onClick={pauseSong}>Pause</button>
        )}
        <button onClick={nextSong} style={{ marginLeft: "8px" }}>Next</button>
      </div>
    </div>
  );
}