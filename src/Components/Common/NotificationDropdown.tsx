import React, { useState } from 'react';
import { Col, Dropdown, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

//import images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import bell from "../../assets/images/svg/bell.svg";

//SimpleBar
import SimpleBar from "simplebar-react";

const NotificationDropdown = () => {
    
    //Dropdown Toggle
    const [isNotificationDropdown, setIsNotificationDropdown] = useState(false);
    const toggleNotificationDropdown = () => {
        setIsNotificationDropdown(!isNotificationDropdown);
    };

    //Tab 
    const [activeTab, setActiveTab] = useState('1');
    const toggleTab = (tab:any) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    return (
        <React.Fragment>
            <Dropdown isOpen={isNotificationDropdown} toggle={toggleNotificationDropdown} className="topbar-head-dropdown ms-1 header-item">
                <DropdownToggle type="button" tag="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle">
                    <i className='bx bx-bell fs-22'></i>
                    <span
                        className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">3<span
                            className="visually-hidden">unread messages</span></span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                    <div className="dropdown-head bg-primary bg-pattern rounded-top">
                        <div className="p-3">
                            <Row className="align-items-center">
                                <Col>
                                    <h6 className="m-0 fs-16 fw-semibold text-white"> اعلان ها </h6>
                                </Col>
                                <div className="col-auto dropdown-tabs">
                                    <span className="badge bg-light-subtle text-body fs-13"> 4 جدید</span>
                                </div>
                            </Row>
                        </div>

                        <div className="px-2 pt-2">
                            <Nav className="nav-tabs dropdown-tabs nav-tabs-custom">
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggleTab('1'); }}
                                    >
                                        همه (4)
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggleTab('2'); }}
                                    >
                                        پیام ها
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => { toggleTab('3'); }}
                                    >
                                        هشدار ها
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>

                    </div>

                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1" className="py-2 ps-2">
                            <SimpleBar style={{ maxHeight: "300px" }} className="pe-2">
                                <div className="text-reset notification-item d-block dropdown-item position-relative">
                                    <div className="d-flex">
                                        <div className="avatar-xs me-3">
                                            <span className="avatar-title bg-info-subtle text-info rounded-circle fs-16">
                                                <i className="bx bx-badge-check"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link to="#" className="stretched-link">
                                                <h6 className="mt-0 mb-2 lh-base">شما <b>اکسلنت</b> نویسنده گرافیک
                                                    Optimization <span className="text-secondary">پاداش</span> آماده است!
                                                </h6>
                                            </Link>
                                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                <span><i className="mdi mdi-clock-outline"></i> 30 ثانیه پیش</span>
                                            </p>
                                        </div>
                                        <div className="px-2 fs-15">
                                            <div className="form-check notification-check">
                                                <input className="form-check-input" type="checkbox" value="" id="all-notification-check01" />
                                                <label className="form-check-label" htmlFor="all-notification-check01"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-reset notification-item d-block dropdown-item position-relative active">
                                    <div className="d-flex">
                                        <img src={avatar2}
                                            className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                        <div className="flex-grow-1">
                                            <Link to="#" className="stretched-link"><h6 className="mt-0 mb-1 fs-13 fw-semibold">آنجلا برنر</h6></Link>
                                            <div className="fs-13 text-muted">
                                                <p className="mb-1">پاسخ دادن به نظر شما در مورد پیش بینی جریان نقد 🔔.</p>
                                            </div>
                                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                <span><i className="mdi mdi-clock-outline"></i> 48 دقیقه پیش</span>
                                            </p>
                                        </div>
                                        <div className="px-2 fs-15">
                                            <div className="form-check notification-check">
                                                <input className="form-check-input" type="checkbox" value="" id="all-notification-check02" />
                                                <label className="form-check-label" htmlFor="all-notification-check02"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-reset notification-item d-block dropdown-item position-relative">
                                    <div className="d-flex">
                                        <div className="avatar-xs me-3">
                                            <span
                                                className="avatar-title bg-danger-subtle text-danger rounded-circle fs-16">
                                                <i className='bx bx-message-square-dots'></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link to="#" className="stretched-link">
                                                <h6 className="mt-0 mb-2 fs-13 lh-base">شما <b className="text-success">20</b> پیام جدید در مکالمه دریافت کرده اید</h6>
                                            </Link>
                                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                <span><i className="mdi mdi-clock-outline"></i> 2 ساعت پیش</span>
                                            </p>
                                        </div>
                                        <div className="px-2 fs-15">
                                            <div className="form-check notification-check">
                                                <input className="form-check-input" type="checkbox" value="" id="all-notification-check03" />
                                                <label className="form-check-label" htmlFor="all-notification-check03"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-reset notification-item d-block dropdown-item position-relative">
                                    <div className="d-flex">
                                        <img src={avatar8} className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                        <div className="flex-grow-1">
                                            <Link to="#" className="stretched-link"><h6 className="mt-0 mb-1 fs-13 fw-semibold">مورین جیبسون</h6></Link>
                                            <div className="fs-13 text-muted">
                                                <p className="mb-1">ما در مورد یک پروژه در لینکدین به صورت مکالمه ای صحبت کردیم.</p>
                                            </div>
                                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                <span><i className="mdi mdi-clock-outline"></i> 4 ساعت پیش</span>
                                            </p>
                                        </div>
                                        <div className="px-2 fs-15">
                                            <div className="form-check notification-check">
                                                <input className="form-check-input" type="checkbox" value="" id="all-notification-check04" />
                                                <label className="form-check-label" htmlFor="all-notification-check04"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="my-3 text-center">
                                    <button type="button" className="btn btn-soft-success waves-effect waves-light">نمایش
                                       همه اعلان ها <i className="ri-arrow-right-line align-middle"></i></button>
                                </div>
                            </SimpleBar>

                        </TabPane>

                        <TabPane tabId="2" className="py-2 ps-2">
                            <SimpleBar style={{ maxHeight: "300px" }} className="pe-2">
                                <div className="text-reset notification-item d-block dropdown-item">
                                    <div className="d-flex">
                                        <img src={avatar3}
                                            className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                        <div className="flex-grow-1">
                                            <Link to="#" className="stretched-link"><h6 className="mt-0 mb-1 fs-13 fw-semibold">جیمز لمیر</h6></Link>
                                            <div className="fs-13 text-muted">
                                                <p className="mb-1">ما در مورد یک پروژه در لینکدین به صورت مکالمه ای صحبت کردیم.</p>
                                            </div>
                                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                <span><i className="mdi mdi-clock-outline"></i> 30 دقیقه پیش</span>
                                            </p>
                                        </div>
                                        <div className="px-2 fs-15">
                                            <div className="form-check notification-check">
                                                <input className="form-check-input" type="checkbox" value="" id="messages-notification-check01" />
                                                <label className="form-check-label" htmlFor="messages-notification-check01"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-reset notification-item d-block dropdown-item">
                                    <div className="d-flex">
                                        <img src={avatar2}
                                            className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                        <div className="flex-grow-1">
                                            <Link to="#" className="stretched-link"><h6 className="mt-0 mb-1 fs-13 fw-semibold">آنجلا برنر</h6></Link>
                                            <div className="fs-13 text-muted">
                                                <p className="mb-1">پاسخ دادن به نظر شما در مورد پیش بینی جریان نقد 🔔.</p>
                                            </div>
                                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                <span><i className="mdi mdi-clock-outline"></i> 2 ساعت پیش</span>
                                            </p>
                                        </div>
                                        <div className="px-2 fs-15">
                                            <div className="form-check notification-check">
                                                <input className="form-check-input" type="checkbox" value="" id="messages-notification-check02" />
                                                <label className="form-check-label" htmlFor="messages-notification-check02"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-reset notification-item d-block dropdown-item">
                                    <div className="d-flex">
                                        <img src={avatar6}
                                            className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                        <div className="flex-grow-1">
                                            <Link to="#" className="stretched-link"><h6 className="mt-0 mb-1 fs-13 fw-semibold">کنتور براون</h6></Link>
                                            <div className="fs-13 text-muted">
                                                <p className="mb-1">شما را در نظرات خود در 📃 فاکتور #12501 ذکر کرد. </p>
                                            </div>
                                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                <span><i className="mdi mdi-clock-outline"></i> 10 ساعت پیش</span>
                                            </p>
                                        </div>
                                        <div className="px-2 fs-15">
                                            <div className="form-check notification-check">
                                                <input className="form-check-input" type="checkbox" value="" id="messages-notification-check03" />
                                                <label className="form-check-label" htmlFor="messages-notification-check03"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-reset notification-item d-block dropdown-item">
                                    <div className="d-flex">
                                        <img src={avatar8}
                                            className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                        <div className="flex-grow-1">
                                            <Link to="#" className="stretched-link"><h6 className="mt-0 mb-1 fs-13 fw-semibold">مورین جیبسون</h6></Link>
                                            <div className="fs-13 text-muted">
                                                <p className="mb-1">ما در مورد یک پروژه در لینکدین به صورت مکالمه ای صحبت کردیم.</p>
                                            </div>
                                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                <span><i className="mdi mdi-clock-outline"></i> 3 روز پیش</span>
                                            </p>
                                        </div>
                                        <div className="px-2 fs-15">
                                            <div className="form-check notification-check">
                                                <input className="form-check-input" type="checkbox" value="" id="messages-notification-check04" />
                                                <label className="form-check-label" htmlFor="messages-notification-check04"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="my-3 text-center">
                                    <button type="button" className="btn btn-soft-success waves-effect waves-light">نمایش
                                       همه پیام ها <i className="ri-arrow-right-line align-middle"></i></button>
                                </div>
                            </SimpleBar>
                        </TabPane>
                        <TabPane tabId="3" className="p-4">
                            <div className="w-25 w-sm-50 pt-3 mx-auto">
                                <img src={bell} className="img-fluid" alt="user-pic" />
                            </div>
                            <div className="text-center pb-5 mt-2">
                                <h6 className="fs-18 fw-semibold lh-base">ایهلا! شما هیچ اعلانی ندارید </h6>
                            </div>
                        </TabPane>
                    </TabContent>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

export default NotificationDropdown;