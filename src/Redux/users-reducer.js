import { usersAPI } from "../api/api";
import { updateObjectInArray } from '../utils/object-helpers'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [
        //   { id: 1, photoUrl: 'https://i.imgur.com/AVaPsiy.jpg', followed: false, name: "Andrii", status: 'on project', location: {country: 'Ukraine', city: 'Lviv'} },
        //   { id: 2, photoUrl: 'https://i.imgur.com/AVaPsiy.jpg', followed: true,name: "Dima", status: 'without love', location: {country: 'Ukraine', city: 'Pavliv'} },
        //   { id: 3, photoUrl: 'https://avatarfiles.alphacoders.com/968/thumb-96848.png', followed: false,name: "Roma", status: 'love et', location: {country: 'Ukraine', city: 'Yavoriv'} },
        //   { id: 4, photoUrl: 'https://otkritkis.ru/wp-content/uploads/2021/10/ava-94.jpg', followed: true,name: "Vova", status: 'homeman', location: {country: 'Ukraine', city: 'Bilka'} },
        //   { id: 5, photoUrl: 'https://avatarfiles.alphacoders.com/633/thumb-63329.png', followed: false,name: "Marik", status: 'smoke weed', location: {country: 'Ukraine', city: 'Lviv'} },
        //   { id: 6, photoUrl: 'https://avatarfiles.alphacoders.com/633/thumb-63329.png', followed: true,name: "Yura", status: 'sportsman', location: {country: 'Ukraine', city: 'Sambir'} },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {
                //             ...u, followed: true
                //         }
                //     }
                //     return u;
                // }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return { ...state, users: action.users };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => {
    return { type: UNFOLLOW, userId }
}
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });


export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

export const changeFollowStatus = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        changeFollowStatus(dispatch, userId, usersAPI.follow.bind(usersAPI),followSuccess)
    };
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        changeFollowStatus(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}

export default usersReducer;