   
     let UserEntrada = document.querySelector('.conteudo');
     let display = document.querySelector('.ListaConteudo');
    

     function validacao()
     {
        if (UserEntrada.value.length < 2 || UserEntrada.value.length > 30) 
        {
        return true;
        }
        else 
        {
        return false;
        }
     }


     function TarefaFeita(li)
     {
        li.addEventListener('click', function()
        {
            li.style.textDecoration = 'line-through'
        })

        li.addEventListener('dblclick', function()
        {
            li.style.textDecoration = 'none'
        })
     }



     function CriarLi()
     {
        const li = document.createElement('li');
        li.classList.add('Tarefas');
        return li;
     }




     function LimparInput()
     {
        UserEntrada.value = '';
     }



     function Apagar(li)
     {
        li.innerHTML += ' '
        const botaoApagar = document.createElement('button');
        botaoApagar.classList.add('botao');
        botaoApagar.innerText = 'Delete';
        
        botaoApagar.addEventListener('click', function(){
            li.remove();
        })
        li.appendChild(botaoApagar);
     }



     function lista()
     {
    
        let validar = validacao();

        if(validar) 
        {
            alert("Entrada Invalida")
            return;
        } 

        let Input = UserEntrada.value;
        let li = CriarLi();
        li.innerHTML = Input;
        display.appendChild(li);
        Apagar(li)
        TarefaFeita(li)
        LimparInput(); 

    
     }


