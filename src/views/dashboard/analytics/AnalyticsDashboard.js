import React from "react";
import { Row, Col, Card, CardTitle, CardText } from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import axios from "axios";
import DispatchedOrders from "./DispatchedOrders";
import "../../../assets/scss/pages/dashboard-analytics.scss";
// import AvgSession from "../../ui-elements/cards/analytics/AvgSessions";
// import SupportTracker from "../../ui-elements/cards/analytics/SupportTracker";
// import ProductOrders from "../../ui-elements/cards/analytics/ProductOrders";
// import SalesStat from "../../ui-elements/cards/analytics/Sales";
// import ActivityTimeline from "./ActivityTimeline";
// import SalesCard from "./SalesCard";
// import SuberscribersGained from "../../ui-elements/cards/statistics/SubscriberGained";
// import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived";
// import StatisticsCards from "../../ui-elements/cards/statistics/StatisticsCards";
// import productsList from "../../apps/products/ProductsList";

import // Monitor,
// UserCheck,
// Mail,
// MessageSquare,
// ShoppingBag,
// Heart,
// Smile,
// Truck,
// Cpu,
// Server,
// Activity,
// AlertOctagon,
"react-feather";

// let $primary = "#7367F0",
//   $danger = "#EA5455",
//   $warning = "#FF9F43",
//   $info = "#00cfe8",
//   $primary_light = "#9c8cfc",
//   $warning_light = "#FFC085",
//   $danger_light = "#f29292",
//   $info_light = "#1edec5",
//   $stroke_color = "#e8e8e8",
//   $label_color = "#e7eef7",
//   $white = "#fff";

class AnalyticsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      customer: {},
      store:{},
      seller:{},
      order:{},
      staff: {},
      banner: {},
      brand: {},
      // Offer: {},
      total_sub: {},
      Coupon: {}
    };
  }

  
    componentDidMount() {
      axiosConfig
        .get("/totalproduct")
        .then((response) => {
          console.log(response.data);
          //console.log(response.data.data);
          this.setState({ product: response.data });
        })
        .catch((error) => {
          console.log(error);
        });

        axios
        .get("http://35.154.86.59/api/user/totalcustomer")
        .then((response) => {
          console.log(response.data);
         
          this.setState({ customer: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
        axiosConfig
        .get("/totalstore")
        .then((response) => {
          console.log(response.data);
          //console.log(response.data.data);
          this.setState({ store: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
      axiosConfig
        .get("/totalseller")
        .then((response) => {
          console.log(response.data);
          //console.log(response.data.data);
          this.setState({ seller: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
        axiosConfig
        .get("/totalorder")
        .then((response) => {
          console.log(response.data);
          //console.log(response.data.data);
          this.setState({ order: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
        axiosConfig
        .get("/totalbrand")
        .then((response) => {
          console.log(response.data);
          //console.log(response.data.data);
          this.setState({ brand: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
        axiosConfig
        .get("/totalbanner")
        .then((response) => {
          console.log(response.data);
          //console.log(response.data.data);
          this.setState({ banner: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
        // axiosConfig
        // .get("/totalOffer")
        // .then((response) => {
        //   console.log(response.data);
        //   //console.log(response.data.data);
        //   this.setState({ Offer: response.data });
        // })
        // .catch((error) => {
        //   console.log(error);
        // });
        axiosConfig
        .get("/gettotalcoupon")
        .then((response) => {
          console.log(response.data);
          //console.log(response.data.data);
          this.setState({ Coupon: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
        axiosConfig
        .get("/total_sub")
        .then((response) => {
          console.log(response.data);
          //console.log(response.data.data);
          this.setState({ total_sub: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
   }
  render() {
    return (
      <React.Fragment>
        <Row className="match-height">
          <Col lg="3" md="12">
            <Card
              className="bg-primary"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
               Total Products
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.product.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card className="bg-warning" body inverse>
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Customer
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.customer.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card className="bg-success" body inverse>
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Store
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.store.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card className="bg-secondary" body inverse>
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Seller
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.seller.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card className="bg-info" body inverse>
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Order
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.order.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card className="bg-danger" body inverse>
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Brands
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.brand.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
          <Card className="bg-info" body inverse>
            <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
              Total Slider
            </CardTitle>
            <CardText tag="h3" style={{ color: "white" }}>
            {this.state.banner.data}
           
            </CardText>
          </Card>
        </Col>
        <Col lg="3" md="12">
            <Card className="bg-danger" body inverse>
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Subscription Plan
              </CardTitle>
              <CardText tag="h3" style={{ color: "white" }}>
              {this.state.total_sub.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
          <Card className="bg-warning" body inverse>
            <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
              Total Coupons
            </CardTitle>
            <CardText tag="h3" style={{ color: "white" }}>
            {this.state.Coupon.data}
            </CardText>
          </Card>
        </Col>
       
        </Row>

        {/* theme Componets  */}
        <Row>
          <Col sm="12">
            <DispatchedOrders />
          </Col>
        </Row>
        {/* <Row className="match-height">
          <Col md="6" sm="12">
            <AvgSession labelColor={$label_color} primary={$primary} />
          </Col>
          <Col md="6" sm="12">
            <SupportTracker
              primary={$primary}
              danger={$danger}
              white={$white}
            />
          </Col>
        </Row> */}

        {/* <Row className="match-height">
          <Col lg="4">
            <ProductOrders
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
          </Col>
          <Col lg="4">
            <SalesStat
              strokeColor={$stroke_color}
              infoLight={$info_light}
              primary={$primary}
              info={$info}
            />
          </Col>
          <Col lg="4">
            <ActivityTimeline />
          </Col>
        </Row> */}
      </React.Fragment>
    );
  }
}
export default AnalyticsDashboard;