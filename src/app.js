let pronoun = ['the', 'our', 'your'];
let adj = ['great', 'big', 'sexy'];
let noun = ['falcom', 'cheetah', 'hornet', 'turtles'];

let domainContainer = document.getElementById("domain-list");

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {

      let word = noun[k];
      let domain = "";

      if (word.endsWith("com")) {
        domain = `${pronoun[i]}${adj[j]}${word.slice(0, -3)}.com`;

      } else if (word.endsWith("net")) {
        domain = `${pronoun[i]}${adj[j]}${word.slice(0, -3)}.net`;

      } else if (word.endsWith("es")) {
        domain = `${pronoun[i]}${adj[j]}${word.slice(0, -2)}.es`;

      } else if (word.endsWith("ar")) {
        domain = `${pronoun[i]}${adj[j]}${word.slice(0, -2)}.ar`;

      } else if (word.endsWith("uy")) {
        domain = `${pronoun[i]}${adj[j]}${word.slice(0, -2)}.uy`;

      } else if (word.endsWith("cu")) {
        domain = `${pronoun[i]}${adj[j]}${word.slice(0, -2)}.cu`;

      } else {
        domain = `${pronoun[i]}${adj[j]}${word}.com`;
      }
      // al final no encontré animales q terminen con uy o cu xD
      domainContainer.innerHTML += `
            <div class="col-md-4">
              <div class="card domain-card text-center p-3">
                <div class="card-body">
                  <p class="domain-text">${domain}</p>
                </div>
              </div>
            </div>
          `;

      console.log(domain);
    }
  }
}

// iba a añadir un botón pero se me fue al carajo todo xD
// tampoco se me ocurría cómo hacer un loop para los .com .net .es .ar .uy .cu