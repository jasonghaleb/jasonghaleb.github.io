"use strict";
const ctx = $("#myChart");
Chart.defaults.color = "#f5f5f7";
Chart.defaults.borderColor = "#d6d6d6";
Chart.defaults.font.size = 16;

const data = {
    labels: [
        "البحرين",
        "إيران",
        "العراق",
        "الأردن",
        "الكويت",
        "لبنان",
        "عمان",
        "فلسطين",
        "قطر",
        "السعودية",
        "سوريا",
        "الإمارات",
        "اليمن",
    ],
    datasets: [
        {
            label: "اختراق الإنترنت (%)",
            data: [99.0, 78.6, 74.9, 88.0, 99.0, 86.6, 96.4, 74.6, 99.0, 99.0, 35.8, 99.0, 26.7],
            backgroundColor: "#f6f361",
        },
    ],
};
new Chart(ctx, {
    type: "bar",
    data: data,
    options: {
        indexAxis: "y",
    },
});

const mql = window.matchMedia("(max-width: 828px)");
function screenTest(e) {
    if (e.matches) {
        Chart.defaults.aspectRatio = 3 / 5;
        Chart.defaults.font.size = 14;
    } else {
        Chart.defaults.aspectRatio = 5 / 3;
        Chart.defaults.font.size = 16;
    }
}

mql.addEventListener("change", screenTest);

