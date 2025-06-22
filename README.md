# Landing Page with Next.js and Sanity CMS

A high-performance, modern landing page built with Next.js, Sanity CMS, and Tailwind CSS. This project demonstrates best practices for building scalable, maintainable web applications.

## 🤝 Features

- **Next.js 14** with App Router
- **Sanity CMS** for content management
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Responsive Design** for all devices
- **Performance Optimized** with image optimization
- **SEO Ready** with proper metadata

## 📋 Components

1. **Navigation** - Responsive navigation bar with mobile menu
2. **Carousel** - Auto-playing image carousel with controls
3. **Image Component** - Optimized image display with hover effects
4. **Text Component** - Flexible text display with multiple variants
5. **Image & Text Component** - Combined layout with configurable positioning
6. **Footer** - Comprehensive footer with links and social media

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Deployment**: Vercel
- **Image Optimization**: Next.js Image component
- **State Management**: React hooks

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sanity-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your Sanity project:
   - Create a new Sanity project
   - Update `src/sanity/env.ts` with your project details
   - Add your project ID to `.env.local`

5. Run the development server:
```bash
npm run dev
```

6. Open Sanity Studio:
```bash
npm run dev
# Navigate to http://localhost:3000/studio
```

## 🎨 Content Management

### Setting up Content in Sanity Studio

1. **Navigation**: Configure menu items and logo
2. **Carousel**: Add slides with images, titles, and CTAs
3. **Image Component**: Upload and configure images
4. **Text Component**: Add text content with styling options
5. **Image & Text Component**: Create combined layouts
6. **Footer**: Configure company info and links

### Content Types

- **Navigation**: Menu structure and branding
- **Carousel**: Image slides with overlay content
- **Image Component**: Single image display
- **Text Component**: Text content with variants
- **Image & Text Component**: Combined image and text layouts
- **Footer**: Site footer with links and social media

## 🚀 Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 📊 Performance Features

- **Image Optimization**: Automatic image optimization with Next.js
- **Code Splitting**: Automatic code splitting for better performance
- **Static Generation**: Pre-rendered pages for faster loading
- **CDN**: Content delivery network for global performance
- **Lazy Loading**: Images and components load on demand

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Project Structure
