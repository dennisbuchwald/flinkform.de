import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

const BRAND =
  "linear-gradient(90deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff)";

/** Gemeinsames OG-Image-Template für Sektionen (Blog, Wissen, Vergleich). */
export function sectionOgImage(kicker: string, title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#111114",
          color: "#ffffff",
          padding: "72px 80px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "13px",
              backgroundImage:
                "linear-gradient(135deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff)",
            }}
          />
          <div style={{ fontSize: "36px", fontWeight: 700 }}>Flinkform</div>
          <div
            style={{
              marginLeft: "12px",
              fontSize: "26px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {kicker}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              fontSize: "60px",
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: "1020px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "960px",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "14px",
            borderRadius: "7px",
            backgroundImage: BRAND,
          }}
        />
      </div>
    ),
    { ...OG_SIZE },
  );
}
