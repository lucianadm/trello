const inputTablero = document.querySelector('.ingreso');
const inputTarea2 = document.querySelector('.inTarea');
const empty = document.querySelectorAll('.empty');
const addBtnTablero = document.querySelector('.btn-addTablero');
const contTaberos = document.querySelector('.containerTableros');
var contador = 0;

addBtnTablero.addEventListener("click", e => {
    e.preventDefault();
    const textTablero = inputTablero.value;

    if(textTablero !== ""){
        contador++;
        const divContainer = document.createElement("div");
        divContainer.className = "container";
      
        const h1 = document.createElement("h1");
        h1.textContent=textTablero;
        divContainer.appendChild(h1);
  	    const divTareasList = document.createElement("div");
        divTareasList.className="tareasList";
        const formu = document.createElement("form");
        
        const inputTarea = document.createElement("input");
        inputTarea.type="text";
        inputTarea.placeholder="Agragar tarea ...";
        inputTarea.className="inTarea";
        formu.appendChild(inputTarea);
        const addBtn = document.createElement("button");
        addBtn.classList.add("btn-add");
        addBtn.textContent="+";
         divTareasList.appendChild(addBtn);
        const divLiContainer = document.createElement("div");
        divLiContainer.className="li-container";
        const ul = document.createElement("ul");
        ul.className="listaUL";
  
       
        addBtn.addEventListener('click', function() {
         console.log('El botón secundario  fue presionado!');
         const text = inputTarea.value;
         const li = document.createElement("li");
         const p = document.createElement("p");
 
         p.textContent = text;
         
         li.appendChild(p);
 
         ul.appendChild(li)
          });

          divLiContainer.appendChild(ul);
          divContainer.appendChild(divLiContainer);
   
          divTareasList.appendChild(formu);
          divContainer.appendChild(divTareasList);
        
          contTaberos.appendChild(divContainer);
        }



        });

