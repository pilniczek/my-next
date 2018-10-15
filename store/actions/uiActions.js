export const types = {
  TOGGLE: 'TOGGLE',
  VISIBLE: 'VISIBLE',
  CHECKED: 'CHECKED',
};

export const toggle = (id, open) => ({
  type: types.TOGGLE,
  id,
  open,
});

export const visible = (id, isVisible) => ({
  type: types.VISIBLE,
  id,
  isVisible,
});

export const checked = (id, isChecked) => ({
  type: types.CHECKED,
  id,
  isChecked,
});
