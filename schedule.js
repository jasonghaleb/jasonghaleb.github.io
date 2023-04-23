for (i = 8; i < 16; i++) {
    $(".hour").append("<li>" + i + ":00");
}
const mf = ["MAT 310", "CSC 360", "CSC 343"];

const tth = ["CSC 421", "STA 320"];

const timing = ["11:00 12:15", "12:30 1:45", "2:00 3:15"];
const timingt = ["8:00 9:15", "11:00 12:15", "10:00 12:15"];
const mathsTime = ["9:30 12:15", "10:00 12:15"];

let c, d;
function pol(cou, day, ti) {
    let course, time;
    if (day === 0) {
        c = mf;
        d = timing;
    } else {
        c = tth;
        d = timingt;
    }
    const div = $("<div class='course'></div>");
    if (ti === 0) {
        course = `<h3>${c[cou]}</h3>`;
        time = `<p>${mathsTime[cou]}</p>`;
    } else {
        course = `<h3>${c[cou]}</h3>`;
        time = `<p>${d[cou]}</p>`;
    }
    div.append([course, time]);
    return div;
}

const week = ["monday", "tuesday", "wednesday", "thursday", "friday"];
const days = $(".day");
const head_days = days.find("thead");
const tr = $(`<tr></tr>`);
const tf = $(`<tr></tr>`);
for (a = 0; a < 5; a++) {
    const th = $(`<th></th>`);
    tr.append(th.append(week[a].charAt(0)));
}

head_days.append(tr);
for (a = 0; a < 5; a++) {
    const th = $(`<th></th>`);
    tf.append(th.append(week[a]));
}
head_days.append(tf);

const body_days = days.find("tbody");
for (a = 1; a < 5; a++) {
    let tr = $(`<tr></tr>`);
    for (b = 0; b < 5; b++) {
        const td = $(`<td></td>`);
        if (a === 1 && (b === 1 || b === 3)) {
            tr.append(td.append(pol(0, 1, 5)));
            // tr.children().children().css({ "background-color": "#d6f031", color: "#1d1d1f" });
        } else if (a === 3 && (b === 0 || b === 4)) {
            tr.append(td.append(pol(1, 0, 5)));
            td.children().css({
                "background-color": "#d6f031",
                color: "#1d1d1f",
                "font-weight": "900",
            });
        } else if (a === 2 && b === 0) {
            tr.append(td.append(pol(0, 0, 5)));
        } else if (a === 2 && b === 4) tr.append(td.append(pol(0, 0, 0)));
        else if (a === 2 && b === 1) {
            tr.append(td.append(pol(1, 1, 5)));
            td.children().css({
                "background-color": "#d6f031",
                color: "#1d1d1f",
                "font-weight": "900",
            });
        } else if (a === 2 && b === 3) {
            tr.append(td.append(pol(1, 1, 0)));
            td.children().css({
                "background-color": "#d6f031",
                color: "#1d1d1f",
                "font-weight": "900",
            });
        } else if (a === 4 && (b === 0 || b === 4)) tr.append(td.append(pol(2, 0, 5)));
        else tr.append(td);
    }
    body_days.append(tr);
}
