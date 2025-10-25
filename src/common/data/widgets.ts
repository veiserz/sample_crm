// Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";

import btcCoin from "../../assets/images/svg/crypto-icons/btc.svg";
import ltcCoin from "../../assets/images/svg/crypto-icons/ltc.svg";
import ethCoin from "../../assets/images/svg/crypto-icons/eth.svg";
import dashCoin from "../../assets/images/svg/crypto-icons/dash.svg";

import image3 from "../../assets/images/companies/img-3.png";
import image4 from "../../assets/images/companies/img-4.png";
import image6 from "../../assets/images/companies/img-6.png";
import image8 from "../../assets/images/companies/img-8.png";

const tileBoxs1 = [
    {
        id: 1,
        label: "کل درآمد",
        labelClass: "muted",
        percentage: "+16.24 %",
        percentageClass: "success",
        percentageIcon: "ri-arrow-right-up-line",
        counter: "559.25",
        caption: "مشاهده درآمد خالص",
        icon: "bx bx-dollar-circle",
        iconClass: "success-subtle",
        decimals: 2,
        prefix: "$",
        suffix: "k",
        color: "success"
    },
    {
        id: 2,
        label: "سفارشات",
        labelClass: "white-50",
        percentage: "-3.57 %",
        percentageClass: "danger",
        percentageIcon: "ri-arrow-right-down-line",
        counter: "36894",
        caption: "مشاهده همه سفارشات",
        icon: "bx bx-shopping-bag",
        iconClass: "white bg-opacity-25",
        bgColor: "bg-secondary",
        counterClass: "text-white",
        captionClass: "text-white-50",
        decimals: 0,
        prefix: "",
        separator: ",",
        suffix: "",
        color: "white"
    },
    {
        id: 3,
        label: "مشتریان",
        labelClass: "muted",
        percentage: "+29.08 %",
        percentageClass: "success",
        percentageIcon: "ri-arrow-right-up-line",
        counter: "183.35",
        caption: "مشاهده جزئیات",
        icon: "bx bx-user-circle",
        iconClass: "warning-subtle",
        decimals: 2,
        prefix: "",
        suffix: "M",
        color: "warning"
    },
    {
        id: 4,
        label: "موجودی من",
        labelClass: "muted",
        percentage: "+0.00 %",
        percentageClass: "muted",
        counter: "165.89",
        caption: "برداشت پول",
        icon: "bx bx-wallet",
        iconClass: "primary-subtle",
        decimals: 2,
        prefix: "$",
        separator: ",",
        suffix: "k",
        color: "primary"
    },
];

const tileBoxs2 = [
    {
        id: 1,
        label: "کمپین ارسال شده",
        badge: "ri-arrow-up-circle-line text-success",
        icon: "ri-space-ship-line",
        counter: "197",
        decimals: 0,
        suffix: "",
        prefix: "",
    },
    {
        id: 2,
        label: "سود سالانه",
        badge: "ri-arrow-up-circle-line text-success",
        icon: "ri-exchange-dollar-line",
        counter: "489.4",
        decimals: 1,
        suffix: "k",
        prefix: "$",
    },
    {
        id: 3,
        label: "تبدیل سرنخ",
        badge: "ri-arrow-down-circle-line text-danger",
        icon: "ri-pulse-line",
        counter: "32.89",
        decimals: 2,
        suffix: "%",
        prefix: "",
    },
    {
        id: 4,
        label: "میانگین درآمد روزانه",
        badge: "ri-arrow-up-circle-line text-success",
        icon: "ri-trophy-line",
        counter: "1596.5",
        decimals: 1,
        prefix: "$",
        separator: ",",
        suffix: "",
    },
    {
        id: 5,
        label: "معاملات سالانه",
        badge: "ri-arrow-down-circle-line text-danger",
        icon: "ri-service-line",
        counter: "2659",
        decimals: 0,
        separator: ",",
        suffix: "",
        prefix: "",
    },
];

