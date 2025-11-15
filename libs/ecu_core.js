export const ecuDatabase = {
  "ECU_Juken5": {
    fuelTables: 20,
    ignitionTables: 20,
    tpsResolution: 0.1,
    rpmLimit: 13000
  },
  "ECU_RacingPro": {
    fuelTables: 32,
    ignitionTables: 32,
    tpsResolution: 0.05,
    rpmLimit: 16000
  },
  "ECU_StdMotor": {
    fuelTables: 12,
    ignitionTables: 12,
    tpsResolution: 0.2,
    rpmLimit: 10000
  }
};

export function generateTable(size = 20, base = 100) {
  const table = [];
  for (let i = 0; i < size; i++) {
    table.push(base);
  }
  return table;
}

export function tuneFuel(table, percent) {
  return table.map(v => Math.max(0, v + (v * percent / 100)));
}

export function tuneIgnition(table, degree) {
  return table.map(v => v + degree);
}
