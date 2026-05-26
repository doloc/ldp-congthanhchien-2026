import Modal from "./Modal";

export default function ModalRewards({ setShowPopup }: { setShowPopup: (show: boolean) => void }) {
  return (
    <Modal onClose={() => setShowPopup(false)}>
        <div className="relative w-full md:w-[36.30%] aspect-[640/549] bg-cover bg-center bg-no-repeat bg-[url('/images/modal-bg.png')] flex flex-col items-center" onClick={e => e.stopPropagation()}>
          <img src="/images/btn-close.png" alt="" className="absolute top-[3%] right-[8%] w-[10.625%] object-contain img-btn-close img-btn" onClick={() => setShowPopup(false)} />
          <img src="/images/modal-rewards-title.png" alt="" className="mt-[8%] -ml-[4%] w-[36.25%]" />
          <div className="mt-[5%] h-[65%] overflow-y-scroll no-scrollbar pl-[12%] pr-[14%] text-white leading-relaxed space-y-[1%] text-[3.4vw] md:text-[1.1vw] font-semibold">
            <p>🔥 Chuỗi sự kiện CÔNG THÀNH CHIẾN LIÊN SERVER - ĐỆ NHẤT BANG chính thức khởi tranh tại Võ Lâm Truyền Kỳ H5 Zalo!</p>
            <p>Bên cạnh phần thưởng Đua TOP Công Thành Chiến Liên Server theo từng cụm Server, các Bang Hội đạt TOP còn tiếp tục bước vào vòng tranh tài "ĐỆ NHẤT BANG HỘI ĐƯỢC YÊU THÍCH NHẤT" với hàng loạt phần thưởng hiếm cực hấp dẫn.</p>
            <br />
            <p>🎖 Đối tượng nhận thưởng:</p>
            <p>Tất cả thành viên Bang Hội đạt TOP BXH Công Thành Chiến Liên Server theo từng cụm và có tham gia hoạt động trong thời gian sự kiện diễn ra.</p>
            <br />
            <p>🏆 PHẦN THƯỞNG ĐUA TOP CÔNG THÀNH CHIẾN LIÊN SERVER</p>
            <p>🥇 TOP 1:</p>
            <p>▫️ Khoáng Thạch Thần Bí x100</p>
            <p>▫️ Hòa Thị Bích x30</p>
            <p>▫️ Tín Vật Môn Phái x1</p>
            <p>🥈 TOP 2:</p>
            <p>▫️ Khoáng Thạch Thần Bí x80</p>
            <p>▫️ Hòa Thị Bích x20</p>
            <p>▫️ Tín Vật Môn Phái x1</p>
            <p>🥉 TOP 3:</p>
            <p>▫️ Khoáng Thạch Thần Bí x50</p>
            <p>▫️ Hòa Thị Bích x10</p>
            <br />
            <p>🔥 Đặc biệt, TOP 3 Bang Hội mỗi cụm Liên Server sẽ chính thức ghi danh vào vòng bình chọn "ĐỆ NHẤT BANG HỘI ĐƯỢC YÊU THÍCH NHẤT".</p>
            <p>📅 Thời gian bình chọn:</p>
            <p>• Đợt 1: 04/06 - 11/06/2026</p>
            <p>• Đợt 2: 12/06 - 19/06/2026</p>
            <br />
            <p>🎁 Người chơi tham gia bình chọn còn có cơ hội nhận:</p>
            <p>▫️ Tín Vật Môn Phái</p>
            <p>▫️ Hòa Thị Bích</p>
            <p>▫️ Rương Tuyệt Học Đỏ</p>
            <p>▫️ Nhiếp Hồn Giản</p>
            <p>▫️ Hình Thiên Phủ</p>
            <p>▫️ Mãnh Doãn Tiêu Vũ</p>
            <br />
            <p>👑 Top Bang Hội có lượt bình chọn cao nhất toàn giải sẽ nhận được hàng loạt phần thưởng hiếm và danh hiệu cao quý:</p>
            <p>▫️ Võ Lâm Chí Tôn</p>
            <p>▫️ Tứ Hải Dương Danh</p>
            <p>▫️ Uy Chấn Cửu Châu</p>
            <p>▫️ Chấn Thiên Chùy</p>
            <p>▫️ Phệ Tâm Thần Kiếm</p>
            <p>▫️ KNB Khóa cùng nhiều vật phẩm giá trị khác.</p>
            <br />
            <p>📌 Lưu ý quan trọng:</p>
            <p>• Chỉ thành viên có tham gia Công Thành Chiến Liên Server cùng Bang trong thời gian sự kiện mới đủ điều kiện nhận thưởng.</p>
            <p>• Người chơi phải ở trong Bang đạt TOP tối thiểu 3 ngày để BTC tiến hành trao thưởng.</p>
            <p>• Nếu tự ý rời Bang hoặc Bang thêm thành viên không tham gia hoạt động nhằm nhận thưởng, kết quả Bang Hội có thể bị hủy.</p>
            <p>• Thời gian phát thưởng dự kiến từ 3 - 14 ngày sau khi kết thúc sự kiện.</p>
            <br />
            <p>⚔️ Huynh Tỷ hãy cùng Bang Hội chiến hết mình, chinh phục BXH Công Thành Liên Server và khẳng định vị thế ĐỆ NHẤT BANG ngay hôm nay!</p>
          </div>
        </div>
      </Modal>
  )

}