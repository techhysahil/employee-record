import React from 'react';
import PropTypes from 'prop-types';
import './employeeTable.css';


const EmployeeTable = ({employeeRecord,currentPage,columns,loadingData,errorLoadingData,rowCount,TotalRowCount,nextPage,prevPage}) =>{
	if(loadingData){
		return <div className="loading-data">Loading...</div>
	}
	if(errorLoadingData){
		return <div className="loading-data">Error Loading...</div>
	}
	return(<div className="employeeTable-wrapper">
			{/* Employee Table */} 
			<div className="employeeTable">
				<div className="header">
					{
						columns.map((col,index) =>{
							return(<div key={col+index} className="col header">{col}</div>)
						})
					}
				</div>

				<div className="body">
				{
					employeeRecord.map((row,i) =>{
						return(
							<div key={i} className="tableRow">
							{
								Object.keys(row).map((col,index) =>{
									return(
										<div key={row[col]+index} className="col">
											{row[col]}
										</div>
									)
								})
							}
							</div>
						)
					})
				}
				</div>
			</div>

			{/* Employee Records Track */} 
			<div className="showing-records">
				{currentPage*rowCount-rowCount} - {currentPage*rowCount} records
			</div>

			{/* Employee page navigation */} 
			<div className="paging-navigation">
				<div onClick={() => prevPage(currentPage,rowCount)} className={"prev"+(currentPage>1? "" : " disable")}>Prev</div>
				<div className="pageNo">{currentPage}</div>
				<div onClick={() => nextPage(currentPage,rowCount)} className={"next"+(TotalRowCount > currentPage*rowCount ? "" : " disable")}>Next</div>
			</div>
		</div>
	)
}

EmployeeTable.propTypes = {
	employeeRecord : PropTypes.array.isRequired,
	currentPage : PropTypes.number.isRequired,
	columns : PropTypes.array.isRequired,
	loadingData : PropTypes.bool.isRequired,
	errorLoadingData : PropTypes.bool.isRequired,
	rowCount : PropTypes.number.isRequired,
	TotalRowCount : PropTypes.number.isRequired,
	nextPage : PropTypes.func.isRequired,
	prevPage : PropTypes.func.isRequired
}

export default EmployeeTable;