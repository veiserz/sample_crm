import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, ListGroup, ListGroupItem, Pagination, PaginationItem, PaginationLink, Row, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';

import SimpleBar from 'simplebar-react';

// Import Images

import product2 from "../../assets/images/products/img-2.png";
import product8 from "../../assets/images/products/img-8.png";
import product10 from "../../assets/images/products/img-10.png";

import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";

import { widgetsActivities, widgetsTasks } from "../../common/data/index";
import { OtherWidgetsCharts } from './WidgetsCharts';

const UpcomingActivity = () => {

    const chartDataOptions = [
        {
            id: 1,
            title: "درخواست",
            persantage: "16.24",
            series: [{
                name: "نتایج",
                data: [0, 68, 35, 90, 99],
            }],
            dataColors: '["--vz-success" , "--vz-transparent"]'
        },
        {
            id: 2,
            title: "مصاحبه شده",
            persantage: "34.24",
            series: [{
                name: "نتایج",
                data: [0, 98, 85, 90, 67],
            }],
            dataColors: '["--vz-danger" , "--vz-transparent"]'
        },
        {
            id: 3,
            title: "استخدام شده",
            persantage: "6.67",
            series: [{
                name: "نتایج",
                data: [0, 65, 103, 75, 120],
            }],
            dataColors: '["--vz-success" , "--vz-transparent"]'
        },
    ]

    return (
        <React.Fragment>
            <Row>
                <Col xxl={5}>
                    <Card className="card-height-100">
                        <CardHeader className="align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">فعالیت‌های آینده</h4>
                            <div className="flex-shrink-0">

                                <UncontrolledDropdown className="card-header-dropdown" direction='start'>
                                    <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                                        <span className="text-muted fs-18"><i className="mdi mdi-dots-vertical"></i></span>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem>ویرایش</DropdownItem>
                                        <DropdownItem>حذف</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>

                            </div>
                        </CardHeader>

                        <CardBody className="pt-0">
                            <ListGroup className="border-dashed" flush>
                                {widgetsActivities.map((item:any, key:number) => (
                                    <ListGroupItem className="ps-0" key={key}>
                                        <Row className="align-items-center g-3">
                                            <Col className="col-auto">
                                                <div className="avatar-sm p-1 py-2 h-auto bg-light rounded-3">
                                                    <div className="text-center">
                                                        <h5 className="mb-0">{item.date}</h5>
                                                        <div className="text-muted">{item.weekDay}</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col className="col">
                                                <h5 className="text-muted mt-0 mb-1 fs-13">{item.time}</h5>
                                                <Link to="#" className="text-reset fs-14 mb-0">{item.caption}</Link>
                                            </Col>
                                            <Col className="col-sm-auto">
                                                <div className="avatar-group">
                                                    {item.subItem.map((item:any, key:number) => (
                                                        <React.Fragment key={key}>
                                                            {item.img ? (<div className="avatar-group-item">
                                                                <Link to="#" className="d-inline-block" id={item.targetId}>
                                                                    <img src={item.img} alt="" className="rounded-circle avatar-xxs" />
                                                                </Link>
                                                            </div>) : (<div className="avatar-group-item">
                                                                <Link to="#">
                                                                    <div className="avatar-xxs">
                                                                        <span className={"avatar-title rounded-circle text-white " + item.bgcolor}>
                                                                            {item.imgNumber}
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            </div>)
                                                            }
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            </Col>
                                        </Row>
                                    </ListGroupItem >))}
                            </ListGroup>

                            <Row className="align-items-center mt-2 text-center text-sm-start">
                                <Col className="col-sm">
                                    <div className="text-muted">نمایش <span className="fw-semibold">4</span> از <span className="fw-semibold">125</span> نتیجه
                                    </div>
                                </Col>
                                <Col className="col-sm-auto">

                                    <Pagination size='sm' className="pagination-separated pagination-sm justify-content-center justify-content-sm-start mb-0">
                                        <PaginationItem> <PaginationLink to="#"> ← </PaginationLink> </PaginationItem>
                                        <PaginationItem> <PaginationLink to="#"> 1 </PaginationLink> </PaginationItem>
                                        <PaginationItem active> <PaginationLink to="#"> 2 </PaginationLink> </PaginationItem>
                                        <PaginationItem> <PaginationLink to="#"> 3 </PaginationLink> </PaginationItem>
                                        <PaginationItem> <PaginationLink to="#"> → </PaginationLink> </PaginationItem>
                                    </Pagination>

                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col xxl={7}>
                    <Row>
                        <Col xl={6}>
                            <Card className="card-height-100">
                                <CardHeader className="align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">وظایف من</h4>
                                    <div className="flex-shrink-0">

                                        <UncontrolledDropdown className="card-header-dropdown">
                                            <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
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
                                        <Button color="success" size="sm" ><i className="ri-add-line align-middle me-1"></i> اضافه کردن وظیفه</Button>
                                    </div>

                                    <SimpleBar style={{ maxHeight: "257px" }}>
                                        <ListGroup className="border-dashed px-3" flush>

                                            {(widgetsTasks || []).map((item, key) => (<ListGroupItem className="ps-0" key={key}>
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
                                            </ListGroupItem>))}

                                        </ListGroup>
                                    </SimpleBar>
                                    <div className="p-3">
                                        <Link to="#" className="text-muted text-decoration-underline">نمایش بیشتر...</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="card-height-100">
                                <CardHeader className="border-bottom-dashed align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">فعالیت های اخیر</h4>
                                    <div className="flex-shrink-0">
                                        <button type="button" className="btn btn-soft-primary btn-sm">
                                            نمایش همه فعالیت ها
                                        </button>
                                    </div>
                                </CardHeader>
                                <CardBody className="p-0">
                                    <SimpleBar style={{ maxHeight: "364px" }} className="p-3">
                                        <div className="acitivity-timeline acitivity-main">
                                            <div className="acitivity-item d-flex">
                                                <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                    <div className="avatar-title bg-success-subtle text-success rounded-circle">
                                                        <i className="ri-shopping-cart-2-line"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1">خرید توسط جیمز پرایس</h6>
                                                    <p className="text-muted mb-1">محصول نویز ساعت هوشمند تکامل یافته</p>
                                                    <small className="mb-0 text-muted">امروز ساعت 14:14</small>
                                                </div>
                                            </div>
                                            <div className="acitivity-item py-3 d-flex">
                                                <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                    <div className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        <i className="ri-stack-fill"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1">اضافه کردن <span className="fw-semibold">مجموعه استایل</span> جدید</h6>
                                                    <p className="text-muted mb-1">توسط تکنولوژی‌های نستا</p>
                                                    <div className="d-inline-flex gap-2 border border-dashed p-2 mb-2 w-75">
                                                        <Link to="/apps-ecommerce-product-details" className="bg-light rounded p-1">
                                                            <img src={product8} alt="" className="img-fluid d-block" />
                                                        </Link>
                                                        <Link to="/apps-ecommerce-product-details" className="bg-light rounded p-1">
                                                            <img src={product2} alt="" className="img-fluid d-block" />
                                                        </Link>
                                                        <Link to="/apps-ecommerce-product-details" className="bg-light rounded p-1">
                                                            <img src={product10} alt="" className="img-fluid d-block" />
                                                        </Link>
                                                    </div>
                                                    <p className="mb-0 text-muted"><small>دیروز ساعت 21:47</small></p>
                                                </div>
                                            </div>
                                            <div className="acitivity-item py-3 d-flex">
                                                <div className="flex-shrink-0">
                                                    <img src={avatar2} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1">ناتاشا کری محصولات را لایک کرده است</h6>
                                                    <p className="text-muted mb-1">به کاربران اجازه دهید محصولات را در فروشگاه WooCommerce شما لایک کنند.</p>
                                                    <small className="mb-0 text-muted">25 دسامبر، 2021</small>
                                                </div>
                                            </div>
                                            <div className="acitivity-item py-3 d-flex">
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-xs acitivity-avatar">
                                                        <div className="avatar-title rounded-circle bg-secondary">
                                                            <i className="mdi mdi-sale fs-14"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1">پیشنهادات امروز توسط <Link to="/apps-ecommerce-seller-details" className="link-secondary">گالاکسی دیجیتک</Link></h6>
                                                    <p className="text-muted mb-2">پیشنهاد فقط برای سفارشات بالای 500 روپیه یا بیشتر برای محصولات انتخاب شده معتبر است.</p>
                                                    <small className="mb-0 text-muted">12 دسامبر، 2021</small>
                                                </div>
                                            </div>
                                            <div className="acitivity-item py-3 d-flex">
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-xs acitivity-avatar">
                                                        <div className="avatar-title rounded-circle bg-danger-subtle text-danger">
                                                            <i className="ri-bookmark-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1">محصول مورد علاقه</h6>
                                                    <p className="text-muted mb-2">استر جیمز محصول را به علاقه‌مندی‌ها اضافه کرده است.</p>
                                                    <small className="mb-0 text-muted">25 نوامبر، 2021</small>
                                                </div>
                                            </div>
                                            <div className="acitivity-item py-3 d-flex">
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-xs acitivity-avatar">
                                                        <div className="avatar-title rounded-circle bg-secondary">
                                                            <i className="mdi mdi-sale fs-14"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1">فروش فلش از <span className="text-primary">فردا</span> شروع می‌شود.</h6>
                                                    <p className="text-muted mb-0">فروش فلش توسط <Link to="#" className="link-secondary fw-medium">فشن زوئتیک</Link></p>
                                                    <small className="mb-0 text-muted">22 اکتبر، 2021</small>
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
                                                    <p className="text-muted mb-2"><span className="text-danger">2 روز باقی مانده</span> برای ارسال گزارش فروش ماهانه. <Link to="#" className="link-warning text-decoration-underline">سازنده گزارش</Link></p>
                                                    <small className="mb-0 text-muted">15 اکتبر</small>
                                                </div>
                                            </div>
                                            <div className="acitivity-item d-flex">
                                                <div className="flex-shrink-0">
                                                    <img src={avatar3} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1">فرانک هوک نظر داد</h6>
                                                    <p className="text-muted mb-2 fst-italic">" محصولی که نظرات دارد بیشتر از محصولی که نظرات ندارد قابل فروش است. "</p>
                                                    <small className="mb-0 text-muted">26 اوت، 2021</small>
                                                </div>
                                            </div>
                                        </div>
                                    </SimpleBar>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                {(chartDataOptions || []).map((item, key) => (
                    <Col xl={4} md={6} key={key}>
                        <Card className="card-height-100">
                            <div className="d-flex">
                                <div className="flex-grow-1 p-3">
                                    <h5 className="mb-3">{item.title}</h5>
                                    <p className="mb-0 text-muted"><span className="badge bg-light text-success mb-0"> <i className="ri-arrow-up-line align-middle"></i> {item.persantage} % </span> در مقایسه با ماه قبل</p>
                                </div>
                                <div>
                                    {/* <div className="apex-charts" data-colors='["--vz-success" , "--vz-transparent"]' dir="ltr" id="results_sparkline_charts"></div> */}
                                    <OtherWidgetsCharts dataColors={item.dataColors} seriesData={item.series} />
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    );
};

export default UpcomingActivity;