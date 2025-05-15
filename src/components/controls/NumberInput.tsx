import React from 'react';

interface NumberInputProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  onChange: (value: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  value,
  min,
  max,
  step = 1,
  unit,
  onChange
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div className="input-group">
        <input
          type="number"
          className="form-control"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
        />
        {unit && <span className="input-group-text">{unit}</span>}
      </div>
    </div>
  );
};

export default NumberInput;