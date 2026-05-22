import { Link } from "react-router-dom";

export default function Section1Hero() {
  return (
    <section className="relative w-full aspect-[640/1029] md:aspect-[1920/1059] bg-cover bg-center bg-no-repeat overflow-hidden
    bg-[url('/images/mb-hero-bg.jpg')] md:bg-[url('/images/pc-hero-bg.jpg')]">
      {/* PC */}
      <div className="hidden md:flex w-full h-full flex-col items-center">
        <img src="/images/tag-18.png" alt="" className="absolute top-[4%] left-[3%] w-[9.58%] object-contain" />
        <img src="/images/logo-zagoo.png" alt="" className="absolute top-[4%] left-[13.5%] w-[4.53%] object-contain" />
        <img src="/images/logo-vltk.png" alt="" className="absolute top-[4%] left-[19%] w-[5.73%] object-contain" />
        <img src="/images/btn-trangchu.png" alt="" className="absolute top-[4%] right-[5%] w-[9.9%] object-contain img-btn" />
        <div className="absolute bottom-[10%] w-[67.55%] flex flex-col items-center">
          <img src="/images/hero-title.png" alt="" className="z-10 w-full object-contain" />
          <div className="-mt-[9%] z-0 w-[87.82%] aspect-[1139/156] bg-cover bg-center bg-no-repeat bg-[url('/images/hero-sub-text.png')]
          flex items-center justify-center">
            <span className="mt-[3%] text-[2vw] text-[#FCF8CC]">Thiên Hạ Đệ Nhất Bang - Tranh Hùng Xưng Vương</span>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex w-full h-full flex-col items-center">
        <div className="z-50 fixed w-full aspect-[640/140] bg-cover bg-center bg-no-repeat overflow-hidden
        bg-[url('/images/mb-navigation-bg.png')]">
          <img className="absolute bottom-[0] left-[4%] w-[18.75%]" src="/images/logo-zagoo.png" alt="" />
          <img className="absolute w-[25%] top-[13%] left-[24%] btn-image img-btn" src="/images/btn-choingay.png" alt="" />
          <img className="absolute w-[25%] top-[13%] right-[21%] btn-image img-btn" src="/images/btn-napthe.png" alt="" />
          <img className="absolute w-[10%] top-0 right-[2.5%] img-btn" src="/images/tag.png" alt="" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        </div>
        <img src="/images/tag-18.png" alt="" className="absolute top-[14%] left-[6%] object-contain w-[15%] h-auto" />
        <div className="absolute bottom-[23.5%] w-full flex flex-col items-center">
          <img src="/images/hero-title.png" alt="" className="z-10 w-full object-contain" />
          <div className="-mt-[9%] z-0 w-[87.82%] aspect-[1139/156] bg-cover bg-center bg-no-repeat bg-[url('/images/hero-sub-text.png')]
          flex items-center justify-center">
            <span className="mt-[3%] text-[2vw] text-[#FCF8CC]">Thiên Hạ Đệ Nhất Bang - Tranh Hùng Xưng Vương</span>
          </div>
        </div>
        <div className="absolute w-[95%] bottom-[7%] flex justify-center items-center gap-[2%] bg-cover bg-center bg-no-repeat aspect-[714/190] bg-[url('/images/app-info-bg.png')]">
          <Link to="/" className="w-[30%] bg-cover bg-center bg-no-repeat aspect-[194/165] bg-[url('/images/mb-btn-trangchu.png')] hover:cursor-pointer hover:brightness-110 img-btn"></Link>
          <div className="w-[30%] flex flex-col justify-center items-center gap-1">
              <Link to="/" className="w-full bg-cover bg-center bg-no-repeat aspect-[247/76] bg-[url('/images/btn-congdong.png')] hover:cursor-pointer hover:brightness-110 img-btn"></Link>
              <Link to="/" className="w-full bg-cover bg-center bg-no-repeat aspect-[247/76] bg-[url('/images/btn-zalo.png')] hover:cursor-pointer hover:brightness-110 img-btn"></Link>
          </div>
          <Link to="/" className="w-[30%] bg-cover bg-center bg-no-repeat aspect-[194/165] bg-[url('/images/mb-btn-choingay.png')] hover:cursor-pointer hover:brightness-110 img-btn"></Link>
        </div>
      </div>
    </section>
  )
}
