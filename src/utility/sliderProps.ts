import SwiperCore from "swiper";
import {
  Autoplay,
  EffectFade,
  FreeMode,
  Grid,
  Navigation,
  Pagination,
  Parallax,
  Thumbs,
} from "swiper/modules";

// Register Swiper modules
SwiperCore.use([
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  Parallax,
  FreeMode,
  Thumbs,
]);

// Type for each slider configuration
interface SliderConfig {
  spaceBetween?: number;
  speed?: number;
  loop?: boolean | string;
  slidesPerView?: number | string;
  centeredSlides?: boolean;
  effect?: string;
  autoplay?: {
    delay?: number;
    disableOnInteraction?: boolean;
    reverseDirection?: boolean;
  };
  pagination?: {
    el?: string;
    clickable?: boolean;
  };
  navigation?: {
    nextEl?: string;
    prevEl?: string;
  };
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
    };
  };
  freemode?: boolean;
  allowTouchMove?: boolean;
}

// Main export object
export const sliderProps: Record<string, SliderConfig> = {
  BrandSlider: {
    spaceBetween: 95,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: { el: ".dot", clickable: true },
    breakpoints: {
      475: { slidesPerView: 2 },
      767: { slidesPerView: 3 },
      992: { slidesPerView: 3 },
      1199: { slidesPerView: 6 },
    },
  },

  caseStudy: {
    spaceBetween: 24,
    speed: 1000,
    loop: true,
    centeredSlides: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: ".dot", clickable: true },
    breakpoints: {
      1499: { slidesPerView: 3.2 },
      1199: { slidesPerView: 2 },
      750: { slidesPerView: 2 },
      700: { slidesPerView: 1 },
    },
  },

  caseStudy2: {
    spaceBetween: 24,
    speed: 1000,
    loop: true,
    centeredSlides: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: ".dot", clickable: true },
    breakpoints: {
      1499: { slidesPerView: 2.9 },
      1199: { slidesPerView: 2 },
      750: { slidesPerView: 2 },
      700: { slidesPerView: 1 },
    },
  },

  testimonial: {
    spaceBetween: 0,
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    navigation: { nextEl: ".array-prev", prevEl: ".array-next" },
  },

  testimonial2: {
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: ".dot", clickable: true },
    breakpoints: { 992: { slidesPerView: 2 } },
  },

  testimonial3: {
    spaceBetween: 0,
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    navigation: { nextEl: ".array-prev", prevEl: ".array-next" },
  },

  testimonial4: {
    spaceBetween: 20,
    speed: 1000,
    loop: true,
    centeredSlides: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: ".dot", clickable: true },
    breakpoints: {
      1499: { slidesPerView: 3.5 },
      1199: { slidesPerView: 2 },
      750: { slidesPerView: 2 },
      700: { slidesPerView: 1 },
    },
  },

  heroSlider: {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    speed: 2000,
    autoplay: { delay: 4000, disableOnInteraction: false },
    navigation: { nextEl: ".array-prev", prevEl: ".array-next" },
  },

  heroSlider2: {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    speed: 3000,
    autoplay: { delay: 4000, disableOnInteraction: false },
    navigation: { nextEl: ".array-prev", prevEl: ".array-next" },
  },

  service: {
    spaceBetween: 20,
    speed: 1000,
    loop: true,
    navigation: { nextEl: ".array-prev", prevEl: ".array-next" },
    pagination: { el: ".dot", clickable: true },
    breakpoints: {
      1699: { slidesPerView: 4 },
      1599: { slidesPerView: 4 },
      1399: { slidesPerView: 4 },
      1199: { slidesPerView: 3 },
      991: { slidesPerView: 2 },
      767: { slidesPerView: 2 },
      0: { slidesPerView: 1 },
    },
  },

  service2: {
    spaceBetween: 20,
    speed: 2000,
    loop: true,
    pagination: { el: ".dot", clickable: true },
    autoplay: { delay: 1000, disableOnInteraction: false },
    breakpoints: {
      1699: { slidesPerView: 3.5 },
      1599: { slidesPerView: 3 },
      1399: { slidesPerView: 2.5 },
      1199: { slidesPerView: 2 },
      991: { slidesPerView: 2 },
      667: { slidesPerView: 1.3 },
      0: { slidesPerView: 1 },
    },
  },

  textSlider: {
    slidesPerView: "auto",
    spaceBetween: 35,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 6000,
    allowTouchMove: false,
    autoplay: { delay: 1, disableOnInteraction: true },
  },

  textSlider2: {
    slidesPerView: "auto",
    spaceBetween: 35,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 6000,
    allowTouchMove: false,
    autoplay: { delay: 1, disableOnInteraction: true },
  },
};
