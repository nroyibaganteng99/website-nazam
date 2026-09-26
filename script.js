document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");


    tabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            const target = this.getAttribute("data-target");


            // Hapus active dari semua tombol
            tabs.forEach(function (item) {

                item.classList.remove("active");

            });


            // Sembunyikan semua content
            contents.forEach(function (content) {

                content.classList.remove("active");

            });


            // Aktifkan tombol yang diklik
            this.classList.add("active");


            // Tampilkan content yang sesuai
            const selectedContent =
                document.getElementById(target);


            if (selectedContent) {

                selectedContent.classList.add("active");

            }

        });

    });

});