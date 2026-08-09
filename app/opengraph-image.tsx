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
                fontFamily: "Georgia, Times New Roman, serif",
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
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
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
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
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
                    fontFamily: "Georgia, Times New Roman, serif",
                    fontSize: 104,
                    fontWeight: 400,
                    letterSpacing: 0,
                    lineHeight: 0.9,
                    maxWidth: 920,
                  }}
                >
                  Market Technicals
                </div>
                <div
                  style={{
                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                    fontSize: 32,
                    fontWeight: 400,
                    lineHeight: 1.28,
                    maxWidth: 890,
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
                gap: 14,
                marginTop: -18,
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  background: "#fff",
                  border: "1.5px solid #000",
                  display: "flex",
                  height: 72,
                  justifyContent: "center",
                  padding: "0 26px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Georgia, Times New Roman, serif",
                    fontSize: 24,
                    fontWeight: 700,
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
                      fontFamily: "Georgia, Times New Roman, serif",
                      fontSize: 24,
                      fontWeight: 700,
                      height: 72,
                      justifyContent: "center",
                      padding: "0 26px",
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
    size,
  );
}
