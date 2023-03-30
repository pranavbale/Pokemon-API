const pokeBtn = document.querySelector("#pokeBtn");
let table1 = document.getElementById("tab");

// pokeBtn.addEventListener("click", async function () {
//     const getPokemanStats = await axios.get('https://pokeapi.co/api/v2/pokemon/')
//         .then(res => console.log(res))
// })

async function getName() {
    const getPokemanStats = await fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((res) => res.json())
        .then((data1) => {
            const data = data1.results;
            // console.log(data);

            data.map((pokeStats) => {
                // console.log(pokeStats);
                getStats(pokeStats);
                // getMainContainer.innerHTML = `${pokeStats.url}`;÷
            });

            // for (let i = 0; i< data.length; i++) {
            //     console.log(data[i].name);
            //     getMainContainer.innerHTML = `${data[i].name}`
            // }
        })
        .catch((error) => {
            console.log(error);
        });
}

const getStats = async(charStats) => {
    // console.log(charStats.name);
    // console.log(charStats.url);

    const pokiinfo = await fetch(charStats.url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data.moves[0].move.name);
            let row = table1.insertRow();
            for (let i = 0; i < 2; i++) {
                let cell = row.insertCell();
                cell.innerHTML = `
                <div class="card">
                    <div class="card-header">
                        Pokemon Name : ${charStats.name}
                    </div>
                    <div class="card-body">
                        <p class="card-text">Weight : ${data.weight}</p>
                        <p class="card-text">Movie : ${data.moves[0].move.name}</p>

                    </div>
                </div>
                `;
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

// https://pokeapi.co/api/v2/pokemon/kuth

/* 
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
*/