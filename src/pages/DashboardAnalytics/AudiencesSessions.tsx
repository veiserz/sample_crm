import React, { useState, useEffect } from 'react';
import { Card, CardHeader, Col, DropdownMenu, DropdownToggle, UncontrolledDropdown, DropdownItem } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { AudiencesSessionsCharts } from './DashboardAnalyticsCharts';
import { getAudiencesSessionsChartsData } from "../../slices/thunks";
import { createSelector } from 'reselect';

const AudiencesSessions = () => {
    const dispatch = useDispatch<any>();

    const [chartData, setchartData] = useState<any>([]);

    const sessionsData = createSelector(
        (state : any) => state.DashboardAnalytics,
        (audiencesSessionsData) => audiencesSessionsData.audiencesSessionsData
    );
    // Inside your component
    const audiencesSessionsData = useSelector(sessionsData);

    useEffect(() => {
        setchartData(audiencesSessionsData);
    }, [audiencesSessionsData]);

    const [seletedMonth, setSeletedMonth] = useState("today");
    const onChangeChartPeriod = (pType: any) => {
        setSeletedMonth(pType);
        dispatch(getAudiencesSessionsChartsData(pType));
    };

    useEffect(() => {
        dispatch(getAudiencesSessionsChartsData("today"));
    }, [dispatch]);
    return (
        <React.Fragment>
            <Col xl={6}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex" dir="rtl">
                        <h4 className="card-title mb-0 flex-grow-1">جلسات مخاطبان بر اساس کشور</h4>
                        <div className="flex-shrink-0">
                            <UncontrolledDropdown className="card-header-dropdown">
                                <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                                    <span className="fw-semibold text-uppercase fs-13">مرتب‌سازی بر اساس: </span><span className="text-muted">{seletedMonth.charAt(0).toUpperCase() + seletedMonth.slice(1)}<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end" dir="rtl">
                                    <DropdownItem onClick={() => { onChangeChartPeriod("today"); }} className={seletedMonth === "today" ? "active" : ""}>امروز</DropdownItem>
                                    <DropdownItem onClick={() => { onChangeChartPeriod("lastWeek"); }} className={seletedMonth === "lastWeek" ? "active" : ""}>هفته گذشته</DropdownItem>
                                    <DropdownItem onClick={() => { onChangeChartPeriod("lastMonth"); }} className={seletedMonth === "lastMonth" ? "active" : ""}>ماه گذشته</DropdownItem>
                                    <DropdownItem onClick={() => { onChangeChartPeriod("currentYear"); }} className={seletedMonth === "currentYear" ? "active" : ""}>سال جاری</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </CardHeader>
                    <div className="card-body p-0">
                        <div>
                            <div id="audiences-sessions-country-charts" className="apex-charts" dir="ltr">
                                <AudiencesSessionsCharts series={chartData} dataColors='["--vz-success", "--vz-secondary"]' />
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default AudiencesSessions;