import Modal from "./Modal";

export default function ModalRewards({ setShowPopup }: { setShowPopup: (show: boolean) => void }) {
  return (
    <Modal onClose={() => setShowPopup(false)}>
        <div className="relative w-full md:w-[36.30%] aspect-[640/549] bg-cover bg-center bg-no-repeat bg-[url('/images/modal-bg.png')] flex flex-col items-center" onClick={e => e.stopPropagation()}>
          <img src="/images/btn-close.png" alt="" className="absolute top-[3%] right-[8%] w-[10.625%] object-contain img-btn-close img-btn" onClick={() => setShowPopup(false)} />
          <img src="/images/modal-rewards-title.png" alt="" className="mt-[8%] -ml-[4%] w-[36.25%]" />
          <div className="mt-[5%] h-[65%] overflow-y-scroll pl-[12%] pr-[14%] text-white leading-relaxed space-y-[1%] text-[3.4vw] md:text-[1.2vw] font-semibold">
            <p>Bên cạnh Thưởng cá nhân, Thưởng bang, TOP 3 Bang Hội đứng đầu Bảng Xếp Hạng Đua Top Công Thành Chiến mỗi cụm Liên Server sẽ nhận thưởng riêng hấp dẫn.</p>
            <p>Đối tượng nhận thưởng: Tất cả thành viên Bang Hội TOP 3 mỗi cụm liên Server.</p>
            <p>Phân thưởng:</p>
            <p>Bang Hội TOP 1:</p>
            <p>- Tín vật Môn Phái x1</p>
            <p>- Hoà Thị Bích x30</p>
            <p>- Khoáng Thạch Thần Bí x100</p>
            <p>Bang Hội TOP 2:</p>
            <p>- Tín vật Môn Phái x1</p>
            <p>- Hoà Thị Bích x20</p>
            <p>- Khoáng Thạch Thần Bí x50</p>
            <p>Bang Hội TOP 2:</p>
            <p>- Hoà Thị Bích x10</p>
            <p>- Khoáng Thạch Thần Bí x50</p>
            <p>Đặc biệt hơn hết, hoạt động Bình chọn Bang hội được yêu thích nhất sẽ diễn ra vào tháng 07/2026, chỉ những Bang Hội đạt TOP 3 các cụm liên server trong giải đấu Công Thành Chiến lần này, mới được ghi danh vào các Bảng bình chọn.</p>
            <p>Nên đừng bỏ lỡ giải đấu Công Thành Chiến đợ tnayf nha Huy Tỷ ơi !!!</p>
          </div>
        </div>
      </Modal>
  )

}