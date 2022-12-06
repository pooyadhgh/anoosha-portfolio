import { useEffect, useState } from "react";
import useMediaQuery from "./useMediaQuery";
import { BREAKPOINTS } from "../constants";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(BREAKPOINTS.XSMALL);

  const isXSmallBreakpoint = useMediaQuery(BREAKPOINTS.XSMALL);
  const isSmallBreakpoint = useMediaQuery(BREAKPOINTS.SMALL);
  const isMediumBreakpoint = useMediaQuery(BREAKPOINTS.MEDIUM);
  const isLargeBreakpoint = useMediaQuery(BREAKPOINTS.LARGE);
  const isXLargeBreakpoint = useMediaQuery(BREAKPOINTS.XLARGE);

  useEffect(() => {
    if (isXSmallBreakpoint) {
      setBreakpoint(BREAKPOINTS.XSMALL);
    } else if (isSmallBreakpoint) {
      setBreakpoint(BREAKPOINTS.SMALL);
    } else if (isMediumBreakpoint) {
      setBreakpoint(BREAKPOINTS.MEDIUM);
    } else if (isLargeBreakpoint) {
      setBreakpoint(BREAKPOINTS.LARGE);
    } else if (isXLargeBreakpoint) {
      setBreakpoint(BREAKPOINTS.XLARGE);
    }
  }, [
    isXSmallBreakpoint,
    isSmallBreakpoint,
    isMediumBreakpoint,
    isLargeBreakpoint,
    isXLargeBreakpoint,
  ]);

  return breakpoint;
};

export default useBreakpoint;
