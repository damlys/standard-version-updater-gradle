export function readVersion(contents: string): string {
  const regex: RegExp = /version\s*=\s*"([a-zA-Z0-9\-_.]*)"/;
  const found: RegExpMatchArray | null = contents.match(regex);
  if (found === null) {
    throw new Error("VERSION is not present.");
  }
  if (typeof found[1] === "undefined" || found[1] === "") {
    throw new Error("VERSION is empty.");
  }
  return found[1];
}

export function writeVersion(contents: string, version: string): string {
  const regex: RegExp = /version\s*=\s*"([a-zA-Z0-9\-_.]*)"/g;
  const newContents: string = contents.replace(regex, `version = "${version}"`);
  return newContents;
}
