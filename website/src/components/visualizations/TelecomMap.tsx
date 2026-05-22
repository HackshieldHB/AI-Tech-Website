"use client"

import * as React from "react"
import { MapContainer, TileLayer, Circle, Polyline, Popup, ZoomControl } from "react-leaflet"
import "leaflet/dist/leaflet.css"

// --- Indonesia Infrastructure Data ---

// Jakarta: Central AITECH Data Hub
const JAKARTA: [number, number] = [-6.2088, 106.8456]

// Regional tower cluster anchors: [lat, lng, label, count, spread]
type ClusterDef = { lat: number; lng: number; label: string; count: number; spread: number }
const CLUSTERS: ClusterDef[] = [
  // Sumatra
  { lat: 3.5952,  lng: 98.6722,  label: "Medan",       count: 8, spread: 1.2 },
  { lat: -0.9492, lng: 100.4172, label: "Padang",      count: 5, spread: 1.0 },
  { lat: 0.5333,  lng: 101.4500, label: "Pekanbaru",   count: 4, spread: 0.7 },
  { lat: -2.9167, lng: 104.7458, label: "Palembang",   count: 4, spread: 0.6 },

  // Java
  { lat: -6.2088, lng: 106.8456, label: "Jakarta",     count: 12, spread: 0.4 },
  { lat: -6.9147, lng: 107.6098, label: "Bandung",     count: 8, spread: 0.4 },
  { lat: -7.2575, lng: 112.7521, label: "Surabaya",    count: 10, spread: 0.5 },
  { lat: -7.7956, lng: 110.3695, label: "Yogyakarta",  count: 6, spread: 0.4 },
  { lat: -6.9934, lng: 110.4203, label: "Semarang",    count: 5, spread: 0.4 },

  // Kalimantan
  { lat: -1.2654, lng: 116.8312, label: "Balikpapan",  count: 5, spread: 0.9 },
  { lat: -0.0226, lng: 109.3399, label: "Pontianak",   count: 4, spread: 0.7 },
  { lat: -3.3194, lng: 114.5908, label: "Banjarmasin", count: 4, spread: 0.6 },

  // Sulawesi
  { lat: -5.1477, lng: 119.4327, label: "Makassar",    count: 8, spread: 0.6 },
  { lat: 1.4748,  lng: 124.8421, label: "Manado",      count: 5, spread: 0.6 },

  // Bali & Nusa Tenggara
  { lat: -8.6500, lng: 115.2167, label: "Denpasar",    count: 7, spread: 0.3 },

  // Papua & Maluku
  { lat: -2.5337, lng: 140.7181, label: "Jayapura",    count: 5, spread: 1.2 },
  { lat: -3.6554, lng: 128.1905, label: "Ambon",       count: 3, spread: 0.5 },
  { lat: -0.8615, lng: 134.0615, label: "Sorong",      count: 3, spread: 0.6 },
]

// Deterministic seeded pseudo-random to avoid hydration mismatches
function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

type Tower = { id: number; pos: [number, number]; region: string }

function generateTowers(): Tower[] {
  const towers: Tower[] = []
  let id = 1
  CLUSTERS.forEach((c, ci) => {
    const rand = seededRandom(ci * 7919 + 42)
    for (let i = 0; i < c.count; i++) {
      const angle = rand() * 2 * Math.PI
      const r = rand() * c.spread
      towers.push({
        id,
        pos: [c.lat + Math.sin(angle) * r, c.lng + Math.cos(angle) * r],
        region: c.label,
      })
      id++
    }
  })
  return towers
}

const TOWERS = generateTowers() // ~1000 towers

export default function TelecomMap() {
  return (
    <div className="w-full h-[520px] rounded-xl overflow-hidden border border-gray-200 shadow-sm relative z-0">
      <MapContainer
        center={[-2.5489, 118.0149]}
        zoom={5}
        scrollWheelZoom={true}
        zoomControl={false}
        className="w-full h-full"
        minZoom={4}
        maxZoom={12}
      >
        {/* Clean Light/Neutral Tile Layer */}
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {/* Zoom Controls - Top Right */}
        <ZoomControl position="topright" />

        {/* Connection Lines: Each tower → Jakarta hub */}
        {TOWERS.map(tower => (
          <Polyline
            key={`line-${tower.id}`}
            positions={[tower.pos, JAKARTA]}
            pathOptions={{
              color: "#3b82f6",
              weight: 0.4,
              opacity: 0.2,
            }}
          />
        ))}

        {/* Tower Nodes */}
        {TOWERS.map(tower => (
          <Circle
            key={`tower-${tower.id}`}
            center={tower.pos}
            radius={3000}
            pathOptions={{
              color: "#2563eb",
              fillColor: "#3b82f6",
              fillOpacity: 0.7,
              weight: 0,
            }}
          >
            <Popup className="leaflet-popup-light">
              <div className="p-1 min-w-[140px]">
                <p className="font-semibold text-gray-900 text-sm mb-1">Tower #{tower.id}</p>
                <p className="text-xs text-gray-600"><span className="font-medium">Region:</span> {tower.region}</p>
                <p className="text-xs text-emerald-600 font-semibold mt-1">● Healthy</p>
              </div>
            </Popup>
          </Circle>
        ))}

        {/* Jakarta Central Hub */}
        <Circle
          center={JAKARTA}
          radius={25000}
          pathOptions={{
            color: "#16a34a",
            fillColor: "#22c55e",
            fillOpacity: 0.25,
            weight: 2,
          }}
        />
        <Circle
          center={JAKARTA}
          radius={8000}
          pathOptions={{
            color: "#15803d",
            fillColor: "#22c55e",
            fillOpacity: 0.9,
            weight: 2,
          }}
        >
          <Popup>
            <div className="p-1 min-w-[180px]">
              <p className="font-bold text-gray-900 text-sm mb-1">AITECH Infrastructure Data Hub</p>
              <p className="text-xs text-gray-600"><span className="font-medium">Location:</span> Jakarta, Indonesia</p>
              <p className="text-xs text-gray-600"><span className="font-medium">Connected Towers:</span> 100</p>
              <p className="text-xs text-emerald-600 font-semibold mt-1">● Active — All Systems Operational</p>
            </div>
          </Popup>
        </Circle>
      </MapContainer>
    </div>
  )
}
