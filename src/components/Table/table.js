import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import API from "../../utils/API"
import Context from "../../utils/DataAreaContext";
import { Grid, Row, Col, Container } from 'react-bootstrap';

function Table() {


    const [sortedField, setSortedField] = useState(null);
    var employees = useContext(Context);
    useEffect(() => {
        if (!sortedField) {

            return;
        }

        if (sortedField !== null) {
            var key = sortedField.key;
            console.log(key);
            employees = employees.sort((a, b) => {
                if (a[key] < b[key]) {
                    return -1;
                }
                if (a[key] > b[key]) {
                    return 1;
                }
                return 0;
            })

        }
        console.log(employees)
    }, [sortedField]);


    function renderTableHeader() {
        if (!employees) {
            var employees = [{ "employee_id": 1, "first_name": "Saul", "last_name": "Sallah", "role_id": 1, "manager_id": 3 }]
        }
        let header = Object.keys(employees[0])
        return header.map((key, index) => {
            return <th key={index}><button type="button"
                onClick={() => setSortedField({ key })}>{key.toUpperCase()}</button></th>
        })
    }

    function renderTableData() {
        if (!employees) {
            return (
                <div>

                </div>
            )
        }
        return employees.map((employee, index) => {
            const { employee_id, first_name, last_name, role_id, manager_id } = employee //destructuring
            return (
                <tr key={employee_id}>
                    <td>{employee_id}</td>
                    <td>{first_name}</td>
                    <td>{last_name}</td>
                    <td>{role_id}</td>
                    <td>{manager_id}</td>
                </tr>
            )
        })
    };


    return (
        <Row className="table">
            <h1 employee_id='title'>Employee Directory</h1>
            <table id='employees'>
                <tbody>
                    <tr>{renderTableHeader()}</tr>
                    {renderTableData()}
                </tbody>
            </table>
        </Row>
    )
}

export default Table;