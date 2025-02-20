import {
    GET_TEAM_REQUEST,
    GET_TEAM_SUCCESS,
    GET_TEAM_FAIL,
    ADD_TEAM_MEMBER_REQUEST,
    ADD_TEAM_MEMBER_SUCCESS,
    ADD_TEAM_MEMBER_FAIL,
    DELETE_TEAM_MEMBER_REQUEST,
    DELETE_TEAM_MEMBER_SUCCESS,
    DELETE_TEAM_MEMBER_FAIL,
  } from "../constants/teamConstants";
  
  const initialState = {
    team: [],
    loading: false,
    error: null,
  };
  
  export const teamReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_TEAM_REQUEST:
      case ADD_TEAM_MEMBER_REQUEST:
      case DELETE_TEAM_MEMBER_REQUEST:
        return { ...state, loading: true };
  
      case GET_TEAM_SUCCESS:
        return { ...state, loading: false, team: action.payload };
  
      case ADD_TEAM_MEMBER_SUCCESS:
        return { ...state, loading: false, team: [...state.team, action.payload] };
  
      case DELETE_TEAM_MEMBER_SUCCESS:
        return {
          ...state,
          loading: false,
          team: state.team.filter((member) => member._id !== action.payload),
        };
  
      case GET_TEAM_FAIL:
      case ADD_TEAM_MEMBER_FAIL:
      case DELETE_TEAM_MEMBER_FAIL:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  