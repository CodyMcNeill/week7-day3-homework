const getFormData = async (e) => {
    e.preventDefault();
    const pokemon = e.target.pokemon.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    const res = await fetch(url);
    const data = await res.json();

    const name = data.name;
    const ability = data.abilities[0].ability.name;
    const base_xp = data.base_experience;
    const imgUrl = data.sprites.front_shiny;  
    const base_atk = data.stats[1].base_stat
    const base_hp = data.stats[0].base_stat
    const base_def = data.stats[2].base_stat

    const pokeData = {
        name: name,
        ability: ability,
        base_xp: base_xp,
        imgUrl: imgUrl,
        base_atk: base_atk,
        base_hp: base_hp,
        base_def: base_def
    }

    addToPage(pokeData)
};

const addToPage = (p) => {
    const card = document.createElement('div');
    card.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;"> 
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${p.imgUrl}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">Ability: ${p.ability}</p>
          <p class="card-text">Base XP: ${p.base_xp}</p>
          <p class="card-text">Base HP: ${p.base_hp}</p>
          <p class="card-text">Base ATK: ${p.base_atk}</p>
          <p class="card-text">Base DEF: ${p.base_def}</p>
        </div>
      </div>
    </div>
  </div>
    `
    const container = document.querySelector('.container');
    if (container.innerHTML !== ''){
        container.innerHTML = ''
    }
    container.append(card)
};

const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', getFormData)