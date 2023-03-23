import React from 'react';
import { StepsHeader, Select } from './Menu.styles';

interface IProps {
  readonly draft: number;
  readonly onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  readonly count: number;
}

const CustomSelect: React.FC<IProps> = ({ draft, onChange, count }) => {
  return (
    <StepsHeader>
      Steps:
      <Select value={draft} onChange={onChange}>
        {[...Array(count)].map((x, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </Select>
    </StepsHeader>
  );
};

export default CustomSelect;
