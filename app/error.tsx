"use client";

export default function Error({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <main className="status-page wrap">
      <p className="label label--green">Unexpected Error</p>
      <h1 className="status-page__title">
        Something went wrong while loading this section.
      </h1>
      <p className="status-page__text">
        Please try again or return to the top of the page.
      </p>
      <button type="button" className="btn btn--primary" onClick={() => retry()}>
        Try again
      </button>
    </main>
  );
}

