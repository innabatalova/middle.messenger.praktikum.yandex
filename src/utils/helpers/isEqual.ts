const isPlainObject = (value: unknown): value is Record<string, any> => {
  return (
    typeof value === "object" &&
    value !== null &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === "[object Object]"
  );
};

const isArray = (value: unknown): value is [] => {
  return Array.isArray(value);
};

const isArrayOrObject = (value: unknown): value is [] | Record<string, any> => {
  return isPlainObject(value) || isArray(value);
};

const isEqual = (lhs: Record<string, any>, rhs: Record<string, any>) => {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }

  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key];
    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqual(value, rightValue)) {
        continue;
      }
      return false;
    }

    if (value !== rightValue) {
      return false;
    }
  }

  return true;
};

export default isEqual;
