const initState = {
	employeeRecord : [],
	currentPage : 0,
	loadingData : false,
	errorLoadingData : false,
	TotalRowCount : 0,
	rowCount : 10
}
export function employee(state=initState,action){
	switch(action.type){
		case "FETCH_EMPLOYEE_DETAIL":
			return {...state, loadingData: true}
		case "FETCHED_EMPLOYEE_DETAIL":
			return {...state, 
				employeeRecord: action.data.data,
				currentPage : parseInt(action.data.currentpage,10),
				TotalRowCount : parseInt(action.data.TotalRowCount,10),
				loadingData : false
			}
		case "EMPLOYEE_DETAIL_ERROR":
			return {...state, errorLoadingData: true, loadingData : false}
		default:
			return state;
	}
}

