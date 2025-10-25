import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import CountUp from "react-countup";
import { useSelector, useDispatch } from "react-redux";
import { AudiencesCharts } from './DashboardAnalyticsCharts';
import { getAudiencesMetricsChartsData } from "../../slices/thunks";
import { createSelector } from 'reselect';

const AudiencesMetrics = () => {
    const dispatch = useDispatch<any>();

    const [chartData, setchartData] = useState<any>([]);

    const audiencesData = createSelector(
        (state: any) => state.DashboardAnalytics,
        (audiencesMetricsData) => audiencesMetricsData.audiencesMetricsData
    );
    // Inside your component
    const audiencesMetricsData = useSelector(audiencesData);

    useEffect(() => {
        setchartData(audiencesMetricsData);
    }, [audiencesMetricsData]);

    const onChangeChartPeriod = (pType: any) => {
        dispatch(getAudiencesMetricsChartsData(pType));
    };

    useEffect(() => {
        dispatch(getAudiencesMetricsChartsData("all"));
    }, [dispatch]);
    return (
        <React.Fragment>
            <Col xl={6}>
                <Card>
                    <CardHeader className="border-0 align-items-center d-flex" dir="rtl">
                        <h4 className="card-title mb-0 flex-grow-1">معیارهای مخاطبان</h4>
                        <div className="d-flex gap-1">
                            <button type="button" className="btn btn-soft-secondary btn-sm" onClick={() => { onChangeChartPeriod("all"); }}>
                                همه
                            </button>
                            <button type="button" className="btn btn-soft-secondary btn-sm" onClick={() => { onChangeChartPeriod("monthly"); }}>
                                1 ماه
                            </button>
                            <button type="button" className="btn btn-soft-secondary btn-sm" onClick={() => { onChangeChartPeriod("halfyearly"); }}>
                                6 ماه
                            </button>
                            <button type="button" className="btn btn-soft-primary btn-sm" onClick={() => { onChangeChartPeriod("yearly"); }}>
                                1 سال
                            </button>
                        </div>
                    </CardHeader>
                    <CardHeader className="p-0 border-0 bg-light-subtle" dir="rtl">
                        <Row className="g-0 text-center">
                            <Col xs={6} sm={4}>
                                <div className="p-3 border border-dashed border-start-0">
                                    <h5 className="mb-1"><span className="counter-value" data-target="854">
                                        <CountUp
                                            start={0}
                                            end={854}
                                            duration={3}
                                        />
                                    </span>
                                        <span className="text-success ms-1 fs-13"> 49%<i className="ri-arrow-right-up-line ms-1 align-middle"></i></span>
                                    </h5>
                                    <p className="text-muted mb-0">میانگین جلسه</p>
                                </div>
                            </Col>
                            <Col xs={6} sm={4}>
                                <div className="p-3 border border-dashed border-start-0">
                                    <h5 className="mb-1"><span className="counter-value" data-target="1278">
                                        <CountUp
                                            start={0}
                                            end={1278}
                                            duration={3}
                                            separator=","
                                        />
                                    </span>
                                        <span className="text-success ms-1 fs-13"> 60%<i className="ri-arrow-right-up-line ms-1 align-middle"></i></span>
                                    </h5>
                                    <p className="text-muted mb-0">نرخ تبدیل</p>
                                </div>
                            </Col>
                            <Col xs={6} sm={4}>
                                <div className="p-3 border border-dashed border-start-0 border-end-0">
                                    <h5 className="mb-1"><span className="counter-value" data-target="3">
                                        <CountUp
                                            start={0}
                                            end={3}
                                            duration={3}
                                        />
                                    </span>دقیقه <span className="counter-value" data-target="40">
                                            <CountUp
                                                start={0}
                                                end={40}
                                                duration={3}
                                            />
                                        </span>ثانیه
                                        <span className="text-success ms-1 fs-13"> 37%<i className="ri-arrow-right-up-line ms-1 align-middle"></i></span>
                                    </h5>
                                    <p className="text-muted mb-0">میانگین زمان جلسه</p>
                                </div>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody className="p-0 pb-2">
                        <div>
                            <div id="audiences_metrics_charts" className="apex-charts" dir="ltr">
                                <AudiencesCharts series={chartData} dataColors='["--vz-primary", "--vz-gray-300"]' />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default AudiencesMetrics;