import { useState } from 'react'

interface Section2VideoProps {
  videoEmbedUrl?: string
}

export default function Section2Video({ videoEmbedUrl = '' }: Section2VideoProps) {
  const [playing, setPlaying] = useState(false)

  function handlePlay() {
    if (!videoEmbedUrl) return
    setPlaying(true)
  }

  /* On mobile the scroll/cuộn giấy wraps the video vertically (top + bottom roll).
     On PC it flanks the video horizontally (left + right roll). */

  return (
    // <section id="s2-video" className="section--video py-12 md:py-20">
    //   <div className="max-w-game mx-auto px-4">

    //     {/* Section title */}
    //     <div className="text-center mb-8 md:mb-12">
    //       {/* TODO: replace with image
    //           <img src="/assets/images/section2/title-dai-chien.png" alt="Đại Chiến Công Thành" className="mx-auto max-w-xs md:max-w-sm" /> */}
    //       <h2 className="font-fz-games text-3xl md:text-5xl text-game-gold-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
    //         Đại Chiến Công Thành
    //       </h2>
    //       <div className="w-24 h-px bg-game-gold/40 mx-auto mt-3" />
    //     </div>

    //     {/* ── Scroll wrapper ──
    //         PC  : horizontal — [scroll-left] [video] [scroll-right]
    //         Mobile : no side decors, video goes full width                */}
    //     <div className="video-scroll-wrapper flex items-stretch justify-center gap-2 md:gap-3">

    //       {/* Left scroll decoration — PC only */}
    //       <div
    //         className="scroll-decor scroll-decor--left hidden md:flex items-stretch w-20 lg:w-28 xl:w-36 shrink-0"
    //         aria-hidden="true"
    //       >
    //         {/* TODO: replace with actual scroll image
    //             <img src="/assets/images/section2/scroll-left.png" alt="" className="w-full h-full object-fill" /> */}
    //         <div className="w-full bg-game-red/30 rounded border border-game-gold/20" />
    //       </div>

    //       {/* Video frame */}
    //       <div className="video-frame flex-1 max-w-[860px]">
    //         {/* Mobile top scroll roll */}
    //         <div
    //           className="md:hidden h-6 bg-game-red/40 rounded-t border border-b-0 border-game-gold/20"
    //           aria-hidden="true"
    //         >
    //           {/* TODO: <img src="/assets/images/section2/scroll-top-mb.png" alt="" className="w-full" /> */}
    //         </div>

    //         {/* Video container */}
    //         <div className="relative aspect-video bg-black overflow-hidden shadow-2xl border border-game-gold/20 md:rounded">
    //           {/* Thumbnail + play button overlay */}
    //           {!playing && (
    //             <div className="video-thumbnail absolute inset-0 z-10">
    //               {/* TODO: replace with actual thumbnail
    //                   <img src="/assets/images/section2/video-thumb.jpg" alt="Xem trailer Công Thành Chiến" className="w-full h-full object-cover" /> */}
    //               <div className="w-full h-full bg-gradient-to-br from-game-bg-dark to-[#1a0806]" />

    //               <button
    //                 className="absolute inset-0 flex items-center justify-center group"
    //                 onClick={handlePlay}
    //                 aria-label="Phát video"
    //                 disabled={!videoEmbedUrl}
    //               >
    //                 <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-game-gold flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl group-disabled:opacity-50">
    //                   <svg
    //                     width="28"
    //                     height="28"
    //                     viewBox="0 0 24 24"
    //                     fill="#3d1208"
    //                     aria-hidden="true"
    //                   >
    //                     <path d="M8 5v14l11-7z" />
    //                   </svg>
    //                 </div>
    //               </button>
    //             </div>
    //           )}

    //           {/* Embed iframe — rendered only once playing to avoid preload */}
    //           {playing && (
    //             <iframe
    //               className="absolute inset-0 w-full h-full"
    //               src={`${videoEmbedUrl}?autoplay=1&rel=0`}
    //               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //               allowFullScreen
    //               title="Đại Chiến Công Thành – Trailer"
    //             />
    //           )}
    //         </div>

    //         {/* Mobile bottom scroll roll */}
    //         <div
    //           className="md:hidden h-6 bg-game-red/40 rounded-b border border-t-0 border-game-gold/20"
    //           aria-hidden="true"
    //         >
    //           {/* TODO: <img src="/assets/images/section2/scroll-bottom-mb.png" alt="" className="w-full" /> */}
    //         </div>
    //       </div>

    //       {/* Right scroll decoration — PC only */}
    //       <div
    //         className="scroll-decor scroll-decor--right hidden md:flex items-stretch w-20 lg:w-28 xl:w-36 shrink-0"
    //         aria-hidden="true"
    //       >
    //         {/* TODO: replace with actual scroll image
    //             <img src="/assets/images/section2/scroll-right.png" alt="" className="w-full h-full object-fill" /> */}
    //         <div className="w-full bg-game-red/30 rounded border border-game-gold/20" />
    //       </div>
    //     </div>

    //   </div>
    // </section>
    <section className="relative w-full aspect-[768/2296] md:aspect-[1920/940] bg-cover bg-center bg-no-repeat overflow-hidden
    bg-[url('/images/mb-bg.jpg')] md:bg-[url('/images/pc-video-bg.jpg')] flex flex-col items-center">
      <img src="/images/video-title.png" alt="" className="mt-[1%] w-[50.83%] object-contain" />
      <div className="relative -mt-[2%] w-[71.51%] aspect-[1373/747] bg-cover bg-center bg-no-repeat bg-[url('/images/video-frame.png')]">
        <div className="absolute top-[13.2%] left-[14.4%] w-[76.475%] aspect-[1050/548] flex items-center justify-center">
          <img src="/images/btn-play-video.png" alt="" className="mt-[1%] w-[11%] object-contain" />
        </div>
      </div>
    </section>
    
  )
}
