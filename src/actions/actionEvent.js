export const ActionEvent = {
    LOGIN: 'login',
    REQUEST_FAIL: 'requestFail',
    NOTIFY_LOGIN_SUCCESS: 'notifyLoginSuccess',
    SAVE_EXCEPTION: 'saveException',
    REGISTER: 'register',
    GET_PROFILE: 'getProfile',
    GET_CATEGORIES: 'getCategories',
    GET_CATEGORY_DETAIL: 'getCategoryDetail',
    GET_NEW_COURSES: 'getNewCourses',
    SEARCH: 'search',
    GET_LECTURES: 'getLectures',
    GET_COURSE_DETAIL: 'getCourseDetail',
    GET_LECTURE: 'getLecture',
    GET_LESSONS: 'getLessons',
    REGISTER_FREE_COURSE: 'registerFreeCourse',
    GET_COURSE_RATING: 'getCourseRating',
    GET_COURSE_DETAIL_V2: 'getCourseDetailV2',
    GET_QUESTIONS: 'getQuestions',
    GET_NOTES: 'getNotes',
    ADD_NOTE: 'addNote'
};

export function getActionSuccess(action) {
    return action + 'Success'
}
