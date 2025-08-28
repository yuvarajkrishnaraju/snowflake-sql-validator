#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get the version type from command line arguments
const versionType = process.argv[2]; // 'patch', 'minor', or 'major'

if (!versionType || !['patch', 'minor', 'major'].includes(versionType)) {
  console.error('Usage: node scripts/version-bump.js <patch|minor|major>');
  process.exit(1);
}

try {
  // Read current package.json
  const packagePath = path.join(__dirname, '..', 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  const currentVersion = packageJson.version;

  console.log(`Current version: ${currentVersion}`);

  // Bump version using npm
  console.log(`Bumping ${versionType} version...`);
  execSync(`npm version ${versionType} --no-git-tag-version`, { stdio: 'inherit' });

  // Read new version
  const newPackageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  const newVersion = newPackageJson.version;

  console.log(`New version: ${newVersion}`);

  // Build the package
  console.log('Building package...');
  execSync('npm run build', { stdio: 'inherit' });

  // Add all changes to git
  console.log('Adding changes to git...');
  execSync('git add .', { stdio: 'inherit' });

  // Commit changes
  const commitMessage = `chore: bump version to ${newVersion}`;
  console.log(`Committing changes: ${commitMessage}`);
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

  // Create git tag
  const tagName = `v${newVersion}`;
  console.log(`Creating git tag: ${tagName}`);
  execSync(`git tag ${tagName}`, { stdio: 'inherit' });

  console.log(`✅ Version ${newVersion} successfully bumped and tagged!`);
  console.log(`📝 Commit: ${commitMessage}`);
  console.log(`🏷️  Tag: ${tagName}`);
} catch (error) {
  console.error('❌ Error during version bump:', error.message);
  process.exit(1);
}
