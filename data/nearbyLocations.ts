export interface NearbyLocation {
  name: string
  distance: string
}

// Neighbourhoods near the salon (Maduravoyal, MMDA Colony — 13.064977, 80.172559).
// Distances are approximate ROAD distances, cross-checked against straight-line
// (haversine) measurements: Arumbakkam ~0.8 km, Koyambedu ~0.7–1.2 km,
// Virugambakkam ~1.8 km, Mogappair ~1.7–2.6 km, Anna Nagar ~2.3–2.5 km,
// Ambattur ~5.5 km straight-line. Road figures rounded up for travel variance.
// Re-verify on Google Maps directions before publishing if high precision is needed.

export const NEARBY_LOCATIONS: NearbyLocation[] = [
  { name: "Arumbakkam", distance: "2 km" },
  { name: "Koyambedu", distance: "2 km" },
  { name: "Virugambakkam", distance: "3 km" },
  { name: "Mogappair", distance: "3 km" },
  { name: "Anna Nagar", distance: "4 km" },
  { name: "Ambattur", distance: "7 km" },
]