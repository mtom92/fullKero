import React, { Component } from 'react';
import {Card, Col, Container, Row, CardTitle, CardBody } from 'reactstrap'
import { FaCity , FaEnvelopeSquare, FaSuitcase , FaTrash, FaWrench} from "react-icons/fa";
import {  Link } from 'react-router-dom';

class SwimLane extends Component {
  // You will have props!

  render() {
    // map through this.props.tasks, call your variable below
    if(this.props.tasks){
      let taskCards = this.props.tasks.map((task)=> {
        console.log(task);
        return (
          <div >
              <Card body className="text-center" >
                <CardTitle>
                  <Link
                    onClick={ () => this.handleDeleteSprint(task._id)}
                  >
                    <FaTrash id="deleteicon"/>
                  </Link>
                  <Link
                    onClick={ () => this.editSprint(task._id)}
                  >
                    <FaWrench id="modifyicon"/>
                  </Link>
                </CardTitle>
                <CardBody>
                  Title : {task.title}
                </CardBody>
              </Card>
          </div>
        )
      })

    return (
      <Container >
        <Row >
          <Col>
          <div>{this.props.project}</div>
            <div>{this.props.sprint}</div>
            <Row id="mainboard">
              <Col>
                <div className= 'board-columns'>
                  <h6 className= 'column-name'>{this.props.title}</h6>
                  <hr></hr>
                  {taskCards}
                </ div>
              </Col>
            </Row>
            </Col>
        </Row>
      </Container>
      )
  }
  return (
    <Container >
      <Row >
        <Col>
        <div>{this.props.project}</div>
          <div>{this.props.sprint}</div>
          <Row id="mainboard">
            <Col>
              <div className= 'board-columns'>
                <h6 className= 'column-name'>{this.props.title}</h6>
                <hr></hr>
              </ div>
            </Col>
          </Row>
          </Col>
      </Row>
    </Container>
    )
  }
}

export default SwimLane
