'use client'

import { useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { FaArrowLeft, FaSearchPlus, FaSearchMinus, FaUndo } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

type NodeKind = 'core' | 'section' | 'item'
type RelationKind = 'maps' | 'contains' | 'related'

/** All geometry in SVG viewBox units — single coordinate system (fixes HTML/SVG drift). */
const VB = { w: 1060, h: 560 }

interface GraphNode {
  id: string
  label: string
  kind: NodeKind
  x: number
  y: number
  w: number
  h: number
  href?: string
  external?: boolean
}

interface GraphEdge {
  id: string
  from: string
  to: string
  relation: RelationKind
  bend?: number
  labelT?: number
  /** Short theme label for `related` (tags / sector links between artefacts). */
  tag?: string
}

function boundaryExit(cx: number, cy: number, ux: number, uy: number, hw: number, hh: number) {
  const c: number[] = []
  if (ux > 1e-6) c.push(hw / ux)
  if (ux < -1e-6) c.push(-hw / ux)
  if (uy > 1e-6) c.push(hh / uy)
  if (uy < -1e-6) c.push(-hh / uy)
  const t = Math.min(...c.filter((x) => x > 0))
  return { x: cx + ux * t, y: cy + uy * t }
}

function edgeEndpoints(from: GraphNode, to: GraphNode) {
  const fhw = from.w / 2
  const fhh = from.h / 2
  const thw = to.w / 2
  const thh = to.h / 2
  const dx = to.x - from.x
  const dy = to.y - from.y
  const len = Math.max(1e-6, Math.hypot(dx, dy))
  const ux = dx / len
  const uy = dy / len
  const start = boundaryExit(from.x, from.y, ux, uy, fhw, fhh)
  const end = boundaryExit(to.x, to.y, -ux, -uy, thw, thh)
  return { start, end, ux, uy, len }
}

const nodes: GraphNode[] = [
  { id: 'CORE-PROFILE', label: 'Profile', kind: 'core', x: 500, y: 248, w: 92, h: 34, href: '/#about' },

  { id: 'SEC-ABOUT', label: 'Section: About', kind: 'section', x: 118, y: 48, w: 196, h: 28, href: '/#about' },
  { id: 'SEC-EXPERIENCE', label: 'Section: Experience', kind: 'section', x: 118, y: 112, w: 196, h: 28, href: '/#experience' },
  { id: 'SEC-PROJECTS', label: 'Section: Projects', kind: 'section', x: 118, y: 176, w: 196, h: 28, href: '/#projects' },
  { id: 'SEC-CERTIFICATIONS', label: 'Section: Certifications', kind: 'section', x: 118, y: 240, w: 196, h: 28, href: '/#certifications' },
  { id: 'SEC-REFERENCES', label: 'Section: References', kind: 'section', x: 118, y: 304, w: 196, h: 28, href: '/#references' },
  { id: 'SEC-MEDIA', label: 'Section: Media', kind: 'section', x: 118, y: 368, w: 196, h: 28, href: '/#media' },
  { id: 'SEC-CONTACT', label: 'Section: Contact', kind: 'section', x: 118, y: 432, w: 196, h: 28, href: '/#contact' },

  { id: 'DOC-CV', label: 'CV (PDF)', kind: 'item', x: 930, y: 36, w: 232, h: 26, href: '/assets/docs/CV Maxime Junca ANG24 v4.pdf', external: true },
  { id: 'DOC-NXU', label: 'NXU Think Tank Report', kind: 'item', x: 930, y: 72, w: 232, h: 26, href: '/assets/docs/NXUTHINKTANK.pdf', external: true },
  { id: 'ITEM-AMAZON-KPI', label: 'Amazon KPI Library', kind: 'item', x: 930, y: 108, w: 232, h: 26, href: '/projects/amazon-kpi' },
  { id: 'ITEM-TENORIS', label: 'Tenoris Analytics', kind: 'item', x: 930, y: 144, w: 232, h: 26, href: '/projects/tenoris-analytics' },
  { id: 'ITEM-FLOWMAP', label: 'Flowmap', kind: 'item', x: 930, y: 180, w: 232, h: 26, href: '/projects/flowmap' },
  { id: 'ITEM-ESCP', label: 'ESCP Innovation Network', kind: 'item', x: 930, y: 216, w: 232, h: 26, href: '/projects/escp-innovation-network' },
  { id: 'ITEM-INNOVATION', label: 'Innovation Report', kind: 'item', x: 930, y: 252, w: 232, h: 26, href: '/projects/innovation-report' },
  { id: 'ITEM-INTEL', label: 'Consulting Reports Monitor', kind: 'item', x: 930, y: 288, w: 232, h: 26, href: '/projects/consulting-reports-monitor' },
  { id: 'ITEM-TALENT', label: 'TalentGrid', kind: 'item', x: 930, y: 324, w: 232, h: 26, href: '/projects/talentgrid' },
  { id: 'ITEM-KITS', label: 'Kits', kind: 'item', x: 930, y: 360, w: 232, h: 26, href: '/projects/kits' },
  { id: 'ITEM-CERTS', label: 'Certifications (list)', kind: 'item', x: 930, y: 396, w: 232, h: 26, href: '/#certifications' },
  { id: 'ITEM-REFERENCES', label: 'Reference letters', kind: 'item', x: 930, y: 432, w: 232, h: 26, href: '/#references' },
  { id: 'ITEM-MEDIA', label: 'Media section', kind: 'item', x: 930, y: 468, w: 232, h: 26, href: '/#media' },
  { id: 'ITEM-CONTACTS', label: 'Contact & channels', kind: 'item', x: 930, y: 504, w: 232, h: 26, href: '/#contact' },
]

const edges: GraphEdge[] = [
  { id: 'm1', from: 'CORE-PROFILE', to: 'SEC-ABOUT', relation: 'maps', bend: -14, labelT: 0.52 },
  { id: 'm2', from: 'CORE-PROFILE', to: 'SEC-EXPERIENCE', relation: 'maps', bend: -10, labelT: 0.52 },
  { id: 'm3', from: 'CORE-PROFILE', to: 'SEC-PROJECTS', relation: 'maps', bend: -6, labelT: 0.52 },
  { id: 'm4', from: 'CORE-PROFILE', to: 'SEC-CERTIFICATIONS', relation: 'maps', bend: 0, labelT: 0.52 },
  { id: 'm5', from: 'CORE-PROFILE', to: 'SEC-REFERENCES', relation: 'maps', bend: 6, labelT: 0.52 },
  { id: 'm6', from: 'CORE-PROFILE', to: 'SEC-MEDIA', relation: 'maps', bend: 10, labelT: 0.52 },
  { id: 'm7', from: 'CORE-PROFILE', to: 'SEC-CONTACT', relation: 'maps', bend: 14, labelT: 0.52 },

  { id: 'c1', from: 'SEC-ABOUT', to: 'DOC-CV', relation: 'contains', bend: -8, labelT: 0.55 },
  { id: 'c2', from: 'SEC-MEDIA', to: 'DOC-NXU', relation: 'contains', bend: -6, labelT: 0.55 },
  { id: 'c3', from: 'SEC-PROJECTS', to: 'ITEM-AMAZON-KPI', relation: 'contains', bend: -10, labelT: 0.52 },
  { id: 'c4', from: 'SEC-PROJECTS', to: 'ITEM-TENORIS', relation: 'contains', bend: -6, labelT: 0.52 },
  { id: 'c5', from: 'SEC-PROJECTS', to: 'ITEM-FLOWMAP', relation: 'contains', bend: -2, labelT: 0.52 },
  { id: 'c6', from: 'SEC-PROJECTS', to: 'ITEM-ESCP', relation: 'contains', bend: 2, labelT: 0.52 },
  { id: 'c7', from: 'SEC-PROJECTS', to: 'ITEM-INNOVATION', relation: 'contains', bend: 6, labelT: 0.52 },
  { id: 'c8', from: 'SEC-PROJECTS', to: 'ITEM-INTEL', relation: 'contains', bend: 10, labelT: 0.52 },
  { id: 'c9', from: 'SEC-PROJECTS', to: 'ITEM-TALENT', relation: 'contains', bend: 12, labelT: 0.52 },
  { id: 'c10', from: 'SEC-PROJECTS', to: 'ITEM-KITS', relation: 'contains', bend: 14, labelT: 0.52 },
  { id: 'c11', from: 'SEC-CERTIFICATIONS', to: 'ITEM-CERTS', relation: 'contains', bend: 0, labelT: 0.55 },
  { id: 'c12', from: 'SEC-REFERENCES', to: 'ITEM-REFERENCES', relation: 'contains', bend: 0, labelT: 0.55 },
  { id: 'c13', from: 'SEC-MEDIA', to: 'ITEM-MEDIA', relation: 'contains', bend: 0, labelT: 0.55 },
  { id: 'c14', from: 'SEC-CONTACT', to: 'ITEM-CONTACTS', relation: 'contains', bend: 0, labelT: 0.55 },

  /* Cross-links on the right: shared themes (data, PM, consulting, AI, product). */
  { id: 'r1', from: 'DOC-CV', to: 'DOC-NXU', relation: 'related', tag: 'Documents', bend: 48, labelT: 0.5 },
  { id: 'r2', from: 'ITEM-AMAZON-KPI', to: 'ITEM-INNOVATION', relation: 'related', tag: 'Data', bend: 42, labelT: 0.5 },
  { id: 'r3', from: 'ITEM-INNOVATION', to: 'ITEM-TENORIS', relation: 'related', tag: 'Data', bend: 38, labelT: 0.5 },
  { id: 'r4', from: 'ITEM-AMAZON-KPI', to: 'ITEM-TENORIS', relation: 'related', tag: 'PM / Ops', bend: 36, labelT: 0.48 },
  { id: 'r5', from: 'ITEM-FLOWMAP', to: 'ITEM-INTEL', relation: 'related', tag: 'AI / Auto', bend: 34, labelT: 0.5 },
  { id: 'r6', from: 'ITEM-FLOWMAP', to: 'ITEM-TALENT', relation: 'related', tag: 'Product', bend: 30, labelT: 0.5 },
  { id: 'r7', from: 'ITEM-INTEL', to: 'ITEM-TALENT', relation: 'related', tag: 'AI stack', bend: 28, labelT: 0.5 },
  { id: 'r8', from: 'ITEM-ESCP', to: 'ITEM-INTEL', relation: 'related', tag: 'Consulting', bend: 44, labelT: 0.5 },
  { id: 'r9', from: 'ITEM-KITS', to: 'ITEM-TALENT', relation: 'related', tag: 'ePortfolio', bend: 26, labelT: 0.5 },
]

const relationColors: Record<RelationKind, string> = {
  maps: '#8aa6ff',
  contains: '#7ac7c4',
  related: '#c4a8e8',
}

export default function MapOfContentPage() {
  const { lang } = useLanguage()
  const t = translations[lang].mapOfContentPage
  const [activeRelation, setActiveRelation] = useState<RelationKind | 'all'>('all')
  const [hoverNode, setHoverNode] = useState<string | null>(null)
  const [hoverEdge, setHoverEdge] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<{ x: number; y: number; left: number; top: number } | null>(null)
  const nodeById = useMemo(() => Object.fromEntries(nodes.map((n) => [n.id, n])), [])

  const visibleEdges = edges.filter((e) => activeRelation === 'all' || e.relation === activeRelation)
  const visibleNodeIds = new Set(visibleEdges.flatMap((e) => [e.from, e.to]))
  const hoverEdgeData = hoverEdge ? visibleEdges.find((e) => e.id === hoverEdge) ?? null : null
  const highlightedNodeIds = new Set(
    hoverEdgeData ? [hoverEdgeData.from, hoverEdgeData.to] : hoverNode ? [hoverNode] : []
  )
  const highlightedEdges = new Set(
    visibleEdges
      .filter((e) => (hoverEdge ? e.id === hoverEdge : hoverNode ? e.from === hoverNode || e.to === hoverNode : false))
      .map((e) => e.id)
  )

  const edgeHoverLabel = (edge: GraphEdge) => {
    if (edge.relation === 'related' && edge.tag) return edge.tag
    if (edge.relation === 'maps') return t.filters.maps
    if (edge.relation === 'contains') return t.filters.contains
    return t.filters.related
  }

  const readerBlocks = [
    { title: t.readerObserveTitle, items: t.readerObserve },
    { title: t.readerSectionsTitle, items: t.readerSections },
    { title: t.readerDocsTitle, items: t.readerDocs },
    { title: t.readerGoalsTitle, items: t.readerGoals },
  ]

  return (
    <main className="portfolio-main portfolio-main-map">
      <section className="moc-shell">
        <div className="moc-header">
          <div>
            <p className="section-label">{t.label}</p>
            <h1 className="section-title">{t.title}</h1>
          </div>
          <Link href="/#experience" className="moc-back">
            <FaArrowLeft />
            {t.back}
          </Link>
        </div>

        <div className="moc-reader-guide">
          <h2 className="moc-reader-title">{t.readerTitle}</h2>
          <p className="moc-reader-intro">{t.readerIntro}</p>
          <div className="moc-reader-grid">
            {readerBlocks.map((block) => (
              <div key={block.title} className="moc-reader-card">
                <h3 className="moc-reader-card-title">{block.title}</h3>
                <ul className="moc-reader-list">
                  {block.items.map((item, i) => (
                    <li key={`${block.title}-${i}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="moc-controls">
          {(['all', 'maps', 'contains', 'related'] as const).map((relation) => (
            <button
              key={relation}
              className={`moc-chip ${activeRelation === relation ? 'is-active' : ''}`}
              onClick={() => setActiveRelation(relation)}
            >
              {relation === 'all'
                ? t.filters.all
                : relation === 'maps'
                  ? t.filters.maps
                  : relation === 'contains'
                    ? t.filters.contains
                    : t.filters.related}
            </button>
          ))}
          <div className="moc-zoom">
            <button type="button" className="moc-chip" onClick={() => setZoom((z) => Math.max(0.7, z - 0.1))}>
              <FaSearchMinus />
            </button>
            <button type="button" className="moc-chip" onClick={() => setZoom(1)}>
              <FaUndo />
            </button>
            <button type="button" className="moc-chip" onClick={() => setZoom((z) => Math.min(1.7, z + 0.1))}>
              <FaSearchPlus />
            </button>
          </div>
        </div>

        <div className="moc-graph-wrap">
          <div
            ref={scrollerRef}
            className="moc-graph-scroller"
            onWheel={(e) => {
              if (!e.ctrlKey && !e.metaKey) return
              e.preventDefault()
              setZoom((z) => Math.max(0.7, Math.min(1.7, z + (e.deltaY > 0 ? -0.08 : 0.08))))
            }}
            onMouseDown={(e) => {
              const scroller = scrollerRef.current
              if (!scroller) return
              dragRef.current = {
                x: e.clientX,
                y: e.clientY,
                left: scroller.scrollLeft,
                top: scroller.scrollTop,
              }
              scroller.classList.add('is-grabbing')
            }}
            onMouseMove={(e) => {
              const scroller = scrollerRef.current
              const drag = dragRef.current
              if (!scroller || !drag) return
              scroller.scrollLeft = drag.left - (e.clientX - drag.x)
              scroller.scrollTop = drag.top - (e.clientY - drag.y)
            }}
            onMouseUp={() => {
              const scroller = scrollerRef.current
              dragRef.current = null
              scroller?.classList.remove('is-grabbing')
            }}
            onMouseLeave={() => {
              const scroller = scrollerRef.current
              dragRef.current = null
              scroller?.classList.remove('is-grabbing')
            }}
          >
            <div className="moc-canvas moc-canvas-svg" style={{ transform: `scale(${zoom})` }}>
              <svg
                viewBox={`0 0 ${VB.w} ${VB.h}`}
                className="moc-graph moc-graph-svg"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label={t.title}
              >
                <defs>
                  <filter id="moc-node-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1.2" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Nodes first so edges paint on top — relations stay visible across boxes. */}
                <g className="moc-svg-nodes">
                  {nodes.map((node) => {
                    const muted = activeRelation !== 'all' && !visibleNodeIds.has(node.id)
                    const active = highlightedNodeIds.has(node.id)
                    const hx = node.x - node.w / 2
                    const hy = node.y - node.h / 2
                    const cls = `moc-svg-node moc-svg-node-${node.kind} ${muted ? 'is-muted' : ''} ${active ? 'is-active' : ''}`
                    const inner = (
                      <>
                        <rect x={hx} y={hy} width={node.w} height={node.h} rx={8} ry={8} className="moc-svg-node-rect" />
                        <text x={node.x} y={node.y + 4} className="moc-svg-node-text" textAnchor="middle">
                          {node.label.length > 34 ? `${node.label.slice(0, 32)}…` : node.label}
                        </text>
                        <title>{node.label}</title>
                      </>
                    )
                    return (
                      <g
                        key={node.id}
                        className={cls}
                        onMouseEnter={() => {
                          setHoverEdge(null)
                          setHoverNode(node.id)
                        }}
                        onMouseLeave={() => setHoverNode(null)}
                      >
                        {node.href ? (
                          <a
                            href={node.href}
                            {...(node.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="moc-svg-node-link"
                          >
                            {inner}
                          </a>
                        ) : (
                          inner
                        )}
                      </g>
                    )
                  })}
                </g>

                <g className="moc-svg-edges">
                  {visibleEdges.map((edge) => {
                    const from = nodeById[edge.from] as GraphNode
                    const to = nodeById[edge.to] as GraphNode
                    const { start: s, end: ept } = edgeEndpoints(from, to)
                    const mx = (s.x + ept.x) / 2
                    const my = (s.y + ept.y) / 2
                    const len = Math.max(1e-6, Math.hypot(ept.x - s.x, ept.y - s.y))
                    const nx = -(ept.y - s.y) / len
                    const ny = (ept.x - s.x) / len
                    const bend = edge.bend ?? 0
                    const cx = mx + nx * bend
                    const cy = my + ny * bend
                    const tt = edge.labelT ?? 0.52
                    const lx = (1 - tt) * (1 - tt) * s.x + 2 * (1 - tt) * tt * cx + tt * tt * ept.x
                    const ly = (1 - tt) * (1 - tt) * s.y + 2 * (1 - tt) * tt * cy + tt * tt * ept.y
                    const active = highlightedEdges.has(edge.id)
                    return (
                      <g key={edge.id}>
                        <path
                          d={`M ${s.x} ${s.y} Q ${cx} ${cy} ${ept.x} ${ept.y}`}
                          stroke={relationColors[edge.relation]}
                          strokeOpacity={active ? 0.95 : edge.relation === 'related' ? 0.58 : 0.52}
                          strokeWidth={active ? (edge.relation === 'related' ? 2 : 2.35) : edge.relation === 'related' ? 1.35 : 1.55}
                          fill="none"
                          className={`moc-svg-edge moc-edge-${edge.relation}`}
                          onMouseEnter={() => {
                            setHoverNode(null)
                            setHoverEdge(edge.id)
                          }}
                          onMouseLeave={() => setHoverEdge(null)}
                        />
                        <g className={`moc-edge-label-svg ${active ? 'is-active' : ''}`}>
                          {active && (
                            <text x={lx} y={ly + 3.5} className="moc-edge-label-svg-text" textAnchor="middle">
                              {edgeHoverLabel(edge)}
                            </text>
                          )}
                        </g>
                      </g>
                    )
                  })}
                </g>
              </svg>
            </div>
          </div>
          <p className="moc-usage">{t.tip}</p>
        </div>

        <p className="moc-footnote">
          <strong>{t.footnoteMaps}</strong> {t.footnoteMapsDesc}{' '}
          <strong>{t.footnoteContains}</strong> {t.footnoteContainsDesc}{' '}
          <strong>{t.footnoteRelated}</strong> {t.footnoteRelatedDesc}
        </p>
      </section>
    </main>
  )
}
