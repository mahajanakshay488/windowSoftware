console.log("hey");

axios.get('/details')
.then(function(response){
    let product = response.data.products;
    var container = "";
    product.forEach(function(elem){
       container += ` <section>
       <div class="img-div">
         <img src="${elem.img}" alt="img" >
         <a href="${elem.appUrl}">Download</a>
       </div>
       <div class="desc-div">
         <h2>${elem.name}</h2>
         <p>${elem.description}</p>
       </div>  
     </section>`
    });
    document.querySelector('main').innerHTML = container; 
});
