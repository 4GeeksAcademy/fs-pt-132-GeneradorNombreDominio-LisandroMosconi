let pronoun = ['the', 'our', 'your'];
let adj = ['great', 'big', 'sexy'];
let noun = ['falcom', 'cheetah', 'hornet', 'turtles'];

let domainContainer = document.getElementById("domain-list");

const extensions = ["com", "net", "es", "ar", "uy", "cu"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {

      let word = noun[k];
      let domain = "";

      let matchedExtension = extensions.find(ext => word.endsWith(ext));

      if (matchedExtension) {
        domain = `${pronoun[i]}${adj[j]}${word.slice(0, -matchedExtension.length)}.${matchedExtension}`;
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
// encontré el find, pero no termino de entenderlo al 100%, lo he modificado de algo q encontré por internet y 
// me funciona, pero no estoy del todo seguro