import React from 'react';
import { useConfig } from '../../../context/ConfigContext';
import Slider from '../../controls/Slider';
import NumberInput from '../../controls/NumberInput';
import DropdownSelect from '../../controls/DropdownSelect';

const TypographyModule: React.FC = () => {
  const { config, updateConfig } = useConfig();
  const { typography } = config;

  const fontFamilyOptions = [
    { value: 'system-ui, -apple-system, sans-serif', label: 'System Font' },
    { value: 'Arial, sans-serif', label: 'Arial' },
    { value: 'Georgia, serif', label: 'Georgia' },
    { value: '"Roboto", sans-serif', label: 'Roboto (Google Font)' },
    { value: '"Open Sans", sans-serif', label: 'Open Sans (Google Font)' },
    { value: '"Playfair Display", serif', label: 'Playfair Display (Google Font)' }
  ];

  return (
    <div className="module-content">
      <h4 className="mb-3">Typography</h4>
      
      <DropdownSelect
        label="Font Family"
        value={typography.fontFamily}
        options={fontFamilyOptions}
        onChange={(value) => updateConfig('typography', { fontFamily: value })}
      />
      
      <NumberInput
        label="Base Font Size"
        value={typography.baseFontSize}
        min={12}
        max={24}
        unit="px"
        onChange={(value) => updateConfig('typography', { baseFontSize: value })}
      />
      
      <Slider
        label="Heading Scale Ratio"
        min={1.1}
        max={1.5}
        step={0.05}
        value={typography.headingRatio}
        onChange={(value) => updateConfig('typography', { headingRatio: value })}
      />
      
      <Slider
        label="Line Height"
        min={1}
        max={2}
        step={0.1}
        value={typography.lineHeight}
        onChange={(value) => updateConfig('typography', { lineHeight: value })}
      />
      
      <Slider
        label="Paragraph Spacing"
        min={1}
        max={3}
        step={0.1}
        value={typography.paragraphSpacing}
        onChange={(value) => updateConfig('typography', { paragraphSpacing: value })}
      />
      
      <div className="card p-3 mb-3">
        <h5 className="mb-3">Font Weights</h5>
        <NumberInput
          label="Normal"
          value={typography.fontWeights.normal}
          min={100}
          max={900}
          step={100}
          onChange={(value) => updateConfig('typography', { 
            fontWeights: { ...typography.fontWeights, normal: value } 
          })}
        />
        
        <NumberInput
          label="Medium"
          value={typography.fontWeights.medium}
          min={100}
          max={900}
          step={100}
          onChange={(value) => updateConfig('typography', { 
            fontWeights: { ...typography.fontWeights, medium: value } 
          })}
        />
        
        <NumberInput
          label="Bold"
          value={typography.fontWeights.bold}
          min={100}
          max={900}
          step={100}
          onChange={(value) => updateConfig('typography', { 
            fontWeights: { ...typography.fontWeights, bold: value } 
          })}
        />
      </div>
      
      <Slider
        label="Letter Spacing"
        min={-1}
        max={3}
        step={0.1}
        value={typography.letterSpacing}
        onChange={(value) => updateConfig('typography', { letterSpacing: value })}
      />
      
      <div className="mt-4">
        <h5 className="mb-3">Typography Preview</h5>
        <div style={{ 
          fontFamily: typography.fontFamily,
          fontSize: `${typography.baseFontSize}px`,
          lineHeight: typography.lineHeight,
          letterSpacing: `${typography.letterSpacing}px`
        }}>
          <h1 style={{ 
            fontSize: `${typography.baseFontSize * Math.pow(typography.headingRatio, 4)}px`,
            fontWeight: typography.fontWeights.bold,
            marginBottom: `${0.5 * typography.paragraphSpacing}em`
          }}>Heading 1</h1>
          <h2 style={{ 
            fontSize: `${typography.baseFontSize * Math.pow(typography.headingRatio, 3)}px`,
            fontWeight: typography.fontWeights.bold,
            marginBottom: `${0.5 * typography.paragraphSpacing}em`
          }}>Heading 2</h2>
          <h3 style={{ 
            fontSize: `${typography.baseFontSize * Math.pow(typography.headingRatio, 2)}px`,
            fontWeight: typography.fontWeights.medium,
            marginBottom: `${0.5 * typography.paragraphSpacing}em`
          }}>Heading 3</h3>
          <p style={{ marginBottom: `${typography.paragraphSpacing}em` }}>
            This is a paragraph of text that demonstrates the typography settings.
            You can see how the font family, size, line height, and letter spacing
            affect the readability of your content.
          </p>
          <p style={{ 
            fontWeight: typography.fontWeights.medium,
            marginBottom: `${typography.paragraphSpacing}em`
          }}>
            This paragraph uses the medium font weight to emphasize important content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TypographyModule;