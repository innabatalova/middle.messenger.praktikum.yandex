export const isEmpty = (obj: Record<string, any>) => {
  if (Object.keys(obj).length == 0) {
    return true;
  }

  return false;
};
