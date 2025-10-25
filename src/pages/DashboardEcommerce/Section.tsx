import React from 'react';
import { Col, Row } from 'reactstrap';
import Flatpickr from "react-flatpickr";

const Section = (props:any) => {
    return (
        <React.Fragment>
            <Row className="mb-3 pb-1">
                <Col xs={12}>
                    <div className="d-flex align-items-lg-center flex-lg-row flex-column">

                        <div className="mt-3 mt-lg-0">
                            <form action="#">
                                <Row className="g-3 mb-0 align-items-center">
                                    <div className="col-sm-auto">
                                        <div className="input-group">
                                            <Flatpickr
                                                className="form-control border-0 fs-13 dash-filter-picker shadow"
                                                options={{
                                                    mode: "range",
                                                    dateFormat: "d M, Y",
                                                    defaultDate: ["01 Jan 2022", "31 Jan 2022"]
                                                }}
                                            />
                                            <div className="input-group-text bg-secondary border-secondary text-white"><i className="ri-calendar-2-line"></i></div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <button type="button" className="btn btn-soft-success"><i className="ri-add-circle-line align-middle me-1"></i> افزودن محصول</button>
                                    </div>
                                    <div className="col-auto">
                                        <button type="button" className="btn btn-soft-info btn-icon waves-effect waves-light layout-rightside-btn" onClick={props.rightClickBtn} ><i className="ri-pulse-line"></i></button>
                                    </div>
                                </Row>
                            </form>
                        </div>
                        <div className="flex-grow-1" dir="rtl">
                            <h4 className="fs-16 mb-1">ادمین محترم</h4>
                            <p className="text-muted mb-0">در این بخش می‌توانید روند فعالیت‌ها و وضعیت فروشگاه خود در طول امروز را مشاهده نمایید.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Section;