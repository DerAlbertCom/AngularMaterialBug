# Contribution

## Component/Directive

- create a second-entry-point
  - run `npm start` (starts showcase but also watch-builds the library)
  - navigate to `projects/unity-lib` (contains all second entry points)
  - search for a sub-library being most similar to new candidate
  - copy paste the sub-library on same level and adjust names accordingly
  - implement the candidate
    - follow abc-ordering in component/directive imports and `inject` calls
    - normalize inputs (support `undefined` and `null`)
    - make sure any input change is handled dynamically
    - implement unit tests
  - navigate to root [tsconfig](tsconfig.json) and add a `paths` mapping accordingly
    - needed by showcase
  - navigate to root [jest config](jest.config.ts) and add a `moduleNameMapper` mapping accordingly
    - needed by tests where candidate is imported
    - in case of name-prefix-sharing make sure the more specific ones come first
  - open the [changelog](projects/unity-lib/CHANGELOG.md) and add information on the top
- create examples in the showcase
  - stop and re-run `npm start` (will generate api info for the candidate)
  - navigate to `projects/unity-showcase/src/app/documentation`
  - search for an example directory similar to new candidate
  - copy paste the example directory on same level and adjust names accordingly
  - write examples and adjust the `*.documentation.ts` file to describe them
  - navigate to [documentation-routes.ts](projects/unity-showcase/src/app/documentation/documentation-routes.ts) and add the new documentation object
  - `npm run examples:generate` to generate the example documenation files
  - the examples should now be available in the showcase
