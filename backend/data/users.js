import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('admin123', 10),
    isAdmin: true,
  },
  {
    name: 'Mauro pino',
    email: 'mauro@admin.com',
    password: bcrypt.hashSync('admin123', 10),
  },
]

export default users