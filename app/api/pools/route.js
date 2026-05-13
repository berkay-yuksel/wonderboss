import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
})

const POOLS_KEY = 'wonder_boss_pools'
const ADMIN_PASS = process.env.ADMIN_PASSWORD || '22062206'

// Default pool data
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
const POOL_LABELS = ['Pool Alpha','Pool Beta','Pool Gamma','Pool Delta','Pool Epsilon','Pool Zeta','Pool Eta','Pool Theta','Pool Iota','Pool Kappa']

function defaultPools() {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i,
    label: POOL_LABELS[i],
    locked: i !== 0,
    status: i === 0 ? 'live' : 'locked',
    lockMsg: LOCK_MSGS[i],
    nfts: i === 0 ? [
      { name: 'Genesis Ape #001', price: 12.5, imgUrl: '', tier: 1, awarded: false, winId: '', txHash: '', txUrl: '', awardImgUrl: '' },
      { name: 'Phantom Wolf #088', price: 6.2,  imgUrl: '', tier: 2, awarded: false, winId: '', txHash: '', txUrl: '', awardImgUrl: '' },
      { name: 'Neon Tiger #420',   price: 3.8,  imgUrl: '', tier: 2, awarded: false, winId: '', txHash: '', txUrl: '', awardImgUrl: '' },
      { name: 'Shadow Fox #012',   price: 1.5,  imgUrl: '', tier: 3, awarded: false, winId: '', txHash: '', txUrl: '', awardImgUrl: '' },
      { name: 'Pixel Cat #777',    price: 0.9,  imgUrl: '', tier: 3, awarded: false, winId: '', txHash: '', txUrl: '', awardImgUrl: '' },
      { name: 'Ghost Owl #333',    price: 0.7,  imgUrl: '', tier: 3, awarded: false, winId: '', txHash: '', txUrl: '', awardImgUrl: '' },
      { name: 'Cyber Panda #099',  price: 0.5,  imgUrl: '', tier: 3, awarded: false, winId: '', txHash: '', txUrl: '', awardImgUrl: '' },
    ] : []
  }))
}

// GET — herkese açık
export async function GET() {
  try {
    const data = await redis.get(POOLS_KEY)
    const pools = data || defaultPools()
    return Response.json({ pools })
  } catch (err) {
    console.error('GET /api/pools error:', err)
    return Response.json({ pools: defaultPools() })
  }
}

// POST — sadece admin
export async function POST(req) {
  try {
    const body = await req.json()
    const { password, pools } = body

    if (password !== ADMIN_PASS) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await redis.set(POOLS_KEY, pools)
    return Response.json({ ok: true })
  } catch (err) {
    console.error('POST /api/pools error:', err)
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}