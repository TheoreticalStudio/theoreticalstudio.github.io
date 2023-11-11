function updateHero(name, description, imageUrl) {
  document.getElementById('heroName').innerText = name;
  document.getElementById('heroDescription').innerText = description;
  document.getElementById('heroImage').src = imageUrl;
}

