const btnAgregar = document.querySelector('#btnagregar') || document.querySelector('button');

if (btnAgregar) {
    btnAgregar.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        const inputNombre = document.querySelector('#nombre');
        const inputApellido = document.querySelector('#apellido');
        const inputCedula = document.querySelector('#cedula');
        const tabla = document.querySelector('table');

        if (!inputNombre || !inputApellido || !inputCedula || !tabla) {
            return;
        }

        const nom = inputNombre.value;
        const ape = inputApellido.value;
        const ced = inputCedula.value;

        if (nom.trim() === "") {
            alert('Faltó el nombre');
            inputNombre.focus();
            return;
        }

        if (ape.trim() === "") {
            alert('Faltó el apellido');
            inputApellido.focus();
            return;
        }

        if (ced.trim() === "") {
            alert('Faltó la cédula');
            inputCedula.focus();
            return;
        }

        const trNuevaFila = document.createElement('tr');
        const tdNombre = document.createElement('td');
        const tdApellido = document.createElement('td');
        const tdCedula = document.createElement('td');
        const tdAccion = document.createElement('td');
        
        const btnQuitar = document.createElement('button');
        btnQuitar.textContent = 'Quitar';
        
        btnQuitar.addEventListener('click', (e) => {
            e.preventDefault();
            trNuevaFila.remove();
        });

        tdNombre.textContent = nom;
        tdApellido.textContent = ape;
        tdCedula.textContent = ced;
        
        tdAccion.appendChild(btnQuitar);

        trNuevaFila.appendChild(tdNombre);
        trNuevaFila.appendChild(tdApellido);
        trNuevaFila.appendChild(tdCedula);
        trNuevaFila.appendChild(tdAccion);

        tabla.appendChild(trNuevaFila);

        inputNombre.value = '';
        inputApellido.value = '';
        inputCedula.value = '';
        
        inputNombre.focus();
    });
}
