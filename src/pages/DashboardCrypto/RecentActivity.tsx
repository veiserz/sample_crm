import React from 'react';
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

//Import Icons
import FeatherIcon from "feather-icons-react";

//SimpleBar
import SimpleBar from "simplebar-react";
import { Link } from 'react-router-dom';

const RecentActivity = () => {
    return (
        <React.Fragment>
            <Col xxl={4} lg={5}>
                <Card className="card-height-100">
                    <CardHeader className="card-header align-items-center d-flex" dir="rtl">
                        <h4 className="card-title mb-0 flex-grow-1">فعالیت‌های اخیر</h4>
                        <div className="flex-shrink-0">
                            <UncontrolledDropdown className="card-header-dropdown">
                                <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                                    <span className="fw-semibold text-uppercase fs-13">مرتب‌سازی بر اساس: </span><span className="text-muted">هفته جاری<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end" dir="rtl">
                                    <DropdownItem>امروز</DropdownItem>
                                    <DropdownItem>هفته گذشته</DropdownItem>
                                    <DropdownItem>ماه گذشته</DropdownItem>
                                    <DropdownItem>سال جاری</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </CardHeader>
                    <CardBody className="p-0" dir="rtl">
                        <SimpleBar style={{ height: "390px" }}>
                            <div className="p-3">
                                <h6 className="text-muted text-uppercase mb-3 fs-11">25 دسامبر 2021</h6>
                                <div className="d-flex align-items-center">
                                    <div className="avatar-xs flex-shrink-0">
                                        <span className="avatar-title bg-light rounded-circle">
                                            <FeatherIcon
                                                icon="arrow-down-circle"
                                                className="icon-dual-success icon-sm"
                                            />
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 me-3">
                                        <h6 className="mb-1">خرید بیت‌کوین</h6>
                                        <p className="text-muted fs-13 mb-0">
                                            <i className="mdi mdi-circle-medium text-success fs-15 align-middle"></i>{" "}
                                            کارت اعتباری ویزا ***6
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 text-start">
                                        <h6 className="mb-1 text-success">+0.04025745<span className="text-uppercase me-1">Btc</span></h6>
                                        <p className="text-muted fs-13 mb-0">+878.52 USD</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="avatar-xs flex-shrink-0">
                                        <span className="avatar-title bg-light rounded-circle">
                                            <FeatherIcon
                                                icon="send"
                                                className="icon-dual-warning icon-sm"
                                            />
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 me-3">
                                        <h6 className="mb-1">ارسال اتریوم</h6>
                                        <p className="text-muted fs-13 mb-0">
                                            <i className="mdi mdi-circle-medium text-warning fs-15 align-middle"></i>{" "}
                                            سوفیا کونها
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 text-start">
                                        <h6 className="mb-1 text-muted">-0.09025182<span className="text-uppercase me-1">Eth</span></h6>
                                        <p className="text-muted fs-13 mb-0">-659.35 USD</p>
                                    </div>
                                </div>

                                <h6 className="text-muted text-uppercase mt-4 mb-3 fs-11">24 دسامبر 2021</h6>
                                <div className="d-flex align-items-center">
                                    <div className="avatar-xs flex-shrink-0">
                                        <span className="avatar-title bg-light rounded-circle">
                                            <FeatherIcon
                                                icon="arrow-up-circle"
                                                className="icon-dual-danger icon-sm"
                                            />
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 me-3">
                                        <h6 className="mb-1">فروش داش</h6>
                                        <p className="text-muted fs-13 mb-0">
                                            <i className="mdi mdi-circle-medium text-danger fs-15 align-middle"></i>{" "}
                                            www.cryptomarket.com
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 text-start">
                                        <h6 className="mb-1 text-danger">-98.6025422<span className="text-uppercase me-1">Dash</span></h6>
                                        <p className="text-muted fs-13 mb-0">-1508.98 USD</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="avatar-xs flex-shrink-0">
                                        <span className="avatar-title bg-light rounded-circle">
                                            <FeatherIcon
                                                icon="arrow-up-circle"
                                                className="icon-dual-danger icon-sm"
                                            />
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 me-3">
                                        <h6 className="mb-1">فروش دوج‌کوین</h6>
                                        <p className="text-muted fs-13 mb-0">
                                            <i className="mdi mdi-circle-medium text-success fs-15 align-middle"></i>{" "}
                                            www.coinmarket.com
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 text-start">
                                        <h6 className="mb-1 text-danger">-1058.08025142<span className="text-uppercase me-1">Doge</span></h6>
                                        <p className="text-muted fs-13 mb-0">-89.36 USD</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="avatar-xs flex-shrink-0">
                                        <span className="avatar-title bg-light rounded-circle">
                                            <FeatherIcon
                                                icon="arrow-up-circle"
                                                className="icon-dual-success icon-sm"
                                            />
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 me-3">
                                        <h6 className="mb-1">خرید لایت‌کوین</h6>
                                        <p className="text-muted fs-13 mb-0">
                                            <i className="mdi mdi-circle-medium text-warning fs-15 align-middle"></i>{" "}
                                            پرداخت از طریق کیف پول
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 text-start">
                                        <h6 className="mb-1 text-success">+0.07225912<span className="text-uppercase me-1">Ltc</span></h6>
                                        <p className="text-muted fs-13 mb-0">+759.45 USD</p>
                                    </div>
                                </div>

                                <h6 className="text-muted text-uppercase mb-3 mt-4 fs-11">20 دسامبر 2021</h6>
                                <div className="d-flex align-items-center">
                                    <div className="avatar-xs flex-shrink-0">
                                        <span className="avatar-title bg-light rounded-circle">
                                            <FeatherIcon
                                                icon="send"
                                                className="icon-dual-warning icon-sm"
                                            />
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 me-3">
                                        <h6 className="mb-1">ارسال اتریوم</h6>
                                        <p className="text-muted fs-13 mb-0">
                                            <i className="mdi mdi-circle-medium text-warning fs-15 align-middle"></i>{" "}
                                            سوفیا کونها
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 text-start">
                                        <h6 className="mb-1 text-muted">-0.09025182<span className="text-uppercase me-1">Eth</span></h6>
                                        <p className="text-muted fs-13 mb-0">-659.35 USD</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center mt-3">
                                    <div className="avatar-xs flex-shrink-0">
                                        <span className="avatar-title bg-light rounded-circle">
                                            <FeatherIcon
                                                icon="arrow-down-circle"
                                                className="icon-dual-success icon-sm"
                                            />
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 me-3">
                                        <h6 className="mb-1">خرید بیت‌کوین</h6>
                                        <p className="text-muted fs-13 mb-0">
                                            <i className="mdi mdi-circle-medium text-success fs-15 align-middle"></i>{" "}
                                            کارت اعتباری ویزا ***6
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 text-start">
                                        <h6 className="mb-1 text-success">+0.04025745<span className="text-uppercase me-1">Btc</span></h6>
                                        <p className="text-muted fs-13 mb-0">+878.52 USD</p>
                                    </div>
                                </div>

                                <div className="mt-3 text-center">
                                    <Link to="#" className="text-muted text-decoration-underline">بارگذاری بیشتر</Link>
                                </div>

                            </div>

                        </SimpleBar>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default RecentActivity;