# Git Hooks Setup Guide

## 🚀 Automatic Formatting Workflow

Your repository is now configured with Git hooks that automatically format and lint files when you stage them for commit.

## 📋 How It Works

### 1. **Stage Files** (git add)
```bash
# Stage specific files
git add filename.ts

# Stage all changes
git add .

# Stage specific directories
git add src/
```

### 2. **Automatic Formatting** (on commit)
When you run `git commit`, the following happens automatically:
- **Pre-commit hook** runs `lint-staged`
- **lint-staged** formats only the staged files using Prettier
- **ESLint** fixes any auto-fixable issues
- **Files are automatically formatted** before committing

### 3. **Commit** (git commit)
```bash
git commit -m "Your commit message"
```

## 🔧 Configuration Files

### `.lintstagedrc.js`
```javascript
module.exports = {
  '*.{js,ts,tsx}': [
    'prettier --write',        // Format with Prettier first
    'eslint --fix'             // Then fix ESLint issues
  ],
  '*.{json,md,yml,yaml}': [
    'prettier --write'         // Format other file types
  ]
};
```

### `.husky/pre-commit`
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

### `.husky/prepare-commit-msg`
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🔍 Preparing commit message..."
echo "📝 Files staged for commit:"
git diff --cached --name-only
echo ""
```

## 📝 Available Scripts

### Formatting Scripts
```bash
# Format all files in the project
npm run prettify

# Format only staged files
npm run format:staged

# Check formatting without changing files
npm run format:check
```

### Git Workflow Scripts
```bash
# Run all checks (linting, type checking, tests)
npm run check-all

# Run pre-commit checks manually
npm run pre-commit
```

## 🎯 Step-by-Step Workflow

### Example 1: Staging and Committing a Single File
```bash
# 1. Make changes to a file
# 2. Stage the file
git add src/MyFile.ts

# 3. Commit (formatting happens automatically)
git commit -m "Update MyFile with new feature"
```

### Example 2: Staging Multiple Files
```bash
# 1. Make changes to multiple files
# 2. Stage specific files
git add src/File1.ts src/File2.ts

# 3. Commit (only staged files are formatted)
git commit -m "Update multiple files"
```

### Example 3: Staging All Changes
```bash
# 1. Make changes to multiple files
# 2. Stage all changes
git add .

# 3. Commit (all changed files are formatted)
git commit -m "Major update with multiple changes"
```

## 🔍 What Happens During Commit

### Before Commit
- Files are staged with `git add`
- Files may have poor formatting

### During Commit (Automatic)
1. **Pre-commit hook** triggers
2. **lint-staged** runs on staged files only
3. **Prettier** formats the files
4. **ESLint** fixes auto-fixable issues
5. **Files are automatically formatted**

### After Commit
- Files in your working directory are now formatted
- Git history shows the formatted versions
- No manual formatting needed!

## ⚠️ Important Notes

### File Selection
- **Only staged files** are formatted
- **Unstaged files** remain unchanged
- **Working directory** files are updated after formatting

### Formatting Rules
- **Prettier** handles code formatting
- **ESLint** handles code quality
- **Configuration** is in `.prettierrc` and `.eslintrc.js`

### Performance
- **Fast execution** - only processes staged files
- **No impact** on unstaged or untracked files
- **Efficient** for large repositories

## 🛠️ Troubleshooting

### Hook Not Working?
```bash
# Check if hooks are executable
ls -la .husky/

# Reinstall husky if needed
npm run prepare

# Check hook configuration
cat .husky/pre-commit
```

### Formatting Issues?
```bash
# Run formatting manually
npm run prettify

# Check formatting
npm run format:check

# Fix ESLint issues
npm run lint:fix
```

### Bypass Hooks (if needed)
```bash
# Skip pre-commit hooks
git commit --no-verify -m "Emergency fix"

# Skip all hooks
git commit --no-hooks -m "Emergency fix"
```

## 🎉 Benefits

1. **Automatic Formatting**: No more manual formatting
2. **Consistent Code Style**: All commits follow the same format
3. **Quality Assurance**: ESLint catches issues automatically
4. **Team Collaboration**: Everyone's code looks the same
5. **Time Saving**: Focus on logic, not formatting

## 📚 Additional Resources

- **Prettier Configuration**: `.prettierrc`
- **ESLint Configuration**: `.eslintrc.js`
- **Package Scripts**: `package.json` scripts section
- **Husky Documentation**: [https://typicode.github.io/husky/](https://typicode.github.io/husky/)
- **lint-staged Documentation**: [https://github.com/okonet/lint-staged](https://github.com/okonet/lint-staged)

---

**Happy coding! 🚀** Your code will now be automatically formatted every time you commit!
