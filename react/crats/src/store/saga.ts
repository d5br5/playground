import { all, fork } from "redux-saga/effects";
import { watchIncrement, watchDecrement } from "./counter/saga";
import { watchUser } from "./user/saga";

export default function* rootSaga() {
  yield all([fork(watchIncrement), fork(watchDecrement), fork(watchUser)]);
}
