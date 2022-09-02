import { all, takeLatest } from "redux-saga/effects";
import { omdbTypes } from "../Redux/omdbRedux";
import { get } from "../Services";

export default function* rootSaga(){
  yield all([
    takeLatest(omdbTypes.ON_SEARCH_REQUEST, get),
  ]);
}