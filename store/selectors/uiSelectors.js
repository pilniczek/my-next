import { get } from 'lodash';

const getToggle = state => get(state, 'ui.toggle', []);

export default {
  getToggle,
};
