import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html, Line, OrbitControls } from '@react-three/drei'
import { Cloud, Database, RadioTower, Server } from 'lucide-react'
import { useEffect, useMemo, useRef, useState, type ComponentRef, type ComponentType } from 'react'
import {
  BackSide,
  CanvasTexture,
  Color,
  Group,
  LinearFilter,
  QuadraticBezierCurve3,
  SRGBColorSpace,
  Vector3,
  type Texture,
} from 'three'
import { arcPairs, generateNodes, type GlobeNode, type NodeCategory } from '@/lib/geo'

const GLOBE_RADIUS = 2
const NODE_RADIUS = 2.05
const NODE_COUNT = 10

const CATEGORY_ICON: Record<NodeCategory, ComponentType<{ className?: string }>> = {
  API: RadioTower,
  SERVER: Server,
  DB: Database,
  CLOUD: Cloud,
}

const CATEGORY_COLOR: Record<NodeCategory, string> = {
  API: '#00e599',
  SERVER: '#78a9ff',
  DB: '#d7ff3f',
  CLOUD: '#c9d4e3',
}

const CONTINENTS: [number, number][][] = [
  [[-168, 65], [-140, 70], [-112, 72], [-82, 55], [-60, 50], [-78, 25], [-100, 18], [-118, 30], [-130, 50]],
  [[-82, 12], [-68, 9], [-50, -2], [-37, -20], [-53, -55], [-70, -42], [-78, -12]],
  [[-52, 82], [-20, 75], [-32, 60], [-48, 58]],
  [[-10, 36], [8, 44], [28, 40], [36, 31], [50, 12], [42, -12], [28, -35], [12, -35], [-5, 5]],
  [[-10, 36], [-8, 58], [22, 72], [55, 70], [90, 76], [130, 56], [160, 62], [178, 48], [145, 35], [120, 20], [103, 7], [78, 9], [62, 25], [40, 32], [25, 42], [8, 44]],
  [[112, -12], [151, -11], [155, -28], [137, -43], [115, -34]],
  [[44, -13], [51, -16], [49, -27], [44, -25]],
]

function createEarthTexture(): CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  if (!ctx) return new CanvasTexture(canvas)

  const px = ([lng, lat]: [number, number]) =>
    [((lng + 180) / 360) * canvas.width, ((90 - lat) / 180) * canvas.height] as const

  ctx.fillStyle = '#06110f'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.strokeStyle = 'rgba(0, 229, 153, 0.10)'
  ctx.lineWidth = 1
  for (let lng = -150; lng <= 150; lng += 30) {
    const [x] = px([lng, 0])
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvas.height)
    ctx.stroke()
  }
  for (let lat = -60; lat <= 60; lat += 30) {
    const [, y] = px([0, lat])
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(canvas.width, y)
    ctx.stroke()
  }

  for (const c of CONTINENTS) {
    ctx.beginPath()
    c.forEach((p, i) => {
      const [x, y] = px(p)
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })
    ctx.closePath()
    ctx.fillStyle = '#16382e'
    ctx.fill()
    ctx.strokeStyle = 'rgba(118, 255, 201, 0.40)'
    ctx.lineWidth = 1.5
    ctx.stroke()
  }

  const tex = new CanvasTexture(canvas)
  tex.colorSpace = SRGBColorSpace
  tex.minFilter = LinearFilter
  return tex
}

const GlobeSurface = () => {
  const texture = useMemo(createEarthTexture, [])
  useEffect(() => () => texture.dispose(), [texture])

  return (
    <group rotation={[0, -0.55, -0.08]}>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        <meshStandardMaterial map={texture} roughness={0.8} metalness={0.05} />
      </mesh>
      <mesh scale={1.03}>
        <sphereGeometry args={[GLOBE_RADIUS, 48, 48]} />
        <meshBasicMaterial color="#00e599" transparent opacity={0.06} side={BackSide} />
      </mesh>
    </group>
  )
}

