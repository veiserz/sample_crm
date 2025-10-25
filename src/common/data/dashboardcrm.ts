// Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";

const crmWidgets = [
    {
        id: 1,
        label: "کمپین ارسال شده",
        badge: "ri-arrow-up-circle-line text-success",
        icon: "ri-space-ship-line",
        counter: "197",
        decimals: 0,
        suffix: "",
        prefix: ""
    },
    {
        id: 2,
        label: "سود سالانه",
        badge: "ri-arrow-up-circle-line text-success",
        icon: "ri-exchange-dollar-line",
        counter: "489.4",
        decimals: 1,
        suffix: "k",
        prefix: "$"
    },
    {
        id: 3,
        label: "تبدیل سرنخ",
        badge: "ri-arrow-down-circle-line text-danger",
        icon: "ri-pulse-line",
        counter: "32.89",
        decimals: 2,
        suffix: "%",
        prefix: ""
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
        suffix: ""
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
        prefix: ""
    },
];

const dealsStatus = [
    {
        id: 1,
        name: "Absternet LLC",
        date: "Sep 20, 2021",
        img: avatar1,
        representativeName: "Donald Risher",
        badgeClass: "success-subtle",
        color: "success",
        status: "معامله برنده",
        statusValue: "$100.1K",
    },
    {
        id: 2,
        name: "Raitech Soft",
        date: "Sep 23, 2021",
        img: avatar2,
        representativeName: "Sofia Cunha",
        badgeClass: "warning-subtle",
        color: "warning",
        status: "تماس معرفی",
        statusValue: "$150K",
    },
    {
        id: 3,
        name: "William PVT",
        date: "Sep 27, 2021",
        img: avatar3,
        representativeName: "Luis Rocha",
        badgeClass: "danger-subtle",
        color: "danger",
        status: "مسدود شده",
        statusValue: "$78.18K",
    },
    {
        id: 4,
        name: "Loiusee LLP",
        date: "Sep 30, 2021",
        img: avatar4,
        representativeName: "Vitoria Rodrigues",
        badgeClass: "success-subtle",
        color: "success",
        status: "معامله برنده",
        statusValue: "$180K",
    },
    {
        id: 5,
        name: "Apple Inc.",
        date: "Sep 30, 2021",
        img: avatar6,
        representativeName: "Vitoria Rodrigues",
        badgeClass: "info-subtle",
        color: "info",
        status: "سرنخ جدید",
        statusValue: "$78.9K",
    },
];

const tasks = [
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

const activities = [
    {
        id: 1,
        date: "25",
        weekDay: "Tue",
        time: "12:00am - 03:30pm",
        caption: "جلسه کمپین با تیم فروش",
        subItem: [
            { id: 1, img: avatar1 },
            { id: 2, img: avatar2 },
            { id: 3, img: avatar3 }],
        imgNumber: "5",
        bgcolor: "bg-info"
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
            { id: 4, img: avatar7 }],
        imgNumber: "3",
        bgcolor: "bg-success"
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
            { id: 3, img: avatar2 }],
        imgNumber: "4",
        bgcolor: "bg-primary"
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
            { id: 3, img: avatar2 }],
        imgNumber: "9",
        bgcolor: "bg-warning"
    },
];

const closingDeals = [
    {
        id: 1,
        dealName: "Acme Inc Install",
        img: avatar1,
        salesRep: "Donald Risher",
        amount: "96",
        closeDate: "امروز",
    },
    {
        id: 2,
        dealName: "Save lots Stores",
        img: avatar2,
        salesRep: "Jansh Brown",
        amount: "55.7",
        closeDate: "30 Dec 2021",
    },
    {
        id: 3,
        dealName: "William PVT",
        img: avatar7,
        salesRep: "Ayaan Hudda",
        amount: "102",
        closeDate: "25 Nov 2021",
    },
    {
        id: 4,
        dealName: "Raitech Soft",
        img: avatar4,
        salesRep: "Julia William",
        amount: "89.5",
        closeDate: "20 Sep 2021",
    },
    {
        id: 5,
        dealName: "Absternet LLC",
        img: avatar4,
        salesRep: "Vitoria Rodrigues",
        amount: "89.5",
        closeDate: "20 Sep 2021",
    },
];

