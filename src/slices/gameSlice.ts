import { createSlice } from '@reduxjs/toolkit';
import { IState, IGameSliceState } from 'types';

const initialState: IGameSliceState = {
  isLaunched: false,
  totalRounds: 5,
  currentRound: 1,
  lastSuccessRound: 1,
  isUserTurn: false,
  randomArray: [],
  userArray: [],
  isFailed: false,
  shouldChange: true,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    start: (state, action) => {
      state.isLaunched = true;
      state.totalRounds = action.payload.totalRounds;
      state.randomArray = action.payload.randomArray;
    },
    reset: (state) => {
      state.isLaunched = false;
      state.userArray = [];
      state.currentRound = 1;
      state.lastSuccessRound = 1;
    },
    setTurn(state, action) {
      state.isUserTurn = action.payload;
    },
    userClick(state, action) {
      state.userArray.push(action.payload);
    },
    success: (state) => {
      state.lastSuccessRound = state.currentRound;
      state.currentRound = state.currentRound + 1;
      state.isUserTurn = false;
      state.userArray = [];
    },
    fail: (state) => {
      state.currentRound = state.lastSuccessRound;
      state.isUserTurn = false;
      state.userArray = [];
      state.isFailed = true;
      state.shouldChange =
        state.lastSuccessRound === state.currentRound ? !state.shouldChange : state.shouldChange;
    },
    resetFailed: (state) => {
      state.isFailed = false;
    },
  },
});

export const { start, reset, setTurn, userClick, success, fail, resetFailed } = gameSlice.actions;

export const selectIsUserTurn = (state: IState<IGameSliceState>) => state.game.isUserTurn;

export const selectIsLaunched = (state: IState<IGameSliceState>) => state.game.isLaunched;

export const selectCurrentRound = (state: IState<IGameSliceState>) => state.game.currentRound;
export const selectTotalRounds = (state: IState<IGameSliceState>) => state.game.totalRounds;

export const selectRandomArray = (state: IState<IGameSliceState>) => state.game.randomArray;
export const selectUserArray = (state: IState<IGameSliceState>) => state.game.userArray;

export const selectIsFailed = (state: IState<IGameSliceState>) => state.game.isFailed;
export const selectShouldChange = (state: IState<IGameSliceState>) => state.game.shouldChange;

export default gameSlice.reducer;
