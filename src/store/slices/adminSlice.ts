import { changeFirstChar } from '@/components/screens/admin/functions/changeFirstChar';
import { sortByName } from '@/components/screens/admin/functions/sortByName';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  filmId: number,
  genreId: number,
  genreValues: IGenreItem,
  filmValues: IFilmItem,
  genres: IGenres[],
  page: number,
  genresSize: number
}

interface IGenres {
  genreId: number,
  name: string
} 

interface IGenreItem {
  id: number,
  name: string,
  enName: string,
}

interface IFilmItem {
  name: string,
  foreignName: string,
  posterURL: string,
  year: number,
  rating: number,
}



const initialState: UserState = {
  filmId: 0,
  genreId: 0,
  genreValues: {
    id: 0,
    name: '',
    enName: '',
  },
  filmValues: {
    name: '',
    foreignName: '',
    posterURL: '',
    year: 0,
    rating: 0,
  },
  genres: [],
  page: 1,
  genresSize: 0,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addFilmId(state, action: PayloadAction<number>) {
      state.filmId = 0;
      state.filmId = action.payload;
    },
    addGenreId(state, action: PayloadAction<number>) {
      state.genreId = 0;
      state.genreId = action.payload;
    },
    addGenreValues(state, action: PayloadAction<IGenreItem>) {
        state.genreValues = {
          id: 0,
          name: '',
          enName: '',
        }
      Object.assign(state.genreValues, action.payload);
    },
    addFilmValues(state, action: PayloadAction<IFilmItem>) {
        state.filmValues = {
        name: '',
        foreignName: '',
        posterURL: '',
        year: 0,
        rating: 0,
      }
      Object.assign(state, action.payload);
    },
    addGenres(state, action: PayloadAction<IGenres[]>) {
      state.genres.length = 0;
      state.genres = [...state.genres, ...action.payload];
      changeFirstChar(state.genres);
      sortByName(state.genres, 'name');
    },
    newPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    addGenresSize(state) {
      state.genresSize = 0;
      state.genresSize = state.genres.length;
    },
  }
});

export const { addFilmId, addGenreId,addGenreValues, addFilmValues, addGenres, newPage, addGenresSize} = adminSlice.actions;


export default adminSlice.reducer;