# Release Management Guide

This document outlines the release management process for the Snowflake SQL Validator package.

## Version Management

### Semantic Versioning

We follow [Semantic Versioning](https://semver.org/) (SemVer) for version numbers:

- **MAJOR** version for incompatible API changes
- **MINOR** version for backwards-compatible functionality additions
- **PATCH** version for backwards-compatible bug fixes

### Version Bumping Scripts

#### Patch Release (Bug Fixes)
```bash
npm run version:patch
```
- Increments patch version (e.g., 1.0.0 → 1.0.1)
- Builds the package
- Commits changes with conventional commit message
- Creates git tag
- Pushes to remote repository

#### Minor Release (New Features)
```bash
npm run version:minor
```
- Increments minor version (e.g., 1.0.0 → 1.1.0)
- Builds the package
- Commits changes with conventional commit message
- Creates git tag
- Pushes to remote repository

#### Major Release (Breaking Changes)
```bash
npm run version:major
```
- Increments major version (e.g., 1.0.0 → 2.0.0)
- Builds the package
- Commits changes with conventional commit message
- Creates git tag
- Pushes to remote repository

## Release Process

### 1. Pre-Release Checklist

Before releasing, ensure:

- [ ] All tests pass (`npm test`)
- [ ] Code is linted (`npm run lint`)
- [ ] TypeScript compilation succeeds (`npm run type-check`)
- [ ] Build is successful (`npm run build`)
- [ ] CHANGELOG.md is updated
- [ ] README.md is current
- [ ] All changes are committed to git

### 2. Release Commands

#### Quick Release (Patch/Minor/Major)
```bash
# For patch releases
npm run release:patch

# For minor releases
npm run release:minor

# For major releases
npm run release:major
```

These commands will:
1. Bump the version
2. Build the package
3. Commit and tag the changes
4. Push to remote repository
5. Publish to npm

#### Preview Release (Beta)
```bash
npm run release:preview
```
- Builds the package
- Publishes with `beta` tag
- Useful for testing before official release

### 3. Post-Release Steps

After a successful release:

1. **Verify npm publication**: Check the package on npmjs.com
2. **Create GitHub release**: Use the git tag to create a GitHub release
3. **Update documentation**: Ensure all examples and docs reflect the new version
4. **Announce**: Share the release in relevant channels

## Changelog Management

### Automatic Changelog Generation

```bash
# Generate changelog for next release
npm run changelog

# Generate changelog from the beginning
npm run changelog:first
```

### Conventional Commits

We use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Changelog Categories

The changelog is automatically organized into:

- **Added** - New features
- **Changed** - Changes in existing functionality
- **Deprecated** - Soon-to-be removed features
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Vulnerability fixes

## Quality Assurance

### Pre-Release Checks

```bash
# Run all quality checks
npm run check-all

# Individual checks
npm run lint          # ESLint
npm run type-check    # TypeScript compilation
npm run test          # Jest tests
npm run build         # Build verification
```

### Pre-Commit Hooks

Husky automatically runs quality checks before commits:

- Linting with ESLint
- Type checking with TypeScript
- Running tests
- Code formatting with Prettier

## Troubleshooting

### Common Issues

#### Version Bump Fails
- Ensure you're on the main branch
- Check that all changes are committed
- Verify git remote is properly configured

#### Publish Fails
- Ensure you're logged into npm (`npm login`)
- Check package name and version in package.json
- Verify you have publish permissions

#### Build Fails
- Run `npm run clean` to remove old build artifacts
- Check TypeScript compilation errors
- Verify all dependencies are installed

### Rollback Process

If a release needs to be rolled back:

1. **Unpublish from npm** (within 72 hours):
   ```bash
   npm unpublish snowflake-sql-validator@<version>
   ```

2. **Remove git tag**:
   ```bash
   git tag -d v<version>
   git push origin :refs/tags/v<version>
   ```

3. **Revert version in package.json**:
   ```bash
   npm version <previous-version> --no-git-tag-version
   ```

4. **Commit and push changes**:
   ```bash
   git add .
   git commit -m "revert: rollback to version <previous-version>"
   git push
   ```

## Best Practices

### Before Releasing

1. **Test thoroughly** - Ensure all functionality works as expected
2. **Update documentation** - Keep README and examples current
3. **Check dependencies** - Verify all dependencies are up to date
4. **Review changelog** - Ensure all changes are documented

### During Release

1. **Use appropriate version bump** - Choose patch/minor/major based on changes
2. **Verify build** - Ensure the package builds successfully
3. **Test installation** - Verify the package can be installed and used

### After Release

1. **Monitor feedback** - Watch for issues or questions
2. **Update examples** - Ensure all examples work with the new version
3. **Document breaking changes** - Clearly communicate any breaking changes

## Automation

### CI/CD Integration

The release scripts can be integrated with CI/CD pipelines:

```yaml
# Example GitHub Actions workflow
- name: Release
  run: |
    npm run release:patch
  env:
    NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### Automated Testing

All releases automatically run through:

- Unit tests
- Integration tests
- Type checking
- Linting
- Build verification

This ensures only high-quality code is released.
