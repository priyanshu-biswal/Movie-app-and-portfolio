import React from 'react';
import { MovieApp } from './components/MovieApp.jsx';
import { PortfolioCard } from './components/PortfolioCard.jsx';

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10 text-gray-900 dark:bg-gray-950 dark:text-white sm:px-6">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Movies &amp; Meet Priyanshu
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Explore movies and Priyanshu Biswal&apos;s portfolio.
          </p>
        </header>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-start">
          <MovieApp />
          <PortfolioCard />
        </div>
      </div>
    </main>
  );
}
