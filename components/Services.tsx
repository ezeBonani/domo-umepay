import Image from 'next/image'
import React from 'react'

function Services() {
  return (
    <section className='services' id="services">
        <div className='flex flex-col justify-center items-center p-4 font-serif'>
          <div className='text-base md:text-lg px-16 text-center leading-loose text-slate-800 flex flex-col gap-8'>El Domo cuenta con:
            <div className='text-center grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 text-xs md:text-sm text-wrap'>
              <div className='item flex flex-col justify-center items-center gap-2'>
                <Image src="/bed.png" alt="bed" width={40} height={40} />
                <span>cama matrimonial</span>
              </div>
              <div className='item flex flex-col justify-center items-center gap-2'>
                <Image src="/wc.png" alt="wc" width={40} height={40} />
                <span>baño completo</span>
              </div>
              <div className='item flex flex-col justify-center items-center gap-2'>
                <Image src="/shower.png" alt="shower" width={40} height={40} />
                <span>ducha c/agua caliente 24hrs</span></div>
                <div className='item flex flex-col justify-center items-center gap-2'>
                <Image src="/kitchen.png" alt="kitchen" width={40} height={40} />
                <span>cocina totalmente equipada</span></div>
              <div className='item flex flex-col justify-center items-center gap-2'>
                <Image src="/frigobar.png" alt="frigobar" width={40} height={40} />
                <span>frigobar con congelador</span>
              </div>
              <div className='item flex flex-col justify-center items-center gap-2'>
                <Image src="/wifi.png" alt="wifi" width={40} height={40} />
                <span>WiFi</span></div>
            </div>          
          <p className='text-xs'>(*) Incluimos leña y productos biodegradables: shampoo, acondicionador y detergente</p>
        </div>
        </div>
      </section>
  )
}

export default Services