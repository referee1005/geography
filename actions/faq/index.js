import {
  FETCH_FAQ_REQUEST,
  FETCH_FAQ_SUCCESS,
  FETCH_FAQ_FAILURE
} from "../types";

export const fetchFaqRequest = (query) => ({
  type: FETCH_FAQ_REQUEST,
  payload: query
});

export const fetchFaqSuccess = (data) => ({
  type: FETCH_FAQ_SUCCESS,
  payload: data
});

export const fetchFaqFailure = (error) => ({
  type: FETCH_FAQ_FAILURE,
  payload: error
});
