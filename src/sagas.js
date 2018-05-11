import { call, put, takeEvery, fork } from 'redux-saga/effects';
import axios from "axios";

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

function fetchData(currentpage,rowCount){
  return axios({
    method: "get",
    url: "http://localhost:4000/employeeRecord?currentpage="+currentpage+"&rowCount="+rowCount
  });
}

function* fetchEmployeeData(action) {
	try {
		const response = yield call(fetchData, action.currentpage, action.rowCount);
    const responseBody = response.data;
    yield put(gotEmployeeData(responseBody));
   } catch (e) {
   		yield put(employeeDataError());
   }
   
}

function* fetchEmployeeRecord() {
	yield takeEvery("FETCH_EMPLOYEE_DATA", fetchEmployeeData);
}

export default function* rootsaga() {
  yield fork(fetchEmployeeRecord)
}