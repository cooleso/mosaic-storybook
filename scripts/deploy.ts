import { publish } from 'gh-pages';

const path = require('path');

const dir = path.resolve(path.join(__dirname, '../', 'static'));
publish(dir, {
  user: {name: 'PTSecurity'},
  message: '(deploy): CI'
});