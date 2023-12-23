'use client'

import { useState } from 'react';
import copy from 'clipboard-copy';
import { SiGmail } from "react-icons/si";

const EmailLink: React.FC = () => {
  const emailAddress: string = 'francktiomela12@gmail.com';
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    copy(emailAddress);
    setCopied(true);
    // Reset status after a few seconds if necessary
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <a href={`mailto:${emailAddress}`} onClick={handleCopy} className=" text-2xl text-primary p-2 rounded-m bg-gray-100 rounded-md transition">
      {copied ? 'Email copié !' : <SiGmail />}
    </a>
  );
};

export default EmailLink;
