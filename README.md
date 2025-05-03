# Vibe-Chat

Vibe-Chat is a modern, real-time chat application built using Next.js, TypeScript, and a clean, responsive UI. This application supports user authentication, real-time messaging, and a fully responsive design optimized for both desktop and mobile devices. It also supports light and dark themes with a customizable user interface.

---

## Features

- **User Authentication**: Secure login and registration using Clerk.
- **Real-Time Messaging**: Real-time chat with instant message updates.
- **Responsive Design**: Fully responsive layout with mobile-first approach.
- **Light/Dark Mode**: Supports light and dark themes for improved user experience.
- **Sidebar Navigation**: Intuitive sidebar for easy access to chat rooms and user profile.

---

## App Structure

Below is an overview of the application's file and folder structure:

```md
├── app/
│   ├── page.tsx                 # Root page (redirects to login)
│   ├── login/
│   │   └── page.tsx             # Login page
│   ├── register/
│   │   └── page.tsx             # Register page
│   ├── chat/
│   │   └── page.tsx             # Main chat page
│   ├── layout.tsx               # Root layout with ThemeProvider
│   └── globals.css              # Global styles
├── components/
│   ├── auth/
│   │   ├── login-form.tsx       # Login form component
│   │   └── register-form.tsx    # Register form component
│   ├── chat/
│   │   ├── chat-layout.tsx      # Main chat layout component
│   │   ├── user-sidebar.tsx     # User sidebar component
│   │   ├── chat-panel.tsx       # Chat messages panel component
│   │   ├── message-input.tsx    # Message input component
│   │   └── mobile-header.tsx    # Mobile header component
│   ├── theme-provider.tsx       # Theme provider for light/dark mode
│   └── ui/                      # shadcn/ui components
├── hooks/
│   └── use-media-query.tsx      # Custom hook for responsive design
├── lib/
│   ├── mock-data.ts             # Mock users and messages data
│   └── utils.ts                 # Utility functions
└── types/
    └── chat.ts                  # TypeScript interfaces for chat data
```
Installation
To run this project locally, follow the steps below:

1. ## Clone the repository: ##

```bash
git clone https://github.com/yourusername/vibe-chat.git
cd vibe-chat
```
2. ## Install the dependencies: ## 

```bash
npm install
```
3. ## Run the development server:##

```bash
npm run dev
```
The application will be available at http://localhost:3000.

## Technologies Used
- Next.js: React-based framework for building static and dynamic web apps.

- TypeScript: Type-safe language for enhanced development experience.

- JWT, Firebase: Authentication and user management.

- Tailwind CSS: Utility-first CSS framework for styling.

- shadcn/ui: A library for building reusable UI components with a consistent design.
