import { ActionEvent, getActionSuccess } from "./actionEvent";

export const getNewCourses = (filter) => ({
    type: ActionEvent.GET_NEW_COURSES,
    payload: { ...filter }
})

export const getNewCoursesSuccess = data => ({
    type: getActionSuccess(ActionEvent.GET_NEW_COURSES),
    payload: { data }
})

export const search = (filter) => ({
    type: ActionEvent.SEARCH,
    payload: { ...filter }
})

export const searchSuccess = data => ({
    type: getActionSuccess(ActionEvent.SEARCH),
    payload: { data }
})

export const getLectures = () => ({
    type: ActionEvent.GET_LECTURES
})

export const getLecturesSuccess = data => ({
    type: getActionSuccess(ActionEvent.GET_LECTURES),
    payload: { data }
})

export const getCourseDetail = (id) => ({
    type: ActionEvent.GET_COURSE_DETAIL,
    payload: { id }
})

export const getCourseDetailSuccess = data => ({
    type: getActionSuccess(ActionEvent.GET_COURSE_DETAIL),
    payload: { data }
})

export const getLecture = (id) => ({
    type: ActionEvent.GET_LECTURE,
    payload: { id }
})

export const getLectureSuccess = data => ({
    type: getActionSuccess(ActionEvent.GET_LECTURE),
    payload: { data }
})

export const getLessons = (id) => ({
    type: ActionEvent.GET_LESSONS,
    payload: { id }
})

export const getLessonsSuccess = data => ({
    type: getActionSuccess(ActionEvent.GET_LESSONS),
    payload: { data }
})

export const getCourseRating = (id) => ({
    type: ActionEvent.GET_COURSE_RATING,
    payload: { id }
})

export const getCourseRatingSuccess = data => ({
    type: getActionSuccess(ActionEvent.GET_COURSE_RATING),
    payload: { data }
})

export const getCourseDetailV2 = (id, userId) => ({
    type: ActionEvent.GET_COURSE_DETAIL_V2,
    payload: { id, userId }
})

export const getCourseDetailV2Success = data => ({
    type: getActionSuccess(ActionEvent.GET_COURSE_DETAIL_V2),
    payload: { data }
})
