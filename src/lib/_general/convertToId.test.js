import convertToId from "./convertToId";
import { faker } from "@faker-js/faker";

describe("convertToId function", () => {
  it("should convert one word", () => {
    const lastName = faker.name.lastName();
    const expected = lastName.toLowerCase();

    const result = convertToId(lastName);

    expect(result).toBe(expected);
  });

  it("should convert two words", () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const expected = firstName.toLowerCase() + lastName;

    const result = convertToId(`${firstName} ${lastName}`);

    expect(result).toBe(expected);
  });

  it("should convert a name with a prefix", () => {
    const prefix = faker.name.prefix();
    const lastName = faker.name.lastName();
    const expected = prefix.toLowerCase().replace(".", "") + lastName;

    const result = convertToId(`${prefix} ${lastName}`);

    expect(result).toBe(expected);
  });

  it("should convert input with a number", () => {
    const result = convertToId("5662");
    expect(result).toBe("5662");
  });
});