const tileBoxs3 = [
    {
        id: 1,
        label: "کاربران",
        labelClass: "muted",
        badgeClass: "bg-light text-success",
        badge: "ri-arrow-up-line",
        percentage: "16.24 %",
        iconClass: "info-subtle",
        color: "info",
        feaIcon: "users",
        subCounter: [
            {
                id: 1,
                counter: "28.05",
                decimals: 2,
                suffix: "k",
                prefix: "",
            },
        ],
    },
    {
        id: 2,
        label: "جلسات",
        labelClass: "muted",
        badgeClass: "bg-light text-danger",
        badge: "ri-arrow-down-line",
        percentage: "3.96 %",
        iconClass: "info-subtle",
        color: "info",
        feaIcon: "activity",
        subCounter: [
            {
                id: 1,
                counter: "97.66",
                decimals: 2,
                suffix: "k",
                prefix: "",
            },
        ],
    },
    {
        id: 3,
        bgColor: "bg-primary",
        label: "میانگین زمان بازدید",
        labelClass: "white-50",
        counterClass: "text-white",
        badgeClass: "bg-white bg-opacity-25 ",
        badge: "ri-arrow-down-line",
        percentage: "0.24 %",
        iconClass: "white bg-opacity-25",
        feaIcon: "clock",
        decimals: 0,
        suffix: "",
        prefix: "",
        subCounter: [
            {
                id: 1,
                counter: "3",
                decimals: 0,
                suffix: "m ",
                prefix: "",
            },
            {
                id: 2,
                counter: "40",
                decimals: 0,
                suffix: "sec",
                prefix: "",
            },
        ],
    },
    {
        id: 4,
        label: "نرخ بازگشت",
        labelClass: "muted",
        badgeClass: "bg-light text-success",
        badge: "ri-arrow-up-line",
        percentage: "7.05 %",
        iconClass: "info-subtle",
        color: "info",
        feaIcon: "external-link",
        subCounter: [
            {
                id: 1,
                counter: "33.48",
                decimals: 2,
                suffix: "%",
                prefix: "",
            },
        ],
    },
];

const tileBoxes4 = [
    {
        id: 1,
        bgColor: "bg-danger",
        icon: "bx bx-shopping-bag",
        iconClass: "white bg-opacity-25",
        label: "مجموع فروش",
        labelClass: "white-50",
        counter: "2045",
        counterClass: "text-white",
        caption: "از 1930 سال گذشته",
        captionClass: "white-50",
        percentage: "6.11 %",
        percentageClass: "white bg-opacity-25",
        badge: "ri-arrow-up-s-line",
        decimals: 0,
        separator: ",",
        suffix: "",
        prefix: "",
    },
    {
        id: 2,
        icon: "bx bxs-user-account",
        iconClass: "warning-subtle",
        color: "warning",
        label: "تعداد کاربران",
        labelClass: "muted",
        counter: "7522",
        caption: "از 9530 سال گذشته",
        captionClass: "muted",
        percentage: "10.35 %",
        percentageClass: "danger",
        badge: "ri-arrow-down-s-line",
        decimals: 0,
        separator: ",",
        suffix: "",
        prefix: "",
    },
    {
        id: 3,
        icon: "bx bxs-badge-dollar",
        iconClass: "danger-subtle",
        color: "danger",
        label: "مجموع درآمد",
        labelClass: "muted",
        counter: "2845.05",
        caption: "از $1,750.04 سال گذشته",
        captionClass: "muted",
        percentage: "22.96 %",
        percentageClass: "success",
        badge: "ri-arrow-up-s-line",
        decimals: 2,
        separator: ",",
        suffix: "",
        prefix: "$",
    },
    {
        id: 4,
        icon: "bx bx-store-alt",
        iconClass: "info-subtle",
        color: "info",
        label: "تعداد فروشگاه‌ها",
        labelClass: "muted",
        counter: "405",
        caption: "از 308 سال گذشته",
        captionClass: "muted",
        percentage: "16.31 %",
        percentageClass: "success",
        badge: "ri-arrow-up-s-line",
        decimals: 0,
        separator: ",",
        suffix: "k",
        prefix: "",
    },
];

