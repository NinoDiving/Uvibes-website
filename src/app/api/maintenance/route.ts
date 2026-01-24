import { getMaintenanceStatus, setMaintenanceStatus } from "@/lib/maintenanceState";
import { NextResponse } from "next/server";

const ADMIN_PASSWORD = "uvibes-admin-maintenance"; // Simple hardcoded password

export async function GET() {
  const status = getMaintenanceStatus();
  return NextResponse.json({ maintenanceMode: status });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password, maintenanceMode } = body;

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (typeof maintenanceMode !== "boolean") {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    setMaintenanceStatus(maintenanceMode);
    return NextResponse.json({ success: true, maintenanceMode });
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
