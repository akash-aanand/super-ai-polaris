import React from 'react';
import { ContactItem } from './ContactItem';
import { contactDetails } from '../../config/contactInfo';

interface ContactInfoWrapperProps {
    className?: string;
}

export const ContactInfoWrapper: React.FC<ContactInfoWrapperProps> = ({ className = '' }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {contactDetails.map((detail, index) => (
        <ContactItem 
          key={index}
          type={detail.type}
          icon={detail.icon}
          values={detail.values}
        />
      ))}
    </div>
  );
};
