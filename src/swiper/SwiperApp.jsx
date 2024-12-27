import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import { Home } from "../template/home/Home";
import { Skills } from "../template/skills/Skills";
import { Projects } from "../template/projects/Projects";
import { Contact } from "../template/contact/Contact";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import { pages } from "../assets/pages";
import AppAppBar from "../template/home/components/AppAppBar";
import { Divider } from "@mui/material";

export default function SwiperApp() {
  return (
    <>
      <AppAppBar />
      <Swiper
        style={{ height: "100vh", width: "100%" }}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}" data-tippy-content="${pages[index]}"></span>`;
          },
        }}
        modules={[Mousewheel, Pagination]}
        onInit={() => {
          tippy(".swiper-pagination-bullet", {
            arrow: true,
            placement: "left",
          });
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Home />
        </SwiperSlide>
        <SwiperSlide>
          <Skills />
        </SwiperSlide>
        <SwiperSlide>
          <Projects />
        </SwiperSlide>
        <SwiperSlide>
          <Contact />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
