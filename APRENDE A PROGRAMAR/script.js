function mostrarDetalle(lenguaje) {
    const modal = document.getElementById('detalle-lenguaje');
    const contenido = document.getElementById('contenido-modal');
    
    let html = '';
    if (lenguaje === 'python') {
        html = `
            <h2><i class="fab fa-python"></i> PYTHON</h2>
            <p class="descripcion">Lenguaje ideal para principiantes y profesionales. Usado en inteligencia artificial, desarrollo web y más.</p>
            
            <div class="niveles">
                <h3>Elige tu nivel:</h3>
                <div class="opciones-nivel">
                    <button class="btn-nivel" onclick="mostrarNivel('principiante')">
                        <i class="fas fa-star"></i> Principiante
                    </button>
                    <button class="btn-nivel" onclick="mostrarNivel('avanzado')">
                        <i class="fas fa-star-half-alt"></i> Avanzado
                    </button>
                    <button class="btn-nivel" onclick="mostrarNivel('experto')">
                        <i class="fas fa-crown"></i> Experto
                    </button>
                </div>
            </div>
            
            <div class="proximo-paso">
                <p>Selecciona un nivel para comenzar la aventura.</p>
            </div>
        `;
    } else if (lenguaje === 'java') {
        html = `
            <h2><i class="fab fa-java"></i> JAVA</h2>
            <p class="descripcion">Lenguaje orientado a objetos usado en aplicaciones empresariales y desarrollo Android.</p>
            <div class="info-rapida">
                <h3>Conceptos clave:</h3>
                <ul>
                    <li>POO (Clases, Objetos, Herencia)</li>
                    <li>JVM (Máquina Virtual Java)</li>
                    <li>Ecosistema Spring</li>
                </ul>
            </div>
        `;
    } else if (lenguaje === 'c') {
        html = `
            <h2><i class="fas fa-microchip"></i> LENGUAJE C</h2>
            <p class="descripcion">La base de los sistemas operativos y programación de bajo nivel.</p>
            <div class="info-rapida">
                <h3>Lo que aprenderás:</h3>
                <ul>
                    <li>Punteros y manejo de memoria</li>
                    <li>Estructuras de datos fundamentales</li>
                    <li>Programación estructurada</li>
                </ul>
            </div>
        `;
    }
    
    contenido.innerHTML = html;
    modal.style.display = 'block';
}

function cerrarModal() {
    document.getElementById('detalle-lenguaje').style.display = 'none';
}

function mostrarNivel(nivel) {
    if (nivel === 'principiante') {
        // Cierra el modal actual
        cerrarModal();
        // Abre el tutorial en una nueva pestaña
        window.open('python-principiante.html', '_blank');
    } else {
        alert(`¡Perfecto! Has seleccionado el nivel ${nivel.toUpperCase()}.`);
        cerrarModal();
    }
}