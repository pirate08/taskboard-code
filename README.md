This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Basic Overview of the File structure of the project

taskboard-app/
├── src/
│   ├── components/
│   │   ├── Layout.js            # Main layout wrapper for the application
│   │   ├── Navbar.js            # Navigation bar component
│   │   ├── TaskList.js          # Component to display list of tasks
│   │   ├── TaskItem.js          # Individual task item component
│   │   ├── TaskForm.js          # Form for creating/editing tasks
│   │   └── BoardList.js         # Component to display list of boards
│   ├── lib/
│   │   ├── api.js               # API utility functions for frontend
│   │   └── db.js                # Database connection and query helpers
│   ├── hooks/
│   │   └── useTasks.js          # Custom hook for task-related operations
│   └── utils/
│       └── helpers.js           # General utility functions
├── app/
│   ├── layout.js                # Root layout component
│   ├── page.js                  # Homepage component
│   ├── globals.css              # Global styles
│   ├── boards/
│   │   ├── page.js              # Boards list page component
│   │   └── [boardId]/
│   │       └── page.js          # Individual board page component
│   ├── api/
│   │   ├── tasks/
│   │   │   ├── route.js         # API route for tasks (GET, POST)
│   │   │   └── [taskId]/
│   │   │       └── route.js     # API route for individual task (GET, PUT, DELETE)
│   │   └── boards/
│   │       ├── route.js         # API route for boards (GET, POST)
│   │       └── [boardId]/
│   │           └── route.js     # API route for individual board (GET, PUT, DELETE)
│   └── auth/
│       └── [...nextauth]/
│           └── route.js         # NextAuth.js authentication handlers
├── public/
│   ├── images/                  # Store static images
│   └── favicon.ico              # Favicon for the website
├── prisma/
│   └── schema.prisma            # Prisma schema for database modeling
├── config/
│   └── database.js              # Database configuration
├── middleware.js                # Next.js middleware for request/response modifications
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration (for Tailwind)
├── package.json                 # Project dependencies and scripts
└── README.md                    # Project documentation and setup instructions
