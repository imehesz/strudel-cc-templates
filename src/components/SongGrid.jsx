import SongCard from './SongCard'
import SongDetail from './SongDetail'
import './SongGrid.css'

export default function SongGrid({ songs, savedSongs, onToggleSave, selectedSong, onSelectSong, onBack }) {
  if (selectedSong) {
    return (
      <div className="song-grid">
        <SongDetail
          song={selectedSong}
          isSaved={savedSongs.includes(selectedSong.id)}
          onToggleSave={onToggleSave}
          onBack={onBack}
        />
      </div>
    )
  }

  if (songs.length === 0) {
    return (
      <div className="song-grid">
        <div className="empty-state">
          <div className="empty-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
          </div>
          <p className="empty-text">No songs found</p>
          <p className="empty-sub">Try a different tag or save some tracks</p>
        </div>
      </div>
    )
  }

  return (
    <div className="song-grid">
      <div className="grid">
        {songs.map(song => (
          <SongCard
            key={song.id}
            song={song}
            isSaved={savedSongs.includes(song.id)}
            onToggleSave={onToggleSave}
            onSelect={onSelectSong}
          />
        ))}
      </div>
    </div>
  )
}
