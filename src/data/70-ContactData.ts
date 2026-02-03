export interface ContactItem {
  name: string;
  icon: string;
  link: string;
  text: string;
}

export const CONTACT_INFO: ContactItem[] = [
  {
    name: 'Email',
    icon: 'Mail',
    link: 'mailto:saeunnpark@gmail.com',
    text: 'saeunnpark@gmail.com',
  },
  {
    name: 'GitHub',
    icon: 'Github',
    link: 'https://github.com/saeun-park',
    text: 'https://github.com/saeun-park',
  },
  {
    name: 'LinkedIn',
    icon: 'Linkedin',
    link: 'https://www.linkedin.com/in/saeunn-park/',
    text: 'https://www.linkedin.com/in/saeunn-park/',
  },
];

export const CONTACT_TITLE = 'THANK YOU FOR WATCHING';
