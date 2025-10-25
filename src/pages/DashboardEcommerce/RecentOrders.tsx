import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { recentOrders } from '../../common/data';

const RecentOrders = () => {
    return (
        <React.Fragment>
            <Col xl={8}>
                <Card>
                    <CardHeader className="align-items-center d-flex">
                        <div className="flex-shrink-0">
                            <button type="button" className="btn btn-soft-info btn-sm">
                                <i className="ri-file-list-3-line align-middle"></i> گزارش خروجی
                            </button>
                        </div>
                        <h4 className="card-title mb-0 flex-grow-1" dir="rtl">سفارش های اخیر</h4>

                    </CardHeader>

                    <CardBody>
                        <div className="table-responsive table-card">
                            <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                                <thead className="text-muted table-light">
                                    <tr>
                                        <th scope="col">شناسه سفارش</th>
                                        <th scope="col">مشتری</th>
                                        <th scope="col">محصول</th>
                                        <th scope="col">مقدار</th>
                                        <th scope="col">فروشنده</th>
                                        <th scope="col">وضعیت</th>
                                        <th scope="col">رای</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(recentOrders || []).map((item, key) => (<tr key={key}>
                                        <td>
                                            <Link to="/apps-ecommerce-order-details" className="fw-medium link-primary">{item.orderId}</Link>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <img src={item.img} alt="" className="avatar-xs rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1">{item.name}</div>
                                            </div>
                                        </td>
                                        <td>{item.product}</td>
                                        <td>
                                            <span className="text-success">${item.amount}</span>
                                        </td>
                                        <td>{item.vendor}</td>
                                        <td>
                                        <span className={`badge bg-${item.statusClass}-subtle text-${item.statusClass}`}>{item.status}</span>
                                        </td>
                                        <td>
                                            <h5 className="fs-14 fw-medium mb-0">{item.rating}<span className="text-muted fs-11 ms-1">({item.votes} رای)</span></h5>
                                        </td>
                                    </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default RecentOrders;