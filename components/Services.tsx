import Image from 'next/image'

import { serviceImgWidth, serviceImgHeight } from '@/constants'

function Services() {
  return (
    <section className='services' id="services">
        <div className='flex flex-col justify-center items-center p-4 font-serif'>
          <div className='text-base md:text-lg px-8 md:px-14 text-center leading-loose text-slate-800 flex flex-col gap-8'>El Domo cuenta con:
            <div className='mt-2 md:mt-10 text-center grid lg:grid-cols-3 gap-8 md:gap-20 text-xs md:text-sm text-wrap'>
              <div className='item flex flex-col justify-center items-center gap-2'>
                <Image src="/bed.png" alt="bed" width={serviceImgWidth} height={serviceImgHeight} />
                <span>cama matrimonial</span>
              </div>
              <div className='item flex flex-col justify-center items-center gap-2'>
                <Image src="/wc.png" alt="wc" width={serviceImgWidth} height={serviceImgHeight} />
                <span>baño completo</span>
              </div>
              <div className='item flex flex-col justify-center items-center gap-2'>
                <Image src="/shower.png" alt="shower" width={serviceImgWidth} height={serviceImgHeight} />
                <span>ducha c/agua caliente 24hrs</span></div>
                <div className='item flex flex-col justify-center items-center gap-2'>
                <Image src="/kitchen.png" alt="kitchen" width={serviceImgWidth} height={serviceImgHeight} />
                <span>cocina equipada</span></div>
              <div className='item flex flex-col justify-center items-center gap-2'>
                <Image src="/frigobar.png" alt="frigobar" width={serviceImgWidth} height={serviceImgHeight} />
                <span>heladera con congelador</span>
              </div>
              <div className='item flex flex-col justify-center items-center gap-2'>
                <Image src="/wifi.png" alt="wifi" width={serviceImgWidth} height={serviceImgHeight} />
                <span>wifi</span></div>
              <div className='item flex flex-col justify-center items-center gap-2'>
                <Image src="/salamandra.png" alt="estufa" width={serviceImgWidth} height={serviceImgHeight} />
                <span>estufa a leña</span></div>
              <div className='item flex flex-col justify-center items-center gap-2'>
                <Image src="/rio.png" alt="rio" width={serviceImgWidth} height={serviceImgHeight} />
                <span>acceso al río</span>
              </div>
              <div className='item flex flex-col justify-center items-center gap-2'>
                <Image src="/desayuno.png" alt="wifi" width={serviceImgWidth} height={serviceImgHeight} />
                <span>desayuno incluido</span>
              </div>
            </div>
          <p className='text-xs text-slate-700 italic mt-6'>(*) Incluimos leña y productos biodegradables: shampoo, acondicionador y detergente</p>
        </div>
        </div>
      </section>
  )
}

export default Services