import * as types from '../constants/ActionTypes';

export const getCardData = (field, value) => ({
  type: types.GET_CARD_DATA,
  value,
  field
});