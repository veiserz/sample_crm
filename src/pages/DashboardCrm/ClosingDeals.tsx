import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { closingDeals } from "../../common/data";

const ClosingDeals = () => {
    return (
        <React.Fragment>
            <Col xxl={7}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex" dir="rtl">
                        <h4 className="card-title mb-0 flex-grow-1">معاملات در حال بسته شدن</h4>
                        <div className="flex-shrink-0">
                            <select className="form-select form-select-sm">
                                <option defaultValue="">معاملات بسته شده</option>
                                <option value="1">معاملات فعال</option>
                                <option value="2">معاملات متوقف</option>
                                <option value="3">معاملات لغو شده</option>
                            </select>
                        </div>
                    </CardHeader>
                    <CardBody dir="rtl">
                        <div className="table-responsive">
                            <table className="table table-bordered table-nowrap align-middle mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ width: "30%" }}>نام معامله</th>
                                        <th scope="col" style={{ width: "30%" }}>نماینده فروش</th>
                                        <th scope="col" style={{ width: "20%" }}>مبلغ</th>
                                        <th scope="col" style={{ width: "20%" }}>تاریخ بسته شدن</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {(closingDeals || []).map((item, key) => (
                                        <tr key={key}>
                                            <td>{item.dealName}</td>
                                            <td><img src={item.img} alt="" className="avatar-xs rounded-circle ms-2" />{" "}
                                                <Link to="#" className="text-body fw-medium">{item.salesRep}</Link></td>
                                            <td>${item.amount}k</td>
                                            <td>{item.closeDate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default ClosingDeals;