const tileBoxes5 = [
    {
        id: 1,
        img: image3,
        title: "مدیر فروش",
        class: "",
        year: "(2-4 سال تجربه)"
    },
    {
        id: 2,
        img: image4,
        class: "",
        title: "طراح وب",
        year: "(2+ سال تجربه)"
    },
    {
        id: 3,
        img: image6,
        class: "bg-primary-subtle shadow-none bg-opacity-10",
        title: "مدیر فروش",
        year: "(2+ سال تجربه)"
    },
    {
        id: 4,
        img: image8,
        class: "bg-info-subtle shadow-none bg-opacity-10",
        title: "طراح وب",
        year: "(2+ سال تجربه)"
    },
];

const otherWidgets2 = [
    {
        id: 1,
        title: "طراحی برند - MD",
        subTitle: "کارهای گرافیکی",
        subItem: [
            {
                id: 1,
                icon: "mdi mdi-numeric-1-circle",
                iconClass: "success",
                label: "انجام شد",
            },
            {
                id: 2,
                icon: "mdi mdi-numeric-3-circle",
                iconClass: "info",
                label: "در حال انجام",
            },
            {
                id: 3,
                icon: "mdi mdi-numeric-2-circle",
                iconClass: "primary",
                label: "برای انجام",
            },
        ],
        progressBar: [
            { id: 1, bgColor: "bg-success", width: "30%" },
            { id: 2, bgColor: "bg-info", width: "50%" },
            { id: 3, width: "20%" },
        ],
    },
    {
        id: 2,
        title: "طراحی مجدد - صفحه اصلی",
        subTitle: "طراحی UI/UX",
        subItem: [
            {
                id: 1,
                icon: "mdi mdi-numeric-3-circle",
                iconClass: "success",
                label: "انجام شد",
            },
            {
                id: 2,
                icon: "mdi mdi-numeric-0-circle",
                iconClass: "info",
                label: "در حال انجام",
            },
            {
                id: 3,
                icon: "mdi mdi-numeric-8-circle",
                iconClass: "primary",
                label: "برای انجام",
            },
        ],
        progressBar: [
            { id: 1, bgColor: "bg-success", width: "30%" },
            { id: 2, bgColor: "bg-info", width: "0%" },
            { id: 3, width: "70%" },
        ],
    },
    {
        id: 3,
        title: "اپلیکیشن تجارت الکترونیک برای وب",
        subTitle: "پروژه CRM",
        subItem: [
            {
                id: 1,
                icon: "mdi mdi-numeric-10-circle",
                iconClass: "success",
                label: "تکمیل شده",
            },
            {
                id: 2,
                icon: "mdi mdi-numeric-8-circle",
                iconClass: "info",
                label: "در حال انجام",
            },
            {
                id: 3,
                icon: "mdi mdi-numeric-2-circle",
                iconClass: "primary",
                label: "برای انجام",
            },
        ],
        progressBar: [
            { id: 1, bgColor: "bg-success", width: "60%" },
            { id: 2, bgColor: "bg-info", width: "25%" },
            { id: 3, width: "15%" },
        ],
    },
];

const widgetsActivities = [
    {
        id: 1,
        date: "25",
        weekDay: "Tue",
        time: "12:00am - 03:30pm",
        caption: "جلسه کمپین با تیم فروش",
        subItem: [
            { id: 1, img: avatar1 },
            { id: 2, img: avatar2 },
            { id: 3, img: avatar3 },
            { id: 4, imgNumber: "5", bgcolor: "bg-info" },
        ],
    },
    {
        id: 2,
        date: "20",
        weekDay: "Wed",
        time: "02:00pm - 03:45pm",
        caption: "اضافه کردن رویداد جدید با ضمیمه",
        subItem: [
            { id: 1, img: avatar4 },
            { id: 2, img: avatar5 },
            { id: 3, img: avatar6 },
            { id: 4, img: avatar7 },
            { id: 5, imgNumber: "3", bgcolor: "bg-success" },
        ],
    },
    {
        id: 3,
        date: "17",
        weekDay: "Wed",
        time: "04:30pm - 07:15pm",
        caption: "ایجاد پروژه جدید بسته بندی محصول",
        subItem: [
            { id: 1, img: avatar8 },
            { id: 2, img: avatar1 },
            { id: 3, img: avatar2 },
            { id: 4, imgNumber: "4", bgcolor: "bg-primary" },
        ],
    },
    {
        id: 4,
        date: "12",
        weekDay: "Tue",
        time: "10:30am - 01:15pm",
        caption: "بررسی فروش های بسته شده هفتگی با تیم فروش",
        subItem: [
            { id: 1, img: avatar1 },
            { id: 2, img: avatar5 },
            { id: 3, img: avatar2 },
            { id: 4, imgNumber: "9", bgcolor: "bg-warning" },
        ],
    },
];

