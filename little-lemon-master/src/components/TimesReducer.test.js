import { initializeTimes, updateTimes } from './TimesReducerimesReducer';

test('initializeTimes should return the correct initial times', () => {
  const times = initializeTimes();
  expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes should return the same state', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00'];
  const newState = updateTimes(initialState, {});
  expect(newState).toEqual(initialState);  // Expect the same state to be returned
});
