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

function displayItems(filteredItems) {
    container.innerHTML = "";

    filteredItems.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="card-content">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p class="tag ${item.type}">
            ${item.type.toUpperCase()}
          </p>
        </div>
      `;

        container.appendChild(card);
    });
}

function filterItems() {
    const searchText = searchBar.value.toLowerCase();
    const filterValue = filter.value;

    const filtered = items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchText);
        const matchesFilter = filterValue === "all" || item.type === filterValue;
        return matchesSearch && matchesFilter;
    });

    displayItems(filtered);
}

searchBar.addEventListener("input", filterItems);
filter.addEventListener("change", filterItems);

// Initial display
displayItems(items);