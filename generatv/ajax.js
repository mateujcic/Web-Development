const apiHost='https://imdb8.p.rapidapi.com/actors/'

const getMoviesFromApiAsync = async () => {
    try {
      let response = await fetch(
        'https://imdb8.p.rapidapi.com/title'
      );
      let json = await response.json();
      return json.movies;
    } catch (error) {
      console.error(error);
    }
  };