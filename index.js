const items = [
    {
        name: "Black Backpack",
        type: "lost",
        image: "https://via.placeholder.com/200",
        description: "Lost near school cafeteria"
    },
    {
        name: "iPhone",
        type: "found",
        image: "https://via.placeholder.com/200",
        description: "Found in parking lot"
    },
    {
        name: "Water Bottle",
        type: "lost",
        image: "https://via.placeholder.com/200",
        description: "Blue bottle left in gym"
    },
    {
        name: "Keys",
        type: "found",
        image: "https://via.placeholder.com/200",
        description: "Set of keys with red keychain"
    }
];

const container = document.getElementById("itemsContainer");
const searchBar = document.getElementById("searchBar");
const filter = document.getElementById("filter");

// Modal elements
const modal = document.getElementById("itemModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");
const claimBtn = document.getElementById("claimBtn");

// Display items
function displayItems(filteredItems) {
    container.innerHTML = "";

    filteredItems.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <img src="${item.image}">
        <div class="card-content">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p class="tag ${item.type}">
            ${item.type.toUpperCase()}
          </p>
        </div>
      `;

        // Open modal
        card.addEventListener("click", () => {
            modal.classList.remove("hidden");
            modalImage.src = item.image;
            modalTitle.textContent = item.name;
            modalDescription.textContent = item.description;
        });

        container.appendChild(card);
    });
}

// Filter function
function filterItems() {
    const searchText = searchBar.value.toLowerCase();
    const filterValue = filter.value;

    const filtered = items.filter(item => {
        return (
            item.name.toLowerCase().includes(searchText) &&
            (filterValue === "all" || item.type === filterValue)
        );
    });

    displayItems(filtered);
}

// Events
searchBar.addEventListener("input", filterItems);
filter.addEventListener("change", filterItems);

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

claimBtn.addEventListener("click", () => {
    alert("Item claimed!");
    modal.classList.add("hidden");
});

// Initial load
displayItems(items);