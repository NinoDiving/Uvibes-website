"use client";

import { usePathname } from "next/navigation";
import MaintenanceScreen from "./MaintenanceScreen";

export default function MaintenanceWrapper({
  isMaintenanceMode,
  children,
}: {
  isMaintenanceMode: boolean;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Allow access to admin, api, and next internal paths even in maintenance mode
  const isExcluded =
    pathname.startsWith("/admin") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static");

  if (isMaintenanceMode && !isExcluded) {
    return <MaintenanceScreen />;
  }

  return <>{children}</>;
}
