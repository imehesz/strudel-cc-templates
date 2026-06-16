import { useState, useEffect } from 'react'
import { StrudelProvider } from './context/StrudelContext'
import Sidebar from './components/Sidebar'
import SongGrid from './components/SongGrid'
import PlayerBar from './components/PlayerBar'
import './App.css'

function parseSongRow(row) {
  return {
    id: row[0],
    title: row[1],
    author: row[2],
    genre: row[3],
    tags: row[4],
    coverImg: row[6],
    description: row[7],
    published: row[8],
    strudelUrl: row[9],
  }
}

function App() {
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTag, setActiveTag] = useState(null)
  const [savedSongs, setSavedSongs] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('strudelify_saved') || '[]')
    } catch { return [] }
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [view, setView] = useState('home')
  const [selectedSong, setSelectedSong] = useState(null)

  useEffect(() => {
    fetch('data/songs.json')
      .then(res => res.json())
      .then(data => {
        const parsed = data.values.map(parseSongRow)
        setSongs(parsed)
      })
      .catch(err => {
        console.error('Failed to load songs:', err)
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    localStorage.setItem('strudelify_saved', JSON.stringify(savedSongs))
  }, [savedSongs])

  const toggleSave = (songId) => {
    setSavedSongs(prev =>
      prev.includes(songId) ? prev.filter(id => id !== songId) : [...prev, songId]
    )
  }

  const allTags = [...new Set(
    songs.flatMap(s => s.tags ? s.tags.split(',').map(t => t.trim()) : [])
  )].sort()

  const filteredSongs = view === 'saved'
    ? songs.filter(s => savedSongs.includes(s.id))
    : activeTag
      ? songs.filter(s => s.tags && s.tags.split(',').map(t => t.trim()).includes(activeTag))
      : songs

  const handleTagClick = (tag) => {
    setActiveTag(tag === activeTag ? null : tag)
    setView('home')
    setSelectedSong(null)
  }

  const handleViewChange = (v) => {
    setView(v)
    setActiveTag(null)
    setSelectedSong(null)
  }

  const handleSelectSong = (song) => {
    setSelectedSong(song)
    setSidebarOpen(false)
    window.location.hash = 'listen/' + song.id
  }

  const handleBack = () => {
    setSelectedSong(null)
    window.location.hash = ''
  }

  // On initial load, if the URL has a hash, jump to that song
  useEffect(() => {
    if (songs.length === 0) return
    const hash = window.location.hash.replace(/^#\/?/, '')
    if (hash.startsWith('listen/')) {
      const songId = hash.slice('listen/'.length)
      const song = songs.find(s => s.id === songId)
      if (song) {
        setSelectedSong(song)
        setSidebarOpen(false)
      }
    }
  }, [songs])

  // Listen for browser back/forward
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '')
      if (hash.startsWith('listen/')) {
        const songId = hash.slice('listen/'.length)
        const song = songs.find(s => s.id === songId)
        if (song) {
          setSelectedSong(song)
          setSidebarOpen(false)
        }
      } else {
        setSelectedSong(null)
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [songs])

  const headerTitle = selectedSong
    ? selectedSong.title
    : view === 'saved' ? 'Saved Songs' : activeTag ? `#${activeTag}` : 'All Songs'

  return (
    <StrudelProvider>
      <div className="app">
        {!loading && (
          <Sidebar
            tags={allTags}
            activeTag={activeTag}
            onTagClick={handleTagClick}
            savedCount={savedSongs.length}
            savedSongs={songs.filter(s => savedSongs.includes(s.id))}
            view={view}
            onViewChange={handleViewChange}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        )}
        <main className="main-content">
          <header className="content-header">
            <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </button>
            <h2>{headerTitle}</h2>
            {!loading && !selectedSong && <span className="song-count">{filteredSongs.length} tracks</span>}
          </header>
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Loading songs...</p>
            </div>
          ) : (
            <SongGrid
              songs={filteredSongs}
              savedSongs={savedSongs}
              onToggleSave={toggleSave}
              selectedSong={selectedSong}
              onSelectSong={handleSelectSong}
              onBack={handleBack}
            />
          )}
        </main>
        <PlayerBar onSelectSong={handleSelectSong} />
        {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}
      </div>
    </StrudelProvider>
  )
}

export default App
