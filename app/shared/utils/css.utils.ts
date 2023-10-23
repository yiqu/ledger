import type { CSSProperties } from "react";

export const flexCenter = {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex'
};

export const ellipsis = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%'
} as any;

export const ellipsisBlock = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'block'
} as any;

export const isDraggingStyles: CSSProperties = {
  border: '2px solid',
  borderColor: 'primary.main'
};

export const stickyHeaderClass = {
  position: 'sticky',
  left: 0,
  zIndex: 3,
  width:'18rem' // initial for no table scrollbar
};

export const stickyDataCellClass = {
  position: 'sticky',
  left: 0, 
  minWidth: '18rem', // initial for no table scrollbar
  maxWidth: '18rem',
  backgroundColor: '#fff'
};