import Image from "next/image"

import { reviewsImg } from "@/constants"

function Domo() {
  return (
    <section className='domo mt-2 md:mt-24 py-4 md:mb-12' id="domo_umepay">
      <div className="flex flex-col w-full items-center justify-center font-serif">
        <div className='flex justify-center items-center flex-col w-3/4'>
          <h2 className='text-4xl md:text-6xl mt-6 tracking-wider'>Domo Umepay</h2>
          <h3 className='mb-6'>- Glamping de Montaña -</h3>
          <p className='text-base md:text-lg text-center py-4 md:w-3/4' >Disfrutá de un entorno natural con tecnología y confort en un domo geodésico ubicado en el barrio &quot;La Aldea&quot; dentro de la Ecoaldea Umepay, a 30 minutos de Villa Yacanto de Calamuchita</p>
          <div className="mt-6 md:mt-10 text-center flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20 text-xs md:text-sm text-wrap">
            <Image src={reviewsImg[0].src} width={170} height={100} alt="superhost"/>
            <Image src={reviewsImg[1].src} width={170} height={100} alt="google5stars"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Domo