import Image from "next/image";

import Button from "@/components/Button";

export default function Slide({
  mobileImgSrc,
  tabletImgSrc,
  desktopImgSrc,
  title,
  summary,
}) {
  return (
    <div className="swiper-slide relative">
      <div className="md:hidden">
        <Image
          src={mobileImgSrc}
          width="375"
          height="560"
          loading="eager"
          layout="responsive"
          alt="Slide Image"
        />
      </div>

      <div className="hidden md:block xl:hidden">
        <Image
          src={tabletImgSrc}
          width="573"
          height="720"
          loading="eager"
          layout="responsive"
          alt="Slide Image"
        />
      </div>

      <div className="hidden xl:block">
        <Image
          src={desktopImgSrc}
          width="1110"
          height="720"
          loading="eager"
          layout="responsive"
          alt="Slide Image"
        />
      </div>

      <div className="absolute top-0 left-0 bg-black opacity-25 h-full w-full"></div>

      <div className="absolute top-0 left-0 z-10 h-full flex flex-col justify-center">
        <div className="container space-y-12">
          <div className="space-y-4">
            <h1 className="capitalize text-white">{title}</h1>
            <p className="text-white">{summary}</p>
          </div>

          <Button text="see our portfolio" link="/portfolio" />
        </div>
      </div>
    </div>
  );
}
