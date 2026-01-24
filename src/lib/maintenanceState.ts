import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "src", "data");
const CONFIG_FILE = path.join(DATA_DIR, "maintenance.json");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

export function getMaintenanceStatus(): boolean {
  try {
    if (!fs.existsSync(CONFIG_FILE)) {
      return false;
    }
    const data = fs.readFileSync(CONFIG_FILE, "utf-8");
    const json = JSON.parse(data);
    return json.maintenanceMode === true;
  } catch (error) {
    console.error("Error reading maintenance config:", error);
    return false;
  }
}

export function setMaintenanceStatus(status: boolean): void {
  try {
    const data = JSON.stringify({ maintenanceMode: status }, null, 2);
    fs.writeFileSync(CONFIG_FILE, data, "utf-8");
  } catch (error) {
    console.error("Error writing maintenance config:", error);
  }
}
