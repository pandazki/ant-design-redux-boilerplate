export const CHANGE = 'CHANGE';
export function change(value) {
  return {
    type: CHANGE,
    value,
  };
}
