import React, { ElementRef, FC, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const VerticalPointCarouselContext = React.createContext<{
  elements: Element[];
  activeElement: Element | null;
}>({
  elements: [],
  activeElement: null,
});

interface CarouselState {
  elements: Element[];
  activeElement: Element;
}

type CarouselAction = {
  type: "SET_ACTIVE_ELEMENT";
  payload: Element;
};

function carouselReducer(
  state: CarouselState,
  action: CarouselAction,
): CarouselState {
  switch (action.type) {
    case "SET_ACTIVE_ELEMENT":
      return { ...state, activeElement: action.payload };
    default:
      return state;
  }
}

interface Point {
  title: string;
  logoSrc: string;
  display: { imageSrc: string; title: string; description: string };
}

interface VerticalPointCarouselProps
  extends React.ComponentPropsWithoutRef<"div"> {
  points: Point[];
}

const VerticalPointCarousel: FC<VerticalPointCarouselProps> = ({
  points,
  className,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef<ElementRef<"li">[]>([]);

  const [state, dispatch] = React.useReducer(carouselReducer, {
    elements: refs.current,
    activeElement: refs.current[0],
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleElements = entries
          .filter(
            (entry) => entry.isIntersecting && entry.intersectionRatio > 0.75,
          )
          .map((entry) => entry.target);

        if (visibleElements[0] !== state.activeElement && visibleElements[0]) {
          dispatch({
            type: "SET_ACTIVE_ELEMENT",
            payload: visibleElements[0],
          });
        }
      },
      { root: containerRef.current, threshold: [0.25, 0.75] },
    );

    refs?.current?.map((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [refs, containerRef, state.activeElement]);

  return (
    <VerticalPointCarouselContext.Provider value={state}>
      <div
        className={cn("w-full flex flex-col gap-12 items-center", className)}
        {...props}
      >
        <div className="w-full">
          <Points points={points} />
        </div>

        <div
          ref={containerRef}
          className="h-[300px] w-full overflow-y-scroll no-scrollbar"
        >
          <ul className="mx-auto w-fit flex items-center justify-center flex-col gap-16">
            {points.map((point, index) => {
              return (
                <li
                  className="flex w-[85%] mx-auto justify-between items-center gap-8"
                  key={point.title + index}
                  ref={(element) => {
                    if (element) {
                      refs.current[index] = element;
                    }
                  }}
                  data-index={index}
                >
                  <div className="w-1/2">
                    <img
                      className="w-full h-full"
                      src={point.display.imageSrc}
                      alt={point.title}
                    />
                  </div>
                  <div className="w-1/2 space-y-2 p-6">
                    <p className="text-3xl tracking-tight w-11/12">
                      {point.display.title}
                    </p>
                    <p className="font-light w-11/12 text-justify">
                      {point.display.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </VerticalPointCarouselContext.Provider>
  );
};

const Points: FC<Pick<VerticalPointCarouselProps, "points">> = ({ points }) => {
  const { elements, activeElement } = React.useContext(
    VerticalPointCarouselContext,
  );

  return (
    <div className="flex flex-col relative lg:flex-row w-full justify-between items-center">
      <span className="w-[90%] -z-0 bg-white h-1.5 absolute translate-y-1/2 -translate-x-1/2 top-[calc(50%-20px)] left-1/2" />
      {points.map((point, index) => (
        <div
          className="cursor-pointer flex flex-col items-center gap-2"
          onClick={() => {
            elements[index]?.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "start",
            });
          }}
          key={point.title + index}
        >
          <div
            className={cn(
              "h-14 w-14 z-10 rounded-full bg-white flex items-center transition-colors justify-center",
              index === Number(activeElement?.getAttribute("data-index")) &&
                "bg-brand-primary-foreground",
            )}
          >
            <img
              src={point.logoSrc}
              className={cn(
                "h-9 transition-[filter]",
                index === Number(activeElement?.getAttribute("data-index")) &&
                  "invert brightness-0",
              )}
              alt={point.title}
            />
          </div>
          <span className="font-light">{point.title}</span>
        </div>
      ))}
    </div>
  );
};

export default VerticalPointCarousel;