const todayBalanceData = [{
    name: 'درآمد',
    data: [10, 45, 30, 35, 50, 55, 70, 120, 150, 160, 210, 240]
}, {
    name: 'هزینه‌ها',
    data: [12, 17, 75, 82, 44, 35, 52, 75, 112, 108, 56, 289]
}];

const lastWeekBalanceData = [{
    name: 'درآمد',
    data: [40, 55, 40, 35, 20, 35, 40, 70, 110, 140, 230, 210]
}, {
    name: 'هزینه‌ها',
    data: [32, 37, 65, 22, 44, 85, 42, 75, 122, 118, 156, 199]
}];

const lastMonthBalanceData = [{
    name: 'درآمد',
    data: [40, 35, 20, 65, 80, 65, 120, 90, 50, 80, 170, 150]
}, {
    name: 'هزینه‌ها',
    data: [22, 37, 25, 62, 34, 75, 142, 145, 122, 108, 136, 199]
}];

const currentYearBalanceData = [{
    name: 'درآمد',
    data: [20, 25, 30, 35, 40, 55, 70, 110, 150, 180, 210, 250]
}, {
    name: 'هزینه‌ها',
    data: [12, 17, 45, 42, 24, 35, 42, 75, 102, 108, 156, 199]
}];

// Deal Type

const todayDealData = [{
    name: 'در انتظار',
    data: [40, 25, 15, 20, 50, 10],
},
{
    name: 'باخت',
    data: [40, 60, 80, 100, 40, 100],
},
{
    name: 'برد',
    data: [22, 37, 39, 3, 23, 5],
}
];

const weeklyDealData = [{
    name: 'در انتظار',
    data: [40, 25, 30, 40, 100, 20],
},
{
    name: 'باخت',
    data: [40, 60, 20, 40, 10, 50],
},
{
    name: 'برد',
    data: [24, 56, 58, 43, 23, 30],
}
];

const monthlyDealData = [{
    name: 'در انتظار',
    data: [80, 50, 30, 40, 100, 20],
},
{
    name: 'باخت',
    data: [20, 30, 40, 80, 20, 80],
},
{
    name: 'برد',
    data: [44, 76, 78, 13, 43, 10],
}
];

const yealyDealData = [{
    name: 'در انتظار',
    data: [140, 70, 50, 60, 120, 120],
},
{
    name: 'باخت',
    data: [70, 60, 50, 70, 60, 40],
},
{
    name: 'برد',
    data: [14, 56, 48, 33, 63, 50],
}
];

const octData = [{
    name: 'هدف',
    data: [17]
}, {
    name: 'پیش‌بینی در انتظار',
    data: [6]
}, {
    name: 'درآمد',
    data: [37]
}];

const novData = [{
    name: 'هدف',
    data: [37]
}, {
    name: 'پیش‌بینی در انتظار',
    data: [12]
}, {
    name: 'درآمد',
    data: [18]
}];

const decData = [{
    name: 'هدف',
    data: [25]
}, {
    name: 'پیش‌بینی در انتظار',
    data: [20]
}, {
    name: 'درآمد',
    data: [27]
}];

const janData = [{
    name: 'هدف',
    data: [7]
}, {
    name: 'پیش‌بینی در انتظار',
    data: [5]
}, {
    name: 'درآمد',
    data: [32]
}];

export { crmWidgets, dealsStatus, tasks, activities, closingDeals, todayBalanceData, lastWeekBalanceData, lastMonthBalanceData, currentYearBalanceData, todayDealData, weeklyDealData, monthlyDealData, yealyDealData, octData, novData, decData, janData };