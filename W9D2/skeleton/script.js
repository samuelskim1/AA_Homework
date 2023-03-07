document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!

  const listContainer = document.getElementsByClassName('list-container');

  listContainer.addEventListener('submit', event => {
    event.preventDefault();

    const sfPlacesInput = document.getElementsByClassName("favorite-input");
    const sfPlace = sfPlacesInput.value;
    sfPlacesInput.value = '';

    const ul = document.getElementById('sf-places');
    const li = document.createElement('li');
    li.textContent = sfPlace;
    ul.appendChild(li);
  })




  // adding new photos

  // --- your code here!



});
