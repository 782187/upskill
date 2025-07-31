import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const logos = [
  "/Company/tcs.png",
  "/Company/wipro.png",
  "/Company/persistent.png",
  "/Company/mindtree.png",
  "/Company/infosis.png",
  "/Company/hexaware.png",
  "/Company/hcl.png",
  "/Company/biralsoft.png",
  "/Company/accenture.png",
  "/Company/tcs.png",
  "/Company/wipro.png",
  "/Company/persistent.png",
  "/Company/mindtree.png",
  "/Company/infosis.png",
  "/Company/hexaware.png",
  "/Company/hcl.png",
  "/Company/biralsoft.png",
  "/Company/hexaware.png",
  "/Company/hcl.png",
  "/Company/biralsoft.png",
  "/Company/tcs.png",
  "/Company/wipro.png",
  "/Company/persistent.png",
  "/Company/mindtree.png",
  "/Company/infosis.png",
  "/Company/hexaware.png",
  "/Company/hcl.png",
];

export default function HiringPartner() {
  const [angle, setAngle] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const logoCount = logos.length;
  const rotationStep = 360 / logoCount;

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev - rotationStep);
    }, 2500);

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [rotationStep]);

  const isMobile = screenWidth <= 576;
  const cardWidth = isMobile ? 90 : 140;
  const cardHeight = isMobile ? 60 : 80;
  const translateZ = isMobile ? 500 : 900;

  return (
    <div className="bg-dark w-100" style={{ minHeight: "30vh" }}>
      <h2 className="text-center fw-bold py-3" style={{color: "orange"}}>Hiring Partners</h2>

      <div
        className="overflow-hidden"
        style={{
          width: "100%",
          height: isMobile ? "20vh" : "30vh",
          perspective: "2000px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            transformStyle: "preserve-3d",
            transform: `rotateY(${angle}deg)`,
            transition: "transform 1s ease-in-out",
          }}
        >
          {logos.map((logo, i) => {
            const rotateY = i * rotationStep;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: `
                    rotateY(${rotateY}deg)
                    translateZ(${translateZ}px)
                    translateY(-50%) translateX(-50%)
                  `,
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                }}
              >
                <div
                  className="card border-0"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 2px 15px rgba(235, 121, 0, 0.1)",
                    padding: "8px",
                  }}
                >
                  <img
                    src={logo}
                    alt={`logo-${i}`}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
