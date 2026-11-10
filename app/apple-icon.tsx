import { ImageResponse } from "next/og";
import { MONOGRAM } from "@/content/profile";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#172554",
          borderRadius: 36,
          border: "8px solid #f3ba16",
          color: "#f3ba16",
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: 4,
        }}
      >
        {MONOGRAM}
      </div>
    ),
    size,
  );
}

