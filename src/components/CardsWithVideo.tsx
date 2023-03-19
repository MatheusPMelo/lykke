import React from "react";

import graph from "../assets/img/graph.png";
import rocket from "../assets/img/rocket.png";
import cam from "../assets/img/cam.png";
import leaf from "../assets/img/leaf.png";
import clsx from "clsx";

interface ICard {
  icon: string;
  title: string;
  description: string;
}

const contentCard = [
  {
    id: "1",
    icon: graph,
    title: "Our experience always guarantee quality",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing. ",
  },
  {
    id: "2",
    icon: rocket,
    title: "Always prioritize innovation in every project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing. ",
  },
  {
    id: "3",
    icon: leaf,
    title: "Experts who guarantee the client targets",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
  },
  {
    id: "4",
    icon: cam,
    title: "Our portfolio includes all of our projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
  },
];

const Card: React.FC<ICard> = ({ icon, title, description }) => (
  <div
    className="border border-zinc-600 pl-9 py-8 transition-all duration-300 
  hover:bg-gradient-to-r hover:from-primary hover:to-secondary group"
  >
    <div
      className="bg-gradient-to-r from-primary to-secondary p-4 w-24 h-24 grid place-items-center border 
    group-hover:border-white group-hover:border-2 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:to-transparent"
    >
      <img src={icon} />
    </div>
    <h3 className="font-semibold pr-3 py-5">{title}</h3>
    <p className="text-base pr-9">{description}</p>
  </div>
);

interface ICardsWithVideo {
  reverse: boolean;
}

const CardsWithVideo: React.FC<ICardsWithVideo> = ({ reverse }) => {
  return (
    <section
      className={clsx(
        "grid grid-cols-1 md:grid-cols-2 container mx-auto px-4 py-24 items-center gap-x-4"
      )}
    >
      <div className="grid grid-cols-2 grid-rows-2 gap-9 place-items-center">
        {contentCard &&
          contentCard.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
      </div>
      <div className={clsx("bg-zinc-300 w-full h-full grid place-items-center", [reverse ? "-order-1" : ""])}>
        <iframe
          src="https://www.youtube.com/embed/aLuj7Lw9hVk"
          title="Oliver Tree - Placeholder [Lyric Video]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className={clsx("h-full w-full z-10")}
        ></iframe>
      </div>
    </section>
  );
};

export default CardsWithVideo;
