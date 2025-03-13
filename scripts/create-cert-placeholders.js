const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Define the certifications
const certifications = [
  {
    name: 'python-fundamentals',
    title: 'Python Fundamentals',
    color: '#3776AB' // Python blue
  },
  {
    name: 'functions-loops',
    title: 'Functions, Conditionality and Loops',
    color: '#4B8BBE' // Another Python blue shade
  },
  {
    name: 'data-visualization',
    title: 'Storing, Transforming and Visualizing Data',
    color: '#306998' // Another Python blue shade
  }
];

// Constants for image dimensions
const WIDTH = 800;
const HEIGHT = 600;

// Create directory if it doesn't exist
const dirPath = path.join(__dirname, '../public/assets/certifications');
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
  console.log(`Created directory: ${dirPath}`);
}

// Create a placeholder image for each certification
certifications.forEach(cert => {
  // Create canvas
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Fill background
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

  // Add DataCamp logo placeholder
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.fillRect(WIDTH / 2 - 100, 100, 200, 80);
  ctx.fillStyle = '#05192D'; // DataCamp dark blue
  ctx.font = 'bold 30px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('DataCamp', WIDTH / 2, 150);

  // Add certificate title
  ctx.fillStyle = 'white';
  ctx.font = 'bold 40px Arial';
  ctx.textAlign = 'center';
  
  // Handle long titles by splitting into multiple lines if needed
  const words = cert.title.split(' ');
  let line = '';
  let lines = [];
  let y = HEIGHT / 2;
  
  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > WIDTH - 100 && i > 0) {
      lines.push(line);
      line = words[i] + ' ';
    } else {
      line = testLine;
    }
  }
  lines.push(line);
  
  // Adjust y position based on number of lines
  y = HEIGHT / 2 - ((lines.length - 1) * 50 / 2);
  
  // Draw each line
  lines.forEach((line, index) => {
    // Add shadow for better readability
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    
    ctx.fillText(line, WIDTH / 2, y + index * 50);
  });
  
  // Reset shadow
  ctx.shadowColor = 'transparent';
  
  // Add "Certificate" text
  ctx.font = 'bold 30px Arial';
  ctx.fillText('Certificate', WIDTH / 2, HEIGHT - 150);

  // Add name placeholder
  ctx.font = 'italic 25px Arial';
  ctx.fillText('Maxime Junca-Quintero', WIDTH / 2, HEIGHT - 100);

  // Save the image
  const outputPath = path.join(dirPath, `${cert.name}.jpg`);
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Created placeholder image: ${outputPath}`);
});

console.log('All certification placeholder images created successfully!'); 