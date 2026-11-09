import { ImageResponse } from "next/og";
import { NAME, roles } from "@/content/profile";

export const alt = `${NAME}: investigative journalist, strategic communications leader, orator`;
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
          background: "#f3f0e8",
          color: "#15130f",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 2, color: "#9c2a1c" }}>
          {roles.join("  /  ").toUpperCase()}
        </div>
        <div style={{ display: "flex", fontSize: 128, letterSpacing: -5, lineHeight: 1 }}>
          {NAME}
        </div>
        <div
          style={{
            display: "flex",
            borderTop: "2px solid #15130f",
            paddingTop: 24,
            fontSize: 28,
          }}
        >
          Republic TV, India Today, CNN News18, Dailyhunt Media Group
        </div>
      </div>
    ),
    size,
  );
}
