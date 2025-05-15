import React from 'react';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-3">
      <label className="form-label d-flex justify-content-between align-items-center">
        {label}
        <span style={{ 
          display: 'inline-block', 
          width: '20px', 
          height: '20px', 
          backgroundColor: value, 
          border: '1px solid #ced4da', 
          borderRadius: '3px' 
        }}></span>
      </label>
      <div className="d-flex">
        <input 
          type="color" 
          className="form-control form-control-color" 
          value={value} 
          onChange={handleChange} 
          title={`Choose ${label} color`}
        />
        <input 
          type="text" 
          className="form-control ms-2" 
          value={value} 
          onChange={handleChange} 
          pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
        />
      </div>
    </div>
  );
};

export default ColorPicker;