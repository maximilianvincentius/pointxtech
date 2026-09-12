/**
 * Geo helpers for the 3D globe.
 *
 * Kept free of three.js / React so the math can be checked with plain node
 * (see geo.check.ts) and reused by any renderer.
 */

export type NodeCategory = 'API' | 'SERVER' | 'DB' | 'CLOUD'

export type GlobeNode = {
  id: string
  /** Human label, e.g. "DATABASE-US-EAST" */
  label: string
  category: NodeCategory
  lat: number
  lng: number
  /** Round-trip latency in ms, shown on the callout */
  latencyMs: number
  status: 'Active' | 'Degraded'
  /** Cartesian position on the sphere surface */
  position: [number, number, number]
}

const DEG = Math.PI / 180

/**
 * Convert latitude/longitude to Cartesian (X, Y, Z) on a sphere.
 *
 * Two angles describe any point on a sphere:
 *   phi   = polar angle, measured from the north pole  -> (90 - lat)
 *   theta = azimuthal angle, measured around the axis  -> (lng + 180)
 *
 * The +180 on longitude and the negated X align the point with how three.js
 * wraps an equirectangular texture onto a SphereGeometry, so a marker at
 * (lat, lng) sits on the matching pixel of the map.
 *
 *   x = -r * sin(phi) * cos(theta)
 *   y =  r * cos(phi)            // +Y is the north pole
 *   z =  r * sin(phi) * sin(theta)
 */
export const latLngToVector3 = (
  lat: number,
  lng: number,
  radius: number,
): [number, number, number] => {
  const phi = (90 - lat) * DEG
  const theta = (lng + 180) * DEG
  const sinPhi = Math.sin(phi)

  return [
    -radius * sinPhi * Math.cos(theta),
    radius * Math.cos(phi),
    radius * sinPhi * Math.sin(theta),
  ]
}

/** Coarse cloud-style region code derived from the coordinates. */
export const regionCode = (lat: number, lng: number): string => {
  const ns = lat >= 0 ? 'NORTH' : 'SOUTH'

  if (lng >= -170 && lng < -30) return lat >= 25 ? 'US-EAST' : 'SA-' + ns
  if (lng >= -30 && lng < 40) return lat >= 35 ? 'EU-WEST' : 'AF-CENTRAL'
  if (lng >= 40 && lng < 100) return lat >= 30 ? 'ME-CENTRAL' : 'AP-SOUTH'
  return lat >= 0 ? 'AP-NORTHEAST' : 'AP-SOUTHEAST'
}

const CATEGORY_LABEL: Record<NodeCategory, string> = {
  API: 'GATEWAY',
  SERVER: 'COMPUTE',
  DB: 'DATABASE',
  CLOUD: 'EDGE',
}

const CATEGORIES: NodeCategory[] = ['API', 'SERVER', 'DB', 'CLOUD']

/**
 * Small deterministic PRNG (mulberry32).
 * Deterministic on purpose: the layout stays identical across re-renders,
 * hot reloads and refreshes, so the visual never jumps around.
 */
export const mulberry32 = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

/** Generate `count` pseudo-random nodes spread over the sphere. */
export const generateNodes = (count: number, radius: number, seed = 20260912): GlobeNode[] => {
  const rand = mulberry32(seed)

  return Array.from({ length: count }, (_, i) => {
    // asin keeps latitudes area-correct instead of clustering at the poles
    const lat = Math.round(Math.asin(rand() * 1.6 - 0.8) / DEG)
    const lng = Math.round(rand() * 360 - 180)
    const category = CATEGORIES[Math.floor(rand() * CATEGORIES.length)]

    return {
      id: `node-${i}`,
      label: `${CATEGORY_LABEL[category]}-${regionCode(lat, lng)}`,
      category,
      lat,
      lng,
      latencyMs: 8 + Math.floor(rand() * 60),
      status: rand() > 0.12 ? 'Active' : 'Degraded',
      position: latLngToVector3(lat, lng, radius),
    }
  })
}

/** Index pairs used to draw connection arcs between a few nodes. */
export const arcPairs = (count: number, links: number, seed = 77): [number, number][] => {
  const rand = mulberry32(seed)
  const pairs: [number, number][] = []

  while (pairs.length < links) {
    const a = Math.floor(rand() * count)
    const b = Math.floor(rand() * count)
    if (a === b) continue
    if (pairs.some(([x, y]) => (x === a && y === b) || (x === b && y === a))) continue
    pairs.push([a, b])
  }

  return pairs
}
