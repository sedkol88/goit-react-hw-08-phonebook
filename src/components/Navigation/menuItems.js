import { nanoid } from 'nanoid';

const menuItems = [
  {
    id: nanoid(),
    to: '/contacts',
    text: 'My Contacts',
    private: true,
  },
];

export default menuItems;
