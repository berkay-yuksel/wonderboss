"use client";

import { useEffect, useState } from "react";

export default function RewardsPage() {
  const [pools, setPools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = () =>
      fetch("/api/pools")
        .then((r) => r.json())
        .then((d) => {
          setPools(d.pools);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    load();
    const interval = setInterval(load, 30000);
    return () => clearInterval(interval);
  }, []);

  const totalNfts = pools.reduce((s, p) => s + p.nfts.length, 0);
  const awarded = pools.reduce(
    (s, p) => s + p.nfts.filter((n) => n.awarded).length,
    0,
  );
  const totalVal = pools.reduce(
    (s, p) => s + p.nfts.reduce((a, n) => a + (n.price || 0), 0),
    0,
  );

  if (loading)
    return (
      <div
        style={{
          background: "#0A0A0F",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#888070",
          fontFamily: "Space Mono, monospace",
          fontSize: 13,
        }}
      >
        loading pools...
      </div>
    );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --gold: #9945FF; --sol: #14F195;
          --bg-dark: #0A0A0F; --bg-card: #11111A; --bg-card2: #18182A;
          --border-dim: rgba(153,69,255,0.18);
          --text-main: #F0EDE0; --text-dim: #888070;
          --unit: 100px; --grid-width: 1600px;
        }
        body { font-family: 'Syne', sans-serif; background: var(--bg-dark); color: var(--text-main); }

        /* ── HERO ── */
        .hero { text-align: center; padding: 48px 24px 0; }
        .hero-title { font-size: clamp(28px, 4vw, 56px); font-weight: 800; color: #fff; letter-spacing: 0.04em; line-height: 1.1; }
        .hero-img { display: block; margin: 28px auto 0; max-width: 680px; width: 100%; border-radius: 12px; }
        .hero-desc { margin: 20px auto 0; max-width: 560px; color: var(--text-dim); font-family: 'Space Mono', monospace; font-size: 12px; line-height: 1.8; }
        .hero-desc em { color: var(--sol); font-style: normal; }

        /* ── WRAP / STATS ── */
        .rewards-wrap { padding: 0 28px 60px; max-width: calc(var(--grid-width) + 56px); margin: 0 auto; }
        .stats { display: flex; justify-content: center; gap: 48px; padding: 28px 24px 24px; }
        .stat { text-align: center; }
        .stat-val { font-size: 26px; font-weight: 800; color: var(--sol); font-family: 'Space Mono', monospace; }
        .stat-lbl { font-size: 10px; color: var(--text-dim); margin-top: 3px; letter-spacing: 0.1em; text-transform: uppercase; }
        .section-title { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--text-dim); margin-bottom: 20px; font-family: 'Space Mono', monospace; }
        #pools-grid { display: flex; flex-direction: column; gap: 12px; }

        /* ── POOL CARD ── */
        .pool-card { border: 0.5px solid var(--border-dim); border-radius: 6px; background: var(--bg-card); display: flex; flex-direction: column; transition: border-color 0.25s, transform 0.2s, box-shadow 0.25s; animation: cardIn 0.35s ease both; overflow: hidden; }
        .pool-card:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(153,69,255,0.12); }
        .pool-card.active { border-color: rgba(153,69,255,0.55); }
        .pool-card.locked { border-color: rgba(255,255,255,0.06); opacity: 0.78; }
        .pool-card.next   { border-color: rgba(255,200,0,0.45); }
        .pool-card.locked .pool-body { display: none !important; }
        .pool-card.hide-labels .nft-info,
        .pool-card.hide-labels .win-tag,
        .pool-card.hide-labels .awarded-badge { display: none !important; }

        .pool-header { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; border-bottom: 0.5px solid var(--border-dim); background: rgba(255,255,255,0.015); }
        .pool-title { font-size: 12px; font-weight: 700; letter-spacing: 0.06em; display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
        .pool-badge { font-size: 9px; font-family: 'Space Mono', monospace; padding: 2px 7px; border-radius: 4px; }
        .badge-active { background: rgba(153,69,255,0.15); color: var(--gold); border: 0.5px solid rgba(153,69,255,0.4); }
        .badge-locked { background: rgba(255,255,255,0.05); color: var(--text-dim); border: 0.5px solid rgba(255,255,255,0.1); }
        .badge-next   { background: rgba(255,200,0,0.12); color: #FFC800; border: 0.5px solid rgba(255,200,0,0.4); }
        .pool-info { font-size: 10px; color: var(--text-dim); font-family: 'Space Mono', monospace; white-space: nowrap; }
        .pool-body { display: block; padding: 0; position: relative; }

        /* ── HEADER BUTTONS ── */
        .btn-labels-toggle { background: transparent; border: 0.5px solid var(--border-dim); color: var(--text-dim); padding: 3px 10px; border-radius: 5px; cursor: pointer; font-family: 'Space Mono', monospace; font-size: 9px; transition: all 0.2s; white-space: nowrap; }
        .btn-labels-toggle:hover, .btn-labels-toggle.active { border-color: var(--gold); color: var(--gold); }
        .btn-winners { background: transparent; border: 0.5px solid rgba(20,241,149,0.3); color: rgba(20,241,149,0.7); padding: 3px 10px; border-radius: 5px; cursor: pointer; font-family: 'Space Mono', monospace; font-size: 9px; transition: all 0.2s; white-space: nowrap; }
        .btn-winners:hover { border-color: #14F195; color: #14F195; }

        /* ── WINNERS MODAL ── */
        .winners-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .winners-box { background: #0F0F1A; border: 0.5px solid rgba(20,241,149,0.35); border-radius: 12px; padding: 24px; width: 100%; max-width: 520px; max-height: 80vh; overflow-y: auto; }
        .winners-box::-webkit-scrollbar { width: 4px; }
        .winners-box::-webkit-scrollbar-thumb { background: rgba(153,69,255,0.3); border-radius: 2px; }
        .winners-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; }
        .winners-title { font-size: 14px; font-weight: 700; color: #14F195; font-family: 'Space Mono', monospace; }
        .winners-close { background: none; border: none; color: #888070; font-size: 22px; cursor: pointer; line-height: 1; padding: 0; }
        .winners-close:hover { color: #fff; }
        .winner-row { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 0.5px solid rgba(255,255,255,0.06); }
        .winner-row:last-child { border-bottom: none; }
        .winner-thumb { width: 48px; height: 48px; border-radius: 6px; flex-shrink: 0; background: #1A1A2E; display: flex; align-items: center; justify-content: center; color: #888070; font-size: 20px; overflow: hidden; }
        .winner-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .winner-meta { flex: 1; min-width: 0; }
        .winner-name { font-size: 12px; font-weight: 700; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .winner-id { font-size: 11px; color: #14F195; font-family: 'Space Mono', monospace; margin-top: 3px; font-weight: 700; }
        .winner-tx { margin-top: 3px; }
        .winner-tx a { font-size: 9px; color: rgba(100,180,255,0.8); text-decoration: none; font-family: 'Space Mono', monospace; }
        .winner-tx a:hover { color: #fff; text-decoration: underline; }
        .winner-price { font-size: 10px; color: var(--sol); font-family: 'Space Mono', monospace; flex-shrink: 0; }
        .winners-empty { text-align: center; color: #888070; font-family: 'Space Mono', monospace; font-size: 11px; padding: 28px 0; opacity: 0.7; }
        .winners-search { width: 100%; background: #181828; border: 0.5px solid rgba(153,69,255,0.2); color: #F0EDE0; padding: 8px 12px; border-radius: 6px; font-family: 'Space Mono', monospace; font-size: 11px; margin-bottom: 14px; outline: none; }
        .winners-search:focus { border-color: #9945FF; }

        /* ── NFT GRID ── */
        .nft-grid { display: grid; grid-template-columns: repeat(16, 100px); grid-auto-rows: 100px; grid-auto-flow: row dense; gap: 0; width: 1600px; }
        .nft-item { position: relative; background: #0a0a12; border-right: 0.5px solid var(--border-dim); border-bottom: 0.5px solid var(--border-dim); overflow: hidden; transition: filter 0.2s; }
        .nft-item:hover { filter: brightness(1.1); }
        .nft-item.awarded { border-right-color: rgba(20,241,149,0.35); border-bottom-color: rgba(20,241,149,0.35); }
        .nft-item.tier-1 { grid-column: span 4; grid-row: span 4; }
        .nft-item.tier-2 { grid-column: span 2; grid-row: span 2; }
        .nft-item.tier-3 { grid-column: span 1; grid-row: span 1; }

        .nft-img, .nft-placeholder { position: absolute; inset: 0; width: 100%; height: 100%; }
        .nft-img { object-fit: cover; display: block; transition: filter 0.3s; }
        .nft-placeholder { display: flex; align-items: center; justify-content: center; font-size: 28px; color: var(--text-dim); background: linear-gradient(135deg, #0F0F1E, #1A1A2E); }
        .nft-item.tier-2 .nft-placeholder { font-size: 20px; }
        .nft-item.tier-3 .nft-placeholder { font-size: 13px; }

        .nft-info { position: absolute; bottom: 0; left: 0; right: 0; z-index: 4; background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, transparent 100%); padding: 20px 10px 8px; display: flex; justify-content: space-between; align-items: flex-end; gap: 6px; }
        .nft-item.tier-2 .nft-info { padding: 14px 8px 6px; }
        .nft-item.tier-3 .nft-info { padding: 10px 4px 3px; }
        .nft-info-left { flex: 1; min-width: 0; }
        .nft-name { font-weight: 700; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 12px; text-shadow: 0 1px 4px rgba(0,0,0,0.8); }
        .nft-price { color: var(--sol); font-family: 'Space Mono', monospace; margin-top: 2px; font-size: 11px; text-shadow: 0 1px 3px rgba(0,0,0,0.8); }
        .nft-item.tier-2 .nft-name  { font-size: 10px; }
        .nft-item.tier-2 .nft-price { font-size: 9px; }
        .nft-item.tier-3 .nft-name  { font-size: 7px; }
        .nft-item.tier-3 .nft-price { font-size: 7px; }
        .nft-item.tier-3 .nft-info  { padding: 10px 4px 3px; }

        .awarded-badge, a.awarded-badge { position: absolute; top: 7px; right: 7px; z-index: 5; color: rgba(100,180,255,0.7); font-size: 9px; font-family: 'Space Mono', monospace; font-weight: 700; padding: 2px 0; text-decoration: none; cursor: pointer; background: none; border: none; }
        a.awarded-badge:hover { color: rgba(100,180,255,1); }
        .nft-item.tier-3 .awarded-badge, .nft-item.tier-3 a.awarded-badge { font-size: 7px; top: 3px; right: 3px; }

        .win-tag { position: absolute; top: 7px; left: 7px; z-index: 5; font-weight: 700; color: #fff; font-size: 12px; letter-spacing: 0.04em; text-shadow: 0 1px 4px rgba(0,0,0,0.9); white-space: nowrap; background: rgba(0,0,0,0.55); border: none; border-radius: 3px; padding: 2px 6px; }
        .nft-item.tier-2 .win-tag { font-size: 12px; }
        .nft-item.tier-3 .win-tag { font-size: 8px; top: 3px; left: 3px; padding: 1px 4px; }

        .pool-empty { color: var(--text-dim); font-size: 10px; font-family: 'Space Mono', monospace; padding: 24px 0; text-align: center; opacity: 0.6; }

        @keyframes cardIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="hero">
        <div className="hero-title">Wonder Boss Mint Rewards</div>
        <img className="hero-img" src="/mintinfo.png" alt="Mint Info" />
        <p className="hero-desc">
          Every <em>500 mints</em> triggers a new draw — one reward pool is
          unlocked, winners are selected, and NFTs are distributed on-chain.
          Complete your mints to increase your chances across all pools.
        </p>
      </div>

      <div className="rewards-wrap">
        <div className="stats">
          <div className="stat">
            <div className="stat-val">{totalNfts}</div>
            <div className="stat-lbl">Total NFTs</div>
          </div>
          <div className="stat">
            <div className="stat-val">{awarded}</div>
            <div className="stat-lbl">Awarded</div>
          </div>
          <div className="stat">
            <div className="stat-val">{totalVal.toFixed(2)} SOL</div>
            <div className="stat-lbl">Total Value</div>
          </div>
        </div>
        <div className="section-title">// reward pools</div>
        <div id="pools-grid">
          {pools.map((pool) => (
            <PoolCard key={pool.id} pool={pool} />
          ))}
        </div>
      </div>
    </>
  );
}

function PoolCard({ pool }) {
  const [hideLabels, setHideLabels] = useState(false);
  const [showWinners, setShowWinners] = useState(false);

  const st = pool.status || (pool.locked ? "locked" : "live");
  const cardClass =
    { live: "active", next: "next", locked: "locked" }[st] || "locked";
  const badgeMap = {
    live: <span className="pool-badge badge-active">🟢</span>,
    next: <span className="pool-badge badge-next">🟡</span>,
    locked: <span className="pool-badge badge-locked">🔒</span>,
  };
  const totalVal = pool.nfts.reduce((s, n) => s + (n.price || 0), 0);
  const winners = pool.nfts.filter((n) => n.awarded && n.winId);
  const lockMsg =
    st === "locked" ? (
      <span
        style={{
          fontSize: 9,
          color: "var(--text-dim)",
          fontFamily: "Space Mono, monospace",
          fontWeight: 400,
          opacity: 0.7,
          marginLeft: 4,
        }}
      >
        {pool.lockMsg}
      </span>
    ) : null;

  return (
    <div
      className={`pool-card ${cardClass} ${hideLabels ? "hide-labels" : ""}`}
    >
      {showWinners && (
        <WinnersModal
          poolLabel={pool.label}
          winners={winners}
          onClose={() => setShowWinners(false)}
        />
      )}
      <div className="pool-header">
        <div className="pool-title">
          {pool.label} {badgeMap[st]} {lockMsg}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {st !== "locked" && (
            <>
              <button
                className="btn-winners"
                onClick={() => setShowWinners(true)}
              >
                🏆 Winners {winners.length > 0 ? `(${winners.length})` : ""}
              </button>
              <button
                className={`btn-labels-toggle ${hideLabels ? "active" : ""}`}
                onClick={() => setHideLabels((h) => !h)}
              >
                {hideLabels ? "⊞ Show Labels" : "⊟ Hide Labels"}
              </button>
            </>
          )}
          <span className="pool-info">
            {pool.nfts.length} NFT{pool.nfts.length !== 1 ? "s" : ""} ·{" "}
            {totalVal.toFixed(2)} SOL
          </span>
        </div>
      </div>
      <div className="pool-body">
        <NftGrid nfts={pool.nfts} />
      </div>
    </div>
  );
}

function WinnersModal({ poolLabel, winners, onClose }) {
  const [search, setSearch] = useState("");
  const filtered = winners.filter(
    (n) =>
      n.winId.toLowerCase().includes(search.toLowerCase()) ||
      n.name.toLowerCase().includes(search.toLowerCase()) ||
      (n.txHash || "").toLowerCase().includes(search.toLowerCase()),
  );
  const shortWallet = (w) =>
    w.length > 16 ? w.slice(0, 8) + "..." + w.slice(-8) : w;

  return (
    <div
      className="winners-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="winners-box">
        <div className="winners-header">
          <div className="winners-title">🏆 {poolLabel} — Winners</div>
          <button className="winners-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <input
          className="winners-search"
          placeholder="Search by name, ID or wallet..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {filtered.length === 0 ? (
          <div className="winners-empty">
            {winners.length === 0 ? "// no winners yet" : "// no results"}
          </div>
        ) : (
          filtered.map((n, i) => (
            <div className="winner-row" key={i}>
              <div className="winner-thumb">
                {n.awardImgUrl || n.imgUrl ? (
                  <img
                    src={n.awardImgUrl || n.imgUrl}
                    alt={n.name}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                ) : (
                  "◈"
                )}
              </div>
              <div className="winner-meta">
                <div className="winner-name">{n.name}</div>
                <div className="winner-id">🏆 Wonder Boss #{n.winId}</div>
                {n.txHash && (
                  <div className="winner-tx">
                    <span style={{ color: "var(--text-dim)" }}>
                      Winner Wallet:{" "}
                    </span>
                    <a
                      href={`https://www.tensor.trade/portfolio?wallet=${n.txHash}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {shortWallet(n.txHash)} ↗
                    </a>
                  </div>
                )}
                {n.txUrl && (
                  <div className="winner-tx">
                    <a href={n.txUrl} target="_blank" rel="noreferrer">
                      View Transaction ↗
                    </a>
                  </div>
                )}
              </div>
              <div className="winner-price">
                {(n.price || 0).toFixed(2)} SOL
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function NftGrid({ nfts }) {
  if (!nfts.length) return <div className="pool-empty">// no NFTs yet</div>;
  const sorted = [...nfts].sort((a, b) => (a.tier || 1) - (b.tier || 1));
  return (
    <div className="nft-grid">
      {sorted.map((n, i) => (
        <NftCard key={i} n={n} />
      ))}
    </div>
  );
}

function NftCard({ n }) {
  const tier = n.tier || 1;
  const displayImg = n.awarded && n.awardImgUrl ? n.awardImgUrl : n.imgUrl;
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`nft-item tier-${tier} ${n.awarded ? "awarded" : ""}`}>
      {n.awarded &&
        (n.txUrl ? (
          <a
            className="awarded-badge"
            href={n.txUrl}
            target="_blank"
            rel="noreferrer"
          >
            TX ↗
          </a>
        ) : (
          <div className="awarded-badge">✓</div>
        ))}
      {displayImg && !imgError ? (
        <img
          className="nft-img"
          src={displayImg}
          alt={n.name}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="nft-placeholder">◈</div>
      )}
      <div className="nft-info">
        <div className="nft-info-left">
          <div className="nft-name">{n.name}</div>
          <div className="nft-price">{(n.price || 0).toFixed(2)} SOL</div>
        </div>
      </div>
      {n.awarded && n.winId && <div className="win-tag">🏆 {n.winId}</div>}
    </div>
  );
}
