(function () {
    const listItems = document.querySelectorAll("#listItems > li > .question");

    listItems.forEach((question) => {
        question.addEventListener("click", (e) => {
            let answer = e.target.classList.contains("question") ? e.target.nextElementSibling : e.target.closest(".question").nextElementSibling;
            answer.classList.toggle("open");

            let icon = e.target.classList.contains("question") ? e.target.querySelector("img") : e.target.closest(".question").querySelector("img");
            icon.src = answer.classList.contains("open") ? "assets/images/icon-minus.svg" : "assets/images/icon-plus.svg";
        })
    })

})();