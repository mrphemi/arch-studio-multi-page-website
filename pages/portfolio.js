import Image from "next/image";

import PortfolioItem from "@/components/PortfolioItem";

const portfolios = [
  { title: "seraph station", subtitle: "september 2019", path: "seraph" },
  { title: "eebox building", subtitle: "august 2019", path: "eebox" },
  { title: "Federal II Tower", subtitle: "March 2017", path: "federal" },
  { title: "project del sol", subtitle: "January 2016", path: "del-sol" },
  { title: "le prototype", subtitle: "October 2015", path: "prototype" },
  { title: "228b tower", subtitle: "April 2015", path: "228b" },
  {
    title: "Grand Edelweiss Hotel",
    subtitle: "December 2013",
    path: "edelweiss",
  },
  { title: "Netcry Tower", subtitle: "August 2012", path: "netcry" },
  { title: "Hypers", subtitle: "January 2012", path: "hypers" },
  { title: "SXIV Tower", subtitle: "March 2011", path: "sxiv" },
  { title: "Trinity Bank Tower", subtitle: "September 2010", path: "trinity" },
  { title: "Project Paramour", subtitle: "February 2008", path: "paramour" },
];

export default function Portfolio() {
  return (
    <div className="container">
      {/* Mobile List */}
      <div>
        <div className="md:hidden grid gap-y-6">
          {portfolios.map((portfolio) => (
            <PortfolioItem
              key={portfolio.title}
              img={`/assets/portfolio/mobile/image-${portfolio.path}.jpg`}
              title={portfolio.title}
              subtitle={portfolio.subtitle}
              width="311"
              height="240"
            />
          ))}
        </div>
      </div>

      {/* Tablet List */}
      <div>
        <div className="hidden md:grid xl:hidden gap-y-6">
          {portfolios.map((portfolio) => (
            <PortfolioItem
              key={portfolio.title}
              img={`/assets/portfolio/tablet/image-${portfolio.path}.jpg`}
              title={portfolio.title}
              subtitle={portfolio.subtitle}
              width="573"
              height="240"
            />
          ))}
        </div>
      </div>

      {/* Desktop List */}
      <div>
        <div className="hidden xl:grid grid-cols-3 gap-[30px]">
          {portfolios.map((portfolio) => (
            <PortfolioItem
              key={portfolio.title}
              img={`/assets/portfolio/desktop/image-${portfolio.path}.jpg`}
              title={portfolio.title}
              subtitle={portfolio.subtitle}
              width="350"
              height="560"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
