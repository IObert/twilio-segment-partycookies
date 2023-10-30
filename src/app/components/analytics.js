"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { analytics } from "../../utils/analytics";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    analytics.page();
  }, [pathname, searchParams]);

  return null;
}

export function track(event, details) {
  analytics.track(event, details);

  return null;
}

export function identify(email, traits) {
  analytics.identify(email, traits);

  return null;
}

export async function getUserId() {
  const user = await analytics.user();
  const id = user.id();
  return id;
}
