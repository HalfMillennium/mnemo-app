import { generateRandomTimestamp } from "./utils";

describe("generateRandomTimestamp", () => {
  it("returns a string", () => {
    const result = generateRandomTimestamp();
    expect(typeof result).toBe("string");
  });

  it("returns a string in the correct format", () => {
    const result = generateRandomTimestamp();
    const regex = /^\d{2}\/\d{2}\/\d{4}, \d{1,2}:\d{2} (AM|PM) - .+$/;
    expect(result).toMatch(regex);
  });

  it("returns a string with a valid date", () => {
    const result = generateRandomTimestamp();
    const dateStr = result.split(",")[0];
    const date = new Date(dateStr);
    expect(date.toString()).not.toBe("Invalid Date");
  });
});
