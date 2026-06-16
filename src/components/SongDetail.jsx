import { useStrudel } from '../context/StrudelContext'
import './SongDetail.css'

export default function SongDetail({ song, isSaved, onToggleSave, onBack }) {
  const { currentSong, isPlaying, playSong, stopPlayback } = useStrudel()
  const isCurrentSong = currentSong?.id === song.id
  const songIsPlaying = isCurrentSong && isPlaying

  const handleToggle = () => {
    if (songIsPlaying) {
      stopPlayback()
    } else {
      playSong(song)
    }
  }

  const tags = song.tags ? song.tags.split(',').map(t => t.trim()) : []

  return (
    <div className="song-detail">
      <button className="back-btn" onClick={onBack}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        <span>Back</span>
      </button>

      <div className="detail-layout">
        <div className="detail-cover">
          <img src={song.coverImg} alt={song.title} />
        </div>

        <div className="detail-info">
          <div className="detail-label">SONG</div>
          <h1 className="detail-title">{song.title}</h1>
          <div className="detail-author">{song.author}</div>

          <div className="detail-meta">
            {song.genre && (
              <div className="meta-item">
                <span className="meta-label">Genre</span>
                <span className="meta-value">{song.genre}</span>
              </div>
            )}
            {song.published && (
              <div className="meta-item">
                <span className="meta-label">Published</span>
                <span className="meta-value">{song.published}</span>
              </div>
            )}
          </div>

          {song.description && (
            <p className="detail-description">{song.description}</p>
          )}

          {tags.length > 0 && (
            <div className="detail-tags">
              {tags.map(tag => (
                <span key={tag} className="detail-tag">{tag}</span>
              ))}
            </div>
          )}

          <div className="detail-actions">
            <button
              className={`detail-play-btn ${songIsPlaying ? 'playing' : ''}`}
              onClick={handleToggle}
            >
              {songIsPlaying ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 6h12v12H6z"/>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
              <span>{songIsPlaying ? 'Stop' : 'Play'}</span>
            </button>

            <button
              className={`detail-save-btn ${isSaved ? 'saved' : ''}`}
              onClick={() => onToggleSave(song.id)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill={isSaved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            <a
              className="detail-strudel-link"
              href={song.strudelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hash-icon">#</span>
              <span>View on Strudel</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
