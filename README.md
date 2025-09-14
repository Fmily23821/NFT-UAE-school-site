# EduVault Passport

A blockchain-based digital portfolio system for UAE schools, providing secure, tamper-proof, and instantly verifiable digital records of academic achievements.

## Features

- 🔐 **Blockchain Security**: ERC-721 NFTs for certificates and badges
- 🌍 **Bilingual Support**: English and Arabic with RTL support
- 📱 **Responsive Design**: Works on all devices
- 🎨 **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- ⚡ **Fast Performance**: Optimized with Vite and modern build tools

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animations**: Motion (React 19 compatible)
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Routing**: React Router
- **Icons**: Lucide React

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is optimized for Vercel deployment. Simply connect your GitHub repository to Vercel and it will automatically deploy.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel
npx vercel --prod
```

## Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_NFT_STORAGE_TOKEN=your_nft_storage_token_here
```

## License

MIT License