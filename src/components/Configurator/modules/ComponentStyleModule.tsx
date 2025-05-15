import React from 'react';
import { useConfig } from '../../../context/ConfigContext';
import NumberInput from '../../controls/NumberInput';

const ComponentStyleModule: React.FC = () => {
  const { config, updateConfig } = useConfig();
  const { componentStyle } = config;

  return (
    <div className="module-content">
      <h4 className="mb-3">Component Styling</h4>
      
      <div className="card p-3 mb-3">
        <h5 className="mb-3">Border Radius Presets</h5>
        <NumberInput
          label="None"
          value={componentStyle.borderRadius.none}
          min={0}
          unit="px"
          onChange={(value) => updateConfig('componentStyle', { 
            borderRadius: { ...componentStyle.borderRadius, none: value } 
          })}
        />
        
        <NumberInput
          label="Small"
          value={componentStyle.borderRadius.small}
          min={0}
          unit="px"
          onChange={(value) => updateConfig('componentStyle', { 
            borderRadius: { ...componentStyle.borderRadius, small: value } 
          })}
        />
        
        <NumberInput
          label="Medium"
          value={componentStyle.borderRadius.medium}
          min={0}
          unit="px"
          onChange={(value) => updateConfig('componentStyle', { 
            borderRadius: { ...componentStyle.borderRadius, medium: value } 
          })}
        />
        
        <NumberInput
          label="Large"
          value={componentStyle.borderRadius.large}
          min={0}
          unit="px"
          onChange={(value) => updateConfig('componentStyle', { 
            borderRadius: { ...componentStyle.borderRadius, large: value } 
          })}
        />
        
        <NumberInput
          label="Full (rounded)"
          value={componentStyle.borderRadius.full}
          min={0}
          unit="px"
          onChange={(value) => updateConfig('componentStyle', { 
            borderRadius: { ...componentStyle.borderRadius, full: value } 
          })}
        />
      </div>
      
      <div className="card p-3 mb-3">
        <h5 className="mb-3">Z-Index Levels</h5>
        <NumberInput
          label="Navbar"
          value={componentStyle.zIndex.navbar}
          min={0}
          onChange={(value) => updateConfig('componentStyle', { 
            zIndex: { ...componentStyle.zIndex, navbar: value } 
          })}
        />
        
        <NumberInput
          label="Modal"
          value={componentStyle.zIndex.modal}
          min={0}
          onChange={(value) => updateConfig('componentStyle', { 
            zIndex: { ...componentStyle.zIndex, modal: value } 
          })}
        />
        
        <NumberInput
          label="Popover"
          value={componentStyle.zIndex.popover}
          min={0}
          onChange={(value) => updateConfig('componentStyle', { 
            zIndex: { ...componentStyle.zIndex, popover: value } 
          })}
        />
        
        <NumberInput
          label="Dropdown"
          value={componentStyle.zIndex.dropdown}
          min={0}
          onChange={(value) => updateConfig('componentStyle', { 
            zIndex: { ...componentStyle.zIndex, dropdown: value } 
          })}
        />
        
        <NumberInput
          label="Tooltip"
          value={componentStyle.zIndex.tooltip}
          min={0}
          onChange={(value) => updateConfig('componentStyle', { 
            zIndex: { ...componentStyle.zIndex, tooltip: value } 
          })}
        />
      </div>

      <div className="mt-4">
        <h5 className="mb-3">Border Radius Preview</h5>
        <div className="d-flex flex-wrap gap-3">
          <div 
            className="p-3 bg-primary text-white" 
            style={{ borderRadius: `${componentStyle.borderRadius.none}px` }}
          >
            None
          </div>
          <div 
            className="p-3 bg-primary text-white" 
            style={{ borderRadius: `${componentStyle.borderRadius.small}px` }}
          >
            Small
          </div>
          <div 
            className="p-3 bg-primary text-white" 
            style={{ borderRadius: `${componentStyle.borderRadius.medium}px` }}
          >
            Medium
          </div>
          <div 
            className="p-3 bg-primary text-white" 
            style={{ borderRadius: `${componentStyle.borderRadius.large}px` }}
          >
            Large
          </div>
          <div 
            className="p-3 bg-primary text-white" 
            style={{ borderRadius: `${componentStyle.borderRadius.full}px` }}
          >
            Full
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentStyleModule;