import type { ReactNode } from "react";
import AppToolbar from "~/shared/toolbar/Toolbar";
import useScreenSize from "../hooks/useIsMobile";

export interface StickyToolbarProps {
  children: ReactNode;
}

function StickyToolbar({ children }: StickyToolbarProps) {
  const { isMobile } = useScreenSize();
  return (
    <AppToolbar
      toolbarProps={ {
        position: "sticky",
        sx: {
          top: isMobile ? '56px' : '48px',
          backdropFilter: 'blur(2px)',
          backgroundColor: '#f2f2f236',
          borderBottom: '1px solid #bab9bd'
        }
      } }
    >

      { children }

    </AppToolbar>

  );
}

export default StickyToolbar;