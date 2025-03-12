const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Define certifications
const certifications = [
  {
    name: 'sql-certificate',
    title: 'Understanding SQL Databases',
    issuer: 'DataCamp',
    color: '#4169E1' // Royal Blue
  }
];

// Set image dimensions
const WIDTH = 800;
const HEIGHT = 600;

// Create directory if it doesn't exist
const certDir = path.join(__dirname, '../public/assets/certifications');
if (!fs.existsSync(certDir)) {
  fs.mkdirSync(certDir, { recursive: true });
  console.log(`Created directory: ${certDir}`);
}

// Create placeholder images for each certification
certifications.forEach(cert => {
  // Create canvas
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Fill background with certification color
  ctx.fillStyle = cert.color;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Add pattern
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  for (let i = 0; i < 20; i++) {
    const x = Math.random() * WIDTH;
    const y = Math.random() * HEIGHT;
    const radius = Math.random() * 50 + 20;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  // Add certification title
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Add text shadow for better visibility
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillText(cert.title, WIDTH / 2 + 3, HEIGHT / 2 - 27);
  
  // Main text
  ctx.fillStyle = 'white';
  ctx.fillText(cert.title, WIDTH / 2, HEIGHT / 2 - 30);

  // Add issuer
  ctx.font = '32px Arial';
  
  // Add text shadow for better visibility
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillText(cert.issuer, WIDTH / 2 + 2, HEIGHT / 2 + 22);
  
  // Main text
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.fillText(cert.issuer, WIDTH / 2, HEIGHT / 2 + 20);

  // Add "CERTIFICATE" text
  ctx.font = 'bold 64px Arial';
  
  // Add text shadow for better visibility
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillText('CERTIFICATE', WIDTH / 2 + 4, HEIGHT / 2 - 102);
  
  // Main text
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.fillText('CERTIFICATE', WIDTH / 2, HEIGHT / 2 - 100);

  // Add decorative elements
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.lineWidth = 10;
  ctx.strokeRect(50, 50, WIDTH - 100, HEIGHT - 100);

  // Save the image
  const outputPath = path.join(certDir, `${cert.name}.jpg`);
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Created placeholder image: ${outputPath}`);
});

console.log('All certification placeholder images created successfully!'); 