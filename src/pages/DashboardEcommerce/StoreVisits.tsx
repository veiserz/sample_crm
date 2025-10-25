import React from 'react';
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { StoreVisitsCharts } from './DashboardEcommerceCharts';

const StoreVisits = () => {
    return (
        <React.Fragment>
            <Col xl={4}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <div className="flex-shrink-0">
                            <UncontrolledDropdown className="card-header-dropdown" direction='start'>
                                <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                                    <span className="text-muted">Report<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                    <DropdownItem>دانلود گزارش</DropdownItem>
                                    <DropdownItem>خروجی گرفتن</DropdownItem>
                                    <DropdownItem>وارد کردن</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                        <h4 className="card-title mb-0 flex-grow-1" dir="rtl">بازدیدهای فروشگاه بر اساس منبع</h4>

                    </CardHeader>

                    <div className="card-body">
                            <StoreVisitsCharts dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]' />
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default StoreVisits;