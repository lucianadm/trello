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
        const divEmpty = document.createElement("div");
        divEmpty.className = "empty";
        const pEmpty = document.createElement("p");
        pEmpty.textContent ="No tiene tareas pendientes.";
        divEmpty.appendChild(pEmpty);
        divContainer.appendChild(divEmpty);
       
        addBtn.addEventListener('click', function() {
         console.log('El botón secundario  fue presionado!');

         const text2 = inputTarea.value;
        
        if (text2 !== ""){
          inputTarea.value = "";
          pEmpty.textContent ="";
         const li = document.createElement("li");
         const p = document.createElement("p");
 
         p.textContent = text2;
          li.appendChild(p);
          ul.appendChild(li);
          li.appendChild(addDeleteBtn());
          
          
           }

        });

          divLiContainer.appendChild(ul);
          divContainer.appendChild(divLiContainer);
   
          divTareasList.appendChild(formu);
          divContainer.appendChild(divTareasList);
        
          contTaberos.appendChild(divContainer);

          function addDeleteBtn () {

            const deleteBtn = document.createElement("button");
          
            deleteBtn.textContent = "X";
            deleteBtn.className = "btn-delete";
          
            deleteBtn.addEventListener("click", (e)=>{
            
              const item = e.target.parentElement;
              
              ul.removeChild(item);
              
              const items = document.querySelectorAll("li");
              
              if(items.length === 0) {
                pEmpty.textContent ="No tiene tareas pendientes.";
          }
            });
           
            return deleteBtn;
          
          }

        }

        inputTablero.value="";

        });



     