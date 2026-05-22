import Modal from "./Modal";

export default function ModalRule({ setShowPopup }: { setShowPopup: (show: boolean) => void }) {
  return (
    <Modal onClose={() => setShowPopup(false)}>
        <div className="relative w-full md:w-[36.30%] aspect-[640/549] bg-cover bg-center bg-no-repeat bg-[url('/images/modal-bg.png')] flex flex-col items-center" onClick={e => e.stopPropagation()}>
          <img src="/images/btn-close.png" alt="" className="absolute top-[3%] right-[8%] w-[10.625%] object-contain img-btn-close img-btn" onClick={() => setShowPopup(false)} />
          <img src="/images/modal-rule-title.png" alt="" className="mt-[8%] -ml-[4%] w-[34.06%]" />
          <div className="mt-[5%] h-[65%] overflow-y-scroll no-scrollbar pl-[12%] pr-[14%] text-white leading-relaxed space-y-[1%] text-[3.4vw] md:text-[1.2vw] font-semibold">
            <p>Phạm vi: Liên Server (Bảng Xếp Hạng được chia theo từng cụm Liên Server)</p>
            <p>Thời gian Đua Top Công Thành: Từ 16.06 - 30.06.2026</p>
            <p>Thời gian Công Thành: 20h25 tối Thứ ba và Chủ nhật hàng tuần (Thời gian Chiến Đấu: 15 phút)</p>
            <p>Đối tượng, điều kiện tham gia Công Thành Chiến:</p>
            <p>Người chơi trên Cấp 50 của các Bang đang chiếm các Thành Biện Kinh, Lâm An, Tương Dương có thể tham gia Công Thành Chiến Liên Server</p>
            <p>Quy tắc tham chiến:</p>
            <p>Số người tối đa tham gia bản đồ chiến trường là 500 người. Sau khi vào chiến trường, người chơi sẽ xuất hiện ở hậu doanh, khi chiến trường mở sẽ xuất hiện 4 Mật đạo, người chơi có thể chọn 1 MẬt đạo để vào chiến trường</p>
            <p>Trong chiến trường, trạng thái phe ta là Bang. Cùng Bang là đồng đội, khác Bang là đối địch</p>
            <p>Trong bản đồ chiến trường có 1 Long Trụ, Bang Hội đánh bại Long Trụ sẽ nhận được điểm do Long Trụ mang lại, sau khi đánh bại Long Trụ có thể tiếp tục đi vào cửa ải tiếp theo.</p>
            <br />
            <p>Quy tắc điểm công thành:</p>
            <p>Người chơi đánh bại Long Trụ nhận 10 điểm cá nhân, cộng 10 điêm Bang.</p>
            <p>Sau khi chiếm Long Trụ, mỗi 10 giây cộng thêm 50 diểm Bang.</p>
            <p>Người chơi tiêu diệt phe địch nhận 5 điểm cá nhân, cộng 5 điểm Bang.</p>
            <p>Người chơi kết liễu Bắc Lục Lâm Minh Chủ nhận 10 điểm cá nhân, cộng 10 điểm Bang.</p>
            <p>Người chơi tiêu diệt Sơn Tặc nhận 1 điểm cá nhân, cộng 1 điểm Bang.</p>
            <br />
            <p>Quy tắc tính giải:</p>
            <p>Điểm số của Bang Hội sau mỗi trận Công Thành Chiến Liên Server được tích luỹ và ghi nhận từ Ban Tổ Chức.</p>
            <p>Vào ngày cuối sự kiện, Bang Hội đạt được điểm cao nhất ở mỗi Cumj sẽ giành chiến thắng Đua Top và nhận được Phần Thưởng vinh danh.</p>
          </div>
        </div>
      </Modal>
  )

}