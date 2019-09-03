/**
 * The union of sets A and B, denoted by A ∪ B
 *
 * @param {*} a
 * @param {*} b
 * @returns
 */
export const setUnion = (a, b) => {
  const newA = new Set(a);
  const newB = new Set(b);

  return [...new Set([...newA, ...newB])].sort((a, b) => a - b);
};

/**
 *  The intersection of sets A and B, denoted by A ∩ B
 *
 * @param {*} a
 * @param {*} b
 * @returns
 */
export const setIntersection = (a, b) => {
  const newA = new Set(a);
  const newB = new Set(b);

  return [...new Set([...newA].filter(x => newB.has(x)))].sort((a, b) => a - b);
};

/**
 * The difference of sets A from B , denoted by A - B
 * For a set A, the difference U - A , where U is the universe, is called the complement of A
 *
 * @param {*} a
 * @param {*} b
 * @returns
 */
export const setDifferenceComplement = (a, b) => {
  const newA = new Set(a);
  const newB = new Set(b);

  return [...new Set([...newA].filter(x => !newB.has(x)))].sort(
    (a, b) => a - b
  );
};

/**
 *
 *
 * @param {*} a
 * @param {*} b
 * @returns
 */
export const setSubset = (a, b) => {
  return b.every(val => a.includes(val));
};

/**
 *
 *
 * @param {*} a
 * @param {*} b
 */
export const setCartesianProduct = (a, b) =>
  [].concat(...a.map(d => b.map(e => [].concat(d, e))));
