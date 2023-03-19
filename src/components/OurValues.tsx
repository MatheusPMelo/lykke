import { FC } from "react";
import clsx from "clsx";

import productDesgin from "../assets/img/productDesign.png";
import pen from "../assets/img/pen.png";
import leaf from "../assets/img/leaf.png";
import dotsBackground from "../assets/img/dotsBackground.png";

const cards = [
  {
    id: 1,
    icon: productDesgin,
    title: "Product Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 2,
    icon: pen,
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 3,
    icon: leaf,
    title: "Product Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
];

interface ICards {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const Card: FC<ICards> = ({ icon, title, description }) => (
  <div className="border flex flex-col justify-center items-center relative p-10">
    <div className="p-6 bg-gradient-to-r from-primary to-secondary w-24 grid place-items-center absolute -top-10">
      <img src={icon} className="w-9" />
    </div>
    <h3 className="text-center mt-12 text-3xl font-semibold mb-5">{title}</h3>
    <p className="text-center text-base font-normal mb-6">{description}</p>
    <a
      className="
        text-center flex justify-center items-center font-semibold text-lg relative
        hover:before:-bottom-1
        before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-primary before:bottom-0 before:duration-200
      "
      href="#"
    >
      Learn More
    </a>
  </div>
);

//--------------------------------

interface IOurValues {
  twoColumnTitle: boolean;
  title: string;
  bigTitle: string;
  description: string;
}

const OurValues: FC<IOurValues> = ({
  twoColumnTitle,
  title,
  description,
  bigTitle,
}) => {
  return (
    <section className="container mx-auto px-4 py-24 relative">
      <div
        className={clsx("gap-y-7 md:gap-x-0", [
          twoColumnTitle == true ? "grid grid-cols-1 md:grid-cols-2" : "",
        ])}
      >
        <div
          className={clsx("flex justify-center flex-col", [
            twoColumnTitle !== true ? "items-center" : "",
          ])}
        >
          {title && (
            <span
              className={clsx(
                "relative w-fit flex items-center font-semibold before:content-[''] before:left-[110%] before:bg-primary before:w-[72px] before:h-0.5 before:absolute",
                [
                  twoColumnTitle !== true
                    ? "after:content-[''] after:bg-primary after:right-[110%] after:w-[72px] after:h-0.5 after:absolute"
                    : "",
                ]
              )}
            >
              {title}
            </span>
          )}
          {bigTitle && (
            <h1 className="font-medium text-3xl xl:text-5xl lg:text-4xl md:text-3xl">
              {bigTitle}
            </h1>
          )}
        </div>
        {description && (
          <p
            className={clsx("font-normal text-base", [
              twoColumnTitle !== true ? "text-center mt-5" : "",
            ])}
          >
            {description}
          </p>
        )}
      </div>
      <div className="flex gap-x-20 mt-24">
        {cards && cards.map((card) => <Card key={card.id} {...card} />)}
      </div>
      <img className="absolute -bottom-32 -right-3" src={dotsBackground} />
    </section>
  );
};

export default OurValues;
