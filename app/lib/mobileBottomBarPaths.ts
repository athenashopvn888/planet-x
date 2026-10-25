/** Routes where the mobile action bar must not render. */
export const MOBILE_BOTTOM_BAR_HIDDEN_PATHS = ["/tv", "/tv2"] as const;

export function mobileBottomBarHidden(pathname: string | null | undefined): boolean {
  const path = (pathname ?? "/").split("?")[0].replace(/\/+$/, "") || "/";
  return (MOBILE_BOTTOM_BAR_HIDDEN_PATHS as readonly string[]).includes(path);
}
