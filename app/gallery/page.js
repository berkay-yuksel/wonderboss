// app/gallery/page.js
"use client";
import { useEffect, useMemo, useRef, useState } from "react";

export default function GalleryPage() {
  const images = [
    { name: "0xsecretalpha7", src: "/cards/0xsecretalpha7.png" },
    { name: "5hort5nipa.sol", src: "/cards/5hort5nipa.sol.png" },
    { name: "amigoeNFT", src: "/cards/amigoeNFT.png" },
    { name: "anzaisrekt", src: "/cards/anzaisrekt.png" },
    { name: "B2radB", src: "/cards/B2radB.png" },
    { name: "babyplutoc", src: "/cards/babyplutoc.png" },
    { name: "bhayo_yhomi", src: "/cards/bhayo_yhomi.png" },
    { name: "Big____Tom", src: "/cards/Big____Tom.png" },
    { name: "blessbhoy", src: "/cards/blessbhoy.png" },
    { name: "BronxOnChain", src: "/cards/BronxOnChain.png" },
    { name: "C1PH3Rx91", src: "/cards/C1PH3Rx91.png" },
    { name: "Cakelo_Ren", src: "/cards/Cakelo_Ren.png" },
    { name: "CalanorLinwe", src: "/cards/CalanorLinwe.png" },
    { name: "cavypunk", src: "/cards/cavypunk.png" },
    { name: "della_jonny", src: "/cards/della_jonny.png" },
    { name: "Dfw_Ashh", src: "/cards/Dfw_Ashh.png" },
    { name: "diegoarmandoAD", src: "/cards/diegoarmandoAD.png" },
    { name: "dipdealer_eth", src: "/cards/dipdealer_eth.png" },
    { name: "divine_0x", src: "/cards/divine_0x.png" },
    { name: "Dromandolphin", src: "/cards/Dromandolphin.png" },
    { name: "dschoasch", src: "/cards/dschoasch.png" },
    { name: "DUDEisonchain", src: "/cards/DUDEisonchain.png" },
    { name: "DUEFORWIN", src: "/cards/DUEFORWIN.png" },
    { name: "Emjay_0fficia1", src: "/cards/Emjay_0fficia1.png" },
    { name: "filiptheboy", src: "/cards/filiptheboy.png" },
    { name: "gangartsol", src: "/cards/gangartsol.png" },
    { name: "GhostInTheCrypt", src: "/cards/GhostInTheCrypt.png" },
    { name: "hazzmatt33", src: "/cards/hazzmatt33.png" },
    { name: "ICEBABY_007", src: "/cards/ICEBABY_007.png" },
    { name: "IconNick_iDAO", src: "/cards/IconNick_iDAO.png" },
    { name: "idfrank_980", src: "/cards/idfrank_980.png" },
    { name: "igloo_1775", src: "/cards/igloo_1775.png" },
    { name: "ismaritagorguis", src: "/cards/ismaritagorguis.png" },
    { name: "ItsJewelweb3", src: "/cards/ItsJewelweb3.png" },
    { name: "JackBurton1231", src: "/cards/JackBurton1231.png" },
    { name: "jonty_sol", src: "/cards/jonty_sol.png" },
    { name: "JordanOnChain", src: "/cards/JordanOnChain.png" },
    { name: "JRR_NFT", src: "/cards/JRR_NFT.png" },
    { name: "juanito_NFT", src: "/cards/juanito_NFT.png" },
    { name: "JumpStre3t", src: "/cards/JumpStre3t.png" },
    { name: "Kangmasutra", src: "/cards/Kangmasutra.png" },
    { name: "Kennyakins10", src: "/cards/Kennyakins10.png" },
    { name: "kenny_web_3-a", src: "/cards/kenny_web_3-a.png" },
    { name: "kenny_web_3", src: "/cards/kenny_web_3.png" },
    { name: "kuma_baum", src: "/cards/kuma_baum.png" },
    { name: "kuyajoy_", src: "/cards/kuyajoy_.png" },
    { name: "Lapponic", src: "/cards/Lapponic.png" },
    { name: "leveragge_", src: "/cards/leveragge_.png" },
    { name: "living_stone696", src: "/cards/living_stone696.png" },
    { name: "MaverickPh50084", src: "/cards/MaverickPh50084.png" },
    { name: "Maxi_cp0", src: "/cards/Maxi_cp0.png" },
    { name: "mombeam", src: "/cards/mombeam.png" },
    { name: "MrAduitore", src: "/cards/MrAduitore.png" },
    { name: "NoHandedTripod", src: "/cards/NoHandedTripod.png" },
    { name: "Okechukwu____", src: "/cards/Okechukwu____.png" },
    { name: "Parad0xWeb3", src: "/cards/Parad0xWeb3.png" },
    { name: "pArtySHIP1202", src: "/cards/pArtySHIP1202.png" },
    { name: "psykoin_", src: "/cards/psykoin_.png" },
    { name: "R3M30", src: "/cards/R3M30.png" },
    { name: "R4M3O", src: "/cards/R4M3O.png" },
    { name: "R4M3O3", src: "/cards/R4M3O3.png" },
    { name: "rolyttt", src: "/cards/rolyttt.png" },
    { name: "RugDodger", src: "/cards/RugDodger.png" },
    { name: "Seeker87070888", src: "/cards/Seeker87070888.png" },
    { name: "SMaLLZ_84", src: "/cards/SMaLLZ_84.png" },
    { name: "soulsweb3", src: "/cards/soulsweb3.png" },
    { name: "SPEEDY9218_", src: "/cards/SPEEDY9218_.png" },
    { name: "Tactical_Sticks", src: "/cards/Tactical_Sticks.png" },
    { name: "tanned_viking", src: "/cards/tanned_viking.png" },
    { name: "Tedsuho", src: "/cards/Tedsuho.png" },
    { name: "tHaCrYpToNiNjA", src: "/cards/tHaCrYpToNiNjA.png" },
    { name: "thechaachi", src: "/cards/thechaachi.png" },
    { name: "TheChang_NFT", src: "/cards/TheChang_NFT.png" },
    { name: "TheChang_NFT2", src: "/cards/TheChang_NFT2.png" },
    { name: "theHAWKdiamond", src: "/cards/theHAWKdiamond.png" },
    { name: "TheSavageSuit", src: "/cards/TheSavageSuit.png" },
    { name: "Tmac_SOL", src: "/cards/Tmac_SOL.png" },
    { name: "Web3Hustler", src: "/cards/Web3Hustler.png" },
    { name: "Web3withCJ", src: "/cards/Web3withCJ.png" },
    { name: "web3_Adri", src: "/cards/web3_Adri.png" },
    { name: "webzy_eth", src: "/cards/webzy_eth.png" },
    { name: "zsolt_patko", src: "/cards/zsolt_patko.png" },
  ];

  return (
    <>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow: hidden;
          background: #0f0f10;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
      <LoopingGallery images={images} />
    </>
  );
}

