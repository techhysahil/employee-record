import 'whatwg-fetch';

// Employee Record
export const fetchNextpage = (currentPage,rowCount) => {
	currentPage = parseInt(currentPage, 10)+1;
	return {
		type : "FETCH_EMPLOYEE_DATA",
		currentpage : currentPage,
		rowCount : rowCount
	}
}

export const fetchPrevpage = (currentPage,rowCount) => {
	currentPage = parseInt(currentPage, 10)-1;
	return {
		type : "FETCH_EMPLOYEE_DATA",
		currentpage : currentPage,
		rowCount : rowCount
	}
}

export function fetchEmployeesRecord(currentPage,rowCount){
	return {
		type : "FETCH_EMPLOYEE_DATA",
		currentpage : currentPage,
		rowCount : rowCount
	}
}
