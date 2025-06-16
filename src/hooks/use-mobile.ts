
import * as React from "react"

const MOBILE_BREAKPOINT = 1024 // Increased from 768 to 1024 to better detect large mobile screens

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      // More robust mobile detection combining screen width and user agent
      const isMobileWidth = window.innerWidth < MOBILE_BREAKPOINT
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(isMobileWidth && isMobileDevice)
    }
    mql.addEventListener("change", onChange)
    // Initial check
    const isMobileWidth = window.innerWidth < MOBILE_BREAKPOINT
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    setIsMobile(isMobileWidth && isMobileDevice)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
