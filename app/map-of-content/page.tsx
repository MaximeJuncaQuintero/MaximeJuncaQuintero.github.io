'use client'

import { useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { FaArrowLeft, FaSearchPlus, FaSearchMinus, FaUndo } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

type NodeKind = 'core' | 'section' | 'item'
type RelationKind = 'maps' | 'contains' | 'related'

/** All geometry in SVG viewBox units — single coordinate system (fixes HTML/SVG drift). */
const VB = { w: 1280, h: 780 }

interface GraphNode {
  id: string
  label: string
  kind: NodeKind
  x: number
  y: number
  r: number
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

type ContentNodeType = 'concept' | 'section' | 'project' | 'resource' | 'note'
type RelationshipType = 'part_of' | 'related_to' | 'expands_on' | 'depends_on'

interface ContentNodeDef {
  id: string
  title: string
  type: ContentNodeType
  tags: string[]
  description: string
  href?: string
  external?: boolean
  cluster: string
  core?: boolean
}

interface ContentEdgeDef {
  id: string
  source: string
  target: string
  relationship_type: RelationshipType
  weight?: number
}

interface ClusterDef {
  id: string
  title: string
  theme: string
  core_node_id: string
  center: { x: number; y: number }
  radius: number
}

const graphData: {
  nodes: ContentNodeDef[]
  edges: ContentEdgeDef[]
  clusters: ClusterDef[]
} = {
  nodes: [
    {
      id: 'CORE-PROFILE',
      title: 'Profile Hub',
      type: 'concept',
      tags: ['hub', 'portfolio'],
      description: 'Central identity and navigation hub connecting sections, artefacts, and contact channels.',
      href: '/#about',
      cluster: 'core',
      core: true,
    },
    {
      id: 'SEC-ABOUT',
      title: 'About',
      type: 'section',
      tags: ['bio', 'skills'],
      description: 'Background, positioning, and core competencies.',
      href: '/#about',
      cluster: 'sections',
    },
    {
      id: 'SEC-EXPERIENCE',
      title: 'Experience',
      type: 'section',
      tags: ['career', 'timeline'],
      description: 'Professional and academic timeline.',
      href: '/#experience',
      cluster: 'sections',
    },
    {
      id: 'SEC-PROJECTS',
      title: 'Projects',
      type: 'section',
      tags: ['portfolio', 'cases'],
      description: 'Project portfolio with case-level deep dives.',
      href: '/#projects',
      cluster: 'sections',
    },
    {
      id: 'SEC-CERTIFICATIONS',
      title: 'Certifications',
      type: 'section',
      tags: ['credentials'],
      description: 'Skill validations and certifications.',
      href: '/#certifications',
      cluster: 'sections',
    },
    {
      id: 'SEC-REFERENCES',
      title: 'References',
      type: 'section',
      tags: ['letters', 'trust'],
      description: 'Reference letters and endorsements.',
      href: '/#references',
      cluster: 'sections',
    },
    {
      id: 'SEC-MEDIA',
      title: 'Media',
      type: 'section',
      tags: ['publication', 'thought-leadership'],
      description: 'Public content and think tank publication.',
      href: '/#media',
      cluster: 'sections',
    },
    {
      id: 'SEC-CONTACT',
      title: 'Contact',
      type: 'section',
      tags: ['reachability', 'channels'],
      description: 'Direct contact and professional channels.',
      href: '/#contact',
      cluster: 'sections',
    },
    {
      id: 'ITEM-AMAZON-KPI',
      title: 'Amazon KPI Library',
      type: 'project',
      tags: ['ops', 'analytics'],
      description: 'Internal reporting tooling and KPI visibility.',
      href: '/projects/amazon-kpi',
      cluster: 'projects',
    },
    {
      id: 'ITEM-TENORIS',
      title: 'Tenoris Analytics',
      type: 'project',
      tags: ['product', 'data'],
      description: 'Alternative data platform MVP.',
      href: '/projects/tenoris-analytics',
      cluster: 'projects',
    },
    {
      id: 'ITEM-FLOWMAP',
      title: 'Flowmap',
      type: 'project',
      tags: ['ai', 'saas'],
      description: 'AI-driven project tracking platform.',
      href: '/projects/flowmap',
      cluster: 'projects',
    },
    {
      id: 'ITEM-ESCP',
      title: 'ESCP Innovation Network',
      type: 'project',
      tags: ['consulting', 'strategy'],
      description: 'Network transformation and prioritization.',
      href: '/projects/escp-innovation-network',
      cluster: 'projects',
    },
    {
      id: 'ITEM-INNOVATION',
      title: 'Innovation Report',
      type: 'project',
      tags: ['research', 'patents'],
      description: 'Patent-market valuation research.',
      href: '/projects/innovation-report',
      cluster: 'projects',
    },
    {
      id: 'ITEM-INTEL',
      title: 'Consulting Reports Monitor',
      type: 'project',
      tags: ['automation', 'ai'],
      description: 'Automated consulting intelligence pipeline.',
      href: '/projects/consulting-reports-monitor',
      cluster: 'projects',
    },
    {
      id: 'ITEM-TALENT',
      title: 'TalentGrid',
      type: 'project',
      tags: ['edtech', 'portfolio'],
      description: 'Education-employment matching platform.',
      href: '/projects/talentgrid',
      cluster: 'projects',
    },
    {
      id: 'ITEM-KITS',
      title: 'Kits',
      type: 'project',
      tags: ['marketplace', 'execution'],
      description: 'Marketplace concept and execution case.',
      href: '/projects/kits',
      cluster: 'projects',
    },
    {
      id: 'DOC-CV',
      title: 'CV (PDF)',
      type: 'resource',
      tags: ['cv', 'document'],
      description: 'Downloadable CV resource.',
      href: '/assets/docs/CV Maxime Junca ANG24 v4.pdf',
      external: true,
      cluster: 'resources',
    },
    {
      id: 'DOC-NXU',
      title: 'NXU Think Tank Report',
      type: 'resource',
      tags: ['report', 'ai'],
      description: 'Co-authored report on AI and labor dynamics.',
      href: '/assets/docs/NXUTHINKTANK.pdf',
      external: true,
      cluster: 'resources',
    },
    {
      id: 'ITEM-CERTS',
      title: 'Certifications List',
      type: 'note',
      tags: ['credentials'],
      description: 'Certification archive and tags.',
      href: '/#certifications',
      cluster: 'resources',
    },
    {
      id: 'ITEM-REFERENCES',
      title: 'Reference Letters',
      type: 'note',
      tags: ['recommendations'],
      description: 'Academic and professional references.',
      href: '/#references',
      cluster: 'network',
    },
    {
      id: 'ITEM-MEDIA',
      title: 'Media Section',
      type: 'note',
      tags: ['publication'],
      description: 'Media and think-tank content index.',
      href: '/#media',
      cluster: 'network',
    },
    {
      id: 'ITEM-CONTACTS',
      title: 'Contact Channels',
      type: 'note',
      tags: ['email', 'linkedin', 'github'],
      description: 'Reachability endpoints and social links.',
      href: '/#contact',
      cluster: 'network',
    },
  ],
  edges: [
    { id: 'm1', source: 'CORE-PROFILE', target: 'SEC-ABOUT', relationship_type: 'part_of', weight: 0.95 },
    { id: 'm2', source: 'CORE-PROFILE', target: 'SEC-EXPERIENCE', relationship_type: 'part_of', weight: 0.92 },
    { id: 'm3', source: 'CORE-PROFILE', target: 'SEC-PROJECTS', relationship_type: 'part_of', weight: 1 },
    { id: 'm4', source: 'CORE-PROFILE', target: 'SEC-CERTIFICATIONS', relationship_type: 'part_of', weight: 0.85 },
    { id: 'm5', source: 'CORE-PROFILE', target: 'SEC-REFERENCES', relationship_type: 'part_of', weight: 0.82 },
    { id: 'm6', source: 'CORE-PROFILE', target: 'SEC-MEDIA', relationship_type: 'part_of', weight: 0.8 },
    { id: 'm7', source: 'CORE-PROFILE', target: 'SEC-CONTACT', relationship_type: 'part_of', weight: 0.9 },

    { id: 'c1', source: 'SEC-ABOUT', target: 'DOC-CV', relationship_type: 'depends_on', weight: 0.7 },
    { id: 'c2', source: 'SEC-MEDIA', target: 'DOC-NXU', relationship_type: 'expands_on', weight: 0.75 },
    { id: 'c3', source: 'SEC-PROJECTS', target: 'ITEM-AMAZON-KPI', relationship_type: 'part_of', weight: 0.85 },
    { id: 'c4', source: 'SEC-PROJECTS', target: 'ITEM-TENORIS', relationship_type: 'part_of', weight: 0.88 },
    { id: 'c5', source: 'SEC-PROJECTS', target: 'ITEM-FLOWMAP', relationship_type: 'part_of', weight: 0.86 },
    { id: 'c6', source: 'SEC-PROJECTS', target: 'ITEM-ESCP', relationship_type: 'part_of', weight: 0.84 },
    { id: 'c7', source: 'SEC-PROJECTS', target: 'ITEM-INNOVATION', relationship_type: 'part_of', weight: 0.83 },
    { id: 'c8', source: 'SEC-PROJECTS', target: 'ITEM-INTEL', relationship_type: 'part_of', weight: 0.88 },
    { id: 'c9', source: 'SEC-PROJECTS', target: 'ITEM-TALENT', relationship_type: 'part_of', weight: 0.86 },
    { id: 'c10', source: 'SEC-PROJECTS', target: 'ITEM-KITS', relationship_type: 'part_of', weight: 0.8 },
    { id: 'c11', source: 'SEC-CERTIFICATIONS', target: 'ITEM-CERTS', relationship_type: 'part_of', weight: 0.76 },
    { id: 'c12', source: 'SEC-REFERENCES', target: 'ITEM-REFERENCES', relationship_type: 'part_of', weight: 0.74 },
    { id: 'c13', source: 'SEC-MEDIA', target: 'ITEM-MEDIA', relationship_type: 'part_of', weight: 0.72 },
    { id: 'c14', source: 'SEC-CONTACT', target: 'ITEM-CONTACTS', relationship_type: 'part_of', weight: 0.84 },

    { id: 'r1', source: 'DOC-CV', target: 'DOC-NXU', relationship_type: 'related_to', weight: 0.54 },
    { id: 'r2', source: 'ITEM-AMAZON-KPI', target: 'ITEM-INNOVATION', relationship_type: 'related_to', weight: 0.62 },
    { id: 'r3', source: 'ITEM-INNOVATION', target: 'ITEM-TENORIS', relationship_type: 'related_to', weight: 0.7 },
    { id: 'r4', source: 'ITEM-AMAZON-KPI', target: 'ITEM-TENORIS', relationship_type: 'depends_on', weight: 0.58 },
    { id: 'r5', source: 'ITEM-FLOWMAP', target: 'ITEM-INTEL', relationship_type: 'related_to', weight: 0.68 },
    { id: 'r6', source: 'ITEM-FLOWMAP', target: 'ITEM-TALENT', relationship_type: 'expands_on', weight: 0.56 },
    { id: 'r7', source: 'ITEM-INTEL', target: 'ITEM-TALENT', relationship_type: 'related_to', weight: 0.64 },
    { id: 'r8', source: 'ITEM-ESCP', target: 'ITEM-INTEL', relationship_type: 'related_to', weight: 0.57 },
    { id: 'r9', source: 'ITEM-KITS', target: 'ITEM-TALENT', relationship_type: 'related_to', weight: 0.52 },
  ],
  clusters: [
    { id: 'core', title: 'Core hub', theme: 'identity', core_node_id: 'CORE-PROFILE', center: { x: 640, y: 390 }, radius: 0 },
    { id: 'sections', title: 'Section constellation', theme: 'navigation', core_node_id: 'SEC-PROJECTS', center: { x: 375, y: 355 }, radius: 170 },
    { id: 'projects', title: 'Project constellation', theme: 'portfolio', core_node_id: 'ITEM-TENORIS', center: { x: 910, y: 380 }, radius: 170 },
    { id: 'resources', title: 'Resource cluster', theme: 'documents', core_node_id: 'DOC-NXU', center: { x: 640, y: 170 }, radius: 120 },
    { id: 'network', title: 'Reachability cluster', theme: 'proof and contact', core_node_id: 'ITEM-CONTACTS', center: { x: 640, y: 620 }, radius: 110 },
  ],
}

function edgeEndpoints(from: GraphNode, to: GraphNode) {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const len = Math.max(1e-6, Math.hypot(dx, dy))
  const ux = dx / len
  const uy = dy / len
  const start = { x: from.x + ux * from.r, y: from.y + uy * from.r }
  const end = { x: to.x - ux * to.r, y: to.y - uy * to.r }
  return { start, end, ux, uy, len }
}

function nodeKindFromType(type: ContentNodeType, core?: boolean): NodeKind {
  if (core) return 'core'
  if (type === 'section') return 'section'
  return 'item'
}

function relationKindFromRelationship(rt: RelationshipType): RelationKind {
  if (rt === 'part_of') return 'contains'
  if (rt === 'related_to' || rt === 'expands_on' || rt === 'depends_on') return 'related'
  return 'maps'
}

const clusterNodeIds: Record<string, string[]> = graphData.nodes.reduce((acc, node) => {
  acc[node.cluster] ??= []
  acc[node.cluster].push(node.id)
  return acc
}, {} as Record<string, string[]>)

const nodes: GraphNode[] = graphData.nodes.map((node) => {
  const cluster = graphData.clusters.find((c) => c.id === node.cluster)!
  const list = clusterNodeIds[cluster.id] ?? []
  const nodeIndex = list.indexOf(node.id)
  const count = Math.max(1, list.length - 1)
  const baseAngle = cluster.id === 'sections' ? Math.PI * 0.8 : cluster.id === 'projects' ? -Math.PI * 0.12 : -Math.PI / 2
  const angle = baseAngle + (nodeIndex / count) * Math.PI * 1.9
  const ring = node.core || node.id === cluster.core_node_id ? 0 : cluster.radius
  const x = cluster.center.x + Math.cos(angle) * ring
  const y = cluster.center.y + Math.sin(angle) * ring
  const kind = nodeKindFromType(node.type, node.core || node.id === cluster.core_node_id)
  const r = kind === 'core' ? 8.5 : kind === 'section' ? 6.6 : 5.4
  const w = kind === 'core' ? 126 : kind === 'section' ? 146 : 154
  const h = kind === 'core' ? 36 : 28
  return {
    id: node.id,
    label: node.title,
    kind,
    x,
    y,
    r,
    w,
    h,
    href: node.href,
    external: node.external,
  }
})

const edges: GraphEdge[] = graphData.edges.map((edge) => {
  const from = nodes.find((n) => n.id === edge.source)!
  const to = nodes.find((n) => n.id === edge.target)!
  const dx = to.x - from.x
  const dy = to.y - from.y
  const len = Math.max(1, Math.hypot(dx, dy))
  const bendSign = (from.x + from.y * 0.3 + to.x * 0.2) % 2 > 1 ? 1 : -1
  const bend = Math.max(14, Math.min(52, len * 0.17)) * bendSign
  const relation = edge.id.startsWith('m') ? 'maps' : relationKindFromRelationship(edge.relationship_type)
  return {
    id: edge.id,
    from: edge.source,
    to: edge.target,
    relation,
    bend,
    labelT: 0.52,
    tag: edge.relationship_type.replaceAll('_', ' '),
  }
})

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
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [hoverEdge, setHoverEdge] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<{ x: number; y: number; left: number; top: number } | null>(null)
  const nodeById = useMemo(() => Object.fromEntries(nodes.map((n) => [n.id, n])), [])
  const contentById = useMemo(() => Object.fromEntries(graphData.nodes.map((n) => [n.id, n])), [])
  const degreeById = useMemo(() => {
    const out: Record<string, number> = {}
    for (const node of graphData.nodes) out[node.id] = 0
    for (const edge of graphData.edges) {
      out[edge.source] = (out[edge.source] ?? 0) + 1
      out[edge.target] = (out[edge.target] ?? 0) + 1
    }
    return out
  }, [])

  const visibleEdges = edges.filter((e) => activeRelation === 'all' || e.relation === activeRelation)
  const visibleNodeIds = new Set(visibleEdges.flatMap((e) => [e.from, e.to]))
  const neighbourIds = useMemo(() => {
    const set = new Set<string>()
    const focus = hoverNode ?? selectedNode
    if (!focus) return set
    set.add(focus)
    for (const edge of visibleEdges) {
      if (edge.from === focus) set.add(edge.to)
      if (edge.to === focus) set.add(edge.from)
    }
    return set
  }, [hoverNode, selectedNode, visibleEdges])
  const hoverEdgeData = hoverEdge ? visibleEdges.find((e) => e.id === hoverEdge) ?? null : null
  const highlightedNodeIds = new Set(
    hoverEdgeData
      ? [hoverEdgeData.from, hoverEdgeData.to]
      : hoverNode
        ? Array.from(neighbourIds)
        : selectedNode
          ? Array.from(neighbourIds)
          : []
  )
  const highlightedEdges = new Set(
    visibleEdges
      .filter((e) =>
        hoverEdge
          ? e.id === hoverEdge
          : hoverNode
            ? e.from === hoverNode || e.to === hoverNode
            : selectedNode
              ? e.from === selectedNode || e.to === selectedNode
              : false
      )
      .map((e) => e.id)
  )
  const nodeFocusId = hoverNode ?? selectedNode
  const focusedNode = nodeFocusId ? contentById[nodeFocusId] : null

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
            <button type="button" className="moc-chip" onClick={() => setZoom((z) => Math.max(0.55, z - 0.1))}>
              <FaSearchMinus />
            </button>
            <button type="button" className="moc-chip" onClick={() => setZoom(1)}>
              <FaUndo />
            </button>
            <button type="button" className="moc-chip" onClick={() => setZoom((z) => Math.min(2.2, z + 0.1))}>
              <FaSearchPlus />
            </button>
          </div>
        </div>

        <div className="moc-graph-wrap">
          <div
            ref={scrollerRef}
            className="moc-graph-scroller"
            onWheel={(e) => {
              e.preventDefault()
              const scroller = scrollerRef.current
              if (!scroller) return
              const rect = scroller.getBoundingClientRect()
              const px = e.clientX - rect.left
              const py = e.clientY - rect.top
              const intensity = e.ctrlKey || e.metaKey ? 0.1 : 0.065
              setZoom((z) => {
                const nz = Math.max(0.55, Math.min(2.2, z + (e.deltaY > 0 ? -intensity : intensity)))
                const worldX = (scroller.scrollLeft + px) / z
                const worldY = (scroller.scrollTop + py) / z
                scroller.scrollLeft = worldX * nz - px
                scroller.scrollTop = worldY * nz - py
                return nz
              })
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
                onClick={() => {
                  setSelectedNode(null)
                  setHoverEdge(null)
                }}
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

                <g className="moc-clusters">
                  {graphData.clusters
                    .filter((cluster) => cluster.radius > 0)
                    .map((cluster) => (
                      <g key={cluster.id} className="moc-cluster">
                        <circle
                          cx={cluster.center.x}
                          cy={cluster.center.y}
                          r={cluster.radius + 34}
                          className="moc-cluster-ring"
                        />
                        <text
                          x={cluster.center.x}
                          y={cluster.center.y - cluster.radius - 44}
                          textAnchor="middle"
                          className="moc-cluster-label"
                        >
                          {cluster.title}
                        </text>
                      </g>
                    ))}
                </g>

                {/* Nodes first so edges paint on top — relations stay visible across boxes. */}
                <g className="moc-svg-nodes">
                  {nodes.map((node) => {
                    const muted = activeRelation !== 'all' && !visibleNodeIds.has(node.id)
                    const active = highlightedNodeIds.has(node.id) || nodeFocusId === node.id
                    const showLabel = nodeFocusId ? highlightedNodeIds.has(node.id) : false
                    const cls = `moc-svg-node moc-svg-node-${node.kind} ${muted ? 'is-muted' : ''} ${active ? 'is-active' : ''}`
                    const inner = (
                      <>
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={node.r + Math.min(4, degreeById[node.id] * 0.22)}
                          className="moc-svg-node-dot"
                        />
                        {showLabel && (
                          <text x={node.x + 11} y={node.y + 3.2} className="moc-svg-node-text" textAnchor="start">
                            {node.label.length > 28 ? `${node.label.slice(0, 26)}...` : node.label}
                          </text>
                        )}
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
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedNode((prev) => (prev === node.id ? null : node.id))
                        }}
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
                    const baseWeight = graphData.edges.find((e) => e.id === edge.id)?.weight ?? 0.6
                    return (
                      <g key={edge.id}>
                        <path
                          d={`M ${s.x} ${s.y} Q ${cx} ${cy} ${ept.x} ${ept.y}`}
                          stroke={relationColors[edge.relation]}
                          strokeOpacity={active ? 0.9 : nodeFocusId ? 0.12 : edge.relation === 'related' ? 0.22 : 0.3}
                          strokeWidth={active ? 1.8 + baseWeight * 1.6 : 0.7 + baseWeight * 0.7}
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
          {focusedNode && (
            <div className="moc-node-panel">
              <p className="moc-node-panel-kicker">
                {focusedNode.type} · {focusedNode.tags.slice(0, 3).join(' · ')}
              </p>
              <p className="moc-node-panel-title">{focusedNode.title}</p>
              <p className="moc-node-panel-desc">{focusedNode.description}</p>
              {focusedNode.href && (
                <a
                  href={focusedNode.href}
                  {...(focusedNode.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="moc-node-panel-link"
                >
                  Open node
                </a>
              )}
            </div>
          )}
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
