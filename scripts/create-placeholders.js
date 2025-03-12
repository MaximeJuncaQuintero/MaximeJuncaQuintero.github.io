const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const projects = [
  {
    name: 'amazon-kpi',
    title: 'Amazon KPI Dashboard',
    color: '#232F3E' // Amazon blue
  },
  {
    name: 'tenoris-analytics',
    title: 'Tenoris Analytics',
    color: '#6236FF' // Purple
  },
  {
    name: 'innovation-report',
    title: 'Innovation Report',
    color: '#1A73E8' // Blue
  },
  {
    name: 'kits',
    title: 'KITS - Appliance Kit Service',
    color: '#34A853' // Green
  },
  {
    name: 'housedec',
    title: 'HouseDec - Furniture E-commerce',
    color: '#EA4335' // Red
  }
];

const WIDTH = 800;
const HEIGHT = 600;

// Create the projects directory if it doesn't exist
const projectsDir = path.join(__dirname, '../public/assets/projects');
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

projects.forEach(project => {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = project.color;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Add pattern
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  for (let i = 0; i < 20; i++) {
    const x = Math.random() * WIDTH;
    const y = Math.random() * HEIGHT;
    const size = Math.random() * 100 + 50;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }

  // Add text shadow
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;

  // Add title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 40px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Handle long titles
  const words = project.title.split(' ');
  if (words.length > 3) {
    const firstLine = words.slice(0, Math.ceil(words.length / 2)).join(' ');
    const secondLine = words.slice(Math.ceil(words.length / 2)).join(' ');
    ctx.fillText(firstLine, WIDTH / 2, HEIGHT / 2 - 30);
    ctx.fillText(secondLine, WIDTH / 2, HEIGHT / 2 + 30);
  } else {
    ctx.fillText(project.title, WIDTH / 2, HEIGHT / 2);
  }

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(projectsDir, `${project.name}.jpg`), buffer);
  
  console.log(`Created placeholder for ${project.name}`);
}); 