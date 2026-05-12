import { useEffect } from "react";
import { useLocation } from "react-router";


export default function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state?.preventScroll) return;

    window.scrollTo(0, 0);
  }, [pathname, state]);

  return null;
}