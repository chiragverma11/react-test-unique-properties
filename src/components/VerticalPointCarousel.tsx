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
        className={cn(
          "flex w-full items-start gap-0 lg:flex-col lg:gap-12",
          className,
        )}
        {...props}
      >
        <div className="w-[30%] lg:w-full">
          <Points points={points} />
        </div>

        <div
          ref={containerRef}
          className={cn(
            "no-scrollbar max-h-screen w-[70%] overflow-y-scroll lg:h-[300px] lg:w-full",
          )}
          style={{ height: `${points.length * 100}px` }}
        >
          <ul className="mx-auto flex w-fit flex-col items-center justify-center gap-16">
            {points.map((point, index) => {
              return (
                <li
                  className="mx-auto flex flex-col items-center justify-between gap-1 lg:w-[85%] lg:flex-row lg:gap-8"
                  key={point.title + index}
                  ref={(element) => {
                    if (element) {
                      refs.current[index] = element;
                    }
                  }}
                  data-index={index}
                >
                  <div className="w-full lg:w-1/2">
                    <img
                      className="h-full w-full"
                      src={point.display.imageSrc}
                      alt={point.title}
                    />
                  </div>
                  <div className="py-y w-full space-y-2 lg:w-1/2 lg:p-6">
                    <p className="w-full text-2xl tracking-tight lg:w-11/12 lg:text-3xl">
                      {point.display.title}
                    </p>
                    <p className="w-full text-justify font-light lg:w-11/12">
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
    <div className="relative flex w-full flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
      <span className="absolute left-1/2 top-[calc(50%-20px)] -z-0 hidden h-1.5 w-[90%] -translate-x-1/2 translate-y-1/2 bg-white lg:block" />

      {points.map((point, index) => (
        <div
          className="flex cursor-pointer flex-col items-center gap-1.5"
          onClick={() => {
            elements[index]?.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "end",
            });
          }}
          key={point.title + index}
        >
          <div
            className={cn(
              "z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white transition-colors",
              index === Number(activeElement?.getAttribute("data-index")) &&
                "bg-brand-primary-foreground",
            )}
          >
            <img
              src={point.logoSrc}
              className={cn(
                "h-9 transition-[filter]",
                index === Number(activeElement?.getAttribute("data-index")) &&
                  "brightness-0 invert",
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
