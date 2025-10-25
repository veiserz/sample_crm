import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { RevenueCharts } from "./RevenueCharts";
import CountUp from "react-countup";

const Revenue = () => {
  return (
    <React.Fragment>
      <Card>
        <CardHeader className="border-0 align-items-center d-flex">
          <h4 className="card-title mb-0 flex-grow-1">درآمد</h4>
          <div className="d-flex gap-1">
            <button type="button" className="btn btn btn-soft-secondary btn-sm">
              همه
            </button>
            <button type="button" className="btn btn btn-soft-secondary btn-sm">
              ۱م
            </button>
            <button type="button" className="btn btn btn-soft-secondary btn-sm">
              ۶م
            </button>
            <button type="button" className="btn btn-soft-primary btn-sm">
              ۱س
            </button>
          </div>
        </CardHeader>

        <CardHeader className="p-0 border-0 bg-light-subtle">
          <Row className="g-0 text-center">
            <Col xs={6} sm={3}>
              <div className="p-3 border border-dashed border-start-0">
                <h5 className="mb-1">
                  <CountUp start={0} end={7585} duration={3} separator="," />
                </h5>
                <p className="text-muted mb-0">سفارشات</p>
              </div>
            </Col>
            <Col xs={6} sm={3}>
              <div className="p-3 border border-dashed border-start-0">
                <h5 className="mb-1">
                  <CountUp
                    suffix="k"
                    prefix="$"
                    start={0}
                    decimals={2}
                    end={22.89}
                    duration={3}
                  />
                </h5>
                <p className="text-muted mb-0">درآمد</p>
              </div>
            </Col>
            <Col xs={6} sm={3}>
              <div className="p-3 border border-dashed border-start-0">
                <h5 className="mb-1">
                  <CountUp start={0} end={367} duration={3} />
                </h5>
                <p className="text-muted mb-0">بازپرداخت‌ها</p>
              </div>
            </Col>
            <Col xs={6} sm={3}>
              <div className="p-3 border border-dashed border-start-0 border-end-0">
                <h5 className="mb-1 text-success">
                  <CountUp
                    start={0}
                    end={18.92}
                    decimals={2}
                    duration={3}
                    suffix="%"
                  />
                </h5>
                <p className="text-muted mb-0">نسبت تبدیل</p>
              </div>
            </Col>
          </Row>
        </CardHeader>

        <CardBody className="p-0 pb-2">
          <div className="w-100">
            <div dir="ltr">
              <RevenueCharts dataColors='["--vz-primary", "--vz-success", "--vz-danger"]' />
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default Revenue;
