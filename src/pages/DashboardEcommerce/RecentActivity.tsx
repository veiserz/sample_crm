import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Row } from "reactstrap";
import ReviewSlider from "../../Components/Common/ReviewSlider";

//import images
import product8 from "../../assets/images/products/img-8.png";
import product2 from "../../assets/images/products/img-2.png";
import product10 from "../../assets/images/products/img-10.png";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import gitbox from "../../assets/images/giftbox.png";

//SimpleBar
import SimpleBar from "simplebar-react";
import { topCategories } from "../../common/data";

const RecentActivity = (props:any) => {
  return (
    <React.Fragment>
      <div className={props.rightColumn ? "col-auto layout-rightside-col d-block" : "col-auto layout-rightside-col d-none"} id="layout-rightside-coll">
        <div className="overlay" onClick={props.hideRightColumn}></div>
        <div className="layout-rightside">
          <Card className="h-100 rounded-0">
            <CardBody className="p-0">
              <div className="p-3">
                <h6 className="text-muted mb-0 text-uppercase fw-semibold fs-13" dir="rtl">
                  فعالیت‌های اخیر
                </h6>
              </div>
              <SimpleBar style={{ maxHeight: "410px" }} className="p-3 pt-0">
                <div className="acitivity-timeline acitivity-main">
                  <div className="acitivity-item d-flex">
                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                      <div className="avatar-title bg-success-subtle text-success rounded-circle">
                        <i className="ri-shopping-cart-2-line"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1 me-3">
                      <h6 className="mb-1 lh-base">خرید توسط جیمز پرایس</h6>
                      <p className="text-muted mb-1">
                        محصول ساعت هوشمند نویز ایولف{" "}
                      </p>
                      <small className="mb-0 text-muted">امروز ساعت 14:14</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                      <div className="avatar-title bg-danger-subtle text-danger rounded-circle">
                        <i className="ri-stack-fill"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1 me-3">
                      <h6 className="mb-1 lh-base">
                        افزودن{" "}
                        <span className="fw-semibold">مجموعه استایل جدید</span>
                      </h6>
                      <p className="text-muted mb-1">توسط تکنولوژی‌های نستا</p>
                      <div className="d-inline-flex gap-2 border border-dashed p-2 mb-2">
                        <Link
                          to="/apps-ecommerce-product-details"
                          className="bg-light rounded p-1"
                        >
                          <img
                            src={product8}
                            alt=""
                            className="img-fluid d-block"
                          />
                        </Link>
                        <Link
                          to="/apps-ecommerce-product-details"
                          className="bg-light rounded p-1"
                        >
                          <img
                            src={product2}
                            alt=""
                            className="img-fluid d-block"
                          />
                        </Link>
                        <Link
                          to="/apps-ecommerce-product-details"
                          className="bg-light rounded p-1"
                        >
                          <img
                            src={product10}
                            alt=""
                            className="img-fluid d-block"
                          />
                        </Link>
                      </div>
                      <p className="mb-0 text-muted">
                        <small>دیروز ساعت 21:47</small>
                      </p>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">
                      <img
                        src={avatar2}
                        alt=""
                        className="avatar-xs rounded-circle acitivity-avatar"
                      />
                    </div>
                    <div className="flex-grow-1 me-3">
                      <h6 className="mb-1 lh-base">
                        ناتاشا کری محصولات را لایک کرده است
                      </h6>
                      <p className="text-muted mb-1">
                        به کاربران اجازه دهید محصولات را در فروشگاه ووکامرس شما لایک کنند.
                      </p>
                      <small className="mb-0 text-muted">25 دسامبر 2021</small>
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
                    <div className="flex-grow-1 me-3">
                      <h6 className="mb-1 lh-base">
                        پیشنهادات امروز توسط{" "}
                        <Link
                          to="/apps-ecommerce-seller-details"
                          className="link-secondary"
                        >
                          دیجی‌تک گالکسی
                        </Link>
                      </h6>
                      <p className="text-muted mb-2">
                        پیشنهاد فقط برای سفارشات بالای 500 روپیه و برای محصولات انتخاب شده معتبر است.
                      </p>
                      <small className="mb-0 text-muted">12 دسامبر 2021</small>
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
                    <div className="flex-grow-1 me-3">
                      <h6 className="mb-1 lh-base">محصول مورد علاقه</h6>
                      <p className="text-muted mb-2">
                        استر جیمز محصول را به علاقه‌مندی‌ها اضافه کرده است.
                      </p>
                      <small className="mb-0 text-muted">25 نوامبر 2021</small>
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
                    <div className="flex-grow-1 me-3">
                      <h6 className="mb-1 lh-base">
                        فروش فلش شروع می‌شود{" "}
                        <span className="text-primary">فردا.</span>
                      </h6>
                      <p className="text-muted mb-0">
                        فروش فلش توسط{" "}
                        <Link to="#" className="link-secondary fw-medium">
                          زوئتیک فشن
                        </Link>
                      </p>
                      <small className="mb-0 text-muted">22 اکتبر 2021</small>
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
                    <div className="flex-grow-1 me-3">
                      <h6 className="mb-1 lh-base">گزارش فروش ماهانه</h6>
                      <p className="text-muted mb-2">
                        <span className="text-danger">2 روز باقی مانده</span>{" "}
                        برای ارسال گزارش فروش ماهانه اطلاعیه.{" "}
                        <Link
                          to="#"
                          className="link-warning text-decoration-underline"
                        >
                          سازنده گزارش
                        </Link>
                      </p>
                      <small className="mb-0 text-muted">15 اکتبر</small>
                    </div>
                  </div>
                  <div className="acitivity-item d-flex">
                    <div className="flex-shrink-0">
                      <img
                        src={avatar3}
                        alt=""
                        className="avatar-xs rounded-circle acitivity-avatar"
                      />
                    </div>
                    <div className="flex-grow-1 me-3">
                      <h6 className="mb-1 lh-base">فرانک هوک نظر داده است</h6>
                      <p className="text-muted mb-2 fst-italic">
                        " محصولی که نظرات دارد بیشتر احتمال فروش دارد تا محصولی که نظرات ندارد. "
                      </p>
                      <small className="mb-0 text-muted">26 اوت 2021</small>
                    </div>
                  </div>
                </div>
              </SimpleBar>

              <div className="p-3 mt-2">
                <h6 className="text-muted mb-3 text-uppercase fw-semibold fs-13" dir="rtl">
                  برترین 10 دسته‌بندی
                </h6>

                <ol className="pe-3 text-muted" dir="rtl">
                  {(topCategories || []).map((item, key) => (
                    <li className="py-1" key={key}>
                      <Link to="#" className="text-muted">
                        {item.category}{" "}
                        <span className="float-start">({item.total})</span>
                      </Link>
                    </li>
                  ))}
                </ol>
                <div className="mt-3 text-center">
                  <Link to="#" className="text-muted text-decoration-underline">
                    مشاهده همه دسته‌بندی‌ها
                  </Link>
                </div>
              </div>
              <div className="p-3">
                <h6 className="text-muted mb-3 text-uppercase fw-semibold fs-13" dir="rtl">
                  نظرات محصولات
                </h6>
                <ReviewSlider />
              </div>

              <div className="p-3">
                <h6 className="text-muted mb-3 text-uppercase fw-semibold fs-13" dir="rtl">
                  نظرات مشتریان
                </h6>
                <div className="bg-light px-3 py-2 rounded-2 mb-2">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <div className="fs-16 align-middle text-warning">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <h6 className="mb-0">4.5 از 5</h6>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-muted">
                    مجموع <span className="fw-medium">5.50k</span> نظر
                  </div>
                </div>

                <div className="mt-3">
                  <Row className="align-items-center g-2">
                    <div className="col-auto">
                      <div className="p-1">
                        <h6 className="mb-0">5 ستاره</h6>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-1">
                        <div className="progress animated-progess progress-sm">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "50.16%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="p-1">
                        <h6 className="mb-0 text-muted">2758</h6>
                      </div>
                    </div>
                  </Row>

                  <Row className="align-items-center g-2">
                    <div className="col-auto">
                      <div className="p-1">
                        <h6 className="mb-0">4 ستاره</h6>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-1">
                        <div className="progress animated-progess progress-sm">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "29.32%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="p-1">
                        <h6 className="mb-0 text-muted">1063</h6>
                      </div>
                    </div>
                  </Row>

                  <Row className="align-items-center g-2">
                    <div className="col-auto">
                      <div className="p-1">
                        <h6 className="mb-0">3 ستاره</h6>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-1">
                        <div className="progress animated-progess progress-sm">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "18.12%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="p-1">
                        <h6 className="mb-0 text-muted">997</h6>
                      </div>
                    </div>
                  </Row>

                  <Row className="align-items-center g-2">
                    <div className="col-auto">
                      <div className="p-1">
                        <h6 className="mb-0">2 ستاره</h6>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-1">
                        <div className="progress animated-progess progress-sm">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "4.98%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="p-1">
                        <h6 className="mb-0 text-muted">227</h6>
                      </div>
                    </div>
                  </Row>

                  <Row className="align-items-center g-2">
                    <div className="col-auto">
                      <div className="p-1">
                        <h6 className="mb-0">1 ستاره</h6>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-1">
                        <div className="progress animated-progess progress-sm">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "7.42%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="p-1">
                        <h6 className="mb-0 text-muted">408</h6>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>

              <Card className="sidebar-alert bg-light border-0 text-center mx-4 mb-0 mt-3">
                <CardBody>
                  <img src={gitbox} alt="" />
                  <div className="mt-4">
                    <h5>دعوت فروشنده جدید</h5>
                    <p className="text-muted lh-base">
                      فروشنده جدیدی را به ما معرفی کنید و برای هر معرفی 100 دلار کسب کنید.
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary btn-label rounded-pill"
                    >
                      <i className="ri-mail-fill label-icon align-middle rounded-pill fs-16 me-2"></i>{" "}
                      هم اکنون دعوت کنید
                    </button>
                  </div>
                </CardBody>
              </Card>
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecentActivity;
