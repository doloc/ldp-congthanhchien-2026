import { useState, useRef, useEffect } from 'react'


export default function Section2Video() {
  const [playing, setPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  function handlePlay() {
    if (videoRef.current) {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  const videoSrc = isMobile ? '/videos/motion-916.mp4' : '/videos/motion-169.mp4'

  return (
    <section className="relative w-full aspect-[640/940] md:aspect-[1920/940] bg-cover bg-center bg-no-repeat overflow-hidden
    bg-[url('/images/mb-video-bg.jpg')] md:bg-[url('/images/pc-video-bg.jpg')] flex flex-col items-center">
      <img src="/images/video-title.png" alt="" className="mt-[7%] md:mt-[1%] w-full md:w-[50.83%] object-contain" />
      <div className="relative -mt-[5%] md:-mt-[2%] w-[94.22%] md:w-[71.51%] aspect-[603/791] md:aspect-[1373/747] bg-cover bg-center bg-no-repeat bg-[url('/images/mb-video-frame.png')] md:bg-[url('/images/pc-video-frame.png')]">
        <div className="absolute top-[15.2%] md:top-[13.2%] left-[12.2%] md:left-[14.4%] w-[76.12%] md:w-[76.475%] aspect-[459/595] md:aspect-[1050/548] flex items-center justify-center overflow-hidden rounded">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            controls
            onEnded={() => setPlaying(false)}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!playing && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
            >
              <img src="/images/btn-play-video.png" alt="Play video" className="w-[32.9%] md:w-[11%] object-contain" />
            </button>
          )}
        </div>
      </div>
    </section>
    
  )
}
