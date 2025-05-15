import React from 'react';
import { useConfig } from '../../../context/ConfigContext';
import DropdownSelect from '../../controls/DropdownSelect';
import Slider from '../../controls/Slider';
import NumberInput from '../../controls/NumberInput';

const AnimationModule: React.FC = () => {
  const { config, updateConfig } = useConfig();
  const { animation } = config;

  const timingFunctionOptions = [
    { value: 'linear', label: 'Linear' },
    { value: 'ease', label: 'Ease' },
    { value: 'ease-in', label: 'Ease In' },
    { value: 'ease-out', label: 'Ease Out' },
    { value: 'ease-in-out', label: 'Ease In Out' }
  ];

  const handleToggleAnimation = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateConfig('animation', { enabled: e.target.checked });
  };

  return (
    <div className="module-content">
      <h4 className="mb-3">Animation & Transition</h4>
      
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="animationEnabled"
          checked={animation.enabled}
          onChange={handleToggleAnimation}
        />
        <label className="form-check-label" htmlFor="animationEnabled">
          Enable Animations
        </label>
      </div>
      
      <DropdownSelect
        label="Timing Function"
        value={animation.timingFunction}
        options={timingFunctionOptions}
        onChange={(value) => updateConfig('animation', { timingFunction: value as any })}
      />
      
      <NumberInput
        label="Transition Duration"
        value={animation.transitionDuration}
        min={0}
        max={2000}
        unit="ms"
        onChange={(value) => updateConfig('animation', { transitionDuration: value })}
      />
      
      <div className="mt-4">
        <h5 className="mb-3">Animation Preview</h5>
        <div className="d-flex align-items-center">
          <div 
            className="p-3 bg-primary text-white me-3" 
            style={{ 
              borderRadius: '4px',
              transition: animation.enabled 
                ? `all ${animation.transitionDuration}ms ${animation.timingFunction}` 
                : 'none',
              cursor: 'pointer',
              transform: 'scale(1)',
            }}
            onMouseEnter={(e) => {
              if (animation.enabled) {
                e.currentTarget.style.transform = 'scale(1.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (animation.enabled) {
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          >
            Hover Me
          </div>
          <div className="text-muted">
            {animation.enabled 
              ? `${animation.transitionDuration}ms ${animation.timingFunction}` 
              : 'Animations disabled'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationModule;