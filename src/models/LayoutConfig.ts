export type LayoutArchetype = 'single-column' | 'hero-banner' | 'card-grid' | 'sidebar-header-content';
export type HeaderPlacement = 'top' | 'left';
export type ContentAlignment = 'left' | 'center' | 'right';
export type SpacingUnit = 'px' | '%' | 'em' | 'rem';

export interface LayoutConfig {
  archetype: LayoutArchetype;
  headerPlacement: HeaderPlacement;
  gridColumns: number;
  spacing: {
    outer: number;
    inner: number;
    unit: SpacingUnit;
  };
  border: {
    width: number;
    spacing: number;
  };
  headerAlignment: ContentAlignment;
  headerGridArea: {
    columnStart: number;
    columnEnd: number;
    rowStart: number;
    rowEnd: number;
  };
}