/**
 *
 * Global variables
 *
 */
// Creates a super user who can perform certain actions
const isUserAdmin = true;


const moviesInStore = [{
		id: 1,
		title: "Bring On The Girls",
		yearOfPub: 1945
	},
	{
		id: 2,
		title: "The 13th Letter",
		yearOfPub: 1951
	},
	{
		id: 3,
		title: "Angel Of Mine",
		yearOfPub: 2019
	},
	{
		id: 4,
		title: "Blame On Rio",
		yearOfPub: 1948
	},
	{
		id: 5,
		title: "The Blue Veil",
		yearOfPub: 1951
	},
	{
		id: 6,
		title: "The Cry Of The Owl",
		yearOfPub: 2009
	}
];

// Get the next ID to be used to add a movie in store
var getTheNextMovieID = moviesInStore.length + 1;
// console.log(`The next ID to added in movies is ${getTheNextMovieID}`);



/**
 *
 *  Creating CRUD
 *
 */


/**
 *
 * Edit here if you wish to add a new movie to the list
 * PLEASE EDIT BELOW TO ADD A DESIRED MOVIE
 *
 */

const movieToAdd = {
	id: getTheNextMovieID, // Don't touch here!
	title: "Why Eunit Is Great", // Add a title to your movie
	yearOfPub: 2020 // change here
};

/**
 *
 * 1. Adding movies
 *
 */

const addAMovie = (id, title, yearOfPub) => {
	if (isUserAdmin) {
		moviesInStore.push({
			id,
			title,
			yearOfPub
		});
	} else {
		console.error(`You do not have the privilege to Add a movie`);
	}
};


/**
 *
 * 2. Displaying all available movies
 *
 */

const showMovies = () => {
	moviesInStore.forEach(function logMovie(movie, index) {
		const listMovieProps = JSON.stringify(movie);
		console.log(`This movie is available at this time in store: ${listMovieProps}`);
	});

	console.log(`--------------------------------`);
};


/**
 *
 * Edit here if you wish to update already existing movie in the list
 * PLEASE EDIT BELOW TO UPDATE A DESIRED MOVIE ID
 *
 */

const movieToUpdate = {
	id: 7, // Sets the movie ID!
	title: "Eunit Is Actually Great", // Add a title to your movie
	yearOfPub: 2021 // change here
};


/**
 *
 * 3. Update Already existing movie
 *
 */

const updateAMovie = () => {
	const movieIDToUpdate = movieToUpdate.id;
	moviesInStore[movieIDToUpdate] = movieToUpdate;
	moviesInStore.forEach(updatedMovieList => {
		console.log(`The updated movie list is ${JSON.stringify(updatedMovieList)}`);
	});

	console.log(`--------------------------------`);
};


/**
 *
 * Edit here if you wish to update already existing movie in the list
 * PLEASE EDIT BELOW TO UPDATE A DESIRED MOVIE ID
 *
 */

const movieIDToDelete = 5; // Put the movie ID you wish to delete!


/**
 *
 * Delete a movie from movie list
 *
 */

const deleteAMovie = (movieIDToDelete) => {
	moviesInStore.splice(movieIDToDelete, 1);
	const remainingMovieList = moviesInStore;

	moviesInStore.forEach(remainingMovieList => {
		console.log(`The remaining movie list is ${JSON.stringify(remainingMovieList)}`);
	});

	console.log(`--------------------------------`);

	return remainingMovieList;
};

/**
 *
 * Calling the functions sequentially
 *
 */

const callFunctionsSequentially = () => {
	showMovies();

	setTimeout(() => {
		addAMovie(movieToAdd); // Calling addAMovie in 1s
	}, 1000);

	setTimeout(() => {
		updateAMovie(); // Calling updateAMovie in 2s
	}, 2000);

	setTimeout(() => {
		deleteAMovie(movieIDToDelete); // Calling deleteAMovie in 3s
	}, 3000);
};

callFunctionsSequentially();