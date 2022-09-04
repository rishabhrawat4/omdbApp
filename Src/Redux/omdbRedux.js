import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  onChangeTextInput: ["value"],
  onSearchRequest: ["options"],
  onSearchSuccess: ["response"],
  onSearchFailure: ["error"],
})

export const omdbTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  inputValue: "",
  loading: null,
  error: null,
  list: null,
});

export const onChangeTextInput = (state, { value }) => {
  return state.merge({
    inputValue: value,
  });
}

export const onSearchRequest = (state, { options }) => {
  return state.merge({
    loading: true,
    error: null,
    list: null,
  });
}

export const onSearchSuccess = (state, { response }) => {
  return state.merge({
    loading: false,
    error: null,
    list: response,
  });
}

export const onSearchFailure = (state, { error }) => {
  return state.merge({
    loading: false,
    error: error,
  });
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ON_CHANGE_TEXT_INPUT]: onChangeTextInput,
  [Types.ON_SEARCH_REQUEST]: onSearchRequest,
  [Types.ON_SEARCH_SUCCESS]: onSearchSuccess,
  [Types.ON_SEARCH_FAILURE]: onSearchFailure,
});
