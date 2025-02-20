import axios from "axios";
import {
  GET_TEAM_REQUEST,
  GET_TEAM_SUCCESS,
  GET_TEAM_FAIL,
  ADD_TEAM_MEMBER_REQUEST,
  ADD_TEAM_MEMBER_SUCCESS,
  ADD_TEAM_MEMBER_FAIL,
} from "../constants/teamConstants";

// Fetch team members
export const getTeam = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TEAM_REQUEST });

    const { data } = await axios.get("/api/team");

    dispatch({ type: GET_TEAM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_TEAM_FAIL,
      payload: error.response?.data.message || error.message,
    });
  }
};

// Add a new team member
export const addTeamMember = (formData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TEAM_MEMBER_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post("/api/team/add", formData, config);

    dispatch({ type: ADD_TEAM_MEMBER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_TEAM_MEMBER_FAIL,
      payload: error.response?.data?.message || "Error adding team member",
    });
  }
};
