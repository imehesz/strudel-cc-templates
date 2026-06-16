import { useStrudel } from '../context/StrudelContext'
import './Sidebar.css'

const NavIcon = ({ d }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d={d} />
  </svg>
)

const ICONS = {
  home: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
  saved: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  search: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
}

function formatBuildTime(iso) {
  try {
    const d = new Date(iso)
    const pad = (n) => String(n).padStart(2, '0')
    return `${d.getFullYear()}.${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}`
  } catch {
    return 'dev'
  }
}

const BUILD_VERSION = `v0.1.${formatBuildTime(__BUILD_TIME__)}`

export default function Sidebar({
  tags, activeTag, onTagClick, savedCount, savedSongs,
  view, onViewChange, isOpen, onClose
}) {
  const { loadSong } = useStrudel()

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-logo">
        <span className="bold">Strudel</span><span className="light">ify</span>
      </div>

      <nav className="sidebar-nav">
        <button
          className={`nav-item ${view === 'home' && !activeTag ? 'active' : ''}`}
          onClick={() => { onViewChange('home'); onClose() }}
        >
          <NavIcon d={ICONS.home} />
          <span>Home</span>
        </button>
        <button
          className={`nav-item ${view === 'saved' ? 'active' : ''}`}
          onClick={() => { onViewChange('saved'); onClose() }}
        >
          <NavIcon d={ICONS.saved} />
          <span>Saved Songs</span>
          {savedCount > 0 && <span className="nav-badge">{savedCount}</span>}
        </button>
      </nav>

      <div className="sidebar-divider" />

      <div className="sidebar-section">
        <div className="sidebar-section-title">Tags</div>
        <div className="tag-list">
          {tags.map(tag => (
            <button
              key={tag}
              className={`tag-pill ${activeTag === tag ? 'active' : ''}`}
              onClick={() => { onTagClick(tag); onClose() }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {view === 'saved' && savedSongs.length > 0 && (
        <>
          <div className="sidebar-divider" />
          <div className="sidebar-section">
            <div className="sidebar-section-title">Your Saved Tracks</div>
            <div className="saved-song-list">
              {savedSongs.map(song => (
                <button
                  key={song.id}
                  className="saved-song-item"
                  onClick={() => { loadSong(song); onClose() }}
                >
                  <img className="saved-song-thumb" src={song.coverImg} alt="" />
                  <div className="saved-song-info">
                    <div className="saved-song-title">{song.title}</div>
                    <div className="saved-song-author">{song.author}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="sidebar-version">{BUILD_VERSION}</div>
    </aside>
  )
}
