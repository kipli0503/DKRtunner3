export const ecuDatabase = {
  "ECU_Juken5": { fuelTables: 20, ignitionTables: 20, rpmLimit: 13000 },
  "ECU_RacingPro": { fuelTables: 32, ignitionTables: 32, rpmLimit: 16000 },
  "ECU_StdMotor": { fuelTables: 12, ignitionTables: 12, rpmLimit: 10000 }
};

export function generateTable(size = 16, base = 100) {
  return Array.from({length:size}).map(()=>base);
}
export function tuneFuel(table, percent) {
  return table.map(v => Math.max(0, Math.round(v + (v * percent / 100))));
}
export function tuneIgnition(table, degree) {
  return table.map(v => Math.round(v + degree));
}
