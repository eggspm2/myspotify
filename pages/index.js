import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        <title>SanzMD | Spotify Music</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="https://camo.githubusercontent.com/84e61db3c78714dc2ef3b62401024754b77e9beacb5ffbe0fa3eb200cd944982/68747470733a2f2f74656c656772612e70682f66696c652f6538623433366335663839353838663035656432622e6a7067" />
      </Head>
      <div className="container">
        <header>
          <img src="https://nyimpen.vercel.app/component/logoku.png" alt="Profile Picture" className="profile-pic" />
          <h1 className="nama">balxzzy</h1>
          <p className="lokasi">
            <i className="fas fa-globe-asia"></i> Sumate5 Selatan, Sekayu
          </p>
          <p className="bio">”Destroyer.”</p>
        </header>

        <section className="spotify-section">
          <h2>The Playlist I Listen To</h2>
          <div className="iframe-container">
            {loading && (
              <div className="loading">
                <i className="fas fa-spinner"></i>
              </div>
            )}
            <iframe
              src="https://open.spotify.com/playlist/49CD1JayymAVNK64zrQYbE"
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
              style={{ display: loading ? 'none' : 'block' }}
            ></iframe>
          </div>
        </section>

        <div className="social-icons">
          <a href="github.com/eggspm2" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="wa.me/6283168629450" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/reyheresz" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://api.sanz.vercel" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </>
  )
}
