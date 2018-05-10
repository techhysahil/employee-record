import 'whatwg-fetch'

// Employee Record
function getEmployeeData(){
	return{
		type : "FETCH_EMPLOYEE_DETAIL"
	}
}

function gotEmployeeData(employeeData,TotalRowCount){
	return{
		type : "FETCHED_EMPLOYEE_DETAIL",
		data : employeeData,
		TotalRowCount : TotalRowCount
	}
}

function employeeDataError(employeeData){
	return{
		type : "EMPLOYEE_DETAIL_ERROR"
	}
}

function fetchEmployeeRecord(currentpage,rowcount){
	return function (dispatch) {
		dispatch(getEmployeeData())
		return fetch('http://localhost:4000/employeeRecord?currentpage='+currentpage+'&rowCount='+rowcount)
		  .then(function(response) {
		    return response.json()
		  }).then(function(json) {
		  	dispatch(gotEmployeeData(json))
		  }).catch(function(error) {
		  	dispatch(employeeDataError())
		  })
	}
}


export const fetchNextpage = (currentPage,rowCount) => {
	currentPage = parseInt(currentPage, 10)+1;
	return fetchEmployeeRecord(currentPage,rowCount)
}

export const fetchPrevpage = (currentPage,rowCount) => {
	currentPage = parseInt(currentPage, 10)-1;
	return fetchEmployeeRecord(currentPage,rowCount)
}

export function fetchEmployeesRecord(currentPage,rowCount){
	return fetchEmployeeRecord(currentPage,rowCount)
}
