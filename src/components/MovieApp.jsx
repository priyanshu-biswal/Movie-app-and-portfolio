import React, { useState } from 'react';

const INITIAL_MOVIES = [
  { id: 101, title: "Inception", genre: "Sci-Fi", year: 2010, rating: 8.8 },
  { id: 102, title: "Interstellar", genre: "Sci-Fi", year: 2014, rating: 8.6 },
  { id: 103, title: "The Dark Knight", genre: "Action", year: 2008, rating: 9.0 },
  { id: 104, title: "Pulp Fiction", genre: "Crime", year: 1994, rating: 8.9 }
];

export const MovieApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favourites, setFavourites] = useState([]);
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  const toggleFavourite = (id) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const filteredMovies = INITIAL_MOVIES.filter(
    (movie) =>
      movie.title.toLowerCase().includes(normalizedSearchTerm) ||
      movie.genre.toLowerCase().includes(normalizedSearchTerm) ||
      String(movie.year).includes(normalizedSearchTerm)
  );

  const favouriteMovies = INITIAL_MOVIES.filter((movie) => favourites.includes(movie.id));

  return (
    <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">🎬 Movie Explorer</h2>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          aria-label="Search movies by title, genre, or year"
          placeholder="Search by title, genre, or year..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="min-w-0 flex-1 rounded-lg border px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm('')}
            className="rounded-lg bg-gray-500 px-4 py-2 font-semibold text-white hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Clear
          </button>
        )}
      </div>

      <section className="mb-6" aria-live="polite">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Search Results</h3>
        {normalizedSearchTerm === '' ? (
          <p className="text-sm italic text-gray-500">🔍 Search by movie title, genre, or year.</p>
        ) : filteredMovies.length === 0 ? (
          <p className="text-sm text-red-600 dark:text-red-400">
            ❌ No movies found matching &quot;{searchTerm.trim()}&quot;.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredMovies.map((movie) => {
              const isFav = favourites.includes(movie.id);
              return (
                <article key={movie.id} className="rounded-lg border bg-gray-50 p-3 dark:border-gray-600 dark:bg-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white">{movie.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {movie.genre} · {movie.year} · ★ {movie.rating}
                  </p>
                  <button
                    type="button"
                    aria-pressed={isFav}
                    onClick={() => toggleFavourite(movie.id)}
                    className={`mt-2 w-full rounded py-1.5 text-xs font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                      isFav ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {isFav ? 'Remove Favourite' : 'Add Favourite'}
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <section className="border-t border-gray-200 pt-4 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
           Favourites ({favouriteMovies.length})
        </h3>
        {favouriteMovies.length === 0 ? (
          <p className="text-sm italic text-gray-500">No favourite movies added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {favouriteMovies.map((movie) => (
              <article key={movie.id} className="rounded-lg border border-amber-400 bg-amber-50 p-3 dark:bg-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white">{movie.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  {movie.genre} · {movie.year} · ★ {movie.rating}
                </p>
                <button
                  type="button"
                  aria-pressed="true"
                  onClick={() => toggleFavourite(movie.id)}
                  className="mt-2 w-full rounded bg-red-600 py-1.5 text-xs font-semibold text-white hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                >
                  Remove
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};