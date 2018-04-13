export const toggleText = (toggled) => {
  return {
    type: 'TOGGLE_TEXT',
    payload: !toggled
  };
};