import { useStrudel } from '../context/StrudelContext'
import './PlayerBar.css'

export default function PlayerBar({ onSelectSong }) {
  const { currentSong, isPlaying, engineReady, playSong, stopPlayback } = useStrudel()

  if (!currentSong) return null

  const handleToggle = () => {
    if (isPlaying) {
      stopPlayback()
    } else {
      playSong(currentSong)
    }
  }

  const handleTitleClick = () => {
    onSelectSong(currentSong)
  }

  const tags = currentSong.tags ? currentSong.tags.split(',').map(t => t.trim()) : []

  return (
    <div className={`player-bar ${currentSong ? 'visible' : ''}`}>
      <div className="player-bar-info">
        <img className="player-bar-cover" src={currentSong.coverImg} alt="" />
        <div className="player-bar-text">
          <div className="player-bar-title" onClick={handleTitleClick}>{currentSong.title}</div>
          <div className="player-bar-author">{currentSong.author}</div>
        </div>
      </div>

      <div className="player-bar-controls">
        <button
          className={`play-toggle ${isPlaying ? 'playing' : ''}`}
          onClick={handleToggle}
          title={isPlaying ? 'Stop' : 'Play'}
          disabled={!engineReady}
        >
          {isPlaying ? (
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

      <div className="player-bar-right">
        {tags.length > 0 && (
          <div className="player-bar-tags">
            {tags.map(tag => (
              <span key={tag} className="player-bar-tag">{tag}</span>
            ))}
          </div>
        )}
        {!engineReady && <span className="engine-loading">Loading engine…</span>}
      </div>
    </div>
  )
}
