const arr = ["home", "research", "arabic", "cv", "schedule", "quiz", "contact"];

const container = $(".list");

const ul = document.createElement("ul");
ul.setAttribute("class", "nav-list");

for (i = 0; i <= arr.length - 1; i++) {
    const li = document.createElement("li");
    li.setAttribute("class", "nav-item");

    const a = document.createElement("a");
    li.appendChild(a);

    a.innerHTML = arr[i];
    a.setAttribute("href", `schedule.html`);

    ul.appendChild(li);
}
container.append(ul);

$(".hamburger").click(function () {
    if (!$(".list").hasClass("active")) {
        $(".list").addClass("active");
        document.querySelector("body").style.overflow = "hidden";
    } else {
        $(".list").removeClass("active");
        document.querySelector("body").style.overflow = "visible";
    }
});

$(window).resize(function () {
    let w = $(window).width();
    if (w > 728) {
        $(".list").removeClass("active");
    }
});
