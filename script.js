// const filterButtons = document.querySelectorAll("#filter-buttons button");
// const filterableCards = document.querySelectorAll("#filterable-cards .card");

// const filterCards = (e) => {
//     document.querySelector("#filter-buttons .active").classList.remove("active");
//     e.target.classList.add("active");

//     filterableCards.forEach(card => {
//         if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
//             return card.classList.replace("hide", "show");
//         }
//         card.classList.add("hide");
//     });
// }

// filterButtons.forEach(button => button.addEventListener("click", filterCards));

function openFullScreen(image) {
    if (image.requestFullscreen) {
      image.requestFullscreen();
    } else if (image.mozRequestFullScreen) { /* Firefox */
      image.mozRequestFullScreen();
    } else if (image.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      image.webkitRequestFullscreen();
    } else if (image.msRequestFullscreen) { /* IE/Edge */
      image.msRequestFullscreen();
    }
  }
  