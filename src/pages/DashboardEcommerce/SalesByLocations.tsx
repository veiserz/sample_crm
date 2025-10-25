import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { VectorMap } from '@south-paw/react-vector-maps'
import world from '../../common/world.svg.json';

const SalesByLocations = () => {
    return (
        <React.Fragment>
            <Col xl={4}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <div className="flex-shrink-0">
                            <button type="button" className="btn btn-soft-primary btn-sm">
                                گزارش خروجی
                            </button>
                        </div>
                        <h4 className="card-title mb-0 flex-grow-1" dir="rtl">فروش بر اساس مکان</h4>

                    </CardHeader>

                    <CardBody>

                        <div
                            data-colors='["--vz-light", "--vz-success", "--vz-primary"]'
                            style={{ height: "269px" }} dir="ltr">
                            <div id="world_map_line_markers" className="custom-vector-map">
                                        <VectorMap {...world} />
                                    </div>
                        </div>

                        <div className="px-2 py-2 mt-1">
                            <p className="mb-1">75% <span className="float-end">کانادا</span></p>
                            <div className="progress mt-2" style={{ height: "6px" }}>
                                <div className="progress-bar progress-bar-striped bg-primary" role="progressbar"
                                    style={{ width: "75%" }}>
                                </div>
                            </div>

                            <p className="mt-3 mb-1">47% <span className="float-end">گرینلند</span></p>
                            <div className="progress mt-2" style={{ height: "6px" }}>
                                <div className="progress-bar progress-bar-striped bg-primary" role="progressbar"
                                    style={{ width: "47%" }}>
                                </div>
                            </div>

                            <p className="mt-3 mb-1">82% <span className="float-end">روسیه</span></p>
                            <div className="progress mt-2" style={{ height: "6px" }}>
                                <div className="progress-bar progress-bar-striped bg-primary" role="progressbar"
                                    style={{ width: "82%" }}>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default SalesByLocations;