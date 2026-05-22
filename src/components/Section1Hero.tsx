export default function Section1Hero() {
  return (
    <section className="relative w-full aspect-[768/2296] md:aspect-[1920/1059] bg-cover bg-center bg-no-repeat overflow-hidden
    bg-[url('/images/mb-bg.jpg')] md:bg-[url('/images/pc-hero-bg.jpg')] flex flex-col items-center">
      <img src="/images/tag-18.png" alt="" className="absolute top-[4%] left-[3%] w-[9.58%] object-contain" />
      <img src="/images/logo-zagoo.png" alt="" className="absolute top-[4%] left-[13.5%] w-[4.53%] object-contain" />
      <img src="/images/logo-vltk.png" alt="" className="absolute top-[4%] left-[19%] w-[5.73%] object-contain" />
      <img src="/images/btn-trangchu.png" alt="" className="absolute top-[4%] right-[5%] w-[9.9%] object-contain" />
      <div className="absolute bottom-[10%] w-[67.55%] flex flex-col items-center">
        <img src="/images/hero-title.png" alt="" className="z-10 w-full object-contain" />
        <div className="-mt-[9%] z-0 w-[87.82%] aspect-[1139/156] bg-cover bg-center bg-no-repeat bg-[url('/images/hero-sub-text.png')]
        flex items-center justify-center">
          <span className="mt-[3%] text-[2vw]">Thiên Hạ Đệ Nhất Bang - Tranh Hùng Xưng Vương</span>
        </div>
      </div>
    </section>
  )
}
