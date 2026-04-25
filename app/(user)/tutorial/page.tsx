"use client";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";

import { ITutorialData, tutorialData } from "./tutorial-datas";

export default function Tutorial() {
  const [tutorialRef, tutorialVisible] = useInView();

  const [activeVideo, setActiveVideo] = useState(
    tutorialData[0] as ITutorialData,
  );

  const sectionClass = (visible: boolean) =>
    `w-full flex flex-col items-center scroll-mt-5
     transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]
     ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;

  return (
    <div className="w-full flex flex-col items-center justify-center p-0 md:p-20 bg-white-primary">
      <div className="card-container">
        <h1 className="text-green-primary text-5xl text-center">
          สอนการใช้งาน B-Farm
        </h1>
        <hr className="divider" />
        <div
          ref={tutorialRef}
          id="tutorial-section"
          className={sectionClass(tutorialVisible)}
        >
          <div className="detail-container md:flex-row! flex-col-reverse! m-0! py-2 flex-1">
            <div className="detail-content md:max-w-[32%] md:h-[calc(100vh-380px)] min-h-96 flex flex-col gap-2 p-2! overflow-y-auto md:bg-(--gray-primary)/5 md:rounded-lg">
              {tutorialData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveVideo(item)}
                  className={`tutorial-menu cursor-pointer ${activeVideo.id === item.id ? "active" : ""}`}
                >
                  {item.title}
                </div>
              ))}
            </div>
            <div className="detail-content h-fit md:h-[calc(100vh-380px)] md:min-h-96 flex flex-col flex-1 gap-5 p-2! py-5! md:p-10! items-center md:items-start">
              <h3 className="text-2xl text-black-primary">
                {activeVideo.title}
              </h3>
              <iframe
                className="w-full h-full min-h-50 aspect-video"
                src={`https://www.youtube.com/embed/${activeVideo.url}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
