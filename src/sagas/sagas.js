import { put, call, throttle } from "redux-saga/effects";
import getRepos from "../api/fetchRepos";

function* fetchRepos(action) {
  try {
    const response = yield call(getRepos, action.username);
    if (response.status >= 200 && response.status < 300) {
      const repos = yield response.json();
      yield put({ type: "REPOS_FETCH_SUCCEEDED", repos });
    } else {
      throw response;
    }
  } catch (error) {
    yield put({ type: "REPOS_FETCH_FAILED", error: error.statusText });
  }
}

function* mySaga() {
  yield throttle(1000, "REPOS_FETCH_REQUESTED", fetchRepos);
}

export default mySaga;
