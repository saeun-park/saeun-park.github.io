import React from 'react';

interface CertificateItemProps {
  date: string;
  name: string;
  issuer: string;
}

const CertificateItem: React.FC<CertificateItemProps> = ({
  date,
  name,
  issuer,
}) => {
  return (
    <li className="grid grid-cols-[80px_1fr_auto] gap-2 items-start">
      {' '}
      <span className="text-left whitespace-nowrap">{date}</span>
      <span className="text-left">{name}</span>
      <span className="text-right whitespace-nowrap">{issuer}</span>
    </li>
  );
};

export default CertificateItem;
