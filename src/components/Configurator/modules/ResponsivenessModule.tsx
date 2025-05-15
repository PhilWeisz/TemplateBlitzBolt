import React from 'react';
import { useConfig } from '../../../context/ConfigContext';
import NumberInput from '../../controls/NumberInput';

const ResponsivenessModule: React.FC = () => {
  const { config, updateConfig } = useConfig();
  const { responsiveness } = config;

  return (
    <div className="module-content">
      <h4 className="mb-3">Responsiveness & Grid Breakpoints</h4>
      
      <div className="card p-3 mb-3">
        <h5 className="mb-3">Breakpoints</h5>
        <NumberInput
          label="Mobile"
          value={responsiveness.breakpoints.mobile}
          min={320}
          unit="px"
          onChange={(value) => updateConfig('responsiveness', { 
            breakpoints: { ...responsiveness.breakpoints, mobile: value } 
          })}
        />
        
        <NumberInput
          label="Tablet"
          value={responsiveness.breakpoints.tablet}
          min={responsiveness.breakpoints.mobile + 1}
          unit="px"
          onChange={(value) => updateConfig('responsiveness', { 
            breakpoints: { ...responsiveness.breakpoints, tablet: value } 
          })}
        />
        
        <NumberInput
          label="Desktop"
          value={responsiveness.breakpoints.desktop}
          min={responsiveness.breakpoints.tablet + 1}
          unit="px"
          onChange={(value) => updateConfig('responsiveness', { 
            breakpoints: { ...responsiveness.breakpoints, desktop: value } 
          })}
        />
        
        <NumberInput
          label="Wide Desktop"
          value={responsiveness.breakpoints.wideDesktop}
          min={responsiveness.breakpoints.desktop + 1}
          unit="px"
          onChange={(value) => updateConfig('responsiveness', { 
            breakpoints: { ...responsiveness.breakpoints, wideDesktop: value } 
          })}
        />
      </div>
      
      <div className="card p-3 mb-3">
        <h5 className="mb-3">Container Widths</h5>
        <NumberInput
          label="Mobile Container"
          value={responsiveness.containerWidths.mobile}
          min={300}
          max={responsiveness.breakpoints.mobile}
          unit="px"
          onChange={(value) => updateConfig('responsiveness', { 
            containerWidths: { ...responsiveness.containerWidths, mobile: value } 
          })}
        />
        
        <NumberInput
          label="Tablet Container"
          value={responsiveness.containerWidths.tablet}
          min={responsiveness.containerWidths.mobile}
          max={responsiveness.breakpoints.tablet}
          unit="px"
          onChange={(value) => updateConfig('responsiveness', { 
            containerWidths: { ...responsiveness.containerWidths, tablet: value } 
          })}
        />
        
        <NumberInput
          label="Desktop Container"
          value={responsiveness.containerWidths.desktop}
          min={responsiveness.containerWidths.tablet}
          max={responsiveness.breakpoints.desktop}
          unit="px"
          onChange={(value) => updateConfig('responsiveness', { 
            containerWidths: { ...responsiveness.containerWidths, desktop: value } 
          })}
        />
        
        <NumberInput
          label="Wide Desktop Container"
          value={responsiveness.containerWidths.wideDesktop}
          min={responsiveness.containerWidths.desktop}
          max={responsiveness.breakpoints.wideDesktop}
          unit="px"
          onChange={(value) => updateConfig('responsiveness', { 
            containerWidths: { ...responsiveness.containerWidths, wideDesktop: value } 
          })}
        />
      </div>
      
      <NumberInput
        label="Gutter Size"
        value={responsiveness.gutterSize}
        min={0}
        max={60}
        unit="px"
        onChange={(value) => updateConfig('responsiveness', { gutterSize: value })}
      />
      
      <NumberInput
        label="Container Padding"
        value={responsiveness.containerPadding}
        min={0}
        max={60}
        unit="px"
        onChange={(value) => updateConfig('responsiveness', { containerPadding: value })}
      />
      
      <div className="mt-4">
        <h5 className="mb-3">Responsive Grid Preview</h5>
        <div className="row gx-4">
          <div className="col-12 p-2 mb-2">
            <div className="p-2 border rounded bg-light">
              <div>Breakpoints:</div>
              <div className="d-flex flex-wrap gap-2 mt-1">
                <span className="badge bg-primary">Mobile: {responsiveness.breakpoints.mobile}px</span>
                <span className="badge bg-info">Tablet: {responsiveness.breakpoints.tablet}px</span>
                <span className="badge bg-success">Desktop: {responsiveness.breakpoints.desktop}px</span>
                <span className="badge bg-warning text-dark">Wide: {responsiveness.breakpoints.wideDesktop}px</span>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-6 p-2">
            <div className="p-2 border rounded bg-light">
              <span>Gutter: {responsiveness.gutterSize}px</span>
            </div>
          </div>
          
          <div className="col-12 col-md-6 p-2">
            <div className="p-2 border rounded bg-light">
              <span>Padding: {responsiveness.containerPadding}px</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsivenessModule;