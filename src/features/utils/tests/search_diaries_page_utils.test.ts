import { stripEntityName } from "../search_diaries_page";
import { describe, expect, it } from "@jest/globals";

describe("stripEntityName", () => {
  it("should replace spaces with underscores", () => {
    const result = stripEntityName("Hello World");
    expect(result).toBe("hello_world");
  });

  it("should convert the string to lowercase", () => {
    const result = stripEntityName("HelloWorld");
    expect(result).toBe("helloworld");
  });

  it("should replace spaces with underscores and convert to lowercase", () => {
    const result = stripEntityName("Hello World Again");
    expect(result).toBe("hello_world_again");
  });

  it("should return an empty string if the input is an empty string", () => {
    const result = stripEntityName("");
    expect(result).toBe("");
  });

  it("should handle strings with leading and trailing spaces", () => {
    const result = stripEntityName(" Hello World ");
    expect(result).toBe("hello_world");
  });
});
