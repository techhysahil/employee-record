import React from 'react';
import { connect } from 'react-redux';

import EmployeeTable from '../component/employeeTable';
import { fetchNextpage,fetchPrevpage,fetchEmployeesRecord } from '../actions';


class EmployeesTable extends React.Component{
	componentDidMount(){
		this.props.fetchEmployeesRecord(1,10);
	}
	render(){
		const { employeeRecord, currentPage, columns ,loadingData, errorLoadingData, rowCount, TotalRowCount, nextPage, prevPage} = this.props;
		return(
			<EmployeeTable
				employeeRecord={employeeRecord}
				currentPage={currentPage}
				columns={columns}
				loadingData={loadingData}
				errorLoadingData={errorLoadingData}
				rowCount={rowCount}
				TotalRowCount={TotalRowCount}
				nextPage={nextPage}
				prevPage={prevPage}
			 />
		 )
	}
}

const mapStateToProps = (state) => ({
	employeeRecord : state.employee.employeeRecord,
	currentPage : state.employee.currentPage,
	columns : state.employee.employeeRecord.length > 0 ? Object.keys(state.employee.employeeRecord[0]) : [],
	loadingData : state.employee.loadingData,
	errorLoadingData : state.employee.errorLoadingData,
	rowCount : state.employee.rowCount,
	TotalRowCount : state.employee.TotalRowCount
})

const mapDispatchToProps = (dispatch) => ({
	nextPage : (currentPage,rowCount) => dispatch(fetchNextpage(currentPage,rowCount)),
	prevPage : (currentPage,rowCount) => dispatch(fetchPrevpage(currentPage,rowCount)),
	fetchEmployeesRecord : (currentPage,rowCount) => dispatch(fetchEmployeesRecord(currentPage,rowCount))
})

export default connect(mapStateToProps,mapDispatchToProps)(EmployeesTable)