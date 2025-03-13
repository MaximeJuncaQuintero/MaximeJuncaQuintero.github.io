# Maxime Junca - E-Portfolio

A modern, responsive e-portfolio built with Next.js 14, Tailwind CSS, and Framer Motion. This portfolio showcases my professional experience, projects, certifications, and more in an interactive and visually appealing format.

## Live Demo

Visit the live portfolio at [https://maxime-junca.github.io/eportfolio](https://maxime-junca.github.io/eportfolio)

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Interactive UI**: Smooth animations and transitions powered by Framer Motion
- **Bilingual Support**: Available in both English and French
- **Project Showcase**: Detailed project pages with comprehensive descriptions
- **Interactive Chatbot**: AI-powered chatbot for visitor interaction
- **Certifications Gallery**: Visual display of professional certifications
- **Reference Letters**: Testimonials and letters of recommendation
- **Media Section**: Videos and presentations showcasing my work
- **Contact Form**: Easy way for visitors to get in touch

## Project Structure

```
eportfolio/
├── app/                      # Next.js app directory
│   ├── components/           # React components
│   │   ├── About.tsx         # About section
│   │   ├── Certifications.tsx# Certifications section
│   │   ├── Contact.tsx       # Contact form
│   │   ├── Experience.tsx    # Work experience timeline
│   │   ├── Hero.tsx          # Hero/landing section
│   │   ├── Media.tsx         # Media gallery
│   │   ├── Projects.tsx      # Projects overview
│   │   ├── References.tsx    # Reference letters
│   │   ├── ProjectDetail.tsx # Individual project view
│   │   └── chatbot/          # Chatbot implementation
│   ├── projects/             # Project-specific pages
│   │   ├── amazon-kpi/       # Amazon KPI project
│   │   ├── housedec/         # HouseDec project
│   │   ├── innovation-report/# Innovation Report project
│   │   ├── kits/             # KITS project
│   │   └── tenoris-analytics/# Tenoris Analytics project
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── public/                   # Static assets
│   └── assets/               # Images, documents, etc.
├── scripts/                  # Utility scripts
└── ...                       # Configuration files
```

## Technologies Used

- **Next.js 14**: React framework for server-rendered applications
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for React components
- **React Icons**: Comprehensive icon library
- **React Intersection Observer**: For scroll-based animations
- **React Chatbot Kit**: For implementing the interactive chatbot
- **GitHub Pages**: For hosting and deployment

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/maxime-junca/eportfolio.git
   cd eportfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

This project is configured for deployment to GitHub Pages using GitHub Actions:

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

The GitHub Actions workflow automatically deploys the application to GitHub Pages whenever changes are pushed to the main branch.

## Customization

To customize this portfolio for your own use:

1. Update personal information in the component files
2. Replace project details in the `app/projects/` directory
3. Add your own certifications, references, and media
4. Customize the color scheme in `tailwind.config.js`

## License

This project is licensed under the ISC License.

## Acknowledgments

- All references and mentors who have supported my professional journey
