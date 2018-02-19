export class Movie {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: Ratings;
  metascore: string;
  imdbrating: string;
  imdbVotes: string;
  imdbid: string;
  type: string;
  dvd: string;
  boxOffice: string;
  production: string;
  website: string;
  response: string;
}

export class Ratings {
  source: string;
  value: string;
}

// {
//   "Title": "Guardians of the Galaxy Vol. 2",
//   "Year": "2017",
//   "Rated": "PG-13",
//   "Released": "05 May 2017",
//   "Runtime": "136 min",
//   "Genre": "Action, Adventure, Sci-Fi",
//   "Director": "James Gunn",
//   "Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-lord created by), Steve Gan (Star-lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
//   "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
//   "Plot": "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.",
//   "Language": "English",
//   "Country": "USA, New Zealand, Canada",
//   "Awards": "Nominated for 1 Oscar. Another 7 wins & 26 nominations.",
//   "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",
//   "Ratings": [
//     {
//       "Source": "Internet Movie Database",
//       "Value": "7.7/10"
//     },
//     {
//       "Source": "Rotten Tomatoes",
//       "Value": "83%"
//     },
//     {
//       "Source": "Metacritic",
//       "Value": "67/100"
//     }
//   ],
//   "Metascore": "67",
//   "imdbRating": "7.7",
//   "imdbVotes": "336,851",
//   "imdbID": "tt3896198",
//   "Type": "movie",
//   "DVD": "22 Aug 2017",
//   "BoxOffice": "$389,804,217",
//   "Production": "Walt Disney Pictures",
//   "Website": "https://marvel.com/guardians",
//   "Response": "True"
// }
