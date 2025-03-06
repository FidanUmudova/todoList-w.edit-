let enterInput = document.getElementById('enter');
let addButton = document.getElementById('add');
let taskList = document.getElementById('addList');

addButton.addEventListener('click', function () {
    if (enterInput.value.trim() !== "") {

        let li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = enterInput.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Sil";
        deleteButton.className = "deleteButton";

        const editButton = document.createElement('button');
        editButton.textContent = "Edit";  
        editButton.className = "editButton";

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                span.classList.add('completed');
            } else {
                span.classList.remove('completed');
            }
        });

        editButton.addEventListener('click', function () {
            enterInput.value = span.textContent;  
            deleteButton.style.display = 'none';  
            editButton.style.display = 'none';    

            const saveButton = document.createElement('button');
            saveButton.textContent = "Yadda saxla";
            saveButton.className = "saveButton";
            li.appendChild(saveButton);

            saveButton.addEventListener('click', function () {
                span.textContent = enterInput.value; 
                enterInput.value = "";  
                saveButton.remove();    
                deleteButton.style.display = 'inline';  
                editButton.style.display = 'inline';    
            });
        });
        deleteButton.addEventListener('click', function () {
            li.remove();  
        });
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        taskList.appendChild(li);

        enterInput.value = "";  
    }
});
