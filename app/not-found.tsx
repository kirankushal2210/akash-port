import Link from "next/link";
import { NAME } from "@/content/profile";

export default function NotFound() {
  return (
    <main className="status-page wrap">
      <p className="label label--green">404 · Page Not Found</p>
      <h1 className="status-page__title">
        This page could not be found.
      </h1>
      <p className="status-page__text">
        The link you followed may be outdated, or the address may have been
        entered incorrectly. Return to the main portfolio of {NAME}.
      </p>
      <Link className="btn btn--primary" href="/">
        Return Home →
      </Link>
    </main>
  );
}
