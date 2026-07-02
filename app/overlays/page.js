"use client";

import React, { useState, useRef } from "react";
import styles from "../../styles/overlay.module.css";

const overlaysList = [
  {
    id: "coffee",
    label: "Coffee Cup",
    light: "/overlay/coffee_light.png",
    dark: "/overlay/coffee_dark.png",
  },
  {
    id: "gun",
    label: "Gun",
    light: "/overlay/gun_light.png",
    dark: "/overlay/gun_dark.png",
  },
  {
    id: "taco",
    label: "Taco",
    light: "/overlay/taco_light.png",
    dark: "/overlay/taco_dark.png",
  },
  {
    id: "sad",
    label: "Sad",
    light: "/overlay/sad_light.png",
    dark: "/overlay/sad_dark.png",
  },
  {
    id: "coin",
    label: "Coin Toss",
    light: "/overlay/coin_light.png",
    dark: "/overlay/coin_dark.png",
  },
  {
    id: "fingerbpard",
    label: "Finger Board",
    light: "/overlay/fingerb_light.png",
    dark: "/overlay/fingerb_dark.png",
  },
  {
    id: "book",
    label: "Book",
    light: "/overlay/book_light.png",
    dark: "/overlay/book_dark.png",
  },
  {
    id: "fidget",
    label: "Fidget",
    light: "/overlay/fidget_light.png",
    dark: "/overlay/fidget_dark.png",
  },
  {
    id: "card",
    label: "Card",
    light: "/overlay/card_light.png",
    dark: "/overlay/card_dark.png",
  },
  {
    id: "double",
    label: "Double Barrel",
    light: "/overlay/double_light.png",
    dark: "/overlay/double_dark.png",
  },

  {
    id: "boss",
    label: "Boss",
    light: "/overlay/boss_light.png",
    dark: "/overlay/boss_dark.png",
  },
  {
    id: "phone",
    label: "Phone",
    light: "/overlay/phone_light.png",
    dark: "/overlay/phone_dark.png",
  },
  {
    id: "noboss",
    label: "No Boss",
    light: "/overlay/no_boss_light.png",
    dark: "/overlay/no_boss_dark.png",
  },
  {
    id: "heart",
    label: "Heart",
    light: "/overlay/heart_light.png",
    dark: "/overlay/heart_dark.png",
  },
  {
    id: "midf",
    label: "MidF",
    light: "/overlay/midf_light.png",
    dark: "/overlay/midf_dark.png",
  },
  {
    id: "ok",
    label: "OK",
    light: "/overlay/ok_light.png",
    dark: "/overlay/ok_dark.png",
  }
];

