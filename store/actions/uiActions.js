export const types = {
  TOGGLE: 'TOGGLE',
};

export const toggle = (id, open) => ({
  type: types.TOGGLE,
  id,
  open,
});
