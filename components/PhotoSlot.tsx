import Image from "next/image";

type Props = {
  /** What belongs here, shown while no photograph has been supplied. */
  brief: string;
  /** Path under /public once a real photograph exists, e.g. "/portrait.jpg". */
  src?: string;
  /** Required with `src`: describe the photograph for screen readers. */
  alt?: string;
  /** Photographer credit, shown as a caption with a real photograph. */
  credit?: string;
  ratio?: "portrait" | "wide";
  preload?: boolean;
};

/**
 * A reserved place for an authentic photograph. Until `src` is supplied it
 * renders a plainly labelled empty frame — never stock imagery.
 */
export function PhotoSlot({
  brief,
  src,
  alt,
  credit,
  ratio = "portrait",
  preload = false,
}: Props) {
  return (
    <figure
      className={`photo photo--${ratio}${src ? "" : " photo--empty"}`}
    >
      <div className="photo__frame">
        {src ? (
          <Image
            src={src}
            alt={alt ?? ""}
            fill
            preload={preload}
            sizes={
              ratio === "portrait"
                ? "(min-width: 60rem) 30vw, 100vw"
                : "(min-width: 60rem) 70vw, 100vw"
            }
          />
        ) : (
          <p className="photo__brief">
            <span className="label">Photograph to be supplied</span>
            {brief}
          </p>
        )}
      </div>
      {src && credit ? <figcaption>Photograph: {credit}</figcaption> : null}
    </figure>
  );
}
