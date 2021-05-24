import { all, fork } from 'next-redux-saga';
import myRouteSaga from './myRoute;'
import userSaga from './user';

export default function* rootSaga() {
    yield all([
        fork(myRouteSaga),
        fork(userSaga),
    ]);
}