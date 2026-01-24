"use client";

import { FeaturesData } from "@/data/features/featuresData";
import { CircleCheckBig, CirclePlay, PauseCircle } from "lucide-react";
import { useRef, useState } from "react";
import "../../styles/cards/FeaturesCard.css";

export function FeaturesCard() {
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);
  const videoRefs = useRef<{ [id: number]: HTMLVideoElement | null }>({});

  const handlePlay = (id: number) => {
    for (const [key, ref] of Object.entries(videoRefs.current)) {
      if (Number(key) !== id && ref && !ref.paused) {
        ref.pause();
      }
    }

    const video = videoRefs.current[id];
    if (video) {
      video.play();
      setActiveVideoId(id);
    }
  };

  const handlePause = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      setActiveVideoId(null);
    }
  };

  const handleKeyPlay = (e: React.KeyboardEvent, id: number) => {
    if (e.key === "Enter" || e.key === " ") {
      handlePlay(id);
    }
  };

  return (
    <section className="features-card-container">
      {FeaturesData.map((feature, index) => (
        <article
          key={feature.id}
          className={`features-card ${index % 2 === 0 ? "orange" : "pink"}`}
        >
          <h3 className="title-h3 feature-title">{feature.title}</h3>
          <ul>
            {feature.items.map(({ id, item }) => (
              <li key={id} className="feature-list-item">
                <CircleCheckBig
                  className={`features-item-icon ${
                    index % 2 === 0 ? "orange-icon" : "pink-icon"
                  }`}
                />
                <p className="text">{item}</p>
              </li>
            ))}
          </ul>

          <div className="features-video-container">
            <video
              className={`features-video ${
                activeVideoId === feature.id ? "playing" : ""
              }`}
              ref={(el) => {
                videoRefs.current[feature.id] = el;
              }}
              src={feature.video}
              playsInline
              onPause={() => handlePause(feature.id)}
            >
              <source src={feature.video} type="video/mp4" />
              <track
                kind="captions"
                src="/videos/test-temoignage.vtt"
                srcLang="fr"
                label="French"
              />
              Your browser does not support the video tag.
            </video>

            {activeVideoId !== feature.id ? (
              <CirclePlay
                className={`features-video-icon ${
                  index % 2 === 0 ? "orange-video-icon" : "pink-video-icon"
                }`}
                onClick={() => handlePlay(feature.id)}
                onKeyUp={(e) => handleKeyPlay(e, feature.id)}
                tabIndex={0}
              />
            ) : (
              <PauseCircle
                className={`features-video-icon pause-icon ${
                  index % 2 === 0 ? "orange-video-icon" : "pink-video-icon"
                }`}
                onClick={() => handlePause(feature.id)}
                onKeyUp={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    handlePause(feature.id);
                }}
                tabIndex={0}
              />
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
