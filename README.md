# CourseFinder: Google Drive Course Searcher

CourseFinder is a modern, responsive web application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It uses the Google Custom Search API and Google Dorks to help users find educational courses, PDFs, and resources hosted on Google Drive.

---

## Features

- **Responsive Design**: Fully responsive UI for all screen sizes.
- **Custom Search**: Powered by Google Custom Search API to deliver accurate results.
- **Modern UI**: Clean and user-friendly interface with smooth hover effects and transitions.
- **Search Previews**: Displays search results with titles, descriptions, and optional thumbnails.
- **Error Handling**: Graceful error messages for failed searches or invalid inputs.
- **Fast and Secure**: Built using Next.js's App Router and API Routes for speed and security.

---

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **API**: Google Custom Search API
- **Deployment**: [Vercel](https://vercel.com/)

---

## Installation

### Prerequisites
- Node.js installed (v16+ recommended)
- Google Custom Search API Key and CX ID. Refer to the [Google Custom Search documentation](https://developers.google.com/custom-search/v1/introduction) for setup instructions.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/saikothasan/course-drive
   cd course-drive
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   GOOGLE_API_KEY=your_google_api_key
   GOOGLE_CX=your_custom_search_engine_id
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Project Structure

```
.
├── app/
│   ├── api/
│   │   └── search/
│   │       └── route.ts  # API route to handle search queries
│   ├── page.tsx          # Main landing page
├── components/
│   ├── Navbar.tsx        # Top navigation bar
│   ├── SearchBar.tsx     # Search bar for user input
│   ├── ResultCard.tsx    # Card component for displaying search results
├── styles/               # Global styles
├── public/               # Public assets
├── .env                  # Environment variables
├── tailwind.config.js    # Tailwind CSS configuration
├── next.config.js        # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

---

## Features Walkthrough

### Navbar
- **File**: `components/Navbar.tsx`
- A simple, responsive navbar with a title and logo.

### Search Functionality
- **File**: `components/SearchBar.tsx`
- Input field with a search button to send queries to the backend API.

### API Route
- **File**: `app/api/search/route.ts`
- Processes user queries using the Google Custom Search API and returns results.

### Search Results
- **File**: `components/ResultCard.tsx`
- Displays search results with a title, snippet, thumbnail (if available), and a link.

---

## Available Scripts

- **Start Development Server**:
  ```bash
  npm run dev
  ```

- **Run Linter**:
  ```bash
  npm run lint
  ```

- **Build for Production**:
  ```bash
  npm run build
  ```

- **Start Production Server**:
  ```bash
  npm run start
  ```

---

## Deployment

Deploy this project on [Vercel](https://vercel.com/) with the following steps:

1. Push your project to a GitHub repository.
2. Log in to Vercel and import your repository.
3. Add the `.env` variables in the Vercel dashboard.
4. Click **Deploy** to launch your app.

---

## Future Enhancements

- Add **filters** for specific file types (e.g., videos, PDFs).
- Implement **pagination** for search results.
- Add **user authentication** for personalized features.
- Display **loading indicators** and more detailed error messages.

---

## Contributing

Contributions are welcome! If you'd like to add features or fix bugs:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit changes and push to your branch.
4. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).
