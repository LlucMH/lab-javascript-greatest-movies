// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((movie) => movie.director);
  const uniqueDirectors = [...new Set(allDirectors)];
  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray.length) return 0;

  const spielbergDramas = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });

  return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const totalScore = moviesArray.reduce((sum, movie) => {
    return sum + (movie.score || 0);
  }, 0);

  const average = totalScore / moviesArray.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (dramaMovies.length === 0) return 0;

  const totalScore = dramaMovies.reduce((sum, movie) => {
    return sum + (movie.score || 0);
  }, 0);

  const average = totalScore / dramaMovies.length;
  return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = [...moviesArray];

  moviesCopy.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map((movie) => movie.title);

  const sortedTitles = titles.sort((a, b) => a.localeCompare(b));

  return sortedTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const movieCopy = { ...movie };

    let totalMinutes = 0;
    const duration = movie.duration;

    const hoursMatch = duration.match(/(\d+)h/);
    if (hoursMatch) {
      totalMinutes += parseInt(hoursMatch[1]) * 60;
    }

    const minutesMatch = duration.match(/(\d+)min/);
    if (minutesMatch) {
      totalMinutes += parseInt(minutesMatch[1]);
    }

    movieCopy.duration = totalMinutes;

    return movieCopy;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  // Manejar caso de un solo elemento
  if (moviesArray.length === 1) {
    const year = moviesArray[0].year;
    const score = moviesArray[0].score || 0;
    return `The best year was ${year} with an average score of ${Number(
      score.toFixed(1)
    )}`;
  }

  const yearGroups = {};

  moviesArray.forEach((movie) => {
    const year = movie.year;
    const score = movie.score || 0;

    if (!yearGroups[year]) {
      yearGroups[year] = [score];
    } else {
      yearGroups[year].push(score);
    }
  });

  let bestYear = null;
  let bestAvg = 0;

  for (const year in yearGroups) {
    const scores = yearGroups[year];
    const avg = scores.reduce((sum, score) => sum + score, 0) / scores.length;

    const numericYear = Number(year);

    if (
      avg > bestAvg ||
      (avg === bestAvg && (bestYear === null || numericYear < bestYear))
    ) {
      bestAvg = avg;
      bestYear = numericYear;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg.toFixed(
    1
  )}`;
}
