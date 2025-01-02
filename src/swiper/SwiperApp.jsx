// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import { Home } from "../template/home/Home";
import { Projects } from "../template/projects/Projects";
import tippy from "tippy.js";
import AppAppBar from "../template/home/components/AppAppBar";
import { TemplatePorta } from "../template/components/TemplatePorta";
import { Skills } from "../template/skills/Skills";
import { Contact } from "../template/contact/Contact";
import "tippy.js/dist/tippy.css";
import { useTranslation } from "react-i18next";

export default function SwiperApp() {
  const { t } = useTranslation();

  return (
    <>
      <AppAppBar />
      <Swiper
        style={{
          height: "100vh",
          width: "100%",
          background: "linear-gradient(to left, #243B55, #141E30)",
          
        }}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        speed={700} // Tiempo de transicion 
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            const pages = [
              t("pages.home"),
              t("pages.skills"),
              t("pages.projects"),
              t("pages.contact"),
            ];
            return `<span class="${className}" data-tippy-content="${pages[index]}"></span>`;
          },
        }}
        modules={[Mousewheel, Pagination]}
        onInit={() => {
          tippy(".swiper-pagination-bullet", {
            arrow: true,
            placement: "left",
            theme: "custom",
          });
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Home />
        </SwiperSlide>
        <SwiperSlide>
          <TemplatePorta component={<Skills />} componenteName="skills" />
        </SwiperSlide>
        <SwiperSlide>
          <TemplatePorta component={<Projects />} componenteName="projects" />
        </SwiperSlide>
        <SwiperSlide>
          <TemplatePorta component={<Contact />} componenteName="contact" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
