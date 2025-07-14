# Healthcare Management System - Replit Development Guide

## Overview

A comprehensive healthcare management system built for a Korean nursing home (해와달 요양원). The application provides a professional website with contact form functionality, facility information, and program details. Built with modern web technologies including React, TypeScript, Express.js, and PostgreSQL.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom Korean typography
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Validation**: Zod for request/response validation
- **Session Management**: Ready for session-based authentication
- **API Design**: RESTful endpoints with proper error handling

### Data Storage Solutions
- **Primary Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with code-first schema approach
- **Migrations**: Automated through Drizzle Kit
- **Development Storage**: In-memory storage class for development/testing

## Key Components

### Database Schema
- **Users Table**: Authentication ready (username, password)
- **Contacts Table**: Contact form submissions with Korean phone validation
- **Shared Types**: TypeScript types generated from Drizzle schemas

### API Endpoints
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - Retrieve contact submissions (admin)

### Frontend Pages
- **Home**: Hero slider with multiple slides and call-to-action
- **About**: Facility introduction and statistics
- **Programs**: Care programs and services offered
- **Gallery**: Image gallery with modal view
- **Guide**: Admission and discharge procedures
- **Contact**: Contact form with Korean phone validation
- **Location**: Transportation and location information
- **FAQ**: Frequently asked questions

### UI Components
- Custom Header with Korean branding
- Footer with business information
- Hero slider with automatic progression
- Form components with validation
- Responsive design with mobile optimization

## Data Flow

1. **Contact Form Submission**:
   - User fills form → React Hook Form validation → Zod schema validation → API submission → Database storage → Success feedback

2. **Page Navigation**:
   - User clicks navigation → Wouter routing → Component rendering → Data fetching (if needed) → Page display

3. **Image Gallery**:
   - User clicks thumbnail → Modal dialog opens → Full-size image display

4. **Error Handling**:
   - Client-side validation → Server-side validation → Error response → User feedback via toast notifications

## External Dependencies

### Core Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- UI Library (Radix UI components, Lucide React icons)
- Database (@neondatabase/serverless, Drizzle ORM)
- Validation (Zod, @hookform/resolvers)
- Styling (Tailwind CSS, class-variance-authority)
- Build tools (Vite, TypeScript, ESBuild)

### Development Dependencies
- Replit-specific plugins for development environment
- PostgreSQL 16 module for database
- Korean fonts (Noto Sans KR, Gamja Flower, ChosunilboMyeongjo)

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20
- **Database**: PostgreSQL 16 (Replit module)
- **Port Configuration**: 5000 (internal) → 80 (external)
- **Hot Reload**: Vite development server with HMR

### Production Build
1. Frontend build: `npm run build` (Vite compilation)
2. Backend build: ESBuild bundling for Node.js
3. Static file serving: Express serves built frontend
4. Database: Environment-based DATABASE_URL configuration

### Replit Configuration
- Automatic deployment on code changes
- Environment variable management
- PostgreSQL database provisioning
- Custom domain support ready

## Changelog

### June 30, 2025 - Kakao Maps Integration & SEO Setup
- **Kakao Maps API integration with keyword search functionality**
- Successfully implemented location display using "해와달 요양원 양주" search
- Fixed InfoWindow styling to show only facility name with red CustomOverlay
- Added debugging logs for troubleshooting deployment issues
- **Naver Search Advisor verification issues resolved**
- Fixed HTML verification file placement in public folder
- Added meta tag verification method for dual verification
- SEO optimization complete with proper naver-site-verification meta tag
- **Enhanced SEO meta tags for Naver search optimization**
- Updated meta description to 80 characters for search engine compliance
- Added comprehensive keywords targeting "양주요양원", "해와달요양원"
- Implemented geo-location tags for local search optimization
- **Sitemap.xml updated with correct production domain**
- Changed all URLs from placeholder to https://sunandmoonursinghome.shop
- **Environment variable setup required for Netlify deployment**
- VITE_KAKAO_MAP_API_KEY must be configured in Netlify dashboard
- Address updated to "경기 양주시 평화로 1426 (6,7층)"

### June 26, 2025 - Netlify Forms Integration Complete
- **Successfully converted contact form to Netlify Forms**
- Removed React Hook Form and backend API dependencies
- Contact form now uses native HTML form with Netlify processing
- Added hidden form in index.html for Netlify form detection
- Maintained identical UI design and user experience
- Form submissions will be accessible in Netlify dashboard
- Eliminated server dependency for form processing
- **Previous Netlify deployment compatibility maintained**
- Site remains fully functional at https://bespoke-alpaca-f24586.netlify.app/
- All styling, navigation, and contact functionality preserved

### June 25, 2025 - Project Completion
- **Complete nursing home website implementation**
- Hero slider with navigation indicators (arrows removed)
- 7 comprehensive care programs including Long-term Care Grade Support Program
- Contact form with Korean phone validation and clickable phone links
- 8 real facility photos in gallery with brightness optimization
- Location page with actual address and Naver Place map integration
- Mobile-responsive design with scroll-to-top navigation
- Korean typography optimization (조선일보명조 font for nursing home name)
- Removed unused UI components and cleaned up imports

### Technical Improvements
- Automatic scroll-to-top on page navigation
- Optimized image loading and display
- Mobile menu with horizontal three-item layout
- Enhanced form validation and user feedback
- Professional color scheme matching logo palette
- PostgreSQL database integration for contact form
- Admin dashboard for managing consultation requests
- CSV export functionality for contact data
- Real-time contact form processing with database storage

## User Preferences

Preferred communication style: Simple, everyday language.