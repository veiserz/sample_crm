import React from 'react';
import { Link } from 'react-router-dom';
import { tasks } from "../../common/data";
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

//SimpleBar
import SimpleBar from "simplebar-react";

const MyTasks = () => {
    return (
        <React.Fragment>
            <Col xl={5}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">وظایف من</h4>
                        <div className="flex-shrink-0">
                            <UncontrolledDropdown className="card-header-dropdown">
                                <DropdownToggle className="text-reset dropdown-btn" tag="a" role="button">
                                    <span className="text-muted"><i className="ri-settings-4-line align-middle me-1 fs-15"></i>تنظیمات</span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                    <DropdownItem>ویرایش</DropdownItem>
                                    <DropdownItem>حذف</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </CardHeader>

                    <CardBody className="p-0">

                        <div className="align-items-center p-3 justify-content-between d-flex">
                            <div className="flex-shrink-0">
                                <div className="text-muted"><span className="fw-semibold">4</span> از <span className="fw-semibold">10</span> باقی مانده</div>
                            </div>
                            <button type="button" className="btn btn-sm btn-secondary"><i className="ri-add-line align-middle me-1"></i> اضافه کردن وظیفه</button>
                        </div>

                        <SimpleBar style={{ maxHeight: "219px" }}>
                            <ul className="list-group list-group-flush border-dashed px-3">
                                {(tasks || []).map((item, index) => (
                                    <li className="list-group-item ps-0" key={index}>
                                        <div className="d-flex align-items-start">
                                            <div className="form-check ps-0 flex-sharink-0">
                                                <input type="checkbox" className="form-check-input ms-0" id={item.forId} />
                                            </div>
                                            <div className="flex-grow-1">
                                                <label className="form-check-label mb-0 ps-2" htmlFor={item.forId}>{item.text}</label>
                                            </div>
                                            <div className="flex-shrink-0 ms-2">
                                                <p className="text-muted fs-13 mb-0">{item.date}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </SimpleBar>
                        <div className="p-3 pt-2">
                            <Link to="#" className="text-muted text-decoration-underline">نمایش بیشتر...</Link>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default MyTasks;