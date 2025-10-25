import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar6 from "../../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../../assets/images/users/avatar-8.jpg";
import image2 from "../../../assets/images/small/img-2.jpg";
import image3 from "../../../assets/images/small/img-3.jpg";
import image4 from "../../../assets/images/small/img-4.jpg";

const ActivitiesTab = () => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <h5 className="card-title">فعالیت‌ها</h5>
                    <div className="acitivity-timeline py-3">
                        <div className="acitivity-item d-flex">
                            <div className="flex-shrink-0">
                                <img src={avatar1} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">علی احمدی <span className="badge bg-primary-subtle text-primary align-middle">جدید</span></h6>
                                <p className="text-muted mb-2">ما در مورد یک پروژه در لینکدین صحبت کردیم.</p>
                                <small className="mb-0 text-muted">امروز</small>
                            </div>
                        </div>
                        <div className="acitivity-item py-3 d-flex">
                            <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                <div className="avatar-title bg-success-subtle text-success rounded-circle">
                                    N
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">نازنین محمدی <span className="badge bg-secondary-subtle text-secondary align-middle">در حال انجام</span></h6>
                                <p className="text-muted mb-2"><i className="ri-file-text-line align-middle ms-2"></i> ایجاد پروژه جدید ساخت محصول</p>
                                <div className="avatar-group mb-2">
                                    <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="کریستی">
                                        <img src={avatar4} alt="" className="rounded-circle avatar-xs" />
                                    </Link>
                                    <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="فرانک هوک">
                                        <img src={avatar3} alt="" className="rounded-circle avatar-xs" />
                                    </Link>
                                    <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="روبی">
                                        <div className="avatar-xs">
                                            <div className="avatar-title rounded-circle bg-light text-primary">
                                                R
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="بیشتر">
                                        <div className="avatar-xs">
                                            <div className="avatar-title rounded-circle">
                                                2+
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <small className="mb-0 text-muted">دیروز</small>
                            </div>
                        </div>
                        <div className="acitivity-item py-3 d-flex">
                            <div className="flex-shrink-0">
                                <img src={avatar2} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">ناتاشا کریمی <span className="badge bg-success-subtle text-success align-middle">تکمیل شده</span></h6>
                                <p className="text-muted mb-2">اضافه کردن رویداد جدید با پیوست‌ها</p>
                                <Row>
                                    <Col xxl={4}>
                                        <Row className="border border-dashed gx-2 p-2 mb-2">
                                            <Col xs={4}>
                                                <img src={image2} alt="" className="img-fluid rounded" />
                                            </Col>
                                            <Col xs={4}>
                                                <img src={image3} alt="" className="img-fluid rounded" />
                                            </Col>
                                            <Col xs={4}>
                                                <img src={image4} alt="" className="img-fluid rounded" />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <small className="mb-0 text-muted">۲۵ آبان</small>
                            </div>
                        </div>
                        <div className="acitivity-item py-3 d-flex">
                            <div className="flex-shrink-0">
                                <img src={avatar6} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">بتانی جوهری</h6>
                                <p className="text-muted mb-2">عضو جدیدی به داشبورد ولزون اضافه کرد</p>
                                <small className="mb-0 text-muted">۱۹ آبان</small>
                            </div>
                        </div>
                        <div className="acitivity-item py-3 d-flex">
                            <div className="flex-shrink-0">
                                <div className="avatar-xs acitivity-avatar">
                                    <div className="avatar-title rounded-circle bg-danger-subtle text-danger">
                                        <i className="ri-shopping-bag-line"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">سفارش شما ثبت شد <span className="badge bg-danger-subtle text-danger align-middle ms-1">خارج از تحویل</span></h6>
                                <p className="text-muted mb-2">این مشتریان می‌توانند مطمئن باشند که سفارششان ثبت شده است.</p>
                                <small className="mb-0 text-muted">۱۶ آبان</small>
                            </div>
                        </div>
                        <div className="acitivity-item py-3 d-flex">
                            <div className="flex-shrink-0">
                                <img src={avatar7} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">لوئیس پرت</h6>
                                <p className="text-muted mb-2">همه آن‌ها چیزی برای گفتن دارند که فراتر از کلمات روی صفحه است. آن‌ها می‌توانند غیررسمی یا خنثی، عجیب یا گرافیکی به نظر برسند.</p>
                                <small className="mb-0 text-muted">۲۲ مهر</small>
                            </div>
                        </div>
                        <div className="acitivity-item py-3 d-flex">
                            <div className="flex-shrink-0">
                                <div className="avatar-xs acitivity-avatar">
                                    <div className="avatar-title rounded-circle bg-info-subtle text-info">
                                        <i className="ri-line-chart-line"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">گزارش فروش ماهانه</h6>
                                <p className="text-muted mb-2"><span className="text-danger">۲ روز باقی مانده</span>
                                اعلان برای ارسال گزارش فروش ماهانه. <Link to="#" className="link-warning text-decoration-underline">سازنده گزارش‌ها</Link></p>
                                <small className="mb-0 text-muted">۱۵ مهر</small>
                            </div>
                        </div>
                        <div className="acitivity-item d-flex">
                            <div className="flex-shrink-0">
                                <img src={avatar8} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">تیکت جدید دریافت شد <span className="badge bg-success-subtle text-success align-middle">تکمیل شده</span></h6>
                                <p className="text-muted mb-2">کاربر <span className="text-secondary">اریکا۲۴۵</span> تیکتی ارسال کرد.</p>
                                <small className="mb-0 text-muted">۲۶ مرداد</small>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default ActivitiesTab;