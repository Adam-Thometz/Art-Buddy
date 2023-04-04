import { useContext, useEffect, useState } from "react";
import { PlayContext } from "_context/PlayContext";
import useSavedSongs from "_hooks/saved-songs/useSavedSongs";

import { useSelector, useDispatch } from "react-redux";
import { toggleLoop } from "_redux/instrument-id/song-maker/songMakerReducer";

import "./SavedSongs.css";

import Icon from "_components/icon/Icon";

import { smallPlayIcon, deleteIcon } from "_media/instrument-id/_icons/iconImports";
import createLoop from "_utils/instrument-id/createLoop";

const SavedSongs = () => {
  const { setPlayFn } = useContext(PlayContext);
  const { volume } = useSelector((state) => state.settings);
  const { song, isPlaying } = useSelector((state) => state.songMaker);
  const [savedSongs, setSavedSongs] = useSavedSongs();
  const [selectedSong, setSelectedSong] = useState(null);
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    const songName = e.target.innerText;
    setSelectedSong(songName);
    const songToLoop = savedSongs.get(songName);
    if (isPlaying) dispatch(toggleLoop());
    setPlayFn(() => createLoop(songToLoop, volume));
  };

  const handleToggle = () => {
    if (!selectedSong) return;
    dispatch(toggleLoop());
  };

  const handleDelete = () => {
    if (!selectedSong) return;
    savedSongs.delete(selectedSong);
    setSavedSongs(savedSongs.entries());
  };

  useEffect(() => {
    return () => {
      if (isPlaying) dispatch(toggleLoop());
      setPlayFn(() => createLoop(song, volume));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const songDisplay = Array.from(savedSongs.keys()).map((key) => (
    <span
      key={key}
      className={`SavedSongs-title${key === selectedSong ? " selected" : ""}`}
      onClick={handleSelect}
    >
      {key}
    </span>
  ));

  return (
    <section className="SavedSongs">
      <aside className="SavedSongs-options">
        <Icon
          icon={smallPlayIcon}
          text="Play"
          size="49px"
          onClick={handleToggle}
        />
        <Icon
          icon={deleteIcon}
          text="Delete"
          size="49px"
          onClick={handleDelete}
        />
      </aside>
      <section className="SavedSongs-song-list">{songDisplay}</section>
    </section>
  );
};

export default SavedSongs;
