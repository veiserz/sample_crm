import React from 'react'
import { Card, CardBody, Col, Container, Input, Label, Row, Table } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import UiContent from "../../../Components/Common/UiContent";
import { Link } from 'react-router-dom';
import {
    DefaultTables,
    StrippedRow,
    TablesColors,
    HoverableRows,
    CardTables,
    ActiveTables,
    BorderedTables,
    TablesBorderColors,
    TablesWithoutBorders,
    SmallTables,
    TableHead,
    TableFoot,
    Captions,
    TableNesting,
    Variants,
    VerticalAlignment,
    ResponsiveTables,
    StripedColumnsTables
} from './BasicTablesCode';

//Import images
import avtarImage1 from '../../../assets/images/users/avatar-1.jpg';
import avtarImage3 from '../../../assets/images/users/avatar-3.jpg';
import avtarImage4 from '../../../assets/images/users/avatar-4.jpg';
import avtarImage5 from '../../../assets/images/users/avatar-5.jpg';
import avtarImage6 from '../../../assets/images/users/avatar-6.jpg';



const BasicTables = () => {
    document.title = "جداول پایه | ولزون - قالب ادمین و داشبورد React";

    return (
        <React.Fragment>
            <UiContent />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="جداول پایه" pageTitle="جداول" />
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="جداول پیش‌فرض" />
                                <CardBody>
                                    <p className="text-muted">از ویژگی <code>Table</code> برای نمایش جدول پیش‌فرض مبتنی بر bootstrap استفاده کنید.</p>
                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="align-middle table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">شناسه</th>
                                                        <th scope="col">مشتری</th>
                                                        <th scope="col">تاریخ</th>
                                                        <th scope="col">فاکتور</th>
                                                        <th scope="col">عملیات</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row"><Link to="#" className="fw-medium">#VZ2110</Link></th>
                                                        <td>Bobby Davis</td>
                                                        <td>October 15, 2021</td>
                                                        <td>$2,300</td>
                                                        <td><Link to="#" className="link-success">مشاهده بیشتر <i className="ri-arrow-right-line align-middle"></i></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><Link to="#" className="fw-medium">#VZ2109</Link></th>
                                                        <td>Christopher Neal</td>
                                                        <td>October 7, 2021</td>
                                                        <td>$5,500</td>
                                                        <td><Link to="#" className="link-success">مشاهده بیشتر <i className="ri-arrow-right-line align-middle"></i></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><Link to="#" className="fw-medium">#VZ2108</Link></th>
                                                        <td>Monkey Karry</td>
                                                        <td>October 5, 2021</td>
                                                        <td>$2,420</td>
                                                        <td><Link to="#" className="link-success">مشاهده بیشتر <i className="ri-arrow-right-line align-middle"></i></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><Link to="#" className="fw-medium">#VZ2107</Link></th>
                                                        <td>James White</td>
                                                        <td>October 2, 2021</td>
                                                        <td>$7,452</td>
                                                        <td><Link to="#" className="link-success">مشاهده بیشتر <i className="ri-arrow-right-line align-middle"></i></Link></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <DefaultTables />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>


                        <Col xl={6} >
                            <Card>
                                <PreviewCardHeader title="ردیف‌های راه‌راه" />
                                <CardBody>
                                    <p className="text-muted">از کلاس <code>table-striped</code> برای اضافه کردن راه‌راه‌های گورخری به هر ردیف جدول در &lt;tbody&gt; استفاده کنید.</p>
                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="table-striped table-nowrap align-middle mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">شناسه</th>
                                                        <th scope="col">مشتری</th>
                                                        <th scope="col">تاریخ</th>
                                                        <th scope="col">فاکتور</th>
                                                        <th scope="col">عملیات</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="fw-medium">01</td>
                                                        <td>Bobby Davis</td>
                                                        <td>Nov 14, 2021</td>
                                                        <td>$2,410</td>
                                                        <td><span className="badge bg-success">تأیید شده</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">02</td>
                                                        <td>Christopher Neal</td>
                                                        <td>Nov 21, 2021</td>
                                                        <td>$1,450</td>
                                                        <td><span className="badge bg-warning">در انتظار</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">03</td>
                                                        <td>Monkey Karry</td>
                                                        <td>Nov 24, 2021</td>
                                                        <td>$3,500</td>
                                                        <td><span className="badge bg-success">تأیید شده</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">04</td>
                                                        <td>Aaron James</td>
                                                        <td>Nov 25, 2021</td>
                                                        <td>$6,875</td>
                                                        <td><span className="badge bg-danger">لغو شده</span></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <StrippedRow />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <Card>
                                <PreviewCardHeader title="ستون‌های راه‌راه" />
                                <CardBody>
                                    <p className="text-muted mb-4">از <code>table-striped-columns</code> برای اضافه کردن راه‌راه‌های گورخری به هر ستون جدول استفاده کنید.</p>
                                    <div className="live-preview">
                                        <div className="table-responsive table-card">
                                            <table className="table align-middle table-nowrap table-striped-columns mb-0">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col" style={{ width: "46px" }}>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="cardtableCheck" />
                                                                <label className="form-check-label" htmlFor="cardtableCheck"></label>
                                                            </div>
                                                        </th>
                                                        <th scope="col">شناسه</th>
                                                        <th scope="col">نام</th>
                                                        <th scope="col">تاریخ</th>
                                                        <th scope="col">مجموع</th>
                                                        <th scope="col">وضعیت</th>
                                                        <th scope="col" style={{ width: "150px" }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="cardtableCheck01" />
                                                                <label className="form-check-label" htmlFor="cardtableCheck01"></label>
                                                            </div>
                                                        </td>
                                                        <td><Link to="#" className="fw-medium">#VL2110</Link></td>
                                                        <td>William Elmore</td>
                                                        <td>07 Oct, 2021</td>
                                                        <td>$24.05</td>
                                                        <td><span className="badge bg-success">پرداخت شده</span></td>
                                                        <td>
                                                            <button type="button" className="btn btn-sm btn-light">جزئیات</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="cardtableCheck02" />
                                                                <label className="form-check-label" htmlFor="cardtableCheck02"></label>
                                                            </div>
                                                        </td>
                                                        <td><Link to="#" className="fw-medium">#VL2109</Link></td>
                                                        <td>Georgie Winters</td>
                                                        <td>07 Oct, 2021</td>
                                                        <td>$26.15</td>
                                                        <td><span className="badge bg-success">پرداخت شده</span></td>
                                                        <td>
                                                            <button type="button" className="btn btn-sm btn-light">جزئیات</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="cardtableCheck03" />
                                                                <label className="form-check-label" htmlFor="cardtableCheck03"></label>
                                                            </div>
                                                        </td>
                                                        <td><Link to="#" className="fw-medium">#VL2108</Link></td>
                                                        <td>Whitney Meier</td>
                                                        <td>06 Oct, 2021</td>
                                                        <td>$21.25</td>
                                                        <td><span className="badge bg-danger">بازپرداخت</span></td>
                                                        <td>
                                                            <button type="button" className="btn btn-sm btn-light">جزئیات</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="cardtableCheck04" />
                                                                <label className="form-check-label" htmlFor="cardtableCheck04"></label>
                                                            </div>
                                                        </td>
                                                        <td><Link to="#" className="fw-medium">#VL2107</Link></td>
                                                        <td>Justin Maier</td>
                                                        <td>05 Oct, 2021</td>
                                                        <td>$25.03</td>
                                                        <td><span className="badge bg-success">پرداخت شده</span></td>
                                                        <td>
                                                            <button type="button" className="btn btn-sm btn-light">جزئیات</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <StripedColumnsTables />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="رنگ‌های جداول" />
                                <CardBody>
                                    <p className="text-muted">از کلاس <code>table-dark</code> برای تنظیم رنگ تیره بدنه جدول و کلاس <code>table-success</code> برای تنظیم رنگ موفقیت بدنه جدول استفاده کنید. از کلاس <code>table-</code> با تغییرات رنگ مختلف برای تنظیم رنگ مورد نیاز بدنه جدول استفاده کنید.</p>
                                    <div className="live-preview">
                                        <Row>
                                            <Col xl={6}>
                                                <div className="table-responsive">
                                                    <Table className="table-dark table-striped table-nowrap mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">شناسه</th>
                                                                <th scope="col">مشتری</th>
                                                                <th scope="col">تاریخ</th>
                                                                <th scope="col">فاکتور</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="fw-medium">01</td>
                                                                <td>Bobby Davis</td>
                                                                <td>Nov 14, 2021</td>
                                                                <td>$2,410</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-medium">02</td>
                                                                <td>Christopher Neal</td>
                                                                <td>Nov 21, 2021</td>
                                                                <td>$1,450</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-medium">03</td>
                                                                <td>Monkey Karry</td>
                                                                <td>Nov 24, 2021</td>
                                                                <td>$3,500</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-medium">04</td>
                                                                <td>Aaron James</td>
                                                                <td>Nov 25, 2021</td>
                                                                <td>$6,875</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Col>

                                            <Col xl={6}>
                                                <div className="table-responsive mt-4 mt-xl-0">
                                                    <Table className="table-success table-striped table-nowrap align-middle mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">شناسه</th>
                                                                <th scope="col">فاکتور</th>
                                                                <th scope="col">مبلغ</th>
                                                                <th scope="col">تاریخ</th>
                                                                <th scope="col">وضعیت</th>
                                                                <th scope="col">عملیات</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="fw-medium">01</td>
                                                                <td>طرح پایه</td>
                                                                <td>$860</td>
                                                                <td>Nov 22, 2021</td>
                                                                <td><i className="ri-checkbox-circle-line align-middle text-success"></i> مشترک شده</td>
                                                                <td>
                                                                    <div className="hstack gap-3 flex-wrap">
                                                                        <Link to="#" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                                                                        <Link to="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-medium">02</td>
                                                                <td>طرح پریمیوم</td>
                                                                <td>$1200</td>
                                                                <td>Nov 10, 2021</td>
                                                                <td><i className="ri-close-circle-line align-middle text-danger"></i> لغو اشتراک شده</td>
                                                                <td>
                                                                    <div className="hstack gap-3 flex-wrap">
                                                                        <Link to="#" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                                                                        <Link to="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-medium">03</td>
                                                                <td>طرح پایه</td>
                                                                <td>$860</td>
                                                                <td>Nov 19, 2021</td>
                                                                <td><i className="ri-checkbox-circle-line align-middle text-success"></i> مشترک شده</td>
                                                                <td>
                                                                    <div className="hstack gap-3 flex-wrap">
                                                                        <Link to="#" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                                                                        <Link to="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-medium">04</td>
                                                                <td>طرح شرکتی</td>
                                                                <td>$1599</td>
                                                                <td>Nov 22, 2021</td>
                                                                <td><i className="ri-checkbox-circle-line align-middle text-success"></i> مشترک شده</td>
                                                                <td>
                                                                    <div className="hstack gap-3 flex-wrap">
                                                                        <Link to="#" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                                                                        <Link to="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <TablesColors />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="ردیف‌های قابل تعامل" />

                                <CardBody>
                                    <p className="text-muted">از کلاس <code>table-hover</code> برای فعال کردن حالت تعامل روی ردیف‌های جدول در &lt;tbody&gt; استفاده کنید.</p>

                                    <div className="live-preview">
                                        <Row>
                                            <Col xl={6}>
                                                <div className="table-responsive">
                                                    <Table className="table-hover align-middle table-nowrap mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col" style={{ "width": "25px" }}>
                                                                    <div className="form-check">
                                                                        <Input className="form-check-input" type="checkbox" id="checkAll" defaultValue="option1" />
                                                                    </div>
                                                                </th>
                                                                <th scope="col">شناسه سفارش</th>
                                                                <th scope="col">فروشگاه</th>
                                                                <th scope="col">مشتری</th>
                                                                <th scope="col">قیمت</th>
                                                                <th scope="col">عملیات</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="form-check">
                                                                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" defaultChecked />
                                                                    </div>
                                                                </th>
                                                                <td>#541254265</td>
                                                                <td>Amezon</td>
                                                                <td>Cleo Carson</td>
                                                                <td>$4,521</td>
                                                                <td><Link to="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="form-check">
                                                                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox3" defaultValue="option1" defaultChecked />
                                                                    </div>
                                                                </th>
                                                                <td>#744145235</td>
                                                                <td>Shoppers</td>
                                                                <td>Juston Eichmann</td>
                                                                <td>$7,546</td>
                                                                <td><Link to="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="form-check">
                                                                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox4" defaultValue="option1" />
                                                                    </div>
                                                                </th>
                                                                <td>#9855126598</td>
                                                                <td>Flipkart</td>
                                                                <td>Bettie Johson</td>
                                                                <td>$1,350</td>
                                                                <td><Link to="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="form-check">
                                                                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox5" defaultValue="option1" />
                                                                    </div>
                                                                </th>
                                                                <td>#847512653</td>
                                                                <td>Shoppers</td>
                                                                <td>Maritza Blanda</td>
                                                                <td>$4,521</td>
                                                                <td><Link to="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Col>

                                            <Col xl={6}>
                                                <div className="table-responsive mt-4 mt-xl-0">
                                                    <Table className="table-hover table-striped align-middle table-nowrap mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">شناسه</th>
                                                                <th scope="col">فاکتور</th>
                                                                <th scope="col">مبلغ</th>
                                                                <th scope="col">تاریخ</th>
                                                                <th scope="col">وضعیت</th>
                                                                <th scope="col">عملیات</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="fw-medium">01</td>
                                                                <td>طرح پایه</td>
                                                                <td>$860</td>
                                                                <td>Nov 22, 2021</td>
                                                                <td><i className="ri-checkbox-circle-line align-middle text-success"></i> مشترک شده</td>
                                                                <td>
                                                                    <div className="form-check form-switch">
                                                                        <Input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck1" defaultChecked />
                                                                        <Label className="form-check-label ms-2" htmlFor="SwitchCheck1">بله/خیر</Label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-medium">02</td>
                                                                <td>طرح پریمیوم</td>
                                                                <td>$1200</td>
                                                                <td>Nov 10, 2021</td>
                                                                <td><i className="ri-close-circle-line align-middle text-danger"></i> لغو اشتراک شده</td>
                                                                <td>
                                                                    <div className="form-check form-switch">
                                                                        <Input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck2" />
                                                                        <Label className="form-check-label ms-2" htmlFor="SwitchCheck2">Yes/No</Label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-medium">03</td>
                                                                <td>طرح پایه</td>
                                                                <td>$860</td>
                                                                <td>Nov 19, 2021</td>
                                                                <td><i className="ri-checkbox-circle-line align-middle text-success"></i> مشترک شده</td>
                                                                <td>
                                                                    <div className="form-check form-switch">
                                                                        <Input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck3" />
                                                                        <Label className="form-check-label ms-2" htmlFor="SwitchCheck3">Yes/No</Label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-medium">04</td>
                                                                <td>طرح شرکتی</td>
                                                                <td>$1599</td>
                                                                <td>Nov 22, 2021</td>
                                                                <td><i className="ri-checkbox-circle-line align-middle text-success"></i> مشترک شده</td>
                                                                <td>
                                                                    <div className="form-check form-switch">
                                                                        <Input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck4" defaultChecked />
                                                                        <Label className="form-check-label ms-2" htmlFor="SwitchCheck4">Yes/No</Label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <HoverableRows />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <PreviewCardHeader title="جداول کارت" />
                                <CardBody>
                                    <p className="text-muted mb-4">از کلاس <code>table-card</code> برای نمایش جدول مبتنی بر کارت در &lt;tbody&gt; استفاده کنید.</p>
                                    <div className="live-preview">
                                        <div className="table-responsive table-card">
                                            <Table className="align-middle table-nowrap mb-0">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col" style={{ "width": "46px" }}>
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="cardtableCheck" />
                                                                <Label className="form-check-label" htmlFor="cardtableCheck"></Label>
                                                            </div>
                                                        </th>
                                                        <th scope="col">شناسه</th>
                                                        <th scope="col">نام</th>
                                                        <th scope="col">تاریخ</th>
                                                        <th scope="col">مجموع</th>
                                                        <th scope="col">وضعیت</th>
                                                        <th scope="col" style={{ "width": "150px" }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="cardtableCheck01" />
                                                                <Label className="form-check-label" htmlFor="cardtableCheck01"></Label>
                                                            </div>
                                                        </td>
                                                        <td><Link to="#" className="fw-medium">#VL2110</Link></td>
                                                        <td>William Elmore</td>
                                                        <td>07 Oct, 2021</td>
                                                        <td>$24.05</td>
                                                        <td><span className="badge bg-success">پرداخت شده</span></td>
                                                        <td>
                                                            <button type="button" className="btn btn-sm btn-light">جزئیات</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="cardtableCheck02" />
                                                                <Label className="form-check-label" htmlFor="cardtableCheck02"></Label>
                                                            </div>
                                                        </td>
                                                        <td><Link to="#" className="fw-medium">#VL2109</Link></td>
                                                        <td>Georgie Winters</td>
                                                        <td>07 Oct, 2021</td>
                                                        <td>$26.15</td>
                                                        <td><span className="badge bg-success">پرداخت شده</span></td>
                                                        <td>
                                                            <button type="button" className="btn btn-sm btn-light">جزئیات</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" value="" id="cardtableCheck03" />
                                                                <Label className="form-check-label" htmlFor="cardtableCheck03"></Label>
                                                            </div>
                                                        </td>
                                                        <td><Link to="#" className="fw-medium">#VL2108</Link></td>
                                                        <td>Whitney Meier</td>
                                                        <td>06 Oct, 2021</td>
                                                        <td>$21.25</td>
                                                        <td><span className="badge bg-danger">بازپرداخت</span></td>
                                                        <td>
                                                            <button type="button" className="btn btn-sm btn-light">جزئیات</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" value="" id="cardtableCheck04" />
                                                                <label className="form-check-label" htmlFor="cardtableCheck04"></label>
                                                            </div>
                                                        </td>
                                                        <td><Link to="#" className="fw-medium">#VL2107</Link></td>
                                                        <td>Justin Maier</td>
                                                        <td>05 Oct, 2021</td>
                                                        <td>$25.03</td>
                                                        <td><span className="badge bg-success">پرداخت شده</span></td>
                                                        <td>
                                                            <button type="button" className="btn btn-sm btn-light">جزئیات</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <CardTables />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="جداول فعال" />
                                <CardBody>
                                    <p className="text-muted">از کلاس <code>table-active</code> برای برجسته کردن یک ردیف یا سلول جدول استفاده کنید.</p>
                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="align-middle table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" style={{ "width": "42px" }}>
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="activetableCheck" />
                                                                <Label className="form-check-label" for="activetableCheck"></Label>
                                                            </div>
                                                        </th>
                                                        <th scope="col">Order ID</th>
                                                        <th scope="col">Shop</th>
                                                        <th scope="col">مشتری</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">عملیات</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="activetableCheck01" defaultChecked />
                                                                <Label className="form-check-label" for="activetableCheck01"></Label>
                                                            </div>
                                                        </th>
                                                        <td>#541254265</td>
                                                        <td>Amezon</td>
                                                        <td>Cleo Carson</td>
                                                        <td>$4,521</td>
                                                        <td><Link to="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                    </tr>
                                                    <tr className="table-active">
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="activetableCheck02" defaultChecked />
                                                                <Label className="form-check-label" for="activetableCheck02"></Label>
                                                            </div>
                                                        </th>
                                                        <td>#744145235</td>
                                                        <td>Shoppers</td>
                                                        <td>Juston Eichmann</td>
                                                        <td>$7,546</td>
                                                        <td><Link to="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="activetableCheck03" />
                                                                <Label className="form-check-label" for="activetableCheck03"></Label>
                                                            </div>
                                                        </th>
                                                        <td>#9855126598</td>
                                                        <td>Flipkart</td>
                                                        <td>Bettie Johson</td>
                                                        <td>$1,350</td>
                                                        <td><Link to="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="activetableCheck04" />
                                                                <Label className="form-check-label" for="activetableCheck04"></Label>
                                                            </div>
                                                        </th>
                                                        <td>#847512653</td>
                                                        <td>Shoppers</td>
                                                        <td className="table-active">Maritza Blanda</td>
                                                        <td>$4,521</td>
                                                        <td><Link to="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <ActiveTables />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>


                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="جداول حاشیه‌دار" />

                                <CardBody>
                                    <p className="text-muted">از کلاس <code>table-bordered</code> برای نمایش حاشیه در همه طرف‌های جدول و سلول‌ها استفاده کنید.</p>
                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="table-bordered align-middle table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">شناسه</th>
                                                        <th scope="col">عنوان</th>
                                                        <th scope="col">وضعیت</th>
                                                        <th scope="col">واگذار شده</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="fw-medium">01</td>
                                                        <td>پیاده‌سازی UX جدید</td>
                                                        <td><span className="badge bg-primary-subtle text-primary">بک‌لاگ</span></td>
                                                        <td>Lanora Sandoval</td>
                                                        <td>$4,521</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <Link to="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </Link>

                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                                    <li><Link className="dropdown-item" to="#">مشاهده</Link></li>
                                                                    <li><Link className="dropdown-item" to="#">ویرایش</Link></li>
                                                                    <li><Link className="dropdown-item" to="#">حذف</Link></li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">02</td>
                                                        <td>طراحی نحو</td>
                                                        <td><span className="badge bg-secondary-subtle text-secondary">در حال انجام</span></td>
                                                        <td>Calvin Garrett</td>
                                                        <td>$7,546</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <Link to="#" role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </Link>

                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                                                                    <li><Link className="dropdown-item" to="#">مشاهده</Link></li>
                                                                    <li><Link className="dropdown-item" to="#">ویرایش</Link></li>
                                                                    <li><Link className="dropdown-item" to="#">حذف</Link></li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">03</td>
                                                        <td>منابع قابل پیکربندی</td>
                                                        <td><span className="badge bg-success-subtle text-success">انجام شده</span></td>
                                                        <td>Florence Guzman</td>
                                                        <td>$1,350</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <Link to="#" role="button" id="dropdownMenuLink3" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </Link>

                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink3">
                                                                    <li><Link className="dropdown-item" to="#">مشاهده</Link></li>
                                                                    <li><Link className="dropdown-item" to="#">ویرایش</Link></li>
                                                                    <li><Link className="dropdown-item" to="#">حذف</Link></li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">04</td>
                                                        <td>پیاده‌سازی افزونه‌ها</td>
                                                        <td><span className="badge bg-secondary-subtle text-secondary">در حال انجام</span></td>
                                                        <td>Maritza Blanda</td>
                                                        <td>$4,521</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <Link to="#" role="button" id="dropdownMenuLink4" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </Link>

                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink4">
                                                                    <li><Link className="dropdown-item" to="#">مشاهده</Link></li>
                                                                    <li><Link className="dropdown-item" to="#">ویرایش</Link></li>
                                                                    <li><Link className="dropdown-item" to="#">حذف</Link></li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <BorderedTables />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row >
                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="رنگ‌های حاشیه جداول" />
                                <CardBody>
                                    <p className="text-muted">از کلاس <code>border-</code> با کلاس تغییر رنگ برای تنظیم رنگ حاشیه جدول استفاده کنید.</p>

                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="table-bordered border-secondary table-nowrap align-middle mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">شناسه</th>
                                                        <th scope="col">عنوان</th>
                                                        <th scope="col">وضعیت</th>
                                                        <th scope="col">واگذار شده</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="fw-medium">01</td>
                                                        <td>پیاده‌سازی UX جدید</td>
                                                        <td><span className="badge bg-primary-subtle text-primary">بک‌لاگ</span></td>
                                                        <td>Lanora Sandoval</td>
                                                        <td>$4,521</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <Link to="#" role="button" id="dropdownMenuLink5" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </Link>

                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink5">
                                                                    <li><Link className="dropdown-item" to="#">مشاهده</Link></li>
                                                                    <li><Link className="dropdown-item" to="#">ویرایش</Link></li>
                                                                    <li><Link className="dropdown-item" to="#">حذف</Link></li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">02</td>
                                                        <td>طراحی نحو</td>
                                                        <td><span className="badge bg-secondary-subtle text-secondary">در حال انجام</span></td>
                                                        <td>Calvin Garrett</td>
                                                        <td>$7,546</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <Link to="#" role="button" id="dropdownMenuLink6" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </Link>

                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink6">
                                                                    <li><Link className="dropdown-item" to="#">مشاهده</Link></li>
                                                                    <li><Link className="dropdown-item" to="#">ویرایش</Link></li>
                                                                    <li><Link className="dropdown-item" to="#">حذف</Link></li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">03</td>
                                                        <td>منابع قابل پیکربندی</td>
                                                        <td><span className="badge bg-success-subtle text-success">انجام شده</span></td>
                                                        <td>Florence Guzman</td>
                                                        <td>$1,350</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <Link to="#" role="button" id="dropdownMenuLink7" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </Link>

                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink7">
                                                                    <li><Link className="dropdown-item" to="#">مشاهده</Link></li>
                                                                    <li><Link className="dropdown-item" to="#">ویرایش</Link></li>
                                                                    <li><Link className="dropdown-item" to="#">حذف</Link></li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">04</td>
                                                        <td>پیاده‌سازی افزونه‌ها</td>
                                                        <td><span className="badge bg-secondary-subtle text-secondary">در حال انجام</span></td>
                                                        <td>Maritza Blanda</td>
                                                        <td>$4,521</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <Link to="#" role="button" id="dropdownMenuLink8" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </Link>

                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink8">
                                                                    <li><Link className="dropdown-item" to="#">مشاهده</Link></li>
                                                                    <li><Link className="dropdown-item" to="#">ویرایش</Link></li>
                                                                    <li><Link className="dropdown-item" to="#">حذف</Link></li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <TablesBorderColors />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card >
                                <PreviewCardHeader title="جداول بدون حاشیه" />
                                <CardBody>
                                    <p className="text-muted">از <code>table-borderless</code> برای تنظیم جدول بدون حاشیه استفاده کنید.</p>
                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="table-borderless align-middle table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">شناسه</th>
                                                        <th scope="col">نام</th>
                                                        <th scope="col">عنوان شغل</th>
                                                        <th scope="col">تاریخ</th>
                                                        <th scope="col">وضعیت</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="fw-medium">01</td>
                                                        <td>Annette Black</td>
                                                        <td>طراح صنعتی</td>
                                                        <td>10, Nov 2021</td>
                                                        <td><span className="badge bg-success-subtle text-success">فعال</span></td>
                                                        <td>
                                                            <div className="hstack gap-3 fs-15">
                                                                <Link to="#" className="link-primary"><i className="ri-settings-4-line"></i></Link>
                                                                <Link to="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">02</td>
                                                        <td>Bessie Cooper</td>
                                                        <td>طراح گرافیک</td>
                                                        <td>13, Nov 2021</td>
                                                        <td><span className="badge bg-success-subtle text-success">فعال</span></td>
                                                        <td>
                                                            <div className="hstack gap-3 fs-15">
                                                                <Link to="#" className="link-primary"><i className="ri-settings-4-line"></i></Link>
                                                                <Link to="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">03</td>
                                                        <td>Leslie Alexander</td>
                                                        <td>مدیر محصول</td>
                                                        <td>17, Nov 2021</td>
                                                        <td><span className="badge bg-success-subtle text-success">فعال</span></td>
                                                        <td>
                                                            <div className="hstack gap-3 fs-15">
                                                                <Link to="#" className="link-primary"><i className="ri-settings-4-line"></i></Link>
                                                                <Link to="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">04</td>
                                                        <td>Lenora Sandoval</td>
                                                        <td>مهندس برنامه‌ها</td>
                                                        <td>25, Nov 2021</td>
                                                        <td><span className="badge bg-danger-subtle text-danger">غیرفعال</span></td>
                                                        <td>
                                                            <div className="hstack gap-3 fs-15">
                                                                <Link to="#" className="link-primary"><i className="ri-settings-4-line"></i></Link>
                                                                <Link to="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <TablesWithoutBorders />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl="6">
                            <Card>
                                <PreviewCardHeader title="جداول کوچک" />

                                <CardBody>
                                    <p className="text-muted">از کلاس <code>table-sm</code> برای ایجاد هر جدول فشرده‌تر با نصف کردن تمام padding سلول‌ها استفاده کنید.</p>

                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="table-sm table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">شناسه</th>
                                                        <th scope="col">عنوان</th>
                                                        <th scope="col">وضعیت</th>
                                                        <th scope="col">واگذار شده</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="fw-medium">01</td>
                                                        <td>پیاده‌سازی UX جدید</td>
                                                        <td><span className="badge bg-primary-subtle text-primary">بک‌لاگ</span></td>
                                                        <td>Lanora Sandoval</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">02</td>
                                                        <td>طراحی نحو</td>
                                                        <td><span className="badge bg-secondary-subtle text-secondary">در حال انجام</span></td>
                                                        <td>Calvin Garrett</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">03</td>
                                                        <td>منابع قابل پیکربندی</td>
                                                        <td><span className="badge bg-success-subtle text-success">انجام شده</span></td>
                                                        <td>Florence Guzman</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">04</td>
                                                        <td>پیاده‌سازی افزونه‌ها</td>
                                                        <td><span className="badge bg-dark-subtle text-body">Backlog</span></td>
                                                        <td>Maritza Blanda</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">05</td>
                                                        <td>مهندس برنامه‌ها</td><td>
                                                            <span className="badge bg-success-subtle text-success">Done</span></td>
                                                        <td>Leslie Alexander</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <SmallTables />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>


                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="سر جدول" />
                                <CardBody>
                                    <p className="text-muted">از کلاس <code>table-light</code> یا <code>table-dark</code> برای ایجاد &lt;thead&gt; روشن یا تیره استفاده کنید.</p>
                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="align-middle table-nowrap mb-0">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col">دانشجو</th>
                                                        <th scope="col">دوره</th>
                                                        <th scope="col">نویسنده</th>
                                                        <th scope="col">پرداخت</th>
                                                        <th scope="col">فرآیند</th>
                                                        <th scope="col">وضعیت</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Milana Scot</td>
                                                        <td>طراحی UI/UX</td>
                                                        <td>Mitchell Flores</td>
                                                        <td>$450</td>
                                                        <td>
                                                            <div className="progress progress-sm">
                                                                <div className="progress-bar bg-success" role="progressbar" style={{ "width": "100%" }}></div>
                                                            </div>
                                                        </td>
                                                        <td><Link to="#" className="link-success">تأیید شده</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jassica Welsh</td>
                                                        <td>انیمیشن سه بعدی</td>
                                                        <td>Dan Evgeni</td>
                                                        <td>$860</td>
                                                        <td>
                                                            <div className="progress progress-sm">
                                                                <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "65%" }}></div>
                                                            </div>
                                                        </td>
                                                        <td><Link to="#" className="link-warning">در انتظار</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Leslie Alexander</td>
                                                        <td>طراحی لوگو</td>
                                                        <td>Olimpia Jordan</td>
                                                        <td>$450</td>
                                                        <td>
                                                            <div className="progress progress-sm">
                                                                <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "35%" }}></div>
                                                            </div>
                                                        </td>
                                                        <td><Link to="#" className="link-warning">در انتظار</Link></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <TableHead />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="پای جدول" />
                                <CardBody>
                                    <p className="text-muted">ویژگی <code>&lt;tbody&gt;</code> را برای گروه‌بندی محتوای پاورقی در جدول HTML اضافه کنید.</p>
                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="table-nowrap mb-0">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col">شناسه</th>
                                                        <th scope="col">نام</th>
                                                        <th scope="col">عنوان شغل</th>
                                                        <th scope="col">تاریخ</th>
                                                        <th scope="col">پرداخت</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="fw-medium">01</td>
                                                        <td>Annette Black</td>
                                                        <td>طراح صنعتی</td>
                                                        <td>10, Nov 2021</td>
                                                        <td>$450</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">02</td>
                                                        <td>Bessie Cooper</td>
                                                        <td>طراح گرافیک</td>
                                                        <td>13, Nov 2021</td>
                                                        <td>$875</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">03</td>
                                                        <td>Leslie Alexander</td>
                                                        <td>مدیر محصول</td>
                                                        <td>17, Nov 2021</td>
                                                        <td>$410</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot className="table-light">
                                                    <tr>
                                                        <td colSpan={4}>مجموع</td>
                                                        <td>$940</td>
                                                    </tr>
                                                </tfoot>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <TableFoot />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <div className="card">
                                <PreviewCardHeader title="عنوان‌ها" />
                                <CardBody>
                                    <p className="text-muted">همچنین می‌توانید ویژگی <code>&lt;caption&gt;</code> را در بالای جدول با کلاس <code>caption-top</code> قرار دهید.</p>

                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="caption-top table-nowrap mb-0">
                                                <caption>فهرست کاربران</caption>
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col">شناسه</th>
                                                        <th scope="col">دانشجو</th>
                                                        <th scope="col">دوره</th>
                                                        <th scope="col">نویسنده</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="fw-medium">01</td>
                                                        <td>Milana Scot</td>
                                                        <td>طراحی UI/UX</td>
                                                        <td>Mitchell Flores</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">02</td>
                                                        <td>Jassica Welsh</td>
                                                        <td>انیمیشن سه بعدی</td>
                                                        <td>Dan Evgeni</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">03</td>
                                                        <td>Leslie Alexander</td>
                                                        <td>طراحی لوگو</td>
                                                        <td>Olimpia Jordan</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <Captions />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </div>
                        </Col>
                    </Row>

                    <Row >
                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="جدول تو در تو" />

                                <CardBody>
                                    <p className="text-muted">مثال جدول پایه تو در تو. استایل‌های حاشیه، استایل‌های فعال و انواع جدول توسط جداول تو در تو به ارث برده نمی‌شوند.</p>
                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="table-nowrap mb-0">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col">شناسه</th>
                                                        <th scope="col">نام</th>
                                                        <th scope="col">عنوان شغل</th>
                                                        <th scope="col">تاریخ</th>
                                                        <th scope="col">پرداخت</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="fw-medium">01</td>
                                                        <td>Annette Black</td>
                                                        <td>طراح صنعتی</td>
                                                        <td>10, Nov 2021</td>
                                                        <td>$450</td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={5}>
                                                            <Table className="table-nowrap mb-0">
                                                                <thead className="table-light">
                                                                    <tr>
                                                                        <th scope="col">شناسه</th>
                                                                        <th scope="col">دانشجو</th>
                                                                        <th scope="col">دوره</th>
                                                                        <th scope="col">نویسنده</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="fw-medium">I</td>
                                                                        <td>Milana Scot</td>
                                                                        <td>انیمیشن سه بعدی</td>
                                                                        <td>James Black</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="fw-medium">II</td>
                                                                        <td>Juston Eichmann</td>
                                                                        <td>طراحی نحو</td>
                                                                        <td>Olimpia Jordan</td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">02</td>
                                                        <td>Bessie Cooper</td>
                                                        <td>طراح گرافیک</td>
                                                        <td>13, Nov 2021</td>
                                                        <td>$875</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">03</td>
                                                        <td>Leslie Alexander</td>
                                                        <td>مدیر محصول</td>
                                                        <td>16, Nov 2021</td>
                                                        <td>$410</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">04</td>
                                                        <td>Bettie Johson</td>
                                                        <td>مهندس برنامه‌ها</td>
                                                        <td>24, Nov 2021</td>
                                                        <td>$620</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">05</td>
                                                        <td>Monkey Karry</td>
                                                        <td>پیاده‌سازی UX جدید</td>
                                                        <td>25, Nov 2021</td>
                                                        <td>$795</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <TableNesting />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="انواع" />

                                <div className="card-body">
                                    <p className="text-muted">از کلاس <code>table-</code> با کلاس تغییر رنگ ذکر شده در زیر در &lt;tr&gt; برای تنظیم رنگ روی ردیف جدول استفاده کنید.</p>

                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">نام</th>
                                                        <th scope="col">Position</th>
                                                        <th scope="col">Department</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>پیش‌فرض</td>
                                                        <td>Monkey Karry</td>
                                                        <td>متخصص پزشکی</td>
                                                        <td>ارتوپدی</td>
                                                    </tr>
                                                    <tr className="table-primary">
                                                        <td>اولیه</td>
                                                        <td>James White</td>
                                                        <td>دستیار پزشکی</td>
                                                        <td>جراحی</td>
                                                    </tr>
                                                    <tr className="table-secondary">
                                                        <td>ثانویه</td>
                                                        <td>Aaron James</td>
                                                        <td>متخصص پزشکی</td>
                                                        <td>عصب‌شناسی</td>
                                                    </tr>
                                                    <tr className="table-success">
                                                        <td>موفقیت</td>
                                                        <td>Bettie Johson</td>
                                                        <td>متخصص پزشکی</td>
                                                        <td>قلب‌شناسی</td>
                                                    </tr>
                                                    <tr className="table-danger">
                                                        <td>خطر</td>
                                                        <td>Bessie Cooper</td>
                                                        <td>دستیار پزشکی</td>
                                                        <td>جراحی</td>
                                                    </tr>
                                                    <tr className="table-warning">
                                                        <td>هشدار</td>
                                                        <td>Lenora Sandoval</td>
                                                        <td>دستیار پزشکی</td>
                                                        <td>قلب‌شناسی</td>
                                                    </tr>
                                                    <tr className="table-info">
                                                        <td>اطلاعات</td>
                                                        <td>Eric Pierce</td>
                                                        <td>متخصص پزشکی</td>
                                                        <td>عصب‌شناسی</td>
                                                    </tr>
                                                    <tr className="table-light">
                                                        <td>روشن</td>
                                                        <td>Ruth Zimmermann</td>
                                                        <td>متخصص پزشکی</td>
                                                        <td>عصب‌شناسی</td>
                                                    </tr>
                                                    <tr className="table-dark">
                                                        <td>تیره</td>
                                                        <td>Leslie Alexander</td>
                                                        <td>دستیار پزشکی</td>
                                                        <td>قلب‌شناسی</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <Variants />
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <PreviewCardHeader title="تراز عمودی" />
                                <CardBody>
                                    <p className="text-muted">سلول‌های جدول <code>&lt;thead&gt;</code> همیشه به صورت عمودی به پایین تراز می‌شوند. سلول‌های جدول در <code>&lt;tbody&gt;</code> تراز خود را از <code>&lt;table&gt;</code> به ارث می‌برند و به طور پیش‌فرض به بالا تراز می‌شوند. از کلاس‌های تراز عمودی برای تراز مجدد در صورت نیاز استفاده کنید.</p>
                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="align-middle">
                                                <thead>
                                                    <tr>
                                                        <th>سربرگ</th>
                                                        <th>سربرگ</th>
                                                        <th>سربرگ</th>
                                                        <th>سربرگ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>این سلول <code>vertical-align: middle;</code> را از جدول به ارث می‌برد</td>
                                                        <td>این سلول <code>vertical-align: middle;</code> را از جدول به ارث می‌برد</td>
                                                        <td>این سلول <code>vertical-align: middle;</code> را از جدول به ارث می‌برد</td>
                                                        <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.  Use the vertical align classes to re-align where needed. inherit their alignment from and are aligned to the the top by default.</td>
                                                    </tr>
                                                    <tr className="align-bottom">
                                                        <td>این سلول <code>vertical-align: bottom;</code> را از ردیف جدول به ارث می‌برد</td>
                                                        <td>این سلول <code>vertical-align: bottom;</code> را از ردیف جدول به ارث می‌برد</td>
                                                        <td>این سلول <code>vertical-align: bottom;</code> را از ردیف جدول به ارث می‌برد</td>
                                                        <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.  Use the vertical align classes to re-align where needed. inherit their alignment from and are aligned to the the top by default.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>این سلول <code>vertical-align: middle;</code> را از جدول به ارث می‌برد</td>
                                                        <td>این سلول <code>vertical-align: middle;</code> را از جدول به ارث می‌برد</td>
                                                        <td className="align-top">این سلول به بالا تراز شده است.</td>
                                                        <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.  Use the vertical align classes to re-align where needed. inherit their alignment from and are aligned to the the top by default.</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <VerticalAlignment />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <PreviewCardHeader title="جداول واکنش‌گرا" />
                                <CardBody>
                                    <p className="text-muted">از کلاس <code>table-responsive</code> برای واکنش‌گرا کردن هر جدول در همه viewport‌ها استفاده کنید. جداول واکنش‌گرا به جداول اجازه می‌دهند تا به راحتی به صورت افقی اسکرول شوند.</p>
                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="align-middle table-nowrap mb-0">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col" style={{ "width": "42px" }}>
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="responsivetableCheck" />
                                                                <Label className="form-check-label" for="responsivetableCheck"></Label>
                                                            </div>
                                                        </th>
                                                        <th scope="col">شناسه</th>
                                                        <th scope="col">تاریخ</th>
                                                        <th scope="col">وضعیت</th>
                                                        <th scope="col">مشتری</th>
                                                        <th scope="col">خریداری شده</th>
                                                        <th scope="col">درآمد</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="responsivetableCheck01" />
                                                                <Label className="form-check-label" htmlFor="responsivetableCheck01"></Label>
                                                            </div>
                                                        </th>
                                                        <td><Link to="#w-medium">#VZ2110</Link></td>
                                                        <td>10 Oct, 14:47</td>
                                                        <td className="text-success"><i className="ri-checkbox-circle-line fs-17 align-middle"></i> پرداخت شده</td>
                                                        <td>
                                                            <div className="d-flex gap-2 align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src={avtarImage3} alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    Jordan Kennedy
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>تسلط بر شبکه</td>
                                                        <td>$9.98</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="responsivetableCheck02" />
                                                                <Label className="form-check-label" htmlFor="responsivetableCheck02"></Label>
                                                            </div>
                                                        </th>
                                                        <td><Link to="#" className="fw-medium">#VZ2109</Link></td>
                                                        <td>17 Oct, 02:10</td>
                                                        <td className="text-success"><i className="ri-checkbox-circle-line fs-17 align-middle"></i> پرداخت شده</td>
                                                        <td>
                                                            <div className="d-flex gap-2 align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src={avtarImage4} alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    Jackson Graham
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>اسپلش</td>
                                                        <td>$270.60</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="responsivetableCheck03" />
                                                                <Label className="form-check-label" htmlFor="responsivetableCheck03"></Label>
                                                            </div>
                                                        </th>
                                                        <td><Link to="#" className="fw-medium">#VZ2108</Link></td>
                                                        <td>26 Oct, 08:20</td>
                                                        <td className="text-primary"><i className="ri-refresh-line fs-17 align-middle"></i> بازپرداخت شده</td>
                                                        <td>
                                                            <div className="d-flex gap-2 align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src={avtarImage5} alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    Lauren Trujillo
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>کیت وایرفریم برای فیگما</td>
                                                        <td>$145.42</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="responsivetableCheck04" />
                                                                <Label className="form-check-label" htmlFor="responsivetableCheck04"></Label>
                                                            </div>
                                                        </th>
                                                        <td><Link to="#" className="fw-medium">#VZ2107</Link></td>
                                                        <td>02 Nov, 04:52</td>
                                                        <td className="text-danger"><i className="ri-close-circle-line fs-17 align-middle"></i> لغو</td>
                                                        <td>
                                                            <div className="d-flex gap-2 align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src={avtarImage6} alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    Curtis Weaver
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>کیت وایرفریم برای فیگما</td>
                                                        <td>$170.68</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="responsivetableCheck05" />
                                                                <Label className="form-check-label" htmlFor="responsivetableCheck05"></Label>
                                                            </div>
                                                        </th>
                                                        <td><Link to="#" className="fw-medium">#VZ2106</Link></td>
                                                        <td>10 Nov, 07:20</td>
                                                        <td className="text-success"><i className="ri-checkbox-circle-line fs-17 align-middle"></i> پرداخت شده</td>
                                                        <td>
                                                            <div className="d-flex gap-2 align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src={avtarImage1} alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    Jason schuller
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>اسپلش</td>
                                                        <td>$350.87</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot className="table-light">
                                                    <tr>
                                                        <td colSpan={6}>مجموع</td>
                                                        <td>$947.55</td>
                                                    </tr>
                                                </tfoot>
                                            </Table>

                                        </div>

                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <ResponsiveTables />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default BasicTables