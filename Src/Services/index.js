import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import Reactotron from 'reactotron-react-native';

export function getApi(slug, params) {
  return axios.get(
    slug,
    {params}
  )
}
export function* get(action) {
  // console.log(action)
  const { options } = action;
  const {slug, params, onSuccess, onFailure} = options;
  let response = yield call(getApi, slug, params);
  Reactotron.log('response', response);
  if(response.data.Response == "True")
    yield put(onSuccess(response.data.Search));
  if(response.data.Response == "False")
    yield put(onFailure(response.data.Error))
}