import { LayoutConfig } from './LayoutConfig';
import { ColorConfig } from './ColorConfig';
import { TypographyConfig } from './TypographyConfig';
import { ResponsivenessConfig } from './ResponsivenessConfig';
import { ComponentStyleConfig } from './ComponentStyleConfig';
import { AnimationConfig } from './AnimationConfig';
import { LanguageConfig } from './LanguageConfig';

export interface ConfigModel {
  layout: LayoutConfig;
  colors: ColorConfig;
  typography: TypographyConfig;
  responsiveness: ResponsivenessConfig;
  componentStyle: ComponentStyleConfig;
  animation: AnimationConfig;
  language: LanguageConfig;
}

export const defaultConfig: ConfigModel = {
  layout: {
    archetype: 'hero-banner',
    headerPlacement: 'top',
    gridColumns: 12,
    spacing: {
      outer: 16,
      inner: 16,
      unit: 'px'
    },
    border: {
      width: 1,
      spacing: 8
    },
    headerAlignment: 'left',
    headerGridArea: {
      columnStart: 1,
      columnEnd: 13,
      rowStart: 1,
      rowEnd: 2
    }
  },
  colors: {
    primary: '#0066cc',
    secondary: '#00a8a8',
    background: '#ffffff',
    textFieldBackground: '#f5f5f5',
    border: '#e0e0e0',
    text: '#333333'
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    baseFontSize: 16,
    headingRatio: 1.2,
    lineHeight: 1.5,
    paragraphSpacing: 1.5,
    fontWeights: {
      normal: 400,
      medium: 500,
      bold: 700
    },
    letterSpacing: 0
  },
  responsiveness: {
    breakpoints: {
      mobile: 576,
      tablet: 768,
      desktop: 992,
      wideDesktop: 1200
    },
    containerWidths: {
      mobile: 540,
      tablet: 720,
      desktop: 960,
      wideDesktop: 1140
    },
    gutterSize: 30,
    containerPadding: 15
  },
  componentStyle: {
    borderRadius: {
      none: 0,
      small: 4,
      medium: 8,
      large: 16,
      full: 9999
    },
    zIndex: {
      navbar: 1000,
      modal: 2000,
      popover: 1500,
      dropdown: 1000,
      tooltip: 1600
    }
  },
  animation: {
    enabled: true,
    timingFunction: 'ease-in-out',
    transitionDuration: 300
  },
  language: {
    baseLanguage: 'en',
    direction: 'ltr',
    showFocusOutline: true,
    skipToContentLink: true,
    reduceMotion: false
  }
};