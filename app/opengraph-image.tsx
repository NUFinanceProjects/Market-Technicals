import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const libreRegular = readFile("./public/fonts/libre-baskerville-regular.ttf");
const libreBold = readFile("./public/fonts/libre-baskerville-bold.ttf");

export default async function Image() {
  const [regular, bold] = await Promise.all([libreRegular, libreBold]);

  return new ImageResponse(
    (
      <div
        style={{
          background: "#f7f7f4",
          color: "#000",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "#7297c4",
            display: "flex",
            height: 124,
            justifyContent: "space-between",
            padding: "0 58px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "#fff",
              border: "2px solid #000",
              display: "flex",
              height: 76,
              justifyContent: "center",
              width: 76,
            }}
          >
            <div
              style={{
                fontFamily: "LibreBaskerville",
                fontSize: 34,
                fontWeight: 700,
              }}
            >
              MT
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "LibreBaskerville",
              fontSize: 25,
              fontWeight: 500,
              gap: 34,
            }}
          >
            <span>Technical Questions</span>
            <span>Market Scenarios</span>
            <span>Mixed Practice</span>
            <span>Prep</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            padding: "56px 60px 46px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 26,
              }}
            >
              <div
                style={{
                  borderBottom: "2px solid #000",
                  display: "flex",
                  fontFamily: "LibreBaskerville",
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: 0,
                  paddingBottom: 14,
                  textTransform: "uppercase",
                  width: 360,
                }}
              >
                Interview intelligence
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                <div
                  style={{
                    fontFamily: "LibreBaskerville",
                    fontSize: 82,
                    fontWeight: 400,
                    letterSpacing: 0,
                    lineHeight: 0.9,
                    maxWidth: 1060,
                  }}
                >
                  Market Technicals
                </div>
                <div
                  style={{
                    fontFamily: "LibreBaskerville",
                    fontSize: 28,
                    fontWeight: 400,
                    lineHeight: 1.34,
                    maxWidth: 980,
                  }}
                >
                  Finance technical interview practice across accounting,
                  valuation, M&amp;A, LBOs, capital markets, and current events.
                </div>
              </div>
            </div>
            <div
              style={{
                alignItems: "stretch",
                display: "flex",
                gap: 16,
                marginTop: -18,
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  background: "#fff",
                  border: "1.5px solid #000",
                  display: "flex",
                  height: 78,
                  justifyContent: "center",
                  padding: "0 30px",
                }}
              >
                <span
                  style={{
                    fontFamily: "LibreBaskerville",
                    fontSize: 20,
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  400 M&amp;I Q&amp;A pairs
                </span>
              </div>
              {["AI feedback", "Behavioral prep", "Market scenarios"].map(
                (label) => (
                  <div
                    key={label}
                    style={{
                      alignItems: "center",
                      background: "#fff",
                      border: "1.5px solid #000",
                      display: "flex",
                      fontFamily: "LibreBaskerville",
                      fontSize: 20,
                      fontWeight: 700,
                      height: 78,
                      justifyContent: "center",
                      padding: "0 28px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "LibreBaskerville",
          data: regular,
          style: "normal",
          weight: 400,
        },
        {
          name: "LibreBaskerville",
          data: bold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
