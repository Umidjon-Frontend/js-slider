window.addEventListener("DOMContentLoaded", () => {
  const dataImg = [
    {
      id: 1,
      photo: '"img/lam1.jpeg"',
    },
    {
      id: 2,
      photo: '"img/lam2.jpeg"',
    },
    {
      id: 3,
      photo: '"img/lam3.jpeg"',
    },
    {
      id: 4,
      photo: '"img/lam4.jpeg"',
    },
    {
      id: 5,
      photo: '"img/lam5.jpeg"',
    },
    {
      id: 6,
      photo: '"img/lam6.jpeg"',
    },
    {
      id: 7,
      photo: '"img/lam7.jpeg"',
    },
    {
      id: 8,
      photo: '"img/lam8.jpeg"',
    },
    {
      id: 9,
      photo: '"img/lam9.jpeg"',
    },
    {
      id: 10,
      photo: '"img/lam10.jpg"',
    },
  ];
  const sliderList = document.querySelector(".slider-wrapper"),
    prevBtn = document.querySelector(".prev"),
    nextBtn = document.querySelector(".next");

  let item = dataImg
    .map((item) => {
      return `
    <li class="item">
    <img src=${item.photo} alt="">
      <h1>${item.id}</h1>
      </li>
      `;
    })
    .join("");
  sliderList.innerHTML = item;

  const items = document.querySelectorAll(".item");

  items.forEach((item, index) => {
    item.style.left = `${index * 100}%`;
  });

  let counter = 0;
  nextBtn.addEventListener("click", () => {
    counter++;
    Carusel();
  });
  prevBtn.addEventListener("click", () => {
    counter--;
    Carusel();
  });

  function Carusel() {
    if (counter < items.length - 1) {
      nextBtn.style.display = "block";
    } else {
      nextBtn.style.display = "none";
    }
    if (counter > 0) {
      prevBtn.style.display = "block";
    } else {
      prevBtn.style.display = "none";
    }

    items.forEach(function (item) {
      item.style.transform = `translateX(-${counter * 100}%)`;
    });
  }
  prevBtn.style.display = "none";
});
