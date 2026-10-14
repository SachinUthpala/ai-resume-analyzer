# Resumind - AI Resume Analyzer

Resumind helps job seekers understand how well their resume fits a role. Upload a PDF resume, add the target company and job details, and get AI-generated feedback, including an ATS score and practical suggestions for improvement.

## Live app

[Open Resumind](https://ai-resume-reviewe.netlify.app/)

## Features

- Sign in with [Puter](https://puter.com/).
- Upload a PDF resume and provide the company, job title, and job description.
- Convert the uploaded PDF into an image preview with [PDF.js](https://mozilla.github.io/pdf.js/).
- Analyze the resume against the target role using Puter's AI service.
- Review an overall score and feedback for ATS compatibility, tone and style, content, structure, and skills.
- See saved resume submissions on the home page and reopen their reviews.
- Store resume files and analysis data using Puter's file system and key-value storage.

## Tech stack

- **Language:** [TypeScript](https://www.typescriptlang.org/) and [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **UI:** [React](https://react.dev/) and [React Router](https://reactrouter.com/)
- **Build and development:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **AI, authentication, and data services:** [Puter.js](https://docs.puter.com/)
- **PDF processing:** [PDF.js](https://mozilla.github.io/pdf.js/)
- **State management:** [Zustand](https://zustand.docs.pmnd.rs/)

### API and data fetching

The app uses the [Puter.js SDK](https://docs.puter.com/) to interact with Puter's APIs in the browser. It uses Puter for user authentication, AI resume analysis, file uploads and reads, and key-value storage for saved resume details and feedback. The resume analysis is prompted with the job title and description so the feedback can be tailored to the role.

## Run locally

### Requirements

- [Node.js](https://nodejs.org/) and npm
- A Puter account to use sign-in, file storage, and AI analysis

### Setup

Clone the repository, install its dependencies, and start the development server:

```bash
git clone https://github.com/SachinUthpala/ai-resume-analyzer.git
cd ai-resume-analyzer
npm install
npm run dev
```

Open the local URL printed in the terminal (typically `http://localhost:5173`).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create the production build. |
| `npm run start` | Serve the production build. |
| `npm run typecheck` | Generate React Router types and run the TypeScript compiler. |

## Production

Build the app with:

```bash
npm run build
```

The project is configured for client-side rendering with React Router. The repository also includes a `Dockerfile` for container-based deployment.
