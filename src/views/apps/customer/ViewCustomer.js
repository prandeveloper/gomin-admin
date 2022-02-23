import React from "react";
import {
  Card,
  CardBody,
  Media,
  Row,
  Col,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import "../../../assets/scss/pages/users.scss";
import { history } from "../../../history";
class ViewCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    //console.log(this.props.match.params);
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewonecustomer/${id}`)
      .then((response) => {
        //console.log(response.data);
        console.log(response.data.data);
        this.setState({ data:response.data.data});
      })
      .catch((error) => {
        console.log(error);
    });
  }
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 col-sm-6 className="float-left">
                    Customer Detail
                  </h1>
                </Col>
                <Col>
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/customer/customerList")}>
                    Back
                  </Button>
                </Col>
              </Row>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12" lg="6">
                    <Media className="d-sm-flex d-block">
                      <Media body>
                        <Row className="ml-4">
                          <Col sm="9" md="12" lg="12">
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Customer Id
                                </div>
                                <div className="text-truncate">
                                  <span>{this.state.data.customerId}</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                First Name
                                </div>
                                <div className="text-truncate">
                                  <span>{this.state.data.firstname}</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Last Name
                                </div>
                                <div className="text-truncate">
                                  <span>{this.state.data.lastname}</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                 Customer Email
                                </div> 
                                <div className="text-truncate">
                                  <span>{this.state.data.email}</span>
                                </div>
                              </div>   
                               <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                 Mobile No.
                                </div>
                                <div className="text-truncate">
                                  <span>{this.state.data.mobile}</span>
                                </div>
                              </div> 
                            </div>
                          </Col>
                        </Row>
                      </Media>
                    </Media>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col> 
        </Row>
      </React.Fragment>
    );
  }
}
export default ViewCustomer;