export default function Location() {
  return (
    <section id="location" className="mb-6">
      <div className="wrapper w-full md:w-3/4 md:mx-auto flex flex-col justify-center items-center py-8 font-serif">
        <p className='wrapper text-sm text-center pb-6 px-6 md:w-3/4 text-slate-700'>
          El Domo Umepay se encuentra en la localidad de Villa Yacanto de Calamuchita, provincia de Córdoba (a 1 hora en auto desde Villa General Belgrano). Está a una altura de 1150 msnm.
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13504.211480909824!2d-64.736167!3d-32.202806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2c1298eb607cb%3A0x1ef6d172efd9e38b!2sDomo%20Umepay!5e0!3m2!1ses!2sar!4v1716308321679!5m2!1ses!2sar" height="400" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-[90vw] sm:w-[700px]"></iframe>
      </div>
    </section>
  )
}
