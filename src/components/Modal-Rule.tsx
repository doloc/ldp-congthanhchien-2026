import Modal from "./Modal";

export default function ModalRule({ setShowPopup }: { setShowPopup: (show: boolean) => void }) {
  return (
    <Modal onClose={() => setShowPopup(false)}>
        <div className="relative w-full md:w-[36.30%] aspect-[640/549] bg-cover bg-center bg-no-repeat bg-[url('/images/modal-bg.png')] flex flex-col items-center" onClick={e => e.stopPropagation()}>
          <img src="/images/btn-close.png" alt="" className="absolute top-[3%] right-[8%] w-[10.625%] object-contain img-btn-close img-btn" onClick={() => setShowPopup(false)} />
          <img src="/images/modal-rule-title.png" alt="" className="mt-[8%] -ml-[4%] w-[34.06%]" />
          <div className="mt-[5%] h-[65%] overflow-y-scroll no-scrollbar pl-[12%] pr-[14%] text-white leading-relaxed space-y-[1%] text-[3.4vw] md:text-[1.1vw] font-semibold">
            <p>📌 PHẠM VI SỰ KIỆN</p>
            <p>• Áp dụng cho toàn bộ Server ngoại trừ các cụm Z121, Z122,... trở về sau.</p>
            <p>• BXH được chia theo từng cụm Liên Server.</p>
            <br />
            <p>📅 THỜI GIAN DIỄN RA SỰ KIỆN</p>
            <p>🔥 Tuần 1: Đua TOP BXH Công Thành Chiến Liên Server</p>
            <p>⏰ Thời gian: 26/05 - 04/06/2026</p>
            <p>🔥 Tuần 2: Bình chọn Bang Hội được yêu thích nhất - Đợt 1</p>
            <p>⏰ Thời gian: 05/06 - 12/06/2026</p>
            <p>🔥 Tuần 3: Bình chọn Bang Hội được yêu thích nhất - Đợt 2</p>
            <p>⏰ Thời gian: 13/06 - 20/06/2026</p>
            <br />
            <p>📌 ĐIỀU KIỆN THAM GIA</p>
            <p>• Đăng nhập Landing Page bằng tài khoản Zalo/GG/FB.</p>
            <p>• Tất cả người chơi đủ điều kiện tham gia Công Thành Chiến Liên Server đều có thể tham gia sự kiện.</p>
            <br />
            <p>⚔️ THỂ LỆ ĐUA TOP CÔNG THÀNH CHIẾN LIÊN SERVER</p>
            <p>• Mỗi 10h sáng Thứ 2 và Thứ 4 hằng tuần, BTC sẽ cập nhật BXH Công Thành Chiến Liên Server dựa trên điểm số Bang Hội đạt được tại từng cụm Liên Server.</p>
            <p>• BXH sẽ được chia theo từng cụm Server để chọn ra TOP 3 Bang Hội có điểm số cao nhất bước vào vòng Bình Chọn ĐỆ NHẤT BANG.</p>
            <br />
            <p>📌 Lưu ý:</p>
            <p>• Sau khi kết thúc BXH Đua TOP 2 ngày, BTC sẽ chốt danh sách thành viên tham gia Công Thành Chiến Liên Server.</p>
            <p>• Chỉ thành viên có tham gia hoạt động cùng Bang trong thời gian sự kiện mới đủ điều kiện nhận thưởng.</p>
            <p>• Thành viên cần ở trong Bang đạt TOP tối thiểu 3 ngày.</p>
            <p>• Nếu người chơi tự ý rời Bang hoặc Bang thêm thành viên không tham gia hoạt động trong thời gian diễn ra sự kiện, kết quả Bang Hội sẽ bị hủy.</p>
            <p>• Thời gian phát thưởng dự kiến từ 3 - 14 ngày.</p>
            <br />
            <p>🔥 THỂ LỆ BÌNH CHỌN ĐỆ NHẤT BANG</p>
            <p>📍 Vòng 1 (05/06 - 12/06/2026)</p>
            <p>• TOP 3 Bang Hội đạt điểm cao nhất tại sự kiện Công Thành Chiến Liên Server sẽ được chia ngẫu nhiên vào 7 bảng đấu.</p>
            <p>• Mỗi bảng gồm 9 Bang Hội.</p>
            <p>• Sau khi kết thúc Vòng 1, TOP 3 Bang Hội có lượt bình chọn cao nhất mỗi bảng sẽ bước tiếp vào Vòng 2.</p>
            <p>📍 Vòng 2 (13/06 - 20/06/2026)</p>
            <p>• 21 Bang Hội vượt qua Vòng 1 sẽ tiếp tục được chia ngẫu nhiên vào 3 bảng đấu.</p>
            <p>• Kết thúc Vòng 2, TOP 1 Bang Hội có lượt bình chọn cao nhất mỗi bảng sẽ trở thành ĐỆ NHẤT BANG HỘI.</p>
            <br />
            <p>🎫 CÁCH NHẬN LƯỢT BÌNH CHỌN</p>
            <p>• Đăng nhập Zalo mỗi ngày: +1 lượt bình chọn/ngày.</p>
            <p>• Chia sẻ Landing Page: +1 lượt bình chọn/ngày.</p>
            <p>• Nạp lần đầu bất kỳ mệnh giá: +5 lượt Vote.</p>
            <p>💎 Ngoài ra, người chơi có thể nhận thêm lượt Vote theo các mốc nạp tích lũy sự kiện.</p>
            <br />
            <p>🏆 PHẦN THƯỞNG BÌNH CHỌN</p>
            <p>Người chơi tham gia bình chọn sẽ có cơ hội nhận các vật phẩm ingame giá trị như:</p>
            <p>▫️ Tín Vật Môn Phái</p>
            <p>▫️ Hòa Thị Bích</p>
            <p>▫️ Rương Tuyệt Học Đỏ</p>
            <p>▫️ Nhiếp Hồn Giản</p>
            <p>▫️ Hình Thiên Phủ</p>
            <p>▫️ Mãnh Doãn Tiêu Vũ</p>
          </div>
        </div>
      </Modal>
  )

}