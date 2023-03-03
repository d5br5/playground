import { call, delay, put, takeLatest } from "redux-saga/effects";

import {
  increment,
  incrementSuccess,
  incrementFailure,
  decrement,
  decrementSuccess,
  decrementFailure,
} from ".";

function* incrementSaga() {
  try {
    yield delay(1000);
    yield put({ type: incrementSuccess });
  } catch (err) {
    yield put({ type: incrementFailure, payload: err });
  }
}

export function* watchIncrement() {
  yield takeLatest(increment, incrementSaga);
}

function* decrementSaga() {
  try {
    yield delay(1000);
    yield put({ type: decrementSuccess });
  } catch (err) {
    yield put({ type: decrementFailure, payload: err });
  }
}

export function* watchDecrement() {
  yield takeLatest(decrement, decrementSaga);
}
