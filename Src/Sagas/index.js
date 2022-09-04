import { all, takeEvery, takeLatest } from "redux-saga/effects";
import { omdbTypes } from "../Redux/omdbRedux";
import { get } from "../Services";

export default function* rootSaga(){
  yield all([
    takeEvery(omdbTypes.ON_SEARCH_REQUEST, get),
  ]);
}