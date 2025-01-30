import { isValidCard } from "../validators";

test("should be false if card length more then 16 and text", () => {
  const result = isValidCard("fdfasdfsadadfasdfasdfasdfadfaer");

  expect(result).toBe(false);
});

test("should be valid card", () => {
  const result = isValidCard("4556403031177534");

  expect(result).toBe(true);
});
