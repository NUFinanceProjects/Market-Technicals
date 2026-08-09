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
          background: "#7297c4",
          color: "#000",
          display: "flex",
          height: "100%",
          padding: 64,
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#f7f7f4",
            border: "2px solid #000",
            display: "flex",
            height: "100%",
            padding: 44,
            width: "100%",
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
                alignItems: "flex-start",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  background: "#fff",
                  border: "2px solid #000",
                  display: "flex",
                  height: 118,
                  justifyContent: "center",
                  width: 118,
                }}
              >
                <div
                  style={{
                    fontFamily: "Georgia, Times New Roman, serif",
                    fontSize: 52,
                    fontWeight: 700,
                  }}
                >
                  MT
                </div>
              </div>
              <div
                style={{
                  borderTop: "2px solid #000",
                  display: "flex",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: 24,
                  fontWeight: 700,
                  gap: 28,
                  paddingTop: 18,
                }}
              >
                <span>Accounting</span>
                <span>Valuation</span>
                <span>M&amp;A</span>
                <span>LBOs</span>
                <span>Markets</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "Georgia, Times New Roman, serif",
                  fontSize: 94,
                  fontWeight: 400,
                  letterSpacing: 0,
                  lineHeight: 0.9,
                  maxWidth: 860,
                }}
              >
                Market Technicals
              </div>
              <div
                style={{
                  background: "#7297c4",
                  height: 14,
                  width: 320,
                }}
              />
              <div
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: 32,
                  fontWeight: 500,
                  lineHeight: 1.25,
                  maxWidth: 900,
                }}
              >
                Finance technical interview preparation that connects technicals,
                capital markets, and realistic spoken-answer practice.
              </div>
            </div>
            <div
              style={{
                alignItems: "center",
                borderTop: "1px solid #000",
                display: "flex",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: 24,
                fontWeight: 700,
                justifyContent: "space-between",
                paddingTop: 24,
              }}
            >
              <span>M&amp;I 400 + AI Feedback</span>
              <span>market-technicals.com</span>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
