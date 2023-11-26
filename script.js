window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});

window.addEventListener('load', () => {
    const navbar = document.querySelector('.wrapper');
    navbar.classList.add('show');
});

window.addEventListener("load", function () {
    const kontens = document.querySelectorAll("article");
    kontens.forEach((konten, index) => {
        setTimeout(() => {
            konten.style.transform = "scale(1.1)";
        }, 100 * index);
    });
});

const products = document.querySelectorAll("article");
products.forEach((product) => {
    product.addEventListener("click", () => {
        const productName = product.querySelector(".nama").textContent;
        const productprice = product.querySelector("p").textContent;
        if (
            setuju = confirm(`Apakah Anda ingin membeli ${productName} Seharga ${productprice}?`)
        ) { }
        if (setuju) {
            alert("Pembelian Berhasil")
        }else {
            alert("Pesanan Di Batalkan")
        }
    });
});
