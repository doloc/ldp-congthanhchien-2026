import { useState } from 'react'

type ActiveTab = 'rules' | 'rewards'

interface LeaderboardRow {
  rank: number
  guild: string
  server: string
  score: number
}

const PLACEHOLDER_ROWS: LeaderboardRow[] = Array.from({ length: 10 }, (_, i) => ({
  rank: i + 1,
  guild: 'ABC',
  server: '125',
  score: 125,
}))

export default function Section3Leaderboard() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('rules')
  const [selectedServer, setSelectedServer] = useState('')

  return (
    <section id="s3-leaderboard" className="section--leaderboard relative pt-12 md:pt-20">

      {/* Character decorations — PC only, absolutely positioned */}
      <div
        className="char-decor char-decor--left hidden md:block absolute left-0 top-0 w-48 lg:w-64 xl:w-72 pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* TODO: <img src="/assets/images/section3/char-left.png" alt="" className="w-full" /> */}
        <div className="w-full aspect-[2/3] bg-game-red/15" />
      </div>
      <div
        className="char-decor char-decor--right hidden md:block absolute right-0 top-0 w-48 lg:w-64 xl:w-72 pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* TODO: <img src="/assets/images/section3/char-right.png" alt="" className="w-full" /> */}
        <div className="w-full aspect-[2/3] bg-game-red/15" />
      </div>

      {/* Main content — indented on PC to avoid character decors */}
      <div className="relative z-10 max-w-game mx-auto px-4 md:px-56 lg:px-64 xl:px-72">

        {/* Section title */}
        <div className="text-center mb-6 md:mb-10">
          {/* TODO: replace with image
              <img src="/assets/images/section3/title-vinh-danh.png" alt="Vinh Danh Hảo Kiệt" className="mx-auto max-w-xs md:max-w-sm" /> */}
          <h2 className="font-fz-games text-3xl md:text-5xl text-game-gold-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Vinh Danh Hảo Kiệt
          </h2>
          <div className="w-24 h-px bg-game-gold/40 mx-auto mt-3" />
        </div>

        {/* Tab navigation */}
        <div className="lb-tabs flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-6">
          <button
            className={`px-6 py-2 rounded text-sm font-bold transition-all ${
              activeTab === 'rules'
                ? 'bg-game-gold text-game-bg-dark shadow-lg'
                : 'border border-game-gold text-game-gold hover:bg-game-gold/10'
            }`}
            onClick={() => setActiveTab('rules')}
          >
            Thể lệ giải đấu
          </button>

          {/* Server select */}
          <div className="relative">
            <select
              className="appearance-none bg-game-bg-dark border border-game-gold/60 text-game-gold rounded px-4 pr-8 py-2 text-sm cursor-pointer focus:outline-none focus:border-game-gold"
              value={selectedServer}
              onChange={(e) => setSelectedServer(e.target.value)}
              aria-label="Chọn máy chủ"
            >
              <option value="">Chọn máy chủ</option>
              {/* TODO: populate server list dynamically */}
            </select>
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-game-gold pointer-events-none text-xs">
              ▼
            </span>
          </div>

          <button
            className={`px-6 py-2 rounded text-sm font-bold transition-all ${
              activeTab === 'rewards'
                ? 'bg-game-gold text-game-bg-dark shadow-lg'
                : 'border border-game-gold text-game-gold hover:bg-game-gold/10'
            }`}
            onClick={() => setActiveTab('rewards')}
          >
            Thưởng giải đấu
          </button>
        </div>

        {/* Leaderboard table */}
        <div className="lb-table-wrap rounded-lg overflow-hidden border border-game-gold/25 shadow-xl">
          <p className="text-center text-xs md:text-sm text-game-text/60 py-3 px-4 bg-game-bg-dark/50 border-b border-game-gold/15">
            Bảng Xếp Hạng được cập nhật vào 10:00 Thứ 4 &amp; Thứ 2 hàng tuần
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-game-bg-dark">
                  <th className="py-3 px-4 text-left text-game-gold font-semibold whitespace-nowrap">Hạng</th>
                  <th className="py-3 px-4 text-left text-game-gold font-semibold whitespace-nowrap">Bang Hội</th>
                  <th className="py-3 px-4 text-left text-game-gold font-semibold whitespace-nowrap">Máy Chủ</th>
                  <th className="py-3 px-4 text-left text-game-gold font-semibold whitespace-nowrap">Điểm Công Thành</th>
                </tr>
              </thead>
              <tbody>
                {PLACEHOLDER_ROWS.map((row) => (
                  <tr
                    key={row.rank}
                    className={`border-b border-game-gold/10 transition-colors hover:bg-game-gold/5 ${
                      row.rank <= 3
                        ? 'text-game-gold-light font-semibold'
                        : 'text-game-text'
                    } ${row.rank % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                  >
                    <td className="py-3 px-4">{row.rank}</td>
                    <td className="py-3 px-4">{row.guild}</td>
                    <td className="py-3 px-4">{row.server}</td>
                    <td className="py-3 px-4">{row.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Footer ── inside section 3 per requirement */}
      <footer className="site-footer mt-16 bg-game-bg-darker border-t border-game-gold/20">
        <div className="max-w-game mx-auto px-4 py-8 md:py-10 text-center">

          {/* Brand logos */}
          <div className="flex items-center justify-center gap-8 mb-6">
            {/* TODO: <img src="/assets/images/section3/logo-zagoo.png" alt="Zagoo Games" className="h-8 md:h-10" /> */}
            <div className="h-8 md:h-10 w-28 bg-game-red/50 rounded flex items-center justify-center text-xs text-game-gold font-bold">
              ZAGOO GAMES
            </div>
            {/* TODO: <img src="/assets/images/section3/logo-kingsoft.png" alt="Kingsoft" className="h-8 md:h-10" /> */}
            <div className="h-8 md:h-10 w-24 bg-game-red/50 rounded flex items-center justify-center text-xs text-game-gold font-bold">
              KINGSOFT
            </div>
          </div>

          {/* Legal text */}
          <div className="text-[11px] md:text-xs text-game-text/45 leading-relaxed space-y-1 max-w-2xl mx-auto">
            <p>Công ty TNHH Giải Trí ZIE.</p>
            <p>
              Địa chỉ trụ sở chính: Tầng 17, Tòa Nhà ROX Tower, số 54A Nguyễn Chí Thanh,
              Phường Láng Thượng, Quận Đống Đa, Thành phố Hà Nội, Việt Nam
            </p>
            <p>
              Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số:
              39/QĐ-PTTH&amp;TTĐT do Bộ Thông tin và Truyền thông cấp ngày 18/02/2025
            </p>
            <p>
              Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng: số 43/GP-BTTTT
              do Bộ Thông tin và Truyền thông cấp ngày 21/01/2025
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}
