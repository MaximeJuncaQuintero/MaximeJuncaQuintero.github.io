const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const directories = [
  'public/assets/docs',
  'public/assets/projects',
  'public/assets/certifications'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Copy letters of reference
const lorSources = [
  {
    source: '/Users/mjunca/Desktop/JOB24/LoR Dupré DCU.pdf',
    destination: 'public/assets/docs/LoR-Dupre-DCU.pdf'
  },
  {
    source: '/Users/mjunca/Desktop/JOB24/LoR Richa Amazon.pdf',
    destination: 'public/assets/docs/LoR-Richa-Amazon.pdf'
  }
];

// Copy CV
const cvSource = '/Users/mjunca/ObsidianMD/ObsidianVault/Projects/eportfolio/public/assets/docs/CV Maxime Junca ANG24 v3.pdf';
const cvDestination = 'public/assets/docs/CV Maxime Junca ANG24 v3.pdf';

// Copy NXU Think Tank Report
const nxuSource = '/Users/mjunca/DataAnalytics/eportfolio/MaximeJuncaQuintero.github.io/docs/NXUTHINKTANK.pdf';
const nxuDestination = 'public/assets/docs/NXUTHINKTANK.pdf';

// Copy certification files
const certSources = [
  {
    source: '/Users/mjunca/DataAnalytics/eportfolio/MaximeJuncaQuintero.github.io/docs/Maxime_Junca_Quintero_Python_Fundamentals_Certificate.pdf',
    destination: 'public/assets/docs/Maxime_Junca_Quintero_Python_Fundamentals_Certificate.pdf'
  },
  {
    source: '/Users/mjunca/DataAnalytics/eportfolio/MaximeJuncaQuintero.github.io/docs/Maxime_Junca_Quintero_Functions_Conditionality_and_Loops_Certificate.pdf',
    destination: 'public/assets/docs/Maxime_Junca_Quintero_Functions_Conditionality_and_Loops_Certificate.pdf'
  },
  {
    source: '/Users/mjunca/DataAnalytics/eportfolio/MaximeJuncaQuintero.github.io/docs/Maxime_Junca_Quintero_Storing_Transforming_and_Visualizing_Data_Certificate.pdf',
    destination: 'public/assets/docs/Maxime_Junca_Quintero_Storing_Transforming_and_Visualizing_Data_Certificate.pdf'
  },
  {
    source: '/Users/mjunca/DataAnalytics/eportfolio/MaximeJuncaQuintero.github.io/docs/Maxime_Junca_Quintero_Understanding_SQL_Databases_Certificate.pdf',
    destination: 'public/assets/docs/Maxime_Junca_Quintero_Understanding_SQL_Databases_Certificate.pdf'
  }
];

// Function to copy a file
function copyFile(source, destination) {
  try {
    if (fs.existsSync(source)) {
      fs.copyFileSync(source, destination);
      console.log(`Copied: ${source} -> ${destination}`);
    } else {
      console.error(`Source file not found: ${source}`);
    }
  } catch (error) {
    console.error(`Error copying ${source}: ${error.message}`);
  }
}

// Copy all files
lorSources.forEach(file => copyFile(file.source, file.destination));
copyFile(cvSource, cvDestination);
copyFile(nxuSource, nxuDestination);
certSources.forEach(file => copyFile(file.source, file.destination));

console.log('Document copying completed!');

// Create placeholder images for projects
const projects = [
  'amazon-kpi',
  'tenoris-analytics',
  'innovation-report',
  'kits',
  'housedec'
];

// Create a simple placeholder image using Node.js
function createPlaceholderImage(name) {
  const placeholderPath = `public/assets/projects/${name}.jpg`;
  
  // Check if file already exists
  if (fs.existsSync(placeholderPath)) {
    console.log(`Placeholder already exists: ${placeholderPath}`);
    return;
  }
  
  // Create a simple text file as a placeholder
  // In a real scenario, you would use a library like canvas to create an actual image
  fs.writeFileSync(placeholderPath, `This is a placeholder for ${name}`);
  console.log(`Created placeholder: ${placeholderPath}`);
}

projects.forEach(createPlaceholderImage);

console.log('Placeholder creation completed!'); 