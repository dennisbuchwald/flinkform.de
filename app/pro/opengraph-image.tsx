import { ImageResponse } from "next/og";

export const alt = "Flinkform Pro - Das Formular, das Geld verdient.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              backgroundImage: "linear-gradient(135deg, #7e56ff, #00b2ff)",
            }}
          />
          <div style={{ fontSize: "40px", fontWeight: 700 }}>
            Flinkform Pro
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: "1000px",
            }}
          >
            Das Formular, das Geld verdient.
          </div>
          <div
            style={{
              fontSize: "30px",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "980px",
            }}
          >
            Stripe-Zahlungen mit SEPA und Wallets, Berechnungsfelder,
            Webhooks. Ab 59 €/Jahr.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "14px",
            borderRadius: "7px",
            backgroundImage: "linear-gradient(90deg, #7e56ff, #00b2ff)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
