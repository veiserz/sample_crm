import React from 'react';
import { Alert, Card, CardBody, Col, Row } from 'reactstrap';

//Import Icons
import FeatherIcon from "feather-icons-react";

//import images
import illustarator from "../../assets/images/user-illustarator-2.png";
import { Link } from 'react-router-dom';

const UpgradeAccountNotise = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xs={12}>
                    <Card>
                        <CardBody className="p-0">
                            <Alert className="alert alert-warning border-0 rounded-0 m-0 d-flex align-items-center" role="alert" dir="rtl">
                                <FeatherIcon
                                    icon="alert-triangle"
                                    className="text-warning ms-2 icon-sm"
                                />
                                <div className="flex-grow-1 text-truncate">
                                    دوره آزمایشی شما به پایان رسیده است.
                                </div>
                                <div className="flex-shrink-0">
                                    <Link to="/pages-pricing" className="text-reset text-decoration-underline"><b>ارتقا دهید</b></Link>
                                </div>
                            </Alert>

                            <Row className="align-items-end" dir="rtl">
                                <Col sm={8}>
                                    <div className="p-3">
                                            <p className="fs-20 lh-base">حساب خود را از طریق <span className="fw-semibold">صفحه قیمت‌گذاری</span> به <span className="fw-semibold">سطح پیشرفته</span> ارتقا دهید <i className="mdi mdi-arrow-left"></i></p>
                                        <div className="mt-3">
                                            <Link to="/pages-pricing" className="btn btn-secondary">ارتقا دهید!</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="px-3">
                                        <img src={illustarator} className="img-fluid" alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default UpgradeAccountNotise;