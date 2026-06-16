import { createContext, useContext, useRef, useState, useEffect, useCallback } from 'react'

const StrudelContext = createContext(null)

function decodeStrudelCode(url) {
  const hash = url.split('#')[1]
  if (!hash) return ''
  return atob(decodeURIComponent(hash))
}

export function StrudelProvider({ children }) {
  const editorRef = useRef(null)
  const [engineReady, setEngineReady] = useState(false)
  const [currentSong, setCurrentSong] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const checkReady = setInterval(() => {
      if (editorRef.current?.editor?.repl) {
        clearInterval(checkReady)
        setEngineReady(true)
      }
    }, 300)
    return () => clearInterval(checkReady)
  }, [])

  const playSong = useCallback((song) => {
    if (!engineReady || !editorRef.current?.editor?.repl) return
    // Set state FIRST so the UI always updates regardless of engine errors
    setCurrentSong(song)
    setIsPlaying(true)
    try {
      const repl = editorRef.current.editor.repl
      const code = decodeStrudelCode(song.strudelUrl)
      repl.evaluate(code)
    } catch (err) {
      console.error('Strudel evaluate failed:', err)
    }
  }, [engineReady])

  const stopPlayback = useCallback(() => {
    setIsPlaying(false)
    if (!engineReady || !editorRef.current?.editor?.repl) return
    try {
      editorRef.current.editor.repl.stop()
    } catch (err) {
      console.error('Strudel stop failed:', err)
    }
  }, [engineReady])

  const loadSong = useCallback((song) => {
    setCurrentSong(song)
    setIsPlaying(false)
    if (!engineReady || !editorRef.current?.editor?.repl) return
    try {
      const code = decodeStrudelCode(song.strudelUrl)
      editorRef.current.editor.repl.setCode(code)
    } catch (err) {
      console.error('Strudel setCode failed:', err)
    }
  }, [engineReady])

  return (
    <StrudelContext.Provider value={{ currentSong, isPlaying, engineReady, playSong, stopPlayback, loadSong }}>
      <div style={{
        position: 'absolute',
        width: 1,
        height: 1,
        overflow: 'hidden',
        opacity: 0,
        pointerEvents: 'none'
      }}>
        <strudel-editor ref={editorRef}></strudel-editor>
      </div>
      {children}
    </StrudelContext.Provider>
  )
}

export function useStrudel() {
  return useContext(StrudelContext)
}
