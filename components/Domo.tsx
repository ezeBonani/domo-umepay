import Image from 'next/image'
import React from 'react'

function Domo() {
  return (
    <section className='domo md:mt-20 py-4' id="domo_umepay">
      <div className="flex flex-col w-full items-center justify-center font-serif">
        <div className='flex justify-center items-center flex-col w-3/4'>
          <h2 className='text-4xl md:text-6xl mt-6 tracking-wider'>Domo Umepay</h2>
          <h3 className='mb-6'>- Glamping de Montaña -</h3>
          <p className='text-base md:text-lg text-center py-4 md:w-3/4' >Disfrutá de un entorno natural con tecnología y confort en un domo geodésico ubicado en el barrio &quot;La Aldea&quot; dentro de la Ecoaldea Umepay, a 30 minutos de Villa Yacanto de Calamuchita</p>
        </div>
      </div>
    </section>
  )
}

export default Domo