export default function OverlayGenerator() {
  const [nftDataUrl, setNftDataUrl] = useState(null);
  const [activeSkin, setActiveSkin] = useState("light");
  const [selectedId, setSelectedId] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [brokenImages, setBrokenImages] = useState({});

  const fileInputRef = useRef(null);

  const handleFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => setNftDataUrl(e.target.result);
    reader.readAsDataURL(file);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const currentOverlay = overlaysList.find((o) => o.id === selectedId);
  const isReadyToDownload = nftDataUrl && selectedId;

  // Eski Çalışan Mimariden Uyarlanan İndirme Fonksiyonu
  const drawAndDownload = () => {
    if (!isReadyToDownload) return;

    // Geçici, görünmez bir canvas oluşturuluyor
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const OUT_SIZE = 1500;

    canvas.width = OUT_SIZE;
    canvas.height = OUT_SIZE;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const baseImg = new window.Image();
    baseImg.crossOrigin = "anonymous";

    baseImg.onload = () => {
      const bw = baseImg.naturalWidth,
        bh = baseImg.naturalHeight;
      const ratio = Math.min(OUT_SIZE / bw, OUT_SIZE / bh);
      const dw = bw * ratio,
        dh = bh * ratio;
      const dx = (OUT_SIZE - dw) / 2,
        dy = (OUT_SIZE - dh) / 2;

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, OUT_SIZE, OUT_SIZE);
      ctx.drawImage(baseImg, dx, dy, dw, dh);

      if (currentOverlay) {
        const ovImg = new window.Image();
        ovImg.crossOrigin = "anonymous";
        ovImg.onload = () => {
          ctx.drawImage(ovImg, 0, 0, OUT_SIZE, OUT_SIZE);

          // İndirme / Paylaşım Mantığı
          const isMobile =
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent,
            );

          canvas.toBlob(async (blob) => {
            if (!blob) return;
            const file = new File([blob], "wonderboss-overlay.png", {
              type: "image/png",
            });

            // Eğer mobilse ve tarayıcı destekliyorsa Paylaşım Menüsü
            if (
              isMobile &&
              navigator.canShare &&
              navigator.canShare({ files: [file] })
            ) {
              try {
                await navigator.share({
                  files: [file],
                  title: "Wonder Boss",
                });
              } catch (err) {
                // Kullanıcı iptal ederse normal indirmeyi tetikle
                triggerDownload(canvas);
              }
            } else {
              // Masaüstü veya paylaşımı desteklemeyen cihazlar için normal indirme
              triggerDownload(canvas);
            }
          }, "image/png");
        };
        ovImg.src =
          activeSkin === "light" ? currentOverlay.light : currentOverlay.dark;
      }
    };
    baseImg.src = nftDataUrl;
  };
  const triggerDownload = (canvas) => {
    const link = document.createElement("a");
    link.download = "wonderboss-overlay.png";
    link.href = canvas.toDataURL("image/png", 1.0);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.overlayBody}>
      <div className={styles.overlayHeader}>
        <div className={styles.logoWrap}>
          <div className={`${styles.logoIcon} ${styles.noLogoImg}`}>
            <img
              src="/logo.png"
              alt="Logo"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
          <div>
            <div className={styles.logoTitle}>Wonder Boss</div>
            <div className={styles.logoSub}>Overlay Generator</div>
          </div>
        </div>
        <button
          className={`${styles.btnDownload} ${isReadyToDownload ? styles.btnDownloadActive : ""}`}
          disabled={!isReadyToDownload}
          onClick={drawAndDownload}
        >
          Download Output
        </button>
      </div>

      <div className={styles.layout}>
        <div className={styles.panel}>
          <div className={styles.panelSection}>
            <div className={styles.sectionLabel}>Your NFT Artwork</div>
            <div
              className={`${styles.nftDrop} ${isDragOver ? styles.dragOver : ""}`}
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={onDrop}
            >
              {!nftDataUrl && (
                <div className={styles.dropPlaceholder}>
                  <div className={styles.dropText}>
                    Click to Choose / Drop NFT
                  </div>
                </div>
              )}
              {nftDataUrl && (
                <>
                  <img
                    className={styles.nftPreviewImg}
                    src={nftDataUrl}
                    alt="NFT Mini"
                  />
                  <div className={styles.replaceHover}>Change Artwork</div>
                </>
              )}
            </div>
          </div>

          <div className={styles.panelSection}>
            <div className={styles.sectionLabel}>Select Skin Tone</div>
            <div className={styles.skinRow}>
              <button
                className={`${styles.skinBtn} ${activeSkin === "light" ? styles.skinBtnActive : ""}`}
                onClick={() => setActiveSkin("light")}
              >
                <span
                  className={`${styles.skinDot} ${styles.skinBtnLight}`}
                ></span>{" "}
                Light
              </button>
              <button
                className={`${styles.skinBtn} ${activeSkin === "dark" ? styles.skinBtnActive : ""}`}
                onClick={() => setActiveSkin("dark")}
              >
                <span
                  className={`${styles.skinDot} ${styles.skinBtnDark}`}
                ></span>{" "}
                Dark
              </button>
            </div>
          </div>

          <div
            className={styles.overlayGallerySection}
            style={{ display: nftDataUrl ? "flex" : "none" }}
          >
            <div
              className={styles.sectionLabel}
              style={{ padding: "16px 18px 0", marginBottom: "-6px" }}
            >
              OVERLAYS
            </div>
            <div className={styles.overlayGridWrap}>
              {overlaysList.map((ov) => {
                const imgSrc = activeSkin === "light" ? ov.light : ov.dark;
                const isSelected = selectedId === ov.id;

                if (brokenImages[imgSrc]) return null;

                return (
                  <div
                    key={ov.id}
                    className={`${styles.overlayCard} ${isSelected ? styles.overlayCardSelected : ""}`}
                    onClick={() => setSelectedId(isSelected ? null : ov.id)}
                  >
                    <div className={styles.overlayThumb}>
                      <img
                        src={imgSrc}
                        alt={ov.label}
                        onError={() =>
                          setBrokenImages((prev) => ({
                            ...prev,
                            [imgSrc]: true,
                          }))
                        }
                      />
                    </div>
                    <div className={styles.overlayName}>{ov.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.canvasArea}>
          <div className={styles.gridBg}></div>
          <div className={styles.previewWrap}>
            {!nftDataUrl ? (
              <button
                className={styles.btnSelectTrigger}
                onClick={() => fileInputRef.current?.click()}
              >
                Select NFT
              </button>
            ) : (
              <>
                <img
                  className={styles.previewLayer}
                  src={nftDataUrl}
                  alt="NFT Base Layer"
                  style={{ zIndex: 1 }}
                />
                {currentOverlay && (
                  <img
                    className={`${styles.previewLayer} ${styles.previewOverlayLayer}`}
                    src={
                      activeSkin === "light"
                        ? currentOverlay.light
                        : currentOverlay.dark
                    }
                    alt="Overlay Layer"
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => {
          handleFile(e.target.files[0]);
          e.target.value = "";
        }}
      />
      <button
        className={`${styles.btnDownloadSmall} ${isReadyToDownload ? styles.btnDownloadActive : ""}`}
        disabled={!isReadyToDownload}
        onClick={drawAndDownload}
      >
        Download Output
      </button>
    </div>
  );
}