const widgetsTasks = [
    {
        id: 1,
        forId: "task_one",
        text: "بررسی و اطمینان از عدم فراموشی هیچ چیز",
        date: "15 Sep, 2021",
    },
    {
        id: 2,
        forId: "task_two",
        text: "ارسال دعوتنامه جلسه برای کمپین فروش",
        date: "20 Sep, 2021",
    },
    {
        id: 3,
        forId: "task_three",
        text: "بررسی فروش های بسته شده هفتگی با تیم فروش",
        date: "24 Sep, 2021",
    },
    {
        id: 4,
        forId: "task_four",
        text: "اضافه کردن یادداشت هایی که از نمای فردی قابل مشاهده است",
        date: "27 Sep, 2021",
    },
    {
        id: 5,
        forId: "task_five",
        text: "انتقال مطالب به صفحه دیگر",
        date: "27 Sep, 2021",
    },
    {
        id: 6,
        forId: "task_six",
        text: "طراحی و مستندسازی وایرفریم برای ادمین ولزون",
        date: "27 Sep, 2021",
    },
];

const widgetsAudiences = [
    {
        id: 1,
        subCounter: [{ id: 1, counter: "854", suffix: "", prefix: "" }],
        caption: "میانگین جلسه",
        percentage: "49%",
    },
    {
        id: 2,
        subCounter: [
            {
                id: 1,
                counter: "1278",
                decimals: 0,
                separator: ",",
                suffix: "",
                prefix: "",
            },
        ],
        caption: "نرخ تبدیل",
        percentage: "60%",

    },
    {
        id: 3,
        subCounter: [
            {
                id: 1,
                counter: "3",
                decimals: 0,
                suffix: "m ",
                prefix: "",
            },
            {
                id: 2,
                counter: "40",
                decimals: 0,
                suffix: "sec",
                prefix: "",
            },
        ],
        caption: "میانگین زمان جلسه",
    },
];

const widgetsPortfolio = [
    {
        id: 1,
        img: btcCoin,
        label: "بیت کوین",
        coinName: "BTC",
        coinVolume: "0.00584875",
        badgeClass: "primary",
        price: "$19,405.12",
        priceClass: "success",
        coinNameClass: "primary"
    },
    {
        id: 2,
        img: ethCoin,
        label: "اتریوم",
        coinName: "ETH",
        coinVolume: "2.25842108",
        badgeClass: "info",
        price: "$40552.18",
        priceClass: "danger",
        coinNameClass: "info"
    },
    {
        id: 3,
        img: ltcCoin,
        label: "لایت کوین",
        coinName: "LTC",
        coinVolume: "10.58963217",
        badgeClass: "warning",
        price: "$15824.58",
        priceClass: "success",
        coinNameClass: "warning"
    },
    {
        id: 4,
        img: dashCoin,
        label: "دش",
        coinName: "DASH",
        coinVolume: "204.28565885",
        badgeClass: "success",
        price: "$30635.84",
        priceClass: "success",
        coinNameClass: "success"
    },
];

export {
    tileBoxs1,
    tileBoxs2,
    tileBoxs3,
    tileBoxes4,
    tileBoxes5,
    widgetsActivities,
    widgetsTasks,
    widgetsAudiences,
    widgetsPortfolio,
    otherWidgets2
};
