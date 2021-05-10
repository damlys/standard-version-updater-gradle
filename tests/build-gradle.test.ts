import "jest";
import { readVersion, writeVersion } from "../src/build-gradle";

test("readVersion", (): void => {
  let input: string = "";

  input = `name = "foo"
version="1.2.3"
group = "bar"

dependencies {}`;
  expect(readVersion(input)).toBe("1.2.3");

  input = `name = "foo"
version  =          "4.5.6-rc.1"
group = "bar"

dependencies {}`;
  expect(readVersion(input)).toBe("4.5.6-rc.1");

  input = `name = "foo"
group = "bar"

dependencies {}`;
  expect((): string => readVersion(input)).toThrow(new Error("VERSION is not present."));

  input = `name = "foo"
version = ""
group = "bar"

dependencies {}`;
  expect((): string => readVersion(input)).toThrow(new Error("VERSION is empty."));
});

test("writeVersion", (): void => {
  let input: string = "";
  let output: string = "";

  input = `name = "foo"
version="1.2.3"
group = "bar"

dependencies {}`;
  output = `name = "foo"
version = "1.2.4-rc.1"
group = "bar"

dependencies {}`;
  expect(writeVersion(input, "1.2.4-rc.1")).toBe(output);
});
