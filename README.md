## App Structure
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
