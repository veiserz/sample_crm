import React from 'react';
import { Badge, Button, Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import Scroll Bar - SimpleBar
import SimpleBar from 'simplebar-react';

//import Components
import BreadCrumb from '../../../Components/Common/BreadCrumb';

// Import Images
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../../assets/images/users/avatar-5.jpg";
import avatar8 from "../../../assets/images/users/avatar-8.jpg";

const UiScrollbar = () => {
    document.title="Scrollbar | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="page-content">
                
                <Container fluid>
                    <BreadCrumb title="نوار پیمایش" pageTitle="رابط کاربری پیشرفته" />

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">پیمایش پیش‌فرض</h4>
                                </CardHeader>

                                <CardBody>
                                    <p className="text-muted">از ویژگی <code>data-simplebar</code> استفاده کنید و <code>max-height: **px</code> اضافه کنید تا نوار پیمایش پیش‌فرض تنظیم شود.</p>

                                    <div className="mx-n3">
                                        <SimpleBar style={{ maxHeight: "220px" }}  className="px-3">
                                            <p>اگر چندین زبان ترکیب شوند، دستور زبان زبان حاصل ساده‌تر و منظم‌تر از زبان‌های فردی خواهد بود. زبان مشترک جدید ساده‌تر و منظم‌تر از زبان موجود خواهد بود</p>
                                            <p>برای یک فرد انگلیسی، این مانند انگلیسی ساده شده به نظر خواهد رسید، همانطور که یک دوست شکاک کمبریجی من به من گفت که اکسیتال چیست. زبان‌های اروپایی اعضای یک خانواده هستند. وجود جداگانه آن‌ها یک افسانه است. برای علم، موسیقی، ورزش و غیره، اروپا از همان واژگان استفاده می‌کند.</p>
                                            <p>زبان‌ها فقط در دستور زبان، تلفظ و رایج‌ترین کلماتشان متفاوت هستند. همه می‌فهمند چرا یک زبان مشترک جدید مطلوب خواهد بود: می‌توان از پرداخت مترجمان گران قیمت خودداری کرد. برای دستیابی به این هدف، لازم است دستور زبان، تلفظ و کلمات مشترک بیشتری یکنواخت داشته باشیم.</p>
                                            <p>وجود جداگانه آن‌ها یک افسانه است. برای علم، موسیقی، ورزش و غیره، اروپا از همان واژگان استفاده می‌کند. زبان‌ها فقط در دستور زبان، تلفظ و رایج‌ترین کلماتشان متفاوت هستند.</p>
                                        </SimpleBar>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">مخفی‌سازی خودکار غیرفعال</h4>
                                </CardHeader>

                                <CardBody>
                                    <p className="text-muted">از ویژگی <code>data-simplebar-auto-hide="false"</code> استفاده کنید و <code>max-height: **px</code> اضافه کنید تا سیمپل‌بار به عنوان پیش‌فرض نمایش داده شود.</p>

                                    <div className="mx-n3">
                                        <SimpleBar autoHide={false} style={{ maxHeight: "220px" }} className="px-3">
                                            <p>اگر چندین زبان ترکیب شوند، دستور زبان زبان حاصل ساده‌تر و منظم‌تر از زبان‌های فردی خواهد بود. زبان مشترک جدید ساده‌تر و منظم‌تر از زبان موجود خواهد بود</p>
                                            <p>برای یک فرد انگلیسی، این مانند انگلیسی ساده شده به نظر خواهد رسید، همانطور که یک دوست شکاک کمبریجی من به من گفت که اکسیتال چیست. زبان‌های اروپایی اعضای یک خانواده هستند. وجود جداگانه آن‌ها یک افسانه است. برای علم، موسیقی، ورزش و غیره، اروپا از همان واژگان استفاده می‌کند.</p>
                                            <p>زبان‌ها فقط در دستور زبان، تلفظ و رایج‌ترین کلماتشان متفاوت هستند. همه می‌فهمند چرا یک زبان مشترک جدید مطلوب خواهد بود: می‌توان از پرداخت مترجمان گران قیمت خودداری کرد. برای دستیابی به این هدف، لازم است دستور زبان، تلفظ و کلمات مشترک بیشتری یکنواخت داشته باشیم.</p>
                                            <p className="mb-0">وجود جداگانه آن‌ها یک افسانه است. برای علم، موسیقی، ورزش و غیره، اروپا از همان واژگان استفاده می‌کند. زبان‌ها فقط در دستور زبان، تلفظ و رایج‌ترین کلماتشان متفاوت هستند.</p>
                                        </SimpleBar>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">جهت راست به چپ</h4>
                                </CardHeader>

                                <CardBody>
                                    <p className="text-muted">از ویژگی <code>data-simplebar-direction="rtl"</code> استفاده کنید و <code>max-height: **px</code> اضافه کنید تا سیمپل‌بار در سمت راست تنظیم شود.</p>

                                    <div className="mx-n3">
                                        <SimpleBar data-simplebar-direction="rtl" style={{ maxHeight: "220px" }} className="px-3">
                                            <p>اگر چندین زبان ترکیب شوند، دستور زبان زبان حاصل ساده‌تر و منظم‌تر از زبان‌های فردی خواهد بود. زبان مشترک جدید ساده‌تر و منظم‌تر از زبان موجود خواهد بود</p>
                                            <p>برای یک فرد انگلیسی، این مانند انگلیسی ساده شده به نظر خواهد رسید، همانطور که یک دوست شکاک کمبریجی من به من گفت که اکسیتال چیست. زبان‌های اروپایی اعضای یک خانواده هستند. وجود جداگانه آن‌ها یک افسانه است. برای علم، موسیقی، ورزش و غیره، اروپا از همان واژگان استفاده می‌کند.</p>
                                            <p>زبان‌ها فقط در دستور زبان، تلفظ و رایج‌ترین کلماتشان متفاوت هستند. همه می‌فهمند چرا یک زبان مشترک جدید مطلوب خواهد بود: می‌توان از پرداخت مترجمان گران قیمت خودداری کرد. برای دستیابی به این هدف، لازم است دستور زبان، تلفظ و کلمات مشترک بیشتری یکنواخت داشته باشیم.</p>
                                            <p>وجود جداگانه آن‌ها یک افسانه است. برای علم، موسیقی، ورزش و غیره، اروپا از همان واژگان استفاده می‌کند. زبان‌ها فقط در دستور زبان، تلفظ و رایج‌ترین کلماتشان متفاوت هستند.</p>
                                        </SimpleBar>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col lg={12}>
                            <div className="justify-content-between d-flex align-items-center mb-3">
                                <h5 className="mb-0 pb-1 text-decoration-underline">رنگ مسیر سیمپل‌بار</h5>
                            </div>
                            <Row>
                                <Col xl={4} lg={6}>
                                    <Card>
                                        <CardHeader>
                                            <h4 className="card-title mb-0">مسیر اصلی</h4>
                                        </CardHeader>

                                        <CardBody>
                                            <p className="text-muted">از ویژگی <code>data-simplebar-track="primary"</code> استفاده کنید تا مسیر سیمپل‌بار با رنگ اصلی تنظیم شود.</p>
                                            
                                            <div className="mx-n3">                                                
                                                <SimpleBar autoHide={false} className="simplebar-track-primary" style={{ maxHeight: "275px" }}>
                                                    
                                                    <Link to="#!" className="text-reset notification-item d-block dropdown-item">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 avatar-xs me-3">
                                                                <span className="avatar-title bg-info-subtle text-info rounded-circle fs-16">
                                                                    <i className="ri-checkbox-circle-fill"></i>
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow-1 text-muted">
                                                                <p className="m-0">پاداش بهینه‌سازی گرافیک نویسنده <span className="fw-semibold text-body">الیت</span> شما <span className="text-secondary">آماده</span> است!</p>

                                                            </div>
                                                            <div className="flex-shrink-0 ms-2">
                                                                <div className="fs-12 text-muted">
                                                                    <i className="mdi mdi-clock-outline"></i> ۳۰ دقیقه پیش
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="#!" className="text-reset notification-item d-block dropdown-item active">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 avatar-xs me-3">
                                                                <img src={avatar2} className="rounded-circle img-fluid" alt="user-pic" />
                                                            </div>
                                                            <div className="flex-grow-1 text-muted">
                                                                <h6 className="mb-1 fs-14">آنجلا برنیر</h6>
                                                                <p className="mb-0">به نظر شما در مورد نمودار پیش‌بینی جریان نقدی پاسخ داد 🔔.</p>
                                                            </div>

                                                            <div className="flex-shrink-0 ms-2">
                                                                <div className="fs-12 text-muted">
                                                                    <i className="mdi mdi-clock-outline"></i> ۱ ساعت پیش
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="#!" className="text-reset notification-item d-block dropdown-item">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 avatar-xs me-3">
                                                                <span className="avatar-title bg-danger-subtle text-danger rounded-circle fs-16">
                                                                    <i className="ri-message-2-fill"></i>
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow-1 text-muted">
                                                                <p className="m-0">شما <span className="fw-semibold text-success">۲۰</span> پیام جدید در مکالمه دریافت کرده‌اید</p>
                                                            </div>
                                                            <div className="flex-shrink-0 ms-2">
                                                                <div className="fs-12 text-muted">
                                                                    <i className="mdi mdi-clock-outline"></i> ۲ ساعت پیش
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="#!" className="text-reset notification-item d-block dropdown-item">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 avatar-xs me-3">
                                                                <img src={avatar8} className="rounded-circle img-fluid" alt="user-pic" />
                                                            </div>
                                                            <div className="flex-grow-1 text-muted">
                                                                <h6 className="mb-1 fs-14">مورین گیبسون</h6>
                                                                <p className="mb-0">ما در مورد یک پروژه در لینکدین صحبت کردیم.</p>
                                                            </div>
                                                            <div className="flex-shrink-0 ms-2">
                                                                <div className="fs-12 text-muted">
                                                                    <i className="mdi mdi-clock-outline"></i> ۲ ساعت پیش
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link to="#!" className="text-reset notification-item d-block dropdown-item">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 avatar-xs me-3">
                                                                <span className="avatar-title bg-info-subtle text-info rounded-circle fs-16">
                                                                    <i className="ri-checkbox-circle-fill"></i>
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow-1 text-muted">
                                                                <p className="m-0">پاداش بهینه‌سازی گرافیک نویسنده <span className="fw-semibold text-body">الیت</span> شما <span className="text-secondary">آماده</span> است!</p>

                                                            </div>
                                                            <div className="flex-shrink-0 ms-2">
                                                                <div className="fs-12 text-muted">
                                                                    <i className="mdi mdi-clock-outline"></i> ۳۰ دقیقه پیش
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="text-center my-2">
                                                        <Link to="#" className="text-success"><i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> بارگذاری بیشتر </Link>
                                                    </div>
                                                </SimpleBar>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <Card>
                                        <CardHeader>
                                            <h4 className="card-title mb-0">مسیر ثانویه</h4>
                                        </CardHeader>

                                        <CardBody>
                                            <p className="text-muted">از ویژگی <code>data-simplebar-track="secondary"</code> استفاده کنید تا مسیر سیمپل‌بار با رنگ ثانویه تنظیم شود.</p>

                                            <div className="mx-n3">
                                                <SimpleBar autoHide={false} className="simplebar-track-secondary" style={{ maxHeight: "275px" }}>
                                                    <div className="list-group list-group-flush">
                                                        <Link to="#" className="list-group-item text-muted py-3">
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-shrink-0 align-self-center me-3">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-light text-primary">
                                                                            M
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="text-truncate fs-15 mb-1">مایکل جانستون</h5>
                                                                    <p className="text-truncate mb-0">به‌روزرسانی‌های جدید برای تم ABC</p>
                                                                </div>
                                                                <div className="fs-12">۰۶ دقیقه</div>
                                                            </div>
                                                        </Link>
                                                        <Link to="#" className="list-group-item text-muted py-3">
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-shrink-0 align-self-center me-3">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-light text-primary">
                                                                            D
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="text-truncate fs-15 mb-1">دارن جیمز</h5>
                                                                    <p className="text-truncate mb-0">گزارش باگ - تم abc</p>
                                                                </div>
                                                                <div className="fs-12">۱۲ دقیقه</div>
                                                            </div>
                                                        </Link>
                                                        <Link to="#" className="list-group-item text-muted py-3">
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-shrink-0 align-self-center me-3">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-light text-primary">
                                                                            P
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="text-truncate fs-15 mb-1">پاتریشیا شلتون</h5>
                                                                    <p className="text-truncate mb-0">خوشحالم که شما را ملاقات کردم</p>
                                                                </div>
                                                                <div className="fs-12">۲۸ دقیقه</div>
                                                            </div>
                                                        </Link>

                                                        <Link to="#" className="list-group-item text-muted py-3">
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-shrink-0 align-self-center me-3">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-light text-primary">
                                                                            T
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="text-truncate fs-15 mb-1">توماس مک‌نیل</h5>
                                                                    <p className="text-truncate mb-0">این تم فوق‌العاده است!</p>
                                                                </div>
                                                                <div className="fs-12">۰۲ ساعت</div>
                                                            </div>
                                                        </Link>

                                                        <Link to="#" className="list-group-item text-muted py-3">
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-shrink-0 align-self-center me-3">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-light text-primary">
                                                                            C
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="text-truncate fs-15 mb-1">کارولین جونز</h5>
                                                                    <p className="text-truncate mb-0">تمامش کردم! تا بعد</p>
                                                                </div>
                                                                <div className="fs-12">۰۳ ساعت</div>
                                                            </div>
                                                        </Link>
                                                        <Link to="#" className="list-group-item text-muted py-3">
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-shrink-0 align-self-center me-3">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-light text-primary">
                                                                            M
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="text-truncate fs-15 mb-1">مایکل جانستون</h5>
                                                                    <p className="text-truncate mb-0">به‌روزرسانی‌های جدید برای تم ABC</p>
                                                                </div>
                                                                <div className="fs-12">۰۳ ساعت</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </SimpleBar>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <Card>
                                        <CardHeader>
                                            <h4 className="card-title mb-0">مسیر موفقیت</h4>
                                        </CardHeader>

                                        <CardBody>
                                            <p className="text-muted">از ویژگی <code>data-simplebar-track="success"</code> استفاده کنید تا مسیر سیمپل‌بار با رنگ موفقیت تنظیم شود.</p>

                                            <div className="mx-n3">
                                                <SimpleBar autoHide={false} className="simplebar-track-success" style={{ maxHeight: "275px" }}>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item py-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <div>2019 - 21</div>
                                                                </div>
                                                                <div className="flex-shrink-0 mx-3">
                                                                    <i className="ri-arrow-right-fill text-muted"></i>
                                                                </div>
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="text-truncate fs-14 mb-1">طراح ارشد / توسعه‌دهنده</h5>
                                                                    <div className="text-truncate">شرکت XYZ</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item py-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <div>2017 - 19</div>
                                                                </div>
                                                                <div className="flex-shrink-0 mx-3">
                                                                    <i className="ri-arrow-right-fill text-muted"></i>
                                                                </div>
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="text-truncate fs-14 mb-1">طراح گرافیک ارشد</h5>
                                                                    <div className="text-truncate">شرکت ABC</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item py-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <div>2016 - 17</div>
                                                                </div>
                                                                <div className="flex-shrink-0 mx-3">
                                                                    <i className="ri-arrow-right-fill text-muted"></i>
                                                                </div>
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="text-truncate fs-14 mb-1">طراح گرافیک</h5>
                                                                    <div className="text-truncate">شرکت XYZ</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item py-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <div>2017 - 16</div>
                                                                </div>
                                                                <div className="flex-shrink-0 mx-3">
                                                                    <i className="ri-arrow-right-fill text-muted"></i>
                                                                </div>
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="text-truncate fs-14 mb-1">طراح گرافیک</h5>
                                                                    <div className="text-truncate">شرکت ABC</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item py-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <div>2016 - 15</div>
                                                                </div>
                                                                <div className="flex-shrink-0 mx-3">
                                                                    <i className="ri-arrow-right-fill text-muted"></i>
                                                                </div>
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="text-truncate fs-14 mb-1">طراح گرافیک</h5>
                                                                    <div className="text-truncate">شرکت XYZ</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </SimpleBar>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <Card>
                                        <CardHeader>
                                            <h4 className="card-title mb-0">مسیر اطلاعات</h4>
                                        </CardHeader>

                                        <CardBody>
                                            <p className="text-muted">از ویژگی <code>data-simplebar-track="info"</code> استفاده کنید تا مسیر سیمپل‌بار با رنگ اطلاعات تنظیم شود.</p>

                                            <div className="mx-n3">
                                                <SimpleBar autoHide={false} className="simplebar-track-info" style={{ maxHeight: "238px" }}>
                                                    <ol className="list-group list-group-flush list-group-numbered">
                                                        <li className="list-group-item d-flex align-items-center">
                                                            یک آیتم لیست
                                                            <Badge color="success" className="ms-auto">پرداخت شده</Badge>
                                                        </li>
                                                        <li className="list-group-item d-flex align-items-center">
                                                            آیتم دوم لیست
                                                            <Badge color="danger" className="ms-auto ">بازپرداخت</Badge>
                                                        </li>
                                                        <li className="list-group-item d-flex align-items-center">
                                                            آیتم سوم لیست
                                                            <Badge color="success" className="ms-auto">پرداخت شده</Badge>
                                                        </li>
                                                        <li className="list-group-item d-flex align-items-center">
                                                            آیتم چهارم لیست
                                                            <Badge color="success" className="ms-auto">پرداخت شده</Badge>
                                                        </li>
                                                        <li className="list-group-item d-flex align-items-center">
                                                            آیتم پنجم لیست
                                                            <Badge color="warning" className="ms-auto">در حال انجام</Badge>
                                                        </li>
                                                        <li className="list-group-item d-flex align-items-center">
                                                            آیتم ششم لیست
                                                            <Badge color="success" className="ms-auto">پرداخت شده</Badge>
                                                        </li>
                                                    </ol>
                                                </SimpleBar>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <Card>
                                        <CardHeader>
                                            <h4 className="card-title mb-0">مسیر هشدار</h4>
                                        </CardHeader>

                                        <CardBody>
                                            <p className="text-muted">از ویژگی <code>data-simplebar-track="warning"</code> استفاده کنید تا مسیر سیمپل‌بار با رنگ هشدار تنظیم شود.</p>

                                            <div className="mx-n3">
                                                <SimpleBar autoHide={false} style={{ maxHeight: "220px" }} className="simplebar-track-warning px-3">
                                                    <div className="d-flex align-items-center py-3">
                                                        <div className="avatar-xs flex-shrink-0 me-3">
                                                            <img src={avatar3} alt="" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div>
                                                                <h5 className="fs-14 mb-1">استر جیمز</h5>
                                                                <p className="fs-13 text-muted mb-0">توسعه‌دهنده فرانت‌اند</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex-shrink-0 ms-2">
                                                            <Button color="success" size="sm" outline ><i className="ri-user-add-line align-middle"></i></Button>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex align-items-center py-3">
                                                        <div className="avatar-xs flex-shrink-0 me-3">
                                                            <img src={avatar4} alt="" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div>
                                                                <h5 className="fs-14 mb-1">ژاکلین استیو</h5>
                                                                <p className="fs-13 text-muted mb-0">طراح UI/UX</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex-shrink-0 ms-2">
                                                            <Button color="success" size="sm" outline ><i className="ri-user-add-line align-middle"></i></Button>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex align-items-center py-3">
                                                        <div className="avatar-xs flex-shrink-0 me-3">
                                                            <img src={avatar5} alt="" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div>
                                                                <h5 className="fs-14 mb-1">جرج ویلن</h5>
                                                                <p className="fs-13 text-muted mb-0">توسعه‌دهنده بک‌اند</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex-shrink-0 ms-2">
                                                            <Button color="success" size="sm" outline ><i className="ri-user-add-line align-middle"></i></Button>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center py-3">
                                                        <div className="avatar-xs flex-shrink-0 me-3">
                                                            <img src={avatar3} alt="" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div>
                                                                <h5 className="fs-14 mb-1">کارل لینچ</h5>
                                                                <p className="fs-13 text-muted mb-0">توسعه‌دهنده فرانت‌اند</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex-shrink-0 ms-2">
                                                            <Button color="success" size="sm" outline ><i className="ri-user-add-line align-middle"></i></Button>
                                                        </div>
                                                    </div>
                                                </SimpleBar>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <Card>
                                        <CardHeader>
                                            <h4 className="card-title mb-0">مسیر خطر</h4>
                                        </CardHeader>

                                        <CardBody>
                                            <p className="text-muted">از ویژگی <code>data-simplebar-track="danger"</code> استفاده کنید تا مسیر سیمپل‌بار با رنگ خطر تنظیم شود.</p>

                                            <div className="mx-n3">
                                                <SimpleBar autoHide={false} style={{ maxHeight: "220px" }} className="simplebar-track-danger px-3">
                                                    <Link to="#" className="d-flex align-items-center py-2">
                                                        <div className="flex-shrink-0 avatar-xs me-3">
                                                            <div className="avatar-title bg-light text-primary rounded-circle">
                                                                <i className="ri-hashtag"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="fs-14 mb-1">سفارشی‌سازی پروژه ABC</h5>
                                                            <p className="text-muted mb-0">۰۴ عضو</p>
                                                        </div>
                                                        <div className="flex-shrink-0 align-self-start ms-2">
                                                            <div className="badge bg-warning-subtle text-warning fs-11">در حال انجام</div>
                                                        </div>
                                                    </Link>
                                                    <Link to="#" className="d-flex align-items-center py-2">
                                                        <div className="flex-shrink-0 avatar-xs me-3">
                                                            <div className="avatar-title bg-light text-primary rounded-circle">
                                                                <i className="ri-hashtag"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="fs-14 mb-1">مشتری - جان</h5>
                                                            <p className="text-muted mb-0">۰۲ عضو</p>
                                                        </div>
                                                        <div className="flex-shrink-0 align-self-start ms-2">
                                                            <div className="badge bg-warning-subtle text-warning fs-11">در حال انجام</div>
                                                        </div>
                                                    </Link>
                                                    <Link to="#" className="d-flex align-items-center py-2">
                                                        <div className="flex-shrink-0 avatar-xs me-3">
                                                            <div className="avatar-title bg-light text-primary rounded-circle">
                                                                <i className="ri-hashtag"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="fs-14 mb-1">طراحی لوگوی برند</h5>
                                                            <p className="text-muted mb-0">۰۱ عضو</p>
                                                        </div>
                                                        <div className="flex-shrink-0 align-self-start ms-2">
                                                            <div className="badge bg-success-subtle text-success fs-11">تکمیل شده</div>
                                                        </div>
                                                    </Link>
                                                    <Link to="#" className="d-flex align-items-center py-2">
                                                        <div className="flex-shrink-0 avatar-xs me-3">
                                                            <div className="avatar-title bg-light text-primary rounded-circle">
                                                                <i className="ri-hashtag"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="fs-14 mb-1">به‌روزرسانی پروژه</h5>
                                                            <p className="text-muted mb-0">۰۳ عضو</p>
                                                        </div>
                                                        <div className="flex-shrink-0 align-self-start ms-2">
                                                            <div className="badge bg-warning-subtle text-warning fs-11">در حال انجام</div>
                                                        </div>
                                                    </Link>
                                                    <Link to="#" className="d-flex align-items-center py-2">
                                                        <div className="flex-shrink-0 avatar-xs me-3">
                                                            <div className="avatar-title bg-light text-primary rounded-circle">
                                                                <i className="ri-hashtag"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="fs-14 mb-1">اپلیکیشن چت</h5>
                                                            <p className="text-muted mb-0">۰۵ عضو</p>
                                                        </div>
                                                        <div className="flex-shrink-0 align-self-start ms-2">
                                                            <div className="badge bg-success-subtle text-success fs-10">Completed</div>
                                                        </div>
                                                    </Link>
                                                </SimpleBar>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <Card>
                                        <CardHeader>
                                            <h4 className="card-title mb-0">مسیر تیره</h4>
                                        </CardHeader>

                                        <CardBody>
                                            <p className="text-muted">از ویژگی <code>data-simplebar-track="dark"</code> استفاده کنید تا مسیر سیمپل‌بار با رنگ تیره تنظیم شود.</p>

                                            <div className="mx-n3">                                                
                                                <SimpleBar autoHide={false} className="simplebar-track-dark" style={{ maxHeight: "220px" }}>

                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">
                                                            <div>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-grow-1">
                                                                        <Badge color="success" className="bg-gradient mb-2"><i className="mdi mdi-star"></i> 4.1</Badge>
                                                                    </div>
                                                                    <div className="flex-shrink-0">
                                                                        <p className="text-muted fs-13">۱۲ تیر، ۲۱</p>
                                                                    </div>
                                                                </div>

                                                                <p className="text-muted mb-4">در واقع به همین سادگی خواهد بود، مانند ساده شده به نظر خواهد رسید</p>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-grow-1">
                                                                        <h5 className="fs-15 mb-0">مایکل لمیر</h5>
                                                                    </div>

                                                                    <div className="flex-shrink-0">
                                                                        <div className="hstack gap-3">
                                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="پسندیدن">
                                                                                <Link to="#" className="text-muted"><i className="ri-thumb-up-line"></i></Link>
                                                                            </div>
                                                                            <div className="vr"></div>
                                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="نظر">
                                                                                <Link to="#" className="text-muted"><i className="ri-discuss-line"></i></Link>
                                                                            </div>
                                                                            <div className="vr"></div>
                                                                            <div className="dropdown">
                                                                                <Link className="text-muted" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="ri-more-fill"></i>
                                                                                </Link>

                                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                                    <Link className="dropdown-item" to="#">عمل</Link>
                                                                                    <Link className="dropdown-item" to="#">عمل دیگر</Link>
                                                                                    <Link className="dropdown-item" to="#">چیز دیگری اینجا</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <div>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-grow-1">
                                                                        <Badge color="success" className="bg-gradient mb-2"><i className="mdi mdi-star"></i> 4.0</Badge>
                                                                    </div>
                                                                    <div className="flex-shrink-0">
                                                                        <p className="text-muted fs-13">۰۶ تیر، ۲۱</p>
                                                                    </div>
                                                                </div>
                                                                <p className="text-muted mb-4">خطای sed ut perspiciatis در اینجا قرار دارد</p>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-grow-1">
                                                                        <h5 className="fs-15 mb-0">کارل لینچ</h5>
                                                                    </div>

                                                                    <div className="flex-shrink-0">
                                                                        <div className="hstack gap-3">
                                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="پسندیدن">
                                                                                <Link to="#" className="text-muted"><i className="ri-thumb-up-line"></i></Link>
                                                                            </div>
                                                                            <div className="vr"></div>
                                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="نظر">
                                                                                <Link to="#" className="text-muted"><i className="ri-discuss-line"></i></Link>
                                                                            </div>
                                                                            <div className="vr"></div>
                                                                            <div className="dropdown">
                                                                                <Link className="text-muted" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="ri-more-fill"></i>
                                                                                </Link>

                                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                                    <Link className="dropdown-item" to="#">عمل</Link>
                                                                                    <Link className="dropdown-item" to="#">عمل دیگر</Link>
                                                                                    <Link className="dropdown-item" to="#">چیز دیگری اینجا</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="list-group-item">
                                                            <div>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-grow-1">
                                                                        <Badge color="success" className="bg-gradient mb-2"><i className="mdi mdi-star"></i> 4.2</Badge>
                                                                    </div>
                                                                    <div className="flex-shrink-0">
                                                                        <p className="text-muted fs-13">۲۶ خرداد، ۲۱</p>
                                                                    </div>
                                                                </div>
                                                                <p className="text-muted mb-4">هیچ کس نیست که درد را دوست داشته باشد، کسی که درد را دوست داشته باشد، کسی که آن را دنبال کند، کسی که آن را می‌خواهد</p>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-grow-1">
                                                                        <h5 className="fs-15 mb-0">جویس وایت</h5>
                                                                    </div>

                                                                    <div className="flex-shrink-0">
                                                                        <div className="hstack gap-3">
                                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="پسندیدن">
                                                                                <Link to="#" className="text-muted"><i className="ri-thumb-up-line"></i></Link>
                                                                            </div>
                                                                            <div className="vr"></div>
                                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="نظر">
                                                                                <Link to="#" className="text-muted"><i className="ri-discuss-line"></i></Link>
                                                                            </div>
                                                                            <div className="vr"></div>
                                                                            <div className="dropdown">
                                                                                <Link className="text-muted" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="ri-more-fill"></i>
                                                                                </Link>

                                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                                    <Link className="dropdown-item" to="#">عمل</Link>
                                                                                    <Link className="dropdown-item" to="#">عمل دیگر</Link>
                                                                                    <Link className="dropdown-item" to="#">چیز دیگری اینجا</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="list-group-item">
                                                            <div>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-grow-1">
                                                                        <Badge color="success" className="bg-gradient mb-2"><i className="mdi mdi-star"></i> 4.1</Badge>
                                                                    </div>
                                                                    <div className="flex-shrink-0">
                                                                        <p className="text-muted fs-13">۲۴ خرداد، ۲۱</p>
                                                                    </div>
                                                                </div>
                                                                <p className="text-muted mb-4">برای رسیدن به حداقل، هیچ کس نمی‌تواند از درد و رنج اجتناب کند، مگر اینکه از آن لذت ببرد</p>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-grow-1">
                                                                        <h5 className="fs-15 mb-0">اتا اسمیت</h5>
                                                                    </div>

                                                                    <div className="flex-shrink-0">
                                                                        <div className="hstack gap-3">
                                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="پسندیدن">
                                                                                <Link to="#" className="text-muted"><i className="ri-thumb-up-line"></i></Link>
                                                                            </div>
                                                                            <div className="vr"></div>
                                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="نظر">
                                                                                <Link to="#" className="text-muted"><i className="ri-discuss-line"></i></Link>
                                                                            </div>
                                                                            <div className="vr"></div>
                                                                            <div className="dropdown">
                                                                                <Link className="text-muted" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="ri-more-fill"></i>
                                                                                </Link>

                                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                                    <Link className="dropdown-item" to="#">عمل</Link>
                                                                                    <Link className="dropdown-item" to="#">عمل دیگر</Link>
                                                                                    <Link className="dropdown-item" to="#">چیز دیگری اینجا</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </SimpleBar>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default UiScrollbar;
