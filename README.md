# Portfolio Landing Page

This is a modern landing page for your portfolio built using TypeScript, React, Tailwind CSS, Radix UI, Astro, and Supabase.

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory: `cd portfolio-landing`
3. Install dependencies: `npm install`
4. Create a `.env` file in the root directory and add your Supabase URL and API key:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_api_key
   ```
5. Update the `supabaseUrl` and `supabaseKey` variables in `src/components/Contact.tsx` with your Supabase credentials.
6. Run the development server: `npm run dev`
7. Open your browser and visit `http://localhost:3000` to see your portfolio landing page.

## Project Structure

- `src/pages/index.astro`: Main entry point for the landing page
- `src/layouts/Layout.astro`: Base layout component
- `src/components/`:
  - `Header.tsx`: Navigation header with dropdown menu
  - `Hero.tsx`: Hero section with a brief introduction
  - `Projects.tsx`: Showcase of your projects
  - `Skills.tsx`: Display of your skills
  - `Contact.tsx`: Contact form integrated with Supabase

## Navigation

The landing page is designed as a single-page application with smooth scrolling to different sections:

1. **Header**: Contains a dropdown menu for easy navigation to different sections of the page.
2. **Hero**: The first section visitors see, featuring a welcome message and a call-to-action button.
3. **Projects**: Showcases your projects in a responsive grid layout.
4. **Skills**: Displays your skills using a tag-like design.
5. **Contact**: A "Contact Me" button that opens a modal with a contact form. The form submits data to Supabase.

## Customization

To customize the content of your portfolio:

1. Update the project information in `src/components/Projects.tsx`
2. Modify the skills list in `src/components/Skills.tsx`
3. Adjust the styling using Tailwind CSS classes in each component
4. Replace "Your Name" with your actual name in `src/components/Header.tsx` and other relevant places

## Deployment

To deploy your portfolio:

1. Run `npm run build` to create a production-ready build
2. Deploy the contents of the `dist` folder to your preferred hosting platform (e.g., Netlify, Vercel, or GitHub Pages)

Enjoy your new portfolio landing page!