export const isEmpty = (s?: string): boolean => {
  if (!s || s === "" || s === null || s === undefined) return true;
  return false;
};
