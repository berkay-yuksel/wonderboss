'use client'

import { useEffect, useState } from 'react'

const LOCK_MSGS = [
  'This pool is not yet open. It will unlock during the mint.',
  'This pool is locked. It will open when its turn comes.',
  'Keep minting — this pool will be revealed soon.',
  'Hidden pool — waiting to be unlocked.',
  'These rewards will be released shortly.',
  'Locked pool. More mints required.',
  'Surprise rewards hidden here!',
  'Keep minting to unlock this pool.',
  'Coming soon... what lies behind the lock?',
  'Final pool. The biggest rewards may be here.',
]

export default function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState('')
  const [pwErr, setPwErr] = useState(false)
  const [pools, setPools] = useState([])
  const [activePool, setActivePool] = useState(0)
  const [saving, setSaving] = useState(false)
  const [saveMsg, setSaveMsg] = useState('')
  const [awardModal, setAwardModal] = useState(null) // {pi, ni}

  useEffect(() => {
    fetch('/api/pools')
      .then(r => r.json())
      .then(d => setPools(d.pools))
  }, [])

  function login() {
    fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pw }),
    }).then(r => {
      if (r.status === 401) { setPwErr(true); return }
      setAuthed(true); setPwErr(false)
    })
  }

  async function saveAll() {
    setSaving(true)
    const res = await fetch('/api/pools', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pw, pools }),
    })
    setSaving(false)
    if (res.ok) { setSaveMsg('✓ Saved!'); setTimeout(() => setSaveMsg(''), 2500) }
    else setSaveMsg('Error saving')
  }

  function copyFromPool(fromPi) {
    if (fromPi === activePool) return
    const src = pools[fromPi]
    // NFT'leri kopyala ama awarded bilgilerini sıfırla
    const copiedNfts = src.nfts.map(n => ({ ...n, awarded: false, winId: '', txHash: '', txUrl: '', awardImgUrl: '' }))
    setPools(prev => prev.map((p, i) => i !== activePool ? p : { ...p, nfts: copiedNfts }))
  }

  function updatePool(pi, key, val) {
    setPools(prev => prev.map((p, i) => i === pi ? { ...p, [key]: val, locked: key === 'status' ? val === 'locked' : p.locked } : p))
  }

  function updateNft(pi, ni, key, val) {
    setPools(prev => prev.map((p, i) => i !== pi ? p : {
      ...p,
      nfts: p.nfts.map((n, j) => j !== ni ? n : { ...n, [key]: val })
    }))
  }

  function addNft(pi) {
    setPools(prev => prev.map((p, i) => i !== pi ? p : {
      ...p,
      nfts: [...p.nfts, { name: 'New NFT', price: 1.0, imgUrl: '', tier: 1, awarded: false, winId: '', txHash: '', txUrl: '', awardImgUrl: '' }]
    }))
  }

  function removeNft(pi, ni) {
    setPools(prev => prev.map((p, i) => i !== pi ? p : { ...p, nfts: p.nfts.filter((_, j) => j !== ni) }))
  }

  function confirmAward(pi, ni, data) {
    setPools(prev => prev.map((p, i) => i !== pi ? p : {
      ...p,
      nfts: p.nfts.map((n, j) => j !== ni ? n : { ...n, awarded: true, ...data })
    }))
    setAwardModal(null)
  }

  if (!authed) return (
    <div style={s.page}>
      <div style={s.loginBox}>
        <div style={s.loginTitle}>⚙ ADMIN</div>
        <input
          type="password"
          placeholder="Password"
          value={pw}
          onChange={e => setPw(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && login()}
          style={s.input}
        />
        {pwErr && <div style={{ color: '#E24B4A', fontSize: 12, fontFamily: 'Space Mono, monospace' }}>Incorrect password.</div>}
        <button style={s.btnPrimary} onClick={login}>Login</button>
      </div>
    </div>
  )

  const pool = pools[activePool]

  return (
    <div style={s.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Syne', sans-serif; background: #0A0A0F; color: #F0EDE0; }
        input, select { outline: none; }
        input:focus, select:focus { border-color: #9945FF !important; }
      `}</style>

      {/* AWARD MODAL */}
      {awardModal && (
        <AwardModal
          nft={pools[awardModal.pi].nfts[awardModal.ni]}
          onConfirm={data => confirmAward(awardModal.pi, awardModal.ni, data)}
          onClose={() => setAwardModal(null)}
        />
      )}

      <div style={s.adminWrap}>
        <div style={s.adminHeader}>
          <span style={s.adminTitle}>⚙ ADMIN PANEL</span>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {saveMsg && <span style={{ fontSize: 11, color: '#14F195', fontFamily: 'Space Mono, monospace' }}>{saveMsg}</span>}
            <button style={s.btnPrimary} onClick={saveAll} disabled={saving}>
              {saving ? 'Saving...' : '💾 Save All'}
            </button>
          </div>
        </div>

        {/* Pool tabs */}
        <div style={s.tabs}>
          {pools.map((p, i) => (
            <button
              key={i}
              style={{ ...s.tab, ...(i === activePool ? s.tabActive : {}) }}
              onClick={() => setActivePool(i)}
            >
              P{i + 1}
            </button>
          ))}
        </div>

        {pool && (
          <div style={s.editor}>
            {/* Pool settings */}
            <div style={s.editorHeader}>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 12 }}>{pool.label}</span>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                <select
                  defaultValue=""
                  onChange={e => { if(e.target.value !== '') { copyFromPool(parseInt(e.target.value)); e.target.value = '' } }}
                  style={{ ...s.select, marginBottom: 0, fontSize: 10, padding: '4px 8px', color: '#888070' }}
                >
                  <option value="" disabled>📋 Copy NFTs from...</option>
                  {pools.map((p, i) => i !== activePool && (
                    <option key={i} value={i}>← {p.label}</option>
                  ))}
                </select>
                <select
                  value={pool.status || (pool.locked ? 'locked' : 'live')}
                  onChange={e => updatePool(activePool, 'status', e.target.value)}
                  style={{ ...s.select, marginBottom: 0 }}
                >
                  <option value="live">🟢 Live</option>
                  <option value="next">🟡 Next</option>
                  <option value="locked">🔒 Locked</option>
                </select>
              </div>
            </div>

            <label style={s.label}>Pool Name</label>
            <input style={s.input} value={pool.label} onChange={e => updatePool(activePool, 'label', e.target.value)} />

            <label style={s.label}>Lock Message</label>
            <input style={s.input} value={pool.lockMsg} onChange={e => updatePool(activePool, 'lockMsg', e.target.value)} />

            {/* NFTs */}
            <div style={{ marginTop: 16, fontSize: 11, color: '#888070', fontFamily: 'Space Mono, monospace', marginBottom: 8 }}>// nfts</div>

            {pool.nfts.map((n, ni) => (
              <NftAdminItem
                key={ni}
                n={n} pi={activePool} ni={ni}
                onChange={(key, val) => updateNft(activePool, ni, key, val)}
                onRemove={() => removeNft(activePool, ni)}
                onAward={() => setAwardModal({ pi: activePool, ni })}
              />
            ))}

            <button style={s.addBtn} onClick={() => addNft(activePool)}>+ Add NFT</button>
          </div>
        )}
      </div>
    </div>
  )
}

function NftAdminItem({ n, ni, onChange, onRemove, onAward }) {
  return (
    <div style={s.nftItem}>
      <div style={s.nftHeader}>
        <span style={{ fontSize: 11, fontFamily: 'Space Mono, monospace', color: '#888070' }}>
          NFT #{ni + 1}{n.awarded ? ' ✅' : ''}
        </span>
        <div style={{ display: 'flex', gap: 6 }}>
          <button style={{ ...s.btnSm, borderColor: 'rgba(20,241,149,0.4)', color: '#14F195' }} onClick={onAward}>🏆 Award</button>
          <button style={{ ...s.btnSm, borderColor: 'rgba(226,75,74,0.3)', color: '#E24B4A' }} onClick={onRemove}>✕</button>
        </div>
      </div>
      <div style={s.nftRow}>
        <div>
          <label style={s.label}>Name</label>
          <input style={s.input} value={n.name} onChange={e => onChange('name', e.target.value)} placeholder="NFT name" />
        </div>
        <div>
          <label style={s.label}>Price (SOL)</label>
          <input style={s.input} type="number" value={n.price} onChange={e => onChange('price', parseFloat(e.target.value) || 0)} step="0.01" min="0" />
        </div>
      </div>
      <div style={s.nftRow}>
        <div>
          <label style={s.label}>Tier</label>
          <select style={s.select} value={n.tier || 1} onChange={e => onChange('tier', parseInt(e.target.value))}>
            <option value={1}>🟣 Tier 1 — Rare (large)</option>
            <option value={2}>🟢 Tier 2 — Uncommon (medium)</option>
            <option value={3}>⚪ Tier 3 — Common (small)</option>
          </select>
        </div>
        <div>
          <label style={s.label}>Image URL</label>
          <input style={s.input} value={n.imgUrl || ''} onChange={e => onChange('imgUrl', e.target.value)} placeholder="https://..." />
        </div>
      </div>
    </div>
  )
}

function AwardModal({ nft, onConfirm, onClose }) {
  const [winId, setWinId] = useState(nft.winId || '')
  const [txHash, setTxHash] = useState(nft.txHash || '')
  const [txUrl, setTxUrl] = useState(nft.txUrl || '')
  const [awardImgUrl, setAwardImgUrl] = useState(nft.awardImgUrl || '')

  return (
    <div style={s.modalOverlay}>
      <div style={s.modalBox}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: '#14F195', marginBottom: 14, fontFamily: 'Space Mono, monospace' }}>🏆 Confirm Award</h3>
        <label style={s.label}>Winner ID</label>
        <input style={s.input} value={winId} onChange={e => setWinId(e.target.value)} placeholder="e.g. #0241" />
        <label style={s.label}>Winner Wallet</label>
        <input style={s.input} value={txHash} onChange={e => setTxHash(e.target.value)} placeholder="e.g. 7xKp..." />
        <label style={s.label}>Solscan / Explorer URL</label>
        <input style={s.input} value={txUrl} onChange={e => setTxUrl(e.target.value)} placeholder="https://solscan.io/tx/..." />
        <label style={s.label}>Winner NFT Image URL (optional)</label>
        <input style={s.input} value={awardImgUrl} onChange={e => setAwardImgUrl(e.target.value)} placeholder="https://..." />
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <button style={s.btnCancel} onClick={onClose}>Cancel</button>
          <button style={s.btnConfirm} onClick={() => onConfirm({ winId, txHash, txUrl, awardImgUrl })}>Confirm ✓</button>
        </div>
      </div>
    </div>
  )
}

// Styles
const s = {
  page: { background: '#0A0A0F', minHeight: '100vh', fontFamily: 'Syne, sans-serif', color: '#F0EDE0', padding: 20 },
  loginBox: { maxWidth: 360, margin: '80px auto', background: '#0F0F1A', border: '0.5px solid rgba(153,69,255,0.4)', borderRadius: 14, padding: 28, display: 'flex', flexDirection: 'column', gap: 12 },
  loginTitle: { fontSize: 16, fontWeight: 800, color: '#9945FF', fontFamily: 'Space Mono, monospace' },
  adminWrap: { maxWidth: 720, margin: '0 auto' },
  adminHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingTop: 12 },
  adminTitle: { fontSize: 16, fontWeight: 800, color: '#9945FF', fontFamily: 'Space Mono, monospace' },
  tabs: { display: 'flex', gap: 6, marginBottom: 18, borderBottom: '0.5px solid rgba(153,69,255,0.18)', paddingBottom: 10, flexWrap: 'wrap' },
  tab: { background: 'transparent', border: '0.5px solid transparent', color: '#888070', padding: '6px 12px', borderRadius: 6, cursor: 'pointer', fontFamily: 'Space Mono, monospace', fontSize: 11 },
  tabActive: { borderColor: '#9945FF', color: '#9945FF', background: 'rgba(153,69,255,0.08)' },
  editor: { border: '0.5px solid rgba(153,69,255,0.18)', borderRadius: 8, padding: 16 },
  editorHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  label: { fontSize: 11, color: '#888070', display: 'block', marginBottom: 4, fontFamily: 'Space Mono, monospace' },
  input: { background: '#181828', border: '0.5px solid rgba(153,69,255,0.18)', color: '#F0EDE0', padding: '7px 10px', borderRadius: 6, fontFamily: 'Space Mono, monospace', fontSize: 11, width: '100%', marginBottom: 8 },
  select: { background: '#181828', border: '0.5px solid rgba(153,69,255,0.18)', color: '#F0EDE0', padding: '6px 10px', borderRadius: 6, fontFamily: 'Space Mono, monospace', fontSize: 11, cursor: 'pointer', width: '100%', marginBottom: 8 },
  btnPrimary: { background: '#9945FF', color: '#fff', border: 'none', padding: '9px 18px', borderRadius: 7, fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, cursor: 'pointer' },
  btnSm: { background: 'transparent', border: '0.5px solid rgba(153,69,255,0.18)', color: '#888070', padding: '3px 8px', borderRadius: 5, cursor: 'pointer', fontSize: 10, fontFamily: 'Space Mono, monospace' },
  btnCancel: { flex: 1, background: 'transparent', border: '0.5px solid rgba(153,69,255,0.18)', color: '#888070', padding: '8px 14px', borderRadius: 6, cursor: 'pointer', fontFamily: 'Space Mono, monospace', fontSize: 11 },
  btnConfirm: { flex: 1, background: 'rgba(20,241,149,0.15)', border: '0.5px solid rgba(20,241,149,0.5)', color: '#14F195', padding: '8px 14px', borderRadius: 6, cursor: 'pointer', fontFamily: 'Space Mono, monospace', fontSize: 11 },
  addBtn: { background: 'transparent', border: '0.5px dashed rgba(153,69,255,0.3)', color: '#888070', padding: 8, borderRadius: 7, cursor: 'pointer', fontSize: 11, fontFamily: 'Space Mono, monospace', width: '100%', marginTop: 4 },
  nftItem: { border: '0.5px solid rgba(153,69,255,0.18)', borderRadius: 7, padding: 10, marginBottom: 8, background: '#0D0D18' },
  nftHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  nftRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 },
  modalOverlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  modalBox: { background: '#0F0F1A', border: '0.5px solid rgba(20,241,149,0.4)', borderRadius: 12, padding: 20, width: 320 },
}