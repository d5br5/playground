import { put, takeLatest, delay } from "redux-saga/effects";
import { getData } from ".";

function* userSaga(action: any) {
  try {
    console.log(action);
    yield delay(1000);
    // const user = yield call(APICall, action.payload);
    console.log(33);
  } catch (err) {
    yield put({ type: "FAILURE", message: err });
  }
}

export function* watchUser() {
  yield takeLatest(getData, userSaga);
}
