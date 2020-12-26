import { combineEpics } from 'redux-observable';
// import { } from './commonEpic';
import { from } from 'rxjs';
import {
    loginEpic,
    registerEpic,
    getProfileEpic,
} from './userEpic';
import {
    getCategoriesEpic
} from './categoryEpic';
import {
    getNewCoursesEpic,
    search,
    getLecturesEpic,
    getCourseDetailEpic,
    getLectureEpic,
    getLessonsEpic,
    getCourseRatingEpic,
    getCourseDetailV2Epic,
    getQuestionsEpic,
    getNotesEpic,
    addNoteEpic,
    getCourseTopRateEpic,
    getCourseTopSellEpic,
    getCourseSaveEpic,
    saveCourseEpic,
    getSaveCourseStatusEpic
} from './courseEpic'

import {
    registerFreeCourseEpic,
} from './paymentEpic'

export default combineEpics(
    loginEpic,
    registerEpic,
    getProfileEpic,
    getCategoriesEpic,
    getNewCoursesEpic,
    search,
    getLecturesEpic,
    getCourseDetailEpic,
    getLectureEpic,
    getLessonsEpic,
    registerFreeCourseEpic,
    getCourseRatingEpic,
    getCourseDetailV2Epic,
    getQuestionsEpic,
    getNotesEpic,
    addNoteEpic,
    getCourseTopRateEpic,
    getCourseTopSellEpic,
    getCourseSaveEpic,
    saveCourseEpic,
    getSaveCourseStatusEpic
);