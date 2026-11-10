import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  preload?: boolean;
};

/**
 * Clean editorial portrait frame without decorative overlays.
 */
export function PhotoSlot({
  src,
  alt,
  width,
  height,
  caption,
  preload = false,
}: Props) {
  return (
    <figure className="photo">
      <div className="photo__frame">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          unoptimized
          preload={preload}
          sizes="(max-width: 60rem) 88vw, 380px"
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
