import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_STUDENTS = 'GET_STUDENTS'
const APPLY_FILTER = 'APPLY_FILTER'
const APPLY_TAG_FILTER = 'APPLY_TAG_FILTER'
const TOGGLE_STUDENT = 'TOGGLE_STUDENT'
const ADD_TAG = 'ADD_TAG'

/**
 * INITIAL STATE
 */

const initialState = {
  students: [],
  studentSearch: [],
  filterText: '',
  filterTag: ''
}

/**
 * ACTION CREATORS
 */

const getStudents = (students) => ({type: GET_STUDENTS, students})

export const applyFilter = (filterText) => ({type: APPLY_FILTER, filterText})

export const applyTagFilter = (tagFilterText) => ({type: APPLY_TAG_FILTER, tagFilterText})

export const toggleStudent = (studentId) => ({type: TOGGLE_STUDENT, studentId})

export const addTag = (studentId, tag) => ({type: ADD_TAG, studentId, tag})

/**
 * THUNK CREATOR
 */

export const gotStudents = () => async dispatch => {
  try {
    const {data} = await axios.get('https://hatchways.io/api/assessment/students')
    data.students.forEach(student => {
        student.gradesViewable = false
        student.tags = []
    })
    dispatch(getStudents(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * UTILITY FUNCTIONS
 */

const filterStudents = (students, filterText) => {
    let updatedStudents = students.map(student => {
        return {
            ...student,
            fullName: `${student.firstName} ${student.lastName}`,
            gradesViewable: false
        }
    })
    return updatedStudents.filter(student => {
        return student.fullName.toLowerCase().includes(filterText.toLowerCase())
    })
}

const filterStudentsTags = (students, tagFilterText) => {
  return students.filter(student => {
      return (tagFilterText !== '') ? student.tags.filter(tag => tag.toLowerCase().includes(tagFilterText.toLowerCase())).length > 0 : true
  })
}

const filterStudentsAll = (students, name, tag) => {
  return filterStudentsTags(filterStudents(students, name), tag)
}

const updateGradeDisplay = (students, studentId) => {
    return students.map(student => {
        return (student.id === studentId) ? {...student, gradesViewable: !student.gradesViewable} : student
    })
}

const updateTags = (students, studentId, tag) => {
  return students.map(student => {
    return (student.id === studentId) ? {...student, tags: [...student.tags, tag]} : student
  })
}

/**
 * REDUCER
 */

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return {...state, students: [...action.students.students]}
    case TOGGLE_STUDENT:
        return {...state, students: [...updateGradeDisplay(state.students, action.studentId)]}
    case ADD_TAG:
        return {...state, students: [...updateTags(state.students, action.studentId, action.tag)]}
    case APPLY_FILTER:
      return {...state,
        filterText: action.filterText,
        studentSearch: [...filterStudentsAll(state.students, action.filterText, state.filterTag)]}
    case APPLY_TAG_FILTER:
      return {...state,
        filterTag: action.tagFilterText,
        studentSearch: [...filterStudentsAll(state.students, state.filterText, action.tagFilterText)]}
    default:
      return state
  }
}
