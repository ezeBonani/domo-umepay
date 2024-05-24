"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";

import { IMAGES } from "@/constants"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import Image from "next/image";

function Images() {
  return (
    <section className='images flex flex-col justify-center items-center py-4' id="images">
      <div className="wrapper w-full md:w-[90%] lg:w-[70%]">
        <Swiper 
        loop={true}
        navigation
        pagination={{
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return ('<div class="bg-slate-500 w-[70px] mx-auto rounded-lg p-1 opacity-75"><span class="' + currentClass + '"></span>' +
                    ' / ' +
                    '<span class="' + totalClass + '"></span><div>');
        }
        }}
        modules={[Navigation,Pagination]}
        className="h-[280px] md:h-[450vh] lg:h-[85vh] w-full md:rounded-lg text-xs text-white">
          {IMAGES.map((image,index) => {
            return <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center relative">
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Images