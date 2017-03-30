
export const SET_DATE = 'SET_DATE';
export const setDate = (date) => ({
    type: SET_DATE,
    date
});

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    data
});

export const FETCH_FAILURE = 'FETCH_FAILURE';
export const fetchFailure = (error) => ({
    type: FETCH_FAILURE,
    error
});

export const fetchData = (currentUrl) => dispatch => {
  const fetchSettings = {method: 'GET', mode: 'cors'};
  console.log("Fetching Data...")
  return fetch(currentUrl, fetchSettings)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log("Fetch Data Success!")
    dispatch(fetchDataSuccess(data));
  })
  .catch(error => {
        dispatch(fetchFailure(error));
    })
}
