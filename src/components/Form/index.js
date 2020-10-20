import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import './style.css';
import { Grid, Row, Col, Container } from 'react-bootstrap';
import API from "../../utils/API";
import Table from "../table/table"
import Context from "../../utils/userContext";

function Search() {


  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (!search) {
      console.log(API.getAll());
      setEmployees(API.getAll());
      return;
    }

    setEmployees(API.searchName(search));
    console.log("employee state: ", employees);
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };



  return (
    <Context.Provider value={employees}>
      <Container className="search">
        <Row>
            <Form>
              <Form.Group controlId="searchE">
                <Form.Label>Search for employee</Form.Label>
                <Form.Control value={search} onChange={handleInputChange} type="search" placeholder="Enter name" />
              </Form.Group>
            </Form>
        </Row>
        <Row>
            <Table />
        </Row>
      </Container>
    </Context.Provider>
  );
}

export default Search;