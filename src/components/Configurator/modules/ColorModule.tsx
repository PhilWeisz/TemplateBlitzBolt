import React from 'react';
import { useConfig } from '../../../context/ConfigContext';
import ColorPicker from '../../controls/ColorPicker';

const ColorModule: React.FC = () => {
  const { config, updateConfig } = useConfig();
  const { colors } = config;

  return (
    <div className="module-content">
      <h4 className="mb-3">Color Styles</h4>
      
      <ColorPicker
        label="Primary Color"
        value={colors.primary}
        onChange={(value) => updateConfig('colors', { primary: value })}
      />
      
      <ColorPicker
        label="Secondary Color"
        value={colors.secondary}
        onChange={(value) => updateConfig('colors', { secondary: value })}
      />
      
      <ColorPicker
        label="Background Color"
        value={colors.background}
        onChange={(value) => updateConfig('colors', { background: value })}
      />
      
      <ColorPicker
        label="Text Field Background"
        value={colors.textFieldBackground}
        onChange={(value) => updateConfig('colors', { textFieldBackground: value })}
      />
      
      <ColorPicker
        label="Border Color"
        value={colors.border}
        onChange={(value) => updateConfig('colors', { border: value })}
      />
      
      <ColorPicker
        label="Text Color"
        value={colors.text}
        onChange={(value) => updateConfig('colors', { text: value })}
      />
      
      <div className="mt-4">
        <h5 className="mb-3">Color Preview</h5>
        <div className="d-flex">
          <div 
            className="p-3 me-2 rounded" 
            style={{ backgroundColor: colors.primary, color: '#fff' }}
          >
            Primary
          </div>
          <div 
            className="p-3 me-2 rounded" 
            style={{ backgroundColor: colors.secondary, color: '#fff' }}
          >
            Secondary
          </div>
          <div 
            className="p-3 rounded border" 
            style={{ backgroundColor: colors.background, color: colors.text }}
          >
            Background & Text
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorModule;