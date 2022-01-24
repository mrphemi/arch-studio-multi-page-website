import Image from "next/image";

export default function PortfolioItem({
  img,
  title,
  subtitle,
  width,
  height,
  figure,
}) {
  return (
    <div className="relative group cursor-pointer">
      {/* Image */}
      <div>
        <Image
          src={img}
          width={width}
          height={height}
          layout="responsive"
          alt="Small team"
          className="duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 bg-black opacity-25 h-full w-full"></div>

      {/* Content */}
      <div className="absolute top-0 left-0 z-10 h-full flex flex-col justify-end">
        <div className="p-6">
          <div className="space-y-1">
            <h3 className="text-white capitalize">{title}</h3>
            <p className="text-white capitalize">{subtitle}</p>
          </div>
        </div>
      </div>

      {figure && (
        <p className="hidden md:block absolute right-3 top-[102px] xl:top-28 xl:-right-3 text-white text-[200px] font-bold opacity-70">
          {figure}
        </p>
      )}
    </div>
  );
}
