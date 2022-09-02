import { put } from 'redux-saga/effects';
import axios from 'axios';

export function* get(actions) {
  const { options } = actions;
  const {slug, params, onSuccess, onFailure} = options;

  axios.get(
    slug,
    {params: params}
  ).then(response => {
    put(onSuccess(response))
  }).catch(error => {
    put(onFailure(error))
  });
}