import { Mail, Github, Linkedin } from 'lucide-react';
// import React from 'react';
import type { ReactElement } from 'react';

export interface ContactItem {
  name: string;
  icon: ReactElement;
  link: string;
  text: string;
}

export const CONTACT_INFO: ContactItem[] = [
  {
    name: 'Email',
    icon: <Mail size={24} />,
    link: 'mailto:saeunnpark@gmail.com',
    text: 'saeunnpark@gmail.com',
  },
  {
    name: 'GitHub',
    icon: <Github size={24} />,
    link: 'https://github.com/saeun-park',
    text: 'https://github.com/saeun-park',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={24} />,
    link: 'https://www.linkedin.com/in/saeunn-park/',
    text: 'https://www.linkedin.com/in/saeunn-park/',
  },
];

export const CONTACT_TITLE = 'THANK YOU FOR WATCHING';
