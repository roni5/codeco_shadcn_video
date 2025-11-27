import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
	const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
		undefined,
	);

	React.useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);

	return !!isMobile;
}
// export function useIsDesktop() {
//   const [isDesktop, setIsDesktop] = React.useState<boolean | undefined>(undefined)

//   React.useEffect(() => {
//     const mql = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`)
//     const onChange = () => {
//       setIsDesktop(window.innerWidth >= MOBILE_BREAKPOINT)
//     }
//     mql.addEventListener("change", onChange)
//     setIsDesktop(window.innerWidth >= MOBILE_BREAKPOINT)
//     return () => mql.removeEventListener("change", onChange)
//   }, [])

//   return !!isDesktop
// }
// export function useIsMobileOrDesktop() {
//   const isMobile = useIsMobile()
//   const isDesktop = useIsDesktop()

//   return { isMobile, isDesktop }
// }
// export function useIsMobileOrDesktopOrTablet() {
//   const isMobile = useIsMobile()
//   const isDesktop = useIsDesktop()

//   return { isMobile, isDesktop }
// }
// export function useIsMobileOrTablet() {
//   const isMobile = useIsMobile()
//   const isDesktop = useIsDesktop()

//   return { isMobile, isDesktop }
// }
// export function useIsTablet() {
//   const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined)

//   React.useEffect(() => {
//     const mql = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`)
//     const onChange = () => {
//       setIsTablet(window.innerWidth >= MOBILE_BREAKPOINT)
//     }
//     mql.addEventListener("change", onChange)
//     setIsTablet(window.innerWidth >= MOBILE_BREAKPOINT)
//     return () => mql.removeEventListener("change", onChange)
//   }, [])

//   return !!isTablet
// }
// export function useIsMobileOrTabletOrDesktop() {
//   const isMobile = useIsMobile()
//   const isDesktop = useIsDesktop()
//   const isTablet = useIsTablet()

//   return { isMobile, isDesktop, isTablet }
// }
// export function useIsMobileOrTabletOrDesktopOrDesktop() {
//   const isMobile = useIsMobile()
//   const isDesktop = useIsDesktop()
//   const isTablet = useIsTablet()

//   return { isMobile, isDesktop, isTablet }
// }
// export function useIsMobileOrTabletOrDesktopOrDesktopOrTablet() {
//   const isMobile = useIsMobile()
//   const isDesktop = useIsDesktop()
//   const isTablet = useIsTablet()

//   return { isMobile, isDesktop, isTablet }
// }
// export function useIsMobileOrTabletOrDesktopOrDesktopOrTabletOrMobile() {
//   const isMobile = useIsMobile()
//   const isDesktop = useIsDesktop()
//   const isTablet = useIsTablet()

//   return { isMobile, isDesktop, isTablet }
// }
// export function useIsMobileOrTabletOrDesktopOrDesktopOrTabletOrMobileOrDesktop() {
//   const isMobile = useIsMobile()
//   const isDesktop = useIsDesktop()
//   const isTablet = useIsTablet()

//   return { isMobile, isDesktop, isTablet }
// }
// export function useIsMobileOrTabletOrDesktopOrDesktopOrTabletOrMobileOrDesktopOrTablet() {
//   const isMobile = useIsMobile()
//   const isDesktop = useIsDesktop()
//   const isTablet = useIsTablet()

//   return { isMobile, isDesktop, isTablet }
// }
// export function useIsMobileOrTabletOrDesktopOrDesktopOrTabletOrMobileOrDesktopOrTabletOrMobile() {
//   const isMobile = useIsMobile()
//   const isDesktop = useIsDesktop()
//   const isTablet = useIsTablet()

//   return { isMobile, isDesktop, isTablet }
// }
