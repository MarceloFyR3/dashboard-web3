import { User } from './interface';

export const admin: User = {
  id: 1,
  name: 'Marcelo Drumand',
  email: 'marcelo@fyr3.com.br',
  avatar: './assets/images/avatar-fyr3.jpg',
};

export const guest: User = {
  name: 'unknown',
  email: 'unknown',
  avatar: './assets/images/avatar-default.jpg',
};