const NodeMarker = ({ node }: { node: GlobeNode }) => {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const groupRef = useRef<Group>(null)
  const { camera } = useThree()
  const Icon = CATEGORY_ICON[node.category]
  const color = CATEGORY_COLOR[node.category]

  useFrame(() => {
    if (!groupRef.current) return
    const nodePos = new Vector3(...node.position).normalize()
    const cameraPos = camera.position.clone().normalize()
    setVisible(nodePos.dot(cameraPos) > 0)
  })

  return (
    <group ref={groupRef} position={node.position} visible={visible}>
      <mesh>
        <sphereGeometry args={[0.025, 12, 12]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
      <Html center zindexRange={[999999, 999998]}>
        <button
          type="button"
          aria-label={`${node.label}, ${node.category}`}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          onPointerEnter={() => setOpen(true)}
          onPointerLeave={() => setOpen(false)}
          className="group relative block rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <span
            className="relative grid h-6 w-6 place-items-center rounded-full border bg-[#07100e] transition-colors group-hover:bg-[#0f221d]"
            style={{ borderColor: color }}
          >
            <Icon className="h-3 w-3" style={{ color }} />
          </span>
          <span
            className={`absolute left-1/2 top-8 w-48 -translate-x-1/2 border border-white/15 bg-[#0a0c0c]/95 p-3 text-left transition-opacity ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          >
            <span className="flex items-center justify-between gap-2 border-b border-white/10 pb-2">
              <span className="truncate text-[10px] font-semibold tracking-[0.1em] text-white">{node.label}</span>
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: node.status === 'Active' ? '#00e599' : '#d7ff3f' }}
              />
            </span>
            <span className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 font-mono text-[9px] text-zinc-400">
              <span>{node.status}</span>
              <span className="text-right">Lat: {node.latencyMs}ms</span>
              <span>{node.lat.toFixed(1)}° LAT</span>
              <span className="text-right">{node.lng.toFixed(1)}° LNG</span>
            </span>
          </span>
        </button>
      </Html>
    </group>
  )
}

const ConnectionArc = ({ from, to }: { from: GlobeNode; to: GlobeNode }) => {
  const points = useMemo(() => {
    const start = new Vector3(...from.position)
    const end = new Vector3(...to.position)
    const lift = GLOBE_RADIUS + 0.2 + start.distanceTo(end) * 0.12
    const mid = start.clone().add(end).normalize().multiplyScalar(lift)
    return new QuadraticBezierCurve3(start, mid, end).getPoints(40)
  }, [from, to])

  return <Line points={points} color="#00e599" lineWidth={0.7} transparent opacity={0.3} />
}

const GlobeScene = ({ reducedMotion }: { reducedMotion: boolean }) => {
  const controls = useRef<ComponentRef<typeof OrbitControls>>(null)
  const resumeAt = useRef(0)
  const nodes = useMemo(() => generateNodes(NODE_COUNT, NODE_RADIUS), [])
  const connections = useMemo(
    () => arcPairs(nodes.length, 6).map(([a, b]) => [nodes[a], nodes[b]] as const),
    [nodes],
  )

  useFrame(({ camera }, delta) => {
    const cur = controls.current
    if (!cur) return
    const target = performance.now() < resumeAt.current ? 0 : 0.32
    cur.autoRotateSpeed += (target - cur.autoRotateSpeed) * Math.min(1, delta * 2.8)
  })

  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 3, 5]} intensity={2.2} color={new Color('#d9fff1')} />
      <pointLight position={[-4, -2, -3]} intensity={5} color="#00e599" />
      <GlobeSurface />
      {connections.map(([from, to]) => (
        <ConnectionArc key={`${from.id}-${to.id}`} from={from} to={to} />
      ))}
      {nodes.map((node) => <NodeMarker key={node.id} node={node} />)}
      <OrbitControls
        ref={controls}
        makeDefault
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.32}
        enableDamping
        dampingFactor={0.2}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={0.2}
        maxPolarAngle={Math.PI - 0.1}
        onStart={() => { resumeAt.current = Number.POSITIVE_INFINITY }}
        onEnd={() => { resumeAt.current = performance.now() + 1400 }}
      />
    </>
  )
}

export const EarthGlobe = () => {
  const [reducedMotion, setReducedMotion] = useState(false)
  const nodes = useMemo(() => generateNodes(NODE_COUNT, NODE_RADIUS), [])

  useEffect(() => {
    const q = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReducedMotion(q.matches)
    sync()
    q.addEventListener('change', sync)
    return () => q.removeEventListener('change', sync)
  }, [])

  return (
    <div className="relative h-full w-full">
      <Canvas
        aria-label="Interactive 3D globe showing global infrastructure nodes"
        className="absolute inset-0 cursor-grab touch-none overflow-hidden active:cursor-grabbing"
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        fallback={<div className="grid h-full place-items-center text-xs tracking-widest text-muted">3D unavailable</div>}
      >
        <GlobeScene reducedMotion={reducedMotion} />
      </Canvas>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-4 top-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-muted sm:inset-x-6 sm:top-6">
        <span>Global infrastructure</span>
        <span className="flex items-center gap-2"><i className="h-1.5 w-1.5 rounded-full bg-accent" />{NODE_COUNT} nodes online</span>
      </div>

      <ul className="sr-only">
        {nodes.map((node) => (
          <li key={node.id}>{node.label}: {node.status}, {node.latencyMs} millisecond latency, latitude {node.lat}, longitude {node.lng}</li>
        ))}
      </ul>
    </div>
  )
}
