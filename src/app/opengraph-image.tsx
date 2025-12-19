import { ImageResponse } from "next/og";
import * as components from "./components";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          color: components.getColor(),
        }}
      >
        About Acme
      </div>
    )
  );
}