function LoopingGallery({ images }) {
  // layout
  const cols = 3,
    rows = 2;
  const cellW = 600,
    cellH = 360;
  const gapCss = "8vw",
    outerGapCss = "8vw";

  // autopan
  const autoDir = { x: 2, y: 1 };
  const initialSpeed = 40;

  // state
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [autoOn, setAutoOn] = useState(true);
  const [speed, setSpeed] = useState(initialSpeed);
  const autoPausedRef = useRef(false);
  const rafRef = useRef(null);
  const lastRef = useRef(0);

  const [vp, setVp] = useState({ w: 1, h: 1 });
  const [gapPx, setGapPx] = useState(0);
  const [outerGapPx, setOuterGapPx] = useState(0);

  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // highlighted suggestion
  const [lightbox, setLightbox] = useState(null);

  const resumeTimeoutRef = useRef(null);

  // utils
  const toPx = (val) => {
    if (val.endsWith("vw")) return (window.innerWidth * parseFloat(val)) / 100;
    if (val.endsWith("vh")) return (window.innerHeight * parseFloat(val)) / 100;
    return parseFloat(val) || 0;
  };
  const hash2D = (x, y) => ((x * 73856093) ^ (y * 19349663)) >>> 0;
  const wrapMod = (v, m) => ((v % m) + m) % m; // negatif mod fix

  // resize
  useEffect(() => {
    const recalc = () => {
      setVp({ w: window.innerWidth, h: window.innerHeight });
      setGapPx(toPx(gapCss));
      setOuterGapPx(toPx(outerGapCss));
    };
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  // dimensions
  const gridW = cols * cellW + (cols - 1) * gapPx;
  const gridH = rows * cellH + (rows - 1) * gapPx;
  const tileW = gridW + outerGapPx;
  const tileH = gridH + outerGapPx;

  // repeat
  const repX = Math.max(3, Math.ceil(vp.w / tileW) + 3);
  const repY = Math.max(3, Math.ceil(vp.h / tileH) + 3);
  const spanX = Math.floor(repX / 2);
  const spanY = Math.floor(repY / 2);

  // base tile
  const baseTileX = Math.floor(offset.x / tileW);
  const baseTileY = Math.floor(offset.y / tileH);

  // dir normalize
  const dirNorm = useMemo(() => {
    const len = Math.hypot(autoDir.x || 0, autoDir.y || 0) || 1;
    return { x: (autoDir.x || 0) / len, y: (autoDir.y || 0) / len };
  }, [autoDir.x, autoDir.y]);

  // autopan loop
  useEffect(() => {
    const tick = (t) => {
      if (!lastRef.current) lastRef.current = t;
      const dt = (t - lastRef.current) / 1000;
      lastRef.current = t;
      if (autoOn && !autoPausedRef.current && speed > 0) {
        setOffset((o) => ({
          x: o.x + dirNorm.x * speed * dt,
          y: o.y + dirNorm.y * speed * dt,
        }));
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    const onBlur = () => {
      lastRef.current = 0;
    };
    window.addEventListener("blur", onBlur);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("blur", onBlur);
    };
  }, [autoOn, speed, dirNorm.x, dirNorm.y]);

  // manual pan
  const dragRef = useRef({ active: false, x: 0, y: 0, ox: 0, oy: 0 });
  const clearResumeTimeout = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };
  const onPointerDown = (e) => {
    clearResumeTimeout();
    if (e.target.closest("[data-no-pan]")) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    dragRef.current = {
      active: true,
      x: e.clientX,
      y: e.clientY,
      ox: offset.x,
      oy: offset.y,
    };
    autoPausedRef.current = true;
  };
  const onPointerMove = (e) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.x;
    const dy = e.clientY - dragRef.current.y;
    setOffset({ x: dragRef.current.ox - dx, y: dragRef.current.oy - dy });
  };
  const endDrag = (e) => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    autoPausedRef.current = false;
    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    } catch {}
  };
  const onWheel = (e) =>
    setOffset((o) => ({ x: o.x + e.deltaX, y: o.y + e.deltaY }));

  // smooth pan helper (distance-based duration + smoother easing)
  const animRef = useRef(0);
  const animateOffsetTo = (tx, ty) => {
    cancelAnimationFrame(animRef.current);
    const sx = offset.x,
      sy = offset.y;

    const dist = Math.hypot(tx - sx, ty - sy);
    // Daha yumuşak: mesafeye göre daha uzun süre

    const ms = Math.max(600, Math.min(1600, 1200 + dist * 1.15));

    const start = performance.now();
    // S-curve (quintic smoothstep)
    const easeInOutQuintic = (p) => p * p * p * (p * (6 * p - 15) + 10);

    const step = (t) => {
      const p = Math.min(1, (t - start) / ms);
      const e = easeInOutQuintic(p);
      setOffset({ x: sx + (tx - sx) * e, y: sy + (ty - sy) * e });
      if (p < 1) {
        animRef.current = requestAnimationFrame(step);
      }
    };

    animRef.current = requestAnimationFrame(step);
  };

  const scheduleResume = (ms = 3000) => {
    clearResumeTimeout();
    resumeTimeoutRef.current = setTimeout(() => {
      autoPausedRef.current = false;
      setAutoOn(true);
      resumeTimeoutRef.current = null;
    }, ms);
  };

  // tiles (world-stable)
  const ox = wrapMod(offset.x, tileW);
  const oy = wrapMod(offset.y, tileH);
  const copies = [];
  for (let gy = -spanY; gy <= spanY; gy++) {
    for (let gx = -spanX; gx <= spanX; gx++) {
      const left = gx * tileW - ox;
      const top = gy * tileH - oy;
      const startIndex = hash2D(baseTileX + gx, baseTileY + gy) % images.length;
      copies.push(
        <div key={`${gx}-${gy}`} style={{ position: "absolute", left, top }}>
          <Tile
            images={images}
            startIndex={startIndex}
            cols={cols}
            rows={rows}
            cellW={cellW}
            cellH={cellH}
            gridW={gridW}
            gridH={gridH}
            gapCss={gapCss}
            outerGapPx={outerGapPx}
            openLightbox={(item) => {
              autoPausedRef.current = true;
              setLightbox(item);
              clearResumeTimeout();
            }}
          />
        </div>
      );
    }
  }
  // search focus (pause, animate to nearest, resume after 3.5s)
  const focusByName = (raw) => {
    const q = (raw || "").trim().toLowerCase();
    if (!q) return;

    let idx = images.findIndex((it) => it.name?.toLowerCase() === q);
    if (idx === -1) {
      idx = images.findIndex((it) => it.name?.toLowerCase().includes(q));
      if (idx === -1) return;
    }

    // Pause autopan
    setAutoOn(false);
    autoPausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);

    const cellsPerTile = cols * rows;
    const extra = 3; // daha geniş aralık (yakın kopyayı bulmak için)
    let best = null;

    for (let gy = -spanY - extra; gy <= spanY + extra; gy++) {
      for (let gx = -spanX - extra; gx <= spanX + extra; gx++) {
        const globalX = baseTileX + gx;
        const globalY = baseTileY + gy;
        const startIndex = hash2D(globalX, globalY) % images.length;
        const local = (idx - startIndex + images.length) % images.length;

        if (local < cellsPerTile) {
          const col = local % cols;
          const row = Math.floor(local / cols);
          const pad = outerGapPx / 2;

          const leftWorld = globalX * tileW;
          const topWorld = globalY * tileH;

          const ix = leftWorld + pad + col * (cellW + gapPx) + cellW / 2;
          const iy = topWorld + pad + row * (cellH + gapPx) + cellH / 2;

          const targetX = ix - vp.w / 2;
          const targetY = iy - vp.h / 2;

          const dx = targetX - offset.x;
          const dy = targetY - offset.y;
          const dist2 = dx * dx + dy * dy;

          if (!best || dist2 < best.dist2)
            best = { tx: targetX, ty: targetY, dist2 };
        }
      }
    }

    if (best) {
      animateOffsetTo(best.tx, best.ty);
      scheduleResume(3500); // 3.5 sn sonra autopan devam
    }
  };

  // suggestions
  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return images.filter((it) => it.name.toLowerCase().includes(q)).slice(0, 8);
  }, [query, images]);

  // Reset active index when suggestions change
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // lightbox close
  const closeLightbox = () => {
    setLightbox(null); /* autopan kullanıcı açarsa devam */
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100dvw",
        height: "100dvh",
        overflow: "hidden",
      }}
    >
      {/* gallery plane */}
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onWheel={onWheel}
        style={{
          position: "absolute",
          inset: 0,
          background: "#23233a",
          touchAction: "none",
          cursor: "grab",
          zIndex: 1,
        }}
      >
        <div style={{ position: "absolute", left: 0, top: 0 }}>{copies}</div>
      </div>

      {/* search + suggestions */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (
            suggestions.length > 0 &&
            query.trim() &&
            !suggestions.some(
              (s) => s.name.toLowerCase() === query.trim().toLowerCase()
            )
          ) {
            const pick =
              suggestions[
                Math.max(0, Math.min(activeIndex, suggestions.length - 1))
              ];
            setQuery(pick.name);
            focusByName(pick.name);
          } else {
            focusByName(query);
          }
          setShowSuggestions(false);
        }}
        style={{
          position: "absolute",
          left: "50%",
          top: 16,
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "stretch",
          background: "rgba(20,20,22,0.85)",
          padding: "8px 12px",
          borderRadius: 12,
          backdropFilter: "blur(6px)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
          zIndex: 5,
          minWidth: 320,
        }}
      >
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (
                  suggestions.length > 0 &&
                  query.trim() &&
                  !suggestions.some(
                    (s) => s.name.toLowerCase() === query.trim().toLowerCase()
                  )
                ) {
                  e.preventDefault();
                  const pick =
                    suggestions[
                      Math.max(0, Math.min(activeIndex, suggestions.length - 1))
                    ];
                  setQuery(pick.name);
                  focusByName(pick.name);
                  setShowSuggestions(false);
                }
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                if (suggestions.length)
                  setActiveIndex((i) =>
                    Math.min(i + 1, suggestions.length - 1)
                  );
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                if (suggestions.length)
                  setActiveIndex((i) => Math.max(i - 1, 0));
              } else if (e.key === "Escape") {
                setShowSuggestions(false);
              }
            }}
            placeholder="Type username…"
            style={{
              width: "52vw",
              maxWidth: 520,
              border: "1px solid #333",
              background: "transparent",
              color: "#eee",
              padding: "10px 12px",
              borderRadius: 8,
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              border: "1px solid #444",
              background: "#1f1f22",
              color: "#eee",
              padding: "10px 14px",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>

        {showSuggestions && query.trim() !== "" && (
          <div
            style={{
              background: "rgba(15,15,16,0.95)",
              border: "1px solid #333",
              borderRadius: 8,
              overflow: "hidden",
              maxHeight: 180,
              overflowY: "auto",
            }}
            onMouseDown={(e) => e.preventDefault()}
          >
            {suggestions.length === 0 ? (
              <div
                style={{
                  padding: "6px 10px",
                  paddingBottom: "2px",
                  color: "#666",
                }}
              >
                No matches
              </div>
            ) : (
              suggestions.map((it, i) => (
                <div
                  key={it.name}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => {
                    setQuery(it.name);
                    setShowSuggestions(false);
                    setAutoOn(false);
                    focusByName(it.name);
                  }}
                  style={{
                    padding: "8px 10px",
                    paddingBottom: "4px",
                    cursor: "pointer",
                    color: i === activeIndex ? "#fff" : "#ccc",
                    background: i === activeIndex ? "#2a2a2d" : "transparent",
                    borderBottom: "1px solid #222",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ opacity: 0.65 }}>@</span>
                  <span>{it.name}</span>
                </div>
              ))
            )}
          </div>
        )}
      </form>

      {/* pan controls */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 20,
          transform: "translateX(-50%)",
          display: "flex",
          gap: 12,
          alignItems: "center",
          background: "rgba(20,20,22,0.9)",
          padding: "10px 14px",
          borderRadius: 12,
          backdropFilter: "blur(6px)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
          color: "#eee",
          zIndex: 5,
        }}
      >
        <button
          onClick={() => {
            clearResumeTimeout();
            if (autoOn) {
              setAutoOn(false);
              autoPausedRef.current = true;
            } else {
              setAutoOn(true);
              autoPausedRef.current = false;
            }
          }}
          style={{
            border: "1px solid #444",
            background: autoOn ? "#1f1f22" : "#2a2a2d",
            color: "#eee",
            padding: "8px 12px",
            borderRadius: 8,
            cursor: "pointer",
            minWidth: 90,
          }}
        >
          {autoOn ? "Pause" : "Play"}
        </button>

        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          Speed
          <input
            type="range"
            min={0}
            max={200}
            step={1}
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
          <span style={{ width: 42, textAlign: "right" }}>{speed}</span>
          <span>px/s</span>
        </label>
      </div>

      {/* lightbox */}
      {lightbox && (
        <div
          onClick={closeLightbox}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            padding: "4vh 6vw",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "inline-block",
              maxWidth: "82vw",
              maxHeight: "82vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.name}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "82vh",
                objectFit: "contain",
                borderRadius: 12,
                display: "block",
              }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "-16px",
                right: "-16px",
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(0,0,0,0.55)",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: 10,
                cursor: "pointer",
                lineHeight: 1,
                fontSize: 18,
                backdropFilter: "blur(4px)",
              }}
            >
              ×
            </button>
            <a
              href={`https://twitter.com/${encodeURIComponent(lightbox.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                right: 12,
                bottom: 12,
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(0,0,0,0.55)",
                color: "#fff",
                padding: "8px 14px",
                paddingBottom: "2px",
                borderRadius: 999,
                textDecoration: "none",
                fontSize: 15,
                backdropFilter: "blur(4px)",
              }}
            >
              Go to @{lightbox.name}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function Tile({
  images,
  startIndex,
  cols,
  rows,
  cellW,
  cellH,
  gridW,
  gridH,
  gapCss,
  outerGapPx,
  openLightbox,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${cellW}px)`,
        gap: gapCss,
        width: `${gridW}px`,
        height: `${gridH}px`,
        padding: `${outerGapPx / 2}px`,
        boxSizing: "content-box",
      }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => {
        const item = images[(startIndex + i) % images.length];
        return (
          <figure key={i} data-no-pan style={{ margin: 0 }}>
            <img
              src={item.src}
              alt={item.name}
              draggable="false"
              data-no-pan
              loading="lazy"
              decoding="async"
              onClick={() => openLightbox(item)}
              style={{
                width: `${cellW}px`,
                height: `${cellH}px`,
                objectFit: "cover",
                userSelect: "none",
                display: "block",
                borderRadius: "10px",
                cursor: "zoom-in",
              }}
            />
            <figcaption
              style={{
                color: "#bbb",
                fontSize: 12,
                marginTop: 6,
                textAlign: "center",
              }}
            >
              @{item.name}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
