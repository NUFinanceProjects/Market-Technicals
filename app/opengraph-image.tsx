import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#7297c4",
          color: "#000",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 76,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 34,
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "#fff",
              display: "flex",
              height: 142,
              justifyContent: "center",
              width: 142,
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, Times New Roman, serif",
                fontSize: 62,
                fontWeight: 700,
              }}
            >
              MT
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, Times New Roman, serif",
                fontSize: 86,
                fontWeight: 400,
                lineHeight: 0.92,
              }}
            >
              Market Technicals
            </div>
            <div
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: 34,
                fontWeight: 500,
                lineHeight: 1.25,
                maxWidth: 900,
              }}
            >
              Finance technical interview preparation across accounting,
              valuation, M&amp;A, LBOs, capital markets, and market events.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
