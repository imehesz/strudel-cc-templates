import { useStrudel } from '../context/StrudelContext'
import './SongCard.css'

export default function SongCard({ song, isSaved, onToggleSave, onSelect }) {
  const { currentSong, isPlaying, playSong, stopPlayback } = useStrudel()
  const isCurrentSong = currentSong?.id === song.id
  const songIsPlaying = isCurrentSong && isPlaying

  const handleToggle = (e) => {
    e.stopPropagation()
    if (songIsPlaying) {
      stopPlayback()
    } else {
      playSong(song)
    }
  }

  const handleSave = (e) => {
    e.stopPropagation()
    onToggleSave(song.id)
  }

  const handleStrudelLink = (e) => {
    e.stopPropagation()
    window.open(song.strudelUrl, '_blank', 'noopener,noreferrer')
  }

  const handleSelect = () => {
    onSelect(song)
  }

  return (
    <div className="song-card">
      <div className="song-card-cover" onClick={handleSelect}>
        <img src={song.coverImg} alt={song.title} loading="lazy" />
        <button
          className={`play-btn ${songIsPlaying ? 'playing' : ''}`}
          onClick={handleToggle}
          title={songIsPlaying ? 'Stop' : 'Play'}
        >
          {songIsPlaying ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h12v12H6z"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      </div>
      <div className="song-card-info">
        <div className="song-card-title" onClick={handleSelect}>{song.title}</div>
        <div className="song-card-author">{song.author}</div>
        <div className="song-card-actions">
          <button
            className={`save-btn ${isSaved ? 'saved' : ''}`}
            onClick={handleSave}
            title={isSaved ? 'Unsave' : 'Save'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={isSaved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <button
            className="strudel-link-btn"
            onClick={handleStrudelLink}
            title="View code on Strudel.cc"
          >
            <span className="hash-icon">#</span>
          </button>
        </div>
      </div>
    </div>
  )
}
