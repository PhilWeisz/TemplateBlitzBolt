import React from 'react';
import { useConfig } from '../../../context/ConfigContext';
import Slider from '../../controls/Slider';
import NumberInput from '../../controls/NumberInput';
import DropdownSelect from '../../controls/DropdownSelect';

const LayoutModule: React.FC = () => {
  const { config, updateConfig } = useConfig();
  const { layout } = config;

  const archetypeOptions = [
    { value: 'single-column', label: 'Single Column' },
    { value: 'hero-banner', label: 'Hero Banner' },
    { value: 'card-grid', label: 'Card Grid' },
    { value: 'sidebar-header-content', label: 'Sidebar/Header/Content' }
  ];

  const headerPlacementOptions = [
    { value: 'top', label: 'Top' },
    { value: 'left', label: 'Left' }
  ];

  const alignmentOptions = [
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'Center' },
    { value: 'right', label: 'Right' }
  ];

  const spacingUnitOptions = [
    { value: 'px', label: 'px' },
    { value: '%', label: '%' },
    { value: 'em', label: 'em' },
    { value: 'rem', label: 'rem' }
  ];

  return (
    <div className="module-content">
      <h4 className="mb-3">Layout Configuration</h4>
      
      <DropdownSelect
        label="Layout Archetype"
        value={layout.archetype}
        options={archetypeOptions}
        onChange={(value) => updateConfig('layout', { archetype: value as any })}
      />
      
      <DropdownSelect
        label="Header Placement"
        value={layout.headerPlacement}
        options={headerPlacementOptions}
        onChange={(value) => updateConfig('layout', { headerPlacement: value as any })}
      />
      
      <Slider
        label="Grid Columns"
        min={1}
        max={24}
        value={layout.gridColumns}
        onChange={(value) => updateConfig('layout', { gridColumns: value })}
      />
      
      <div className="card p-3 mb-3">
        <h5 className="mb-3">Spacing</h5>
        <NumberInput
          label="Outer Spacing"
          value={layout.spacing.outer}
          min={0}
          onChange={(value) => updateConfig('layout', { 
            spacing: { ...layout.spacing, outer: value } 
          })}
        />
        
        <NumberInput
          label="Inner Padding"
          value={layout.spacing.inner}
          min={0}
          onChange={(value) => updateConfig('layout', { 
            spacing: { ...layout.spacing, inner: value } 
          })}
        />
        
        <DropdownSelect
          label="Spacing Unit"
          value={layout.spacing.unit}
          options={spacingUnitOptions}
          onChange={(value) => updateConfig('layout', { 
            spacing: { ...layout.spacing, unit: value as any } 
          })}
        />
      </div>
      
      <div className="card p-3 mb-3">
        <h5 className="mb-3">Border</h5>
        <NumberInput
          label="Border Width"
          value={layout.border.width}
          min={0}
          max={10}
          onChange={(value) => updateConfig('layout', { 
            border: { ...layout.border, width: value } 
          })}
        />
        
        <NumberInput
          label="Border Spacing"
          value={layout.border.spacing}
          min={0}
          onChange={(value) => updateConfig('layout', { 
            border: { ...layout.border, spacing: value } 
          })}
        />
      </div>
      
      <DropdownSelect
        label="Header Content Alignment"
        value={layout.headerAlignment}
        options={alignmentOptions}
        onChange={(value) => updateConfig('layout', { headerAlignment: value as any })}
      />

      {layout.headerPlacement === 'top' ? (
        <div className="card p-3 mb-3">
          <h5 className="mb-3">Header Grid Area</h5>
          <NumberInput
            label="Column Start"
            value={layout.headerGridArea.columnStart}
            min={1}
            max={layout.gridColumns}
            onChange={(value) => updateConfig('layout', { 
              headerGridArea: { ...layout.headerGridArea, columnStart: value } 
            })}
          />
          
          <NumberInput
            label="Column End"
            value={layout.headerGridArea.columnEnd}
            min={layout.headerGridArea.columnStart + 1}
            max={layout.gridColumns + 1}
            onChange={(value) => updateConfig('layout', { 
              headerGridArea: { ...layout.headerGridArea, columnEnd: value } 
            })}
          />
        </div>
      ) : (
        <div className="card p-3 mb-3">
          <h5 className="mb-3">Header Grid Area</h5>
          <NumberInput
            label="Row Start"
            value={layout.headerGridArea.rowStart}
            min={1}
            onChange={(value) => updateConfig('layout', { 
              headerGridArea: { ...layout.headerGridArea, rowStart: value } 
            })}
          />
          
          <NumberInput
            label="Row End"
            value={layout.headerGridArea.rowEnd}
            min={layout.headerGridArea.rowStart + 1}
            onChange={(value) => updateConfig('layout', { 
              headerGridArea: { ...layout.headerGridArea, rowEnd: value } 
            })}
          />
        </div>
      )}
    </div>
  );
};

export default LayoutModule;