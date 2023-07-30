"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import Image from "next/image";

interface CarouselProps {
  data: {
    alt: string;
    src: string;
  }[];
}
export function Carousel({ data }: CarouselProps) {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="w-[260px] h-[560px]"
    >
      {data.map((value, index) => {
        return (
          <SwiperSlide key={index} className="rounded-2xl overflow-hidden">
            <Image
              alt={value.alt}
              fill={true}
              style={{ objectFit: "contain" }}
              src={value.src}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
