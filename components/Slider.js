import { useEffect } from "react";

import Slide from "@/components/Slide";

export default function Slider() {
  let swiper;
  useEffect(() => {
    swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        bulletClass: ".swiper-pagination-bullet",
      },
    });

    const navs = document.querySelectorAll(".swiper-pagination-bullet");

    // Clear all slide navs with active class
    const clearActiveClass = () => {
      [...navs].forEach((nav) => nav.classList.remove("active"));
    };

    // Set first slide nav to active on load
    const currentSlideNav = [...navs][swiper.realIndex];
    currentSlideNav.classList.add("active");

    swiper.on("slideChange", function (slide) {
      clearActiveClass();

      // add active styling class to new slide nav
      const newSlideNav = [...navs][slide.realIndex];
      newSlideNav.classList.add("active");
    });
  }, []);

  const slideTo = (slideIndex) => {
    // Move to new selected slide
    swiper.slideTo(slideIndex);
  };

  return (
    <div>
      <div className="swiper">
        <div className="swiper-wrapper">
          <Slide
            mobileImgSrc="/assets/home/mobile/image-hero-paramour.jpg"
            tabletImgSrc="/assets/home/tablet/image-hero-paramour.jpg"
            desktopImgSrc="/assets/home/desktop/image-hero-paramour.jpg"
            title="project paramour"
            summary="Project made for an art museum near Southwest London. Project Paramour
            is a statement of bold, modern architecture."
          />

          <Slide
            mobileImgSrc="/assets/home/mobile/image-hero-seraph.jpg"
            tabletImgSrc="/assets/home/tablet/image-hero-seraph.jpg"
            desktopImgSrc="/assets/home/desktop/image-hero-seraph.jpg"
            title="seraph station"
            summary="The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations."
          />

          <Slide
            mobileImgSrc="/assets/home/mobile/image-hero-federal.jpg"
            tabletImgSrc="/assets/home/tablet/image-hero-federal.jpg"
            desktopImgSrc="/assets/home/desktop/image-hero-federal.jpg"
            title="federal II tower"
            summary="A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches."
          />

          <Slide
            mobileImgSrc="/assets/home/mobile/image-hero-trinity.jpg"
            tabletImgSrc="/assets/home/tablet/image-hero-trinity.jpg"
            desktopImgSrc="/assets/home/desktop/image-hero-trinity.jpg"
            title="trinity bank tower"
            summary="Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives."
          />
        </div>
      </div>
      {/* Slide Navigation */}
      <div className="w-80 h-20 -bottom-1 -left-16 -ml-4 hidden xl:flex swiper-pagination">
        <span
          className="hover:bg-medium-grey swiper-pagination-bullet swiper-pagination-clickable"
          onClick={() => slideTo(1)}
        >
          01
        </span>
        <span
          className="hover:bg-medium-grey swiper-pagination-bullet swiper-pagination-clickable"
          onClick={() => slideTo(2)}
        >
          02
        </span>
        <span
          className="hover:bg-medium-grey swiper-pagination-bullet swiper-pagination-clickable"
          onClick={() => slideTo(3)}
        >
          03
        </span>
        <span
          className="hover:bg-medium-grey swiper-pagination-bullet swiper-pagination-clickable"
          onClick={() => slideTo(4)}
        >
          04
        </span>
      </div>
    </div>
  );
}
