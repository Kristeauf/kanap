//recupere l'element section ou s'affichent les produits
let container = document.getElementById("items");

//on va chercher les données de l'api
function couchesDisplay() {
  fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((kanaps) => {
      kanaps.forEach((kanap) => {
        //intégrations des variables dans le html de maniere dynamique
        container.innerHTML += `
    <a href="./product.html?id=${kanap._id}">
        <article>
          <img src="${kanap.imageUrl}" alt="${kanap.altTxt}">
          <h3 class="productName">${kanap.name}</h3>
          <p class="productDescription">${kanap.description}</p>
        </article>
    </a> 
      `;
      });
    });
}
couchesDisplay();
