import React, { Suspense } from 'react'

function Hero() {
  return (
    <section className="flex flex-col gap-20 md:gap-28 xl:flex-row font-serif">
      <div className="heroVideo relative">
        <Suspense fallback={<p className='w-full text-slate-800'>Loading video....</p>}>
          <video autoPlay loop muted src="/drone.webm" className='w-full'></video>
        </Suspense>
        <h1 className='absolute top-1/2 left-4 sm:left-10 text-white text-lg sm:text-4xl lg:text-5xl w-3/4 border-l-2 pl-4 [text-shadow:_0_2px_0_rgb(0_0_0_/_30%)] animate-fade' >Conocé un lugar único de las sierras de Córdoba</h1>
      </div>
    </section>
  )
}

export default Hero