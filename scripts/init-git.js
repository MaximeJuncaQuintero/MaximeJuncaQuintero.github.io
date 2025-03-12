const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to execute shell commands
function runCommand(command) {
  try {
    console.log(`Running: ${command}`);
    const output = execSync(command, { encoding: 'utf8' });
    console.log(output);
    return true;
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    console.error(error.message);
    return false;
  }
}

// Check if .git directory already exists
const gitDir = path.join(__dirname, '../.git');
if (fs.existsSync(gitDir)) {
  console.log('Git repository already initialized.');
} else {
  console.log('Initializing Git repository...');
  
  // Initialize Git repository
  if (!runCommand('git init')) {
    process.exit(1);
  }
  
  // Create .gitignore file
  const gitignorePath = path.join(__dirname, '../.gitignore');
  const gitignoreContent = `# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
`;

  fs.writeFileSync(gitignorePath, gitignoreContent);
  console.log('Created .gitignore file');
}

// Add all files to Git
console.log('Adding files to Git...');
if (!runCommand('git add .')) {
  process.exit(1);
}

// Make initial commit
console.log('Making initial commit...');
if (!runCommand('git commit -m "Initial commit: E-Portfolio setup"')) {
  process.exit(1);
}

console.log('Git repository initialized and initial commit made successfully!');
console.log('\nNext steps:');
console.log('1. Create a GitHub repository at https://github.com/new');
console.log('2. Connect your local repository with:');
console.log('   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git');
console.log('3. Push your code with:');
console.log('   git push -u origin main'); 