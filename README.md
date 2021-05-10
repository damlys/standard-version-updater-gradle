# `standard-version-updater-gradle`

The
[conventional-changelog/standard-version](https://github.com/conventional-changelog/standard-version)
updater for Gradle build files.

## Installation

```shell
$ npm install --save-dev @damlys/standard-version-updater-gradle
```

## Configuration

Just use following updaters within
`.versionrc.json` config file.

```json
{
  "bumpFiles": [
    {
      "filename": "build.gradle",
      "updater": "node_modules/@damlys/standard-version-updater-gradle/dist/build-gradle.js"
    }
  ]
}
```

## Examples

`build.gradle` file might look like that:

```text
name = "foo"
version = "1.0.0"
group = "bar"

dependencies {
  ...
}
```

The `build-gradle.js` updater looks for
a `version = "<semver>"` pattern and updates it.
