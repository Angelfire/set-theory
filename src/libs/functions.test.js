import {
  setUnion,
  setIntersection,
  setDifferenceComplement,
  setCartesianProduct,
  setSubset
} from "./functions";

test("A ∪ B", () => {
  const a = [1, 2, 3];
  const b = [3, 4, 5, 6];
  const result = [1, 2, 3, 4, 5, 6];

  expect(setUnion(a, b)).toStrictEqual(result);
});

test("A ∩ B", () => {
  const a = [1, 3, 5, 7, 9];
  const b = [1, 2, 4, 6, 9];
  const result = [1, 9];

  expect(setIntersection(a, b)).toStrictEqual(result);
});

test("A - B", () => {
  const a = [1, 2, 3];
  const b = [4, 3, 2];
  const result = [1];

  expect(setDifferenceComplement(a, b)).toStrictEqual(result);
});

test("U - A", () => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const b = [3, 6, 9];
  const result = [1, 2, 4, 5, 7, 8];

  expect(setDifferenceComplement(a, b)).toStrictEqual(result);
});

test("Set A is a subset B", () => {
  const a = [1, 2, 3, 4, 5, 6];
  const b = [2, 4, 6];
  const result = true;

  expect(setSubset(a, b)).toBe(result);
});

test("A set is not B subset", () => {
  const a = [1, 2, 3, 4, 5, 6];
  const b = [2, 4, 9];
  const result = false;

  expect(setSubset(a, b)).toBe(result);
});

test("Cartesian Product A and B", () => {
  const a = [1, 2, 3];
  const b = [3, 4];
  const result = [[1, 3], [1, 4], [2, 3], [2, 4], [3, 3], [3, 4]];

  expect(setCartesianProduct(a, b)).toStrictEqual(result);
});
