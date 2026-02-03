import React from 'react';

interface EducationItemProps {
  period: string;
  description: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  period,
  description,
}) => {
  return (
    <li className="grid grid-cols-[160px_1fr] gap-2 items-start">
      <span className="text-left whitespace-nowrap">{period}</span>
      <span className="text-left">{description}</span>
    </li>
  );
};

export default EducationItem;