const info = [
    {
        img: "../images/www3.png",
        h2: "اليوم",
        p: "اليوم , أصبح الويب جزءًا أساسيًا من الحياة اليومية , حيث يستخدمه المليارات من الأشخاص حول العالم للتواصل ومشاركة المعلومات وإدارة الأعمال. أدى ظهور وسائل التواصل الاجتماعي والأجهزة المحمولة إلى تغيير الويب بشكل أكبر , مما جعل إنها أكثر سهولة وتفاعلية من أي وقت مضى. مع استمرار تطور الويب , ستلعب بلا شك دورًا متزايد الأهمية في تشكيل مستقبل المجتمع والتجارة. ",
    },
    {
        img: "../images/www2.jpeg",
        h2: "النمو",
        p: "مع تزايد شعبية الويب , بدأت الشركات في التعرف على إمكاناتها للتجارة الإلكترونية. في أواخر التسعينيات وأوائل القرن الحادي والعشرين , ظهرت شركات dot-com , وأصبح العديد منها عامًا وأصبح ذا قيمة عالية على الرغم من عدم وجود أرباح. ومع ذلك , انفجرت فقاعة الدوت كوم في عام 2000 , مما أدى إلى انهيار السوق وإغلاق العديد من الشركات. وعلى الرغم من النكسات , استمرت التجارة الإلكترونية في النمو , واليوم , أصبح التسوق عبر الإنترنت صناعة بمليارات الدولارات. ",
    },
    {
        img: "../images/www4.png",
        h2: "التطور",
        p: "اتسمت الأيام الأولى للويب بالافتقار إلى التوحيد القياسي , حيث قامت المتصفحات المختلفة بتفسير صفحات الويب بطرق مختلفة. وفي عام 1996 , تم تشكيل اتحاد شبكة الويب العالمية (W3C) لتطوير معايير الويب والترويج لها. وقد أنشأ W3C HTML , لغة الترميز المستخدمة لإنشاء صفحات الويب , و CSS , والتي تُستخدم لتصميم صفحات الويب. مع تطوير المعايير , يمكن لمطوري الويب إنشاء مواقع ويب أكثر اتساقًا عبر المتصفحات المختلفة , مما يجعل الوصول إلى الويب أكثر سهولة وسهولة في الاستخدام . ",
    },
    {
        img: "../images/www1.jpg",
        h2: "كيف بدأ الويب",
        p: 'يعود تاريخ الويب إلى أواخر الستينيات عندما أنشأت وزارة الدفاع الأمريكية شبكة ARPANET , وهي شبكة من أجهزة الكمبيوتر مصممة للسماح للباحثين بالاتصال ومشاركة الموارد. في الثمانينيات , طور تيم بيرنرز لي , عالم الكمبيوتر البريطاني , مفهوم نظام "النص التشعبي" , والذي أطلق عليه فيما بعد شبكة الويب العالمية. في عام 1991 , أصدر أول صفحة ويب , وبحلول عام 1993 , نمت شبكة الإنترنت لتشمل أكثر من 500 موقع. أدى إدخال متصفحات الويب مثل Mosaic و Netscape Navigator في منتصف التسعينيات إلى جعل الويب متاحًا لجمهور أوسع , وبحلول مطلع الألفية , كان هناك أكثر من 17 مليون موقع على الإنترنت.',
    },
    {
        img: "../images/if3.png",
        h2: "الأمان",
        p: "يعتبر الأمان أيضًا أحد الاعتبارات الحاسمة للبنية التحتية للإنترنت. يمكن أن يكون للهجمات السيبرانية وخروقات البيانات عواقب وخيمة , لكل من الأفراد والمؤسسات. لضمان أمن البنية التحتية , والتدابير الأمنية المختلفة , مثل جدران الحماية والتشفير والمصادقة البروتوكولات , يتم تنفيذها للحماية من التهديدات الإلكترونية. ",
    },
    {
        img: "../images/if1.jpeg",
        h2: "مركز البيانات",
        p: "T جانب آخر مهم للبنية التحتية للإنترنت هو مراكز البيانات التي تخزن البيانات وتعالجها للشركات والأفراد. تضم هذه المراكز أعدادًا كبيرة من الخوادم وغيرها من معدات الحوسبة , وتستهلك كميات هائلة من الطاقة للتشغيل. حسب الطلب على يستمر تخزين البيانات ومعالجتها في النمو , ويتم بناء المزيد من مراكز البيانات حول العالم , مما يؤدي إلى مخاوف بشأن تأثيرها على البيئة. ",
    },
    {
        img: "../images/if2.png",
        h2: "الشبكة العالمية",
        p: "أحد المكونات الرئيسية للبنية التحتية للإنترنت هو الشبكة العالمية لكابلات الألياف الضوئية. تمتد هذه الكابلات عبر قاع المحيط , وتربط القارات والبلدان المختلفة. تنقل الكابلات البيانات بسرعات عالية بشكل لا يصدق , مما يسمح للمستخدمين بنقل كميات هائلة المعلومات في جميع أنحاء العالم. يتم مد الكابلات وصيانتها بواسطة سفن متخصصة وروبوتات تحت الماء , وهي ضرورية لعمل الإنترنت. ",
    },
    {
        img: "../images/if4.jpeg",
        h2: "تعريف",
        p: "البنية التحتية للإنترنت هي العمود الفقري للإنترنت , وتتألف من المكونات المادية والظاهرية التي تسمح للمستخدمين بالاتصال بالإنترنت والتواصل مع بعضهم البعض. تتكون البنية التحتية من شبكة من الأجهزة , مثل الخوادم وأجهزة التوجيه والمفاتيح وكابلات الألياف الضوئية , المترابطة لإنشاء شبكة عالمية. تتم صيانة البنية التحتية بواسطة مزودي خدمة الإنترنت (ISPs) الذين يوفرون الاتصال بالمنازل والشركات والمؤسسات الأخرى. ",
    },
];
let c = 0;
info.map((item) => {
    const x = $('<div class="container">');
    const w = $('<div class="parent tf1">');
    const y = $('<div class="t1">');
    const z = $('<section class="telecom">');
    const a = $('<section class="s1">');
    if (c === 7) {
        w.append(`<h1>البنية التحتية للإنترنت`);
    }
    if (c === 3) {
        w.append(`<h1>تاريخ الويب`);
    }
    if (c % 2 === 0) {
        x.css({ "background-color": "#f5f5f7" });
        y.css("color", "#1d1d1f");
    }
    x.append(w);
    w.append(y);
    y.append(z, a);
    z.append(`<img src="${item.img}" alt="" />`);
    a.append(`<h2>${item.h2}`, `<p>${item.p}`);
    c++;
    $(".main-search").prepend(x);
});