import React, { useEffect } from "react";
import { createPortal } from "react-dom";

type LightboxProps = {
  src: string | null;
  onClose: () => void;
  isVideo?: boolean;
  title?: string;
};

export const Lightbox: React.FC<LightboxProps> = ({ src, onClose, isVideo, title }) => {
  useEffect(() => {
    if (!src) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // lock body scroll while lightbox is open
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, src]);

  if (!src) return null;
  return createPortal(
    <>
      {/* Overlay layer (like #cboxOverlay) */}
      <div
        id="cboxOverlay"
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // match original site overlay color
          backgroundColor: "rgba(24, 0, 93, 0.94)",
          // show loading gif like reference (only available for 2022 path)
          backgroundImage:
            typeof window !== "undefined"
              ? (() => {
                  const match = window.location.pathname.match(/\/(20\d{2})\//);
                  const year = match?.[1];
                  return year ? `url(/${year}/images/splash-lightbox-loading.gif)` : "none";
                })()
              : "none",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 40%",
          opacity: 1,
          visibility: "visible",
          cursor: "pointer",
          // ensure it stays above any site header/nav
          zIndex: 2147483000,
          overflow: "hidden",
          transform: "translate3d(0,0,0)"
        }}
      >
        {/* Close button fixed at viewport top-left (previous position) */}
        <button
          type="button"
          id="lbClose"
          aria-label="close"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          style={{
            position: "fixed",
            top: 16,
            left: 16,
            width: 44,
            height: 44,
            borderRadius: 44,
            border: "none",
            cursor: "pointer",
            background: "#E53935",
            backgroundImage: "none", // override colorbox.css sprite to avoid double X
            backgroundRepeat: "no-repeat",
            boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 0,
            zIndex: 2147483002
          }}
        >
          <span aria-hidden="true" style={{ position: "relative", width: 18, height: 18, display: "inline-block" }}>
            <span style={{ position: "absolute", top: 8, left: 0, right: 0, height: 2, background: "#fff", transform: "rotate(45deg)" }} />
            <span style={{ position: "absolute", top: 8, left: 0, right: 0, height: 2, background: "#fff", transform: "rotate(-45deg)" }} />
          </span>
        </button>
      </div>
      {/* Content box (like #colorbox) */}
      <div
        id="colorbox"
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "block",
          visibility: "visible",
          zIndex: 2147483001,
          maxWidth: "95vw",
          maxHeight: "95vh"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div id="cboxContent" style={{ width: "100%", height: "100%" }}>
          <div id="cboxLoadedContent" style={{ width: "100%", height: "100%", overflow: "auto" }}>
            {isVideo ? (
              <iframe
                src={src || ""}
                title={title || "video"}
                style={{ width: "90vw", height: "70vh", maxWidth: "1200px", border: "none", display: "block" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <img
                className="cboxPhoto"
                src={src || ""}
                alt=""
                style={{ maxWidth: "95vw", maxHeight: "95vh", height: "auto", width: "auto" }}
              />
            )}
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default Lightbox;
