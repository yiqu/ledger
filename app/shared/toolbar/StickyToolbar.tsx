import type { ReactNode } from "react";
import AppToolbar from "~/shared/toolbar/Toolbar";
import useScreenSize from "../hooks/useIsMobile";

export interface StickyToolbarProps {
  children: ReactNode;
}

function StickyToolbar({ children }: StickyToolbarProps) {
  const { isMobile } = useScreenSize();
  return (
    <AppToolbar toolbarProps={ {
      position: "sticky",
      sx: { top: isMobile ? '56px' : '64px', backdropFilter: 'blur(6px)', backgroundColor: '#ffffff4d' }
    } }>

      { children }

    </AppToolbar>

  );
}

export default StickyToolbar;