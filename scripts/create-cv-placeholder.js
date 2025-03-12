const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Set image dimensions
const WIDTH = 800;
const HEIGHT = 1100;

// Create directory if it doesn't exist
const mediaDir = path.join(__dirname, '../public/assets/media');
if (!fs.existsSync(mediaDir)) {
  fs.mkdirSync(mediaDir, { recursive: true });
  console.log(`Created directory: ${mediaDir}`);
}

// Create canvas
const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext('2d');

// Fill background with a professional color
ctx.fillStyle = '#2C3E50'; // Dark blue/slate color
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// Add pattern
ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
for (let i = 0; i < 30; i++) {
  const x = Math.random() * WIDTH;
  const y = Math.random() * HEIGHT;
  const radius = Math.random() * 60 + 20;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

// Add header section
ctx.fillStyle = '#34495E';
ctx.fillRect(0, 0, WIDTH, 200);

// Add name
ctx.font = 'bold 64px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Add text shadow for better visibility
ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
ctx.fillText('MAXIME JUNCA', WIDTH / 2 + 3, 100 + 3);

// Main text
ctx.fillStyle = 'white';
ctx.fillText('MAXIME JUNCA', WIDTH / 2, 100);

// Add CV title
ctx.font = 'bold 48px Arial';

// Add text shadow for better visibility
ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
ctx.fillText('CURRICULUM VITAE', WIDTH / 2 + 3, 300 + 3);

// Main text
ctx.fillStyle = 'white';
ctx.fillText('CURRICULUM VITAE', WIDTH / 2, 300);

// Add sections
const sections = ['EDUCATION', 'EXPERIENCE', 'SKILLS', 'CONTACT'];
sections.forEach((section, index) => {
  const y = 400 + index * 150;
  
  // Section header
  ctx.fillStyle = '#3498DB';
  ctx.fillRect(100, y, WIDTH - 200, 50);
  
  // Section title
  ctx.font = 'bold 32px Arial';
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillText(section, WIDTH / 2 + 2, y + 25 + 2);
  ctx.fillStyle = 'white';
  ctx.fillText(section, WIDTH / 2, y + 25);
  
  // Content lines
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  for (let i = 0; i < 3; i++) {
    ctx.fillRect(150, y + 70 + i * 20, WIDTH - 300, 5);
  }
});

// Add decorative elements
ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
ctx.lineWidth = 10;
ctx.strokeRect(30, 30, WIDTH - 60, HEIGHT - 60);

// Save the image
const outputPath = path.join(mediaDir, 'cv-preview.jpg');
const buffer = canvas.toBuffer('image/jpeg');
fs.writeFileSync(outputPath, buffer);
console.log(`Created CV placeholder image: ${outputPath}`);

console.log('CV placeholder image created successfully!'); 