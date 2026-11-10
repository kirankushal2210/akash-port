import { ImageResponse } from "next/og";
import { NAME, PUBLIC_OFFICE, roles } from "@/content/profile";

export const alt = `${NAME}: investigative journalist, strategic communications leader, orator and MLC Graduates Candidate`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f3ba16",
          color: "#172554",
          borderTop: "14px solid #172554",
          borderBottom: "4px solid #15803d",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 2.5,
            color: "#14532d",
          }}
        >
          {roles.slice(0, 3).join("  /  ").toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              fontSize: 108,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 0.98,
              color: "#172554",
            }}
          >
            {NAME}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 600,
              color: "#1e3a8a",
            }}
          >
            {PUBLIC_OFFICE.candidacy} · {PUBLIC_OFFICE.constituency} ({PUBLIC_OFFICE.partyShort})
          </div>
        </div>
        <div
          style={{
            display: "flex",
            borderTop: "2px solid #172554",
            paddingTop: 22,
            fontSize: 24,
            color: "#172554",
          }}
        >
          Republic TV · India Today · CNN News18 · Dailyhunt Media Group · Telangana Rakshana Sena
        </div>
      </div>
    ),
    size,
  );
}
