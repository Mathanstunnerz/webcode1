const id = document.querySelector(".title1");
id.innerText = "Pokemon Characters";
async function Data(countin) {
  var offset = countin;
  const API = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=50`;
  const dataload2 = await fetch(API);
  const finaldata2 = await dataload2.json();
  //   console.log(finaldata2)

  finaldata2.results.map((hm, index) => {
    fetch(hm.url)
      .then((data) => data.json())
      .then((result) => {
        const name = result.name;
        const imgurl = result.sprites.other.dream_world.front_default;
        const hp = result.stats[0].base_stat;
        const attack = result.stats[1].base_stat;
        const defense = result.stats[2].base_stat;
        const speed = result.stats[5].base_stat;
        const weight = result.weight;
       
        const cardele = document.createElement("div");
        cardele.className = "card";
        cardele.innerHTML = `  <h2 class='title'>${name}</h2>
        <img class='img' src=${imgurl}/> 
        <div class="bottom-conntainer">
        <div class='hp' >
           <h4>hp</h4>
           <h5>${hp}</h5>
        </div>
        <div class='hp' >
           <h4>attack</h4>
           <h5>${attack}</h5>
        </div>
        <div class='hp' >
           <h4>defense</h4>
           <h5>${defense}</h5>
        </div>
        <div class='hp' >
           <h4>speed</h4>
           <h5>${speed}</h5>
        </div>
        <div class='hp' >
           <h4>weight</h4>
           <h5>${weight}</h5>
        </div>
        </div>
        
        `;
        const card = document.querySelector(".card-container");
        card.append(cardele);
      });
  });
  var sgcsyf = document.querySelector(".prevvbutton");
  if (countin == 0) {
    sgcsyf.style.display = "none";
  } else {
    if (countin === undefined) {
      sgcsyf.style.display = "none";
    } else {
      sgcsyf.style.display = "block";
    }
  }
}
Data(offsetmain);
var offsetmain = 0;

const pagenation = document.createElement("div");
pagenation.className = "pagenation-container";
const nextvbutton = document.createElement("button");
nextvbutton.className = "nextvbutton";
nextvbutton.innerText = "Next";
const previousvbutton = document.createElement("button");
previousvbutton.className = "prevvbutton";
previousvbutton.innerText = "Previous";
pagenation.append(previousvbutton);
pagenation.append(nextvbutton);
const buttonappend = document.querySelector(".main-container");
buttonappend.append(pagenation);
var sgcsyf = document.querySelector(".prevvbutton");
sgcsyf.addEventListener("click", () => {
  const fgg = document.querySelector(".card-container");
  fgg.innerHTML = "";
  console.log(offsetmain);
  if (offsetmain >= 50) {
    // sgcsyf.style.display = "block"
    offsetmain -= 50;
    Data(offsetmain);
    // console.log(offsetmain);
  } else {
    // sgcsyf.style.display = "none"
    console.log("else", offsetmain);
    offsetmain = 0;
    Data(offsetmain);
  }
  window.scrollTo(0, 0);
});

var sg = document.querySelector(".nextvbutton");
sg.addEventListener("click", () => {
  console.log("nextvbutton clicked");
  const fgg = document.querySelector(".card-container");
  fgg.innerHTML = "";
  window.scrollTo(0, 0);
  offsetmain += 50;
  Data(offsetmain);
  //   console.log(offsetmain);
});
