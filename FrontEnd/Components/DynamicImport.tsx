"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";

export function Map() {
  const [MapComponent, setMapComponent] =
    useState<ComponentType | null>(null);

  useEffect(() => {
    let isMounted = true;

    import("./Contact/Map").then((module) => {
      if (isMounted) {
        setMapComponent(() => module.default);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!MapComponent) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        در حال بارگذاری نقشه...
      </div>
    );
  }

  return <MapComponent />;
}
