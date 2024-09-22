document.getElementById('add-btn').addEventListener('click', ()=>{
    const inputValue = document.getElementById('input-value').value;
    const taskContainer = document.getElementById('task-container');
    if(inputValue){
        const p = document.createElement('p');
        p.innerHTML =` 
        <div class="delete-Task flex justify-between mt-2 bg-[#fff] p-4 rounded">
          <p class="line-value text-2xl">${inputValue}</p>
          <p><i id="delete-btn" class="fa-solid fa-trash text-red-600 text-2xl cursor-pointer"></i></p>
        </div>
        `; 
        
        const deleteBtn = p.querySelector('#delete-btn');
        deleteBtn.onclick = ()=>{
            p.remove();
        }
    
        const lineValue = p.querySelector('.line-value');
        lineValue.onclick =()=>{
            p.classList.add('line-through');
        }
    
        taskContainer.appendChild(p)
        document.getElementById('input-value').value = '';
    }else{
        alert('please, write a new task!!!')
    }

})

