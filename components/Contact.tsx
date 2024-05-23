import Image from 'next/image'
import {airbnbLink, instagram} from "@/constants"


function Contact() {
  return (
    <section className='contact py-4' id="contact">
      <div className='wrapper w-full font-serif flex flex-col justify-center items-center'>
        <div className="social flex flex-col border-amber-200 border-4  p-3 rounded-md gap-8 md:items-center md:flex-row md:justify-center text-sm text-center">
          <div className="item flex flex-col items-center justify-center gap-2 w-[150px] ">
            <a href='/' className='hover:scale-[1.1] cursor-pointer transition-all text-sm gap-2' target='blank' rel="noreferrer nofollow"><Image src="/whatsapp.png" alt="whatsapp" width={35} height={35} /></a>
            <span>+54 11 123456789</span>
          </div>
          <div className="item flex flex-col items-center justify-center gap-2 w-[150px]">
            <a href={instagram} className=' hover:scale-[1.1] cursor-pointer transition-all text-sm gap-2' target='blank' rel="noreferrer nofollow"><Image src="/instagram.png" alt="instagram" width={35} height={35} /></a>
            <span>@domoumepay</span>
          </div><div className="item flex flex-col items-center justify-center gap-2 w-[150px]">
            <a href={airbnbLink} className=' hover:scale-[1.1] cursor-pointer transition-all text-sm gap-2' target='blank' rel="noreferrer nofollow"><Image src="/airbnb.png" alt="airbnb" width={35} height={35} /></a>
            <span>Airbnb</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact