export interface ResponsivenessConfig {
  breakpoints: {
    mobile: number;
    tablet: number;
    desktop: number;
    wideDesktop: number;
  };
  containerWidths: {
    mobile: number;
    tablet: number;
    desktop: number;
    wideDesktop: number;
  };
  gutterSize: number;
  containerPadding: number;
}