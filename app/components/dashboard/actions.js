import axios from 'axios';

export let SERVER_URL = 'https://localhost/';
if (process.env.NODE_ENV == 'production') {
	SERVER_URL = 'https://capcoglobalchallenge.com/';
}

// Activities actions
export const FETCH_ACTIVITIES_REQUEST = 'FETCH_ACTIVITIES_REQUEST';
export const FETCH_ACTIVITIES_SUCCESS = 'FETCH_ACTIVIES_SUCCESS';
export const FETCH_ACTIVITIES_ERROR = 'FETCH_ACTIVITIES_ERROR';

export const FILTER_ACTIVITIES_REQUEST = 'FILTER_ACTIVITIES_REQUEST';
export const FILTER_ACTIVITIES_SUCCESS = 'FILTER_ACTIVITIES_SUCCESS';

// Teams actions

export const FETCH_TEAMS_REQUEST = 'FETCH_TEAMS_REQUEST';
export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS';
export const FETCH_TEAMS_ERROR = 'FETCH_TEAMS_ERROR';

// used by standard redux
export const fetchActivities = () => (dispatch) => {
  axios
    .get(`${SERVER_URL}users/activities`)
    .then(({ data }) => dispatch({ type: FETCH_ACTIVITIES_SUCCESS, payload: data }));
};

// used by redux-saga
export const fetchActivitiesApi = () => axios.get(`${SERVER_URL}users/activities`).then(({ data }) => data);
export const fetchTeamsApi = () => axios.get(`${SERVER_URL}teams`).then(({ data }) => data);

// action creators
export const activitiesRecieved = (activities) => ({ type: FETCH_ACTIVITIES_SUCCESS, payload: activities });
export const teamsRecieved = (teamsList) => ({ type: FETCH_TEAMS_SUCCESS, payload: teamsList });

export const activitiesFailed = (error) => ({ type: FETCH_ACTIVITIES_ERROR, error });
export const teamsFailed = (error) => ({ type: FETCH_TEAMS_ERROR, error });

export const filterActivities = (activities) => ({ type: FILTER_ACTIVITIES_REQUEST, payload: activities });

export const filteredActivitiesRecieved = (activities) => ({ type: FILTER_ACTIVITIES_SUCCESS, payload: activities });

export const fetchEmployeeActivities = () => ({ type: FETCH_ACTIVITIES_REQUEST });
export const fetchTeamsList = () => ({ type: FETCH_TEAMS_REQUEST });
