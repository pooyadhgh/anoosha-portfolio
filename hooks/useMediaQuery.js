import { useCallback, useState, useEffect } from "react";
import { BREAKPOINTS, BREAKPOINT_SIZES } from "../constants";

const useMediaQuery = (breakpoint) => {
  const [targetReached, setTargetReached] = useState(false);
  const width =
    typeof breakpoint === "number" ? breakpoint : BREAKPOINT_SIZES[breakpoint];

  const updateTarget = useCallback((e) => {
    setTargetReached(e.matches);
  }, []);

  useEffect(() => {
    const media =
      breakpoint === BREAKPOINTS.XLARGE
        ? window.matchMedia(`(min-width: ${width}px)`)
        : window.matchMedia(`(max-width: ${width}px)`);

    if (media?.matches !== targetReached) {
      setTargetReached(media.matches);
    }

    try {
      media?.addEventListener("change", updateTarget);

      return () => media?.removeEventListener("change", updateTarget);
    } catch {
      media?.addListener(updateTarget);

      return () => media?.removeListener(updateTarget);
    }
  }, []);

  return targetReached;
};

export default useMediaQuery;
