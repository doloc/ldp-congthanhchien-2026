import { useState } from 'react'
import ModalRule from './Modal-Rule'
import ModalRewards from './Modal-Rewards'

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
  const [selectedServer, setSelectedServer] = useState('')
  const [showRuleModal, setShowRuleModal] = useState(false)
  const [showRewardsModal, setShowRewardsModal] = useState(false)

  return (
    <>
      <section className="relative w-full aspect-[640/1105] md:aspect-[1920/1105] bg-cover bg-center bg-no-repeat overflow-hidden
      bg-[url('/images/mb-leaderboard-bg.jpg')] md:bg-[url('/images/pc-leaderboard-bg.jpg')] flex flex-col items-center">
      <img src="/images/leaderboard-title.png" alt="" className="mt-[5%] md:mt-[1%] w-full md:w-[50.83%] object-contain" />

      {/* PC - Tab navigation */}
      <div className="hidden md:flex w-[32.55%] aspect-[625/65] items-center justify-between">
        <button className="pt-[2%] pr-[1%] text-[#712510] text-[1.2vw] w-[32%] aspect-[200/65] bg-cover bg-center bg-no-repeat 
        bg-[url('/images/btn-bg.png')] flex items-center justify-center hover:brightness-110" onClick={() => setShowRuleModal(true)}>Thể lệ giải đấu</button>
        <div className="mt-[1.5%] mr-[3%] relative w-[32.16%] aspect-[201/46] bg-cover bg-center bg-no-repeat overflow-hidden
        bg-[url('/images/btn-server-bg.png')]">
          <select
            className='w-full h-full text-[#B53722] text-[1.2vw] cursor-pointer appearance-none px-4 pr-8 bg-transparent border-none'
            value={selectedServer}
            onChange={(e) => setSelectedServer(e.target.value)}
            aria-label="Chọn máy chủ"
          >
            <option value="">Chọn máy chủ</option>
          </select>
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#B53722] text-[1/2vw]">
            ▼
          </span>
        </div>
        <button className="pt-[2%] pr-[1%] text-[#712510] text-[1.2vw] w-[32%] aspect-[201/65] bg-cover bg-center bg-no-repeat 
        bg-[url('/images/btn-bg.png')] flex items-center justify-center hover:brightness-110" onClick={() => setShowRewardsModal(true)}>Thưởng giải đấu</button>
      </div>

      {/* Mobile - Tab navigation */}
      <div className="md:hidden w-[63.28%] flex items-center justify-between">
        <button className="pt-[2%] pr-[3%] text-[#712510] text-[3.6vw] w-[49.38%] aspect-[200/65] bg-cover bg-center bg-no-repeat 
          bg-[url('/images/btn-bg.png')] flex items-center justify-center hover:brightness-110" onClick={() => setShowRuleModal(true)}>Thể lệ giải đấu</button>
        <button className="pt-[2%] pr-[3%] text-[#712510] text-[3.6vw] w-[49.63%] aspect-[201/65] bg-cover bg-center bg-no-repeat 
          bg-[url('/images/btn-bg.png')] flex items-center justify-center hover:brightness-110" onClick={() => setShowRewardsModal(true)}>Thưởng giải đấu</button>
      </div>
      <div className="md:hidden mt-[1.5%] relative w-[31.41%] aspect-[201/46] bg-cover bg-center bg-no-repeat overflow-hidden
      bg-[url('/images/btn-server-bg.png')]">
        <select
          className='w-full h-full text-[#B53722] text-[3.8vw] cursor-pointer appearance-none px-4 pr-12 bg-transparent border-none'
          value={selectedServer}
          onChange={(e) => setSelectedServer(e.target.value)}
          aria-label="Chọn máy chủ"
        >
          <option value="">Chọn máy chủ</option>
        </select>
        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#B53722] text-[1/2vw]">
          ▼
        </span>
      </div>

      {/* Leaderboard table */}
      <div className="relative w-full md:w-[53.18%] aspect-[640/698] md:aspect-[1021/634] bg-cover bg-center bg-no-repeat overflow-hidden
      bg-[url('/images/mb-leaderboard-bg.png')] md:bg-[url('/images/pc-leaderboard-shape.png')] flex flex-col items-center justify-center">
        
        {/* Table header */}
        <div className="-mt-[15%] md:mt-0 w-[78.9%] h-[60.32%] md:h-[80.32%] bg-white rounded-xl md:rounded-md overflow-y-scroll no-scrollbar">
          <p className="mt-[2%] md:mt-0 text-center text-[#A43321] text-[3.6vw] md:text-[1.2vw]">
            Bảng Xếp Hạng được cập nhật vào 10:00 Thứ 4 &amp; Thứ 2 hàng tuần
          </p>
          
          <table className="mt-[2%] w-full border-collapse text-[3.4vw] md:text-[1.2vw] text-[#CC620E]">
            <thead>
              <tr className="bg-[#FDF6EF]">
                <th className="text-center w-[10%]">
                  Hạng
                </th>
                <th className="text-center w-[20%]">
                  Bảng Hội
                </th>
                <th className="text-center w-[15%]">
                  Máy Chủ
                </th>
                <th className="text-center w-[15%]">
                  Điểm Công Thành
                </th>
              </tr>
            </thead>
            
            <tbody>
              {PLACEHOLDER_ROWS.map((row, index) => (
                <tr
                  key={row.rank}
                  className={index % 2 === 0 ? '' : 'bg-[#FDF6EF]'}
                >
                  <td className={index < 3 ? 'text-center text-[#A31F1F]' : 'text-center text-[#070A09]'}>
                    {row.rank}
                  </td>
                  <td className={index < 3 ? 'text-center text-[#A31F1F]' : 'text-center text-[#070A09]'}>
                    {row.guild}
                  </td>
                  <td className={index < 3 ? 'text-center text-[#A31F1F]' : 'text-center text-[#070A09]'}>
                    {row.server}
                  </td>
                  <td className={index < 3 ? 'text-center text-[#A31F1F]' : 'text-center text-[#070A09]'}>
                    {row.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Footer ── inside section 3 per requirement */}
      <footer className="w-full aspect-[640/172] md:aspect-[1920/208] bg-cover bg-center bg-no-repeat overflow-hidden
      bg-[url('/images/mb-footer-bg.jpg')] md:bg-[url('/images/pc-footer-bg.jpg')] flex flex-col items-center text-[#F3DDB9] font-myriad-pro">
        <div className="mt-[0.5%] w-[30.625%] md:w-[17.71%] flex items-center justify-center">
          <img src="/images/icon-zagoo.png" alt="" className="w-[36.18%] object-contain" />
          <img src="/images/icon-kingsoft.png" alt="" className="w-[52.94%] object-contain" />
        </div>
        {/* PC */}
        <div className="mt-[0.5%] hidden md:flex font-medium flex-col items-center text-center text-[1vw] leading-relaxed">
          <p>Công ty TNHH Giải Trí ZIE.</p>
          <p>Địa chỉ trụ sở chính: Tầng 17, Tòa nhà ROX Tower, số 54A Nguyễn Chí Thanh, Phường Láng, Thành phố Hà Nội</p>
          <p>Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số: 39/QĐ-PTTH&TTĐT do Bộ Thông tin và Truyền thông cấp ngày 18/02/2025</p>
          <p>Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng: số 43/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 21/01/2025</p>
        </div>
        {/* Mobile */}
        <div className="md:hidden font-medium flex flex-col items-center text-center text-[1.8vw] text-semibold leading-relaxed px-[5%]">
          <p>Công ty TNHH Giải Trí ZIE.</p>
          <p>Địa chỉ trụ sở chính: Tầng 17, Tòa nhà ROX Tower, số 54A Nguyễn Chí Thanh, Phường Láng Thượng</p>
          <p>Qậnn Đống Đa, Thành phố Hà Nội, Việt Nam</p>
          <p>Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số: 39/QĐ-PTTH&TTĐT </p>
          <p>do Bộ Thông tin và Truyền thông cấp ngày 18/02/2025</p>
          <p>Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng: số 43/GP-BTTTT</p>
          <p>do Bộ Thông tin và Truyền thông cấp ngày 21/01/2025</p>
        </div>
      </footer>
    </section>
    {showRuleModal && <ModalRule setShowPopup={setShowRuleModal} />}
    {showRewardsModal && <ModalRewards setShowPopup={setShowRewardsModal} />}
    </>
  )
}
