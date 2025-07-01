// Preguntas de la trivia sobre la Batalla del 5 de Mayo
const preguntas = [
    {
        id: 1,
        pregunta: "¿En qué año tuvo lugar la Batalla del 5 de Mayo?",
        opciones: [
            {
                id: "a",
                texto: "1861",
                imagen: "https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "b",
                texto: "1862",
                imagen: "https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "c",
                texto: "1863",
                imagen: "https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
        ],
        respuestaCorrecta: "b",
        explicacion: "La Batalla del 5 de Mayo tuvo lugar el 5 de mayo de 1862 en Puebla, México."
    },
    {
        id: 2,
        pregunta: "¿Quién comandó las fuerzas mexicanas en la batalla?",
        opciones: [
            {
                id: "a",
                texto: "General Ignacio Zaragoza",
                imagen: "https://images.pexels.com/photos/8828786/pexels-photo-8828786.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "b",
                texto: "General Porfirio Díaz",
                imagen: "https://images.pexels.com/photos/8828787/pexels-photo-8828787.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "c",
                texto: "General Miguel Negrete",
                imagen: "https://images.pexels.com/photos/8828788/pexels-photo-8828788.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
        ],
        respuestaCorrecta: "a",
        explicacion: "El General Ignacio Zaragoza comandó las fuerzas mexicanas y logró la victoria contra el ejército francés."
    },
    {
        id: 3,
        pregunta: "¿Qué país invadió México en 1862?",
        opciones: [
            {
                id: "a",
                texto: "España",
                imagen: "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "b",
                texto: "Francia",
                imagen: "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "c",
                texto: "Inglaterra",
                imagen: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
        ],
        respuestaCorrecta: "b",
        explicacion: "Francia, bajo el reinado de Napoleón III, fue el país que continuó la invasión después de la Triple Alianza."
    },
    {
        id: 4,
        pregunta: "¿Cuáles fueron los fuertes principales en la defensa de Puebla?",
        opciones: [
            {
                id: "a",
                texto: "Fuerte de Loreto y Guadalupe",
                imagen: "https://images.pexels.com/photos/8828789/pexels-photo-8828789.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "b",
                texto: "Fuerte de San Juan y Santa María",
                imagen: "https://images.pexels.com/photos/8828790/pexels-photo-8828790.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "c",
                texto: "Fuerte de la Cruz y San Miguel",
                imagen: "https://images.pexels.com/photos/8828791/pexels-photo-8828791.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
        ],
        respuestaCorrecta: "a",
        explicacion: "Los fuertes de Loreto y Guadalupe fueron las principales fortificaciones que defendieron la ciudad de Puebla."
    },
    {
        id: 5,
        pregunta: "¿Quién comandó las fuerzas francesas en la batalla?",
        opciones: [
            {
                id: "a",
                texto: "General Élie Frédéric Forey",
                imagen: "https://images.pexels.com/photos/8828792/pexels-photo-8828792.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "b",
                texto: "General Charles de Lorencez",
                imagen: "https://images.pexels.com/photos/8828793/pexels-photo-8828793.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "c",
                texto: "General François Achille Bazaine",
                imagen: "https://images.pexels.com/photos/8828794/pexels-photo-8828794.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
        ],
        respuestaCorrecta: "b",
        explicacion: "El General Charles de Lorencez comandó las fuerzas francesas que fueron derrotadas en Puebla."
    },
    {
        id: 6,
        pregunta: "¿Cuál fue la principal causa de la intervención francesa?",
        opciones: [
            {
                id: "a",
                texto: "Suspensión del pago de deudas",
                imagen: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "b",
                texto: "Establecer un imperio católico",
                imagen: "https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "c",
                texto: "Control de rutas comerciales",
                imagen: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
        ],
        respuestaCorrecta: "a",
        explicacion: "La suspensión de pagos de la deuda externa por parte de Benito Juárez fue el pretexto para la intervención."
    },
    {
        id: 7,
        pregunta: "¿Qué presidente mexicano suspendió el pago de la deuda externa?",
        opciones: [
            {
                id: "a",
                texto: "Benito Juárez",
                imagen: "https://images.pexels.com/photos/8828795/pexels-photo-8828795.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "b",
                texto: "Sebastián Lerdo de Tejada",
                imagen: "https://images.pexels.com/photos/8828796/pexels-photo-8828796.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "c",
                texto: "Miguel Miramón",
                imagen: "https://images.pexels.com/photos/8828797/pexels-photo-8828797.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
        ],
        respuestaCorrecta: "a",
        explicacion: "Benito Juárez decretó la suspensión de pagos de la deuda externa en 1861 debido a la crisis económica."
    },
    {
        id: 8,
        pregunta: "¿Cuántos soldados aproximadamente tenía el ejército francés?",
        opciones: [
            {
                id: "a",
                texto: "4,000 soldados",
                imagen: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "b",
                texto: "6,000 soldados",
                imagen: "https://images.pexels.com/photos/1181535/pexels-photo-1181535.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "c",
                texto: "8,000 soldados",
                imagen: "https://images.pexels.com/photos/1181536/pexels-photo-1181536.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
        ],
        respuestaCorrecta: "b",
        explicacion: "El ejército francés contaba con aproximadamente 6,000 soldados bien equipados y entrenados."
    },
    {
        id: 9,
        pregunta: "¿Qué impacto tuvo la victoria mexicana en el contexto internacional?",
        opciones: [
            {
                id: "a",
                texto: "Inspiró movimientos republicanos en Europa",
                imagen: "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "b",
                texto: "Demostró que Francia no era invencible",
                imagen: "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "c",
                texto: "Fortaleció la posición de Estados Unidos",
                imagen: "https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
        ],
        respuestaCorrecta: "b",
        explicacion: "La victoria demostró que el ejército francés no era invencible y levantó el espíritu de resistencia mexicano."
    },
    {
        id: 10,
        pregunta: "¿Qué valores representa la Batalla del 5 de Mayo para México?",
        opciones: [
            {
                id: "a",
                texto: "Independencia política total",
                imagen: "https://images.pexels.com/photos/1181537/pexels-photo-1181537.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "b",
                texto: "Defensa de la soberanía nacional",
                imagen: "https://images.pexels.com/photos/1181538/pexels-photo-1181538.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                id: "c",
                texto: "Fin definitivo de conflictos",
                imagen: "https://images.pexels.com/photos/1181539/pexels-photo-1181539.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
        ],
        respuestaCorrecta: "b",
        explicacion: "El 5 de Mayo representa la defensa de la soberanía nacional y la capacidad del pueblo mexicano de resistir invasiones extranjeras."
    }
];

// Variables del juego
let preguntaActual = 0;
let totalIntentos = 0;
let intentosPreguntaActual = 0;
let respuestaSeleccionada = false;

// Inicializar el juego
function inicializarJuego() {
    console.log('Inicializando juego...');
    
    // Recuperar progreso guardado
    const progresoGuardado = localStorage.getItem('preguntaActual');
    const intentosGuardados = localStorage.getItem('totalIntentos');
    
    if (progresoGuardado) {
        preguntaActual = parseInt(progresoGuardado);
    }
    
    if (intentosGuardados) {
        totalIntentos = parseInt(intentosGuardados);
    }
    
    // Si ya completó todas las preguntas, ir a final
    if (preguntaActual >= preguntas.length) {
        window.location.href = './final.html';
        return;
    }
    
    mostrarPregunta();
}

// Mostrar la pregunta actual
function mostrarPregunta() {
    console.log(`Mostrando pregunta ${preguntaActual + 1}`);
    
    const pregunta = preguntas[preguntaActual];
    
    // Actualizar elementos de la interfaz
    document.getElementById('pregunta-actual').textContent = `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;
    document.getElementById('intentos').textContent = `Intentos: ${intentosPreguntaActual}`;
    document.getElementById('pregunta-texto').textContent = pregunta.pregunta;
    
    // Actualizar barra de progreso
    const progreso = ((preguntaActual + 1) / preguntas.length) * 100;
    document.getElementById('progreso-fill').style.width = `${progreso}%`;
    
    // Generar opciones
    const opcionesContainer = document.getElementById('opciones-container');
    opcionesContainer.innerHTML = '';
    
    pregunta.opciones.forEach(opcion => {
        const opcionElement = document.createElement('button');
        opcionElement.className = 'opcion';
        opcionElement.onclick = () => seleccionarRespuesta(opcion.id);
        
        opcionElement.innerHTML = `
            <img src="${opcion.imagen}" alt="${opcion.texto}" class="opcion-imagen" loading="lazy" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg=='">
            <div class="opcion-titulo">${opcion.texto}</div>
        `;
        
        opcionesContainer.appendChild(opcionElement);
    });
    
    // Ocultar elementos de resultado
    document.getElementById('resultado-container').style.display = 'none';
    document.getElementById('siguiente-container').style.display = 'none';
    document.getElementById('hint-container').style.display = 'none';
    
    respuestaSeleccionada = false;
}

// Seleccionar respuesta
function seleccionarRespuesta(opcionId) {
    if (respuestaSeleccionada) return;
    
    console.log(`Respuesta seleccionada: ${opcionId}`);
    
    const pregunta = preguntas[preguntaActual];
    const esCorrecta = opcionId === pregunta.respuestaCorrecta;
    
    // Incrementar contadores
    intentosPreguntaActual++;
    totalIntentos++;
    
    // Actualizar contador de intentos
    document.getElementById('intentos').textContent = `Intentos: ${intentosPreguntaActual}`;
    
    // Marcar respuesta seleccionada temporalmente
    respuestaSeleccionada = true;
    
    // Actualizar apariencia de la opción seleccionada
    const opciones = document.querySelectorAll('.opcion');
    opciones.forEach((opcion, index) => {
        const opcionData = pregunta.opciones[index];
        
        if (opcionData.id === opcionId) {
            opcion.classList.add(esCorrecta ? 'correcta' : 'incorrecta');
            
            // Agregar indicador visual
            const indicador = document.createElement('div');
            indicador.className = 'opcion-indicador';
            indicador.textContent = esCorrecta ? '✓' : '✗';
            opcion.appendChild(indicador);
        }
    });
    
    // Guardar progreso
    localStorage.setItem('totalIntentos', totalIntentos.toString());
    
    if (esCorrecta) {
        // Mostrar mensaje de éxito y explicación
        mostrarResultadoCorrecto(pregunta.explicacion);
        
        // Avanzar automáticamente después de 2 segundos
        setTimeout(() => {
            siguientePregunta();
        }, 2000);
    } else {
        // Solo mostrar que es incorrecto, sin revelar la respuesta correcta
        mostrarResultadoIncorrecto();
        
        // Permitir intentar de nuevo después de un momento
        setTimeout(() => {
            resetearRespuestaIncorrecta(opcionId);
        }, 1500);
    }
}

// Mostrar resultado correcto
function mostrarResultadoCorrecto(explicacion) {
    const resultadoContainer = document.getElementById('resultado-container');
    const resultadoMensaje = document.getElementById('resultado-mensaje');
    const resultadoIcono = document.getElementById('resultado-icono');
    const resultadoTitulo = document.getElementById('resultado-titulo');
    const resultadoExplicacion = document.getElementById('resultado-explicacion');
    
    resultadoMensaje.className = 'resultado-mensaje-militar correcto';
    resultadoIcono.textContent = '🎖️';
    resultadoTitulo.textContent = '¡Victoria!';
    resultadoExplicacion.textContent = explicacion;
    
    resultadoContainer.style.display = 'block';
}

// Mostrar resultado incorrecto (SIN revelar la respuesta correcta)
function mostrarResultadoIncorrecto() {
    const resultadoContainer = document.getElementById('resultado-container');
    const resultadoMensaje = document.getElementById('resultado-mensaje');
    const resultadoIcono = document.getElementById('resultado-icono');
    const resultadoTitulo = document.getElementById('resultado-titulo');
    const resultadoExplicacion = document.getElementById('resultado-explicacion');
    
    resultadoMensaje.className = 'resultado-mensaje-militar incorrecto';
    resultadoIcono.textContent = '⚔️';
    resultadoTitulo.textContent = 'Derrota Táctica';
    resultadoExplicacion.textContent = 'Reagrupa tus fuerzas e intenta nuevamente.';
    
    resultadoContainer.style.display = 'block';
    
    // Mostrar hint
    document.getElementById('hint-container').style.display = 'block';
}

// Resetear respuesta incorrecta para permitir nuevo intento
function resetearRespuestaIncorrecta(opcionIncorrecta) {
    // Permitir seleccionar otra respuesta
    respuestaSeleccionada = false;
    
    // Remover clases y elementos de la opción incorrecta
    const opciones = document.querySelectorAll('.opcion');
    opciones.forEach((opcion, index) => {
        const opcionData = preguntas[preguntaActual].opciones[index];
        
        if (opcionData.id === opcionIncorrecta) {
            opcion.classList.remove('incorrecta');
            const indicador = opcion.querySelector('.opcion-indicador');
            if (indicador) {
                indicador.remove();
            }
        }
    });
    
    // Ocultar mensajes de resultado
    document.getElementById('resultado-container').style.display = 'none';
    document.getElementById('hint-container').style.display = 'none';
}

// Ir a la siguiente pregunta
function siguientePregunta() {
    preguntaActual++;
    intentosPreguntaActual = 0;
    
    // Guardar progreso
    localStorage.setItem('preguntaActual', preguntaActual.toString());
    
    if (preguntaActual >= preguntas.length) {
        // Juego completado
        window.location.href = './final.html';
    } else {
        // Mostrar siguiente pregunta
        mostrarPregunta();
    }
}

// Eventos táctiles para mejor compatibilidad móvil
function agregarEventosTactiles() {
    // Agregar soporte para eventos táctiles en las opciones
    document.addEventListener('touchstart', function(e) {
        if (e.target.closest('.opcion')) {
            e.target.closest('.opcion').style.transform = 'scale(0.98)';
        }
    });
    
    document.addEventListener('touchend', function(e) {
        if (e.target.closest('.opcion')) {
            e.target.closest('.opcion').style.transform = '';
        }
    });
}

// Prevenir zoom en doble tap en iOS
document.addEventListener('touchend', function(e) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);

let lastTouchEnd = 0;

// Inicializar cuando se carga la página
window.addEventListener('load', () => {
    console.log('Página cargada, inicializando juego...');
    inicializarJuego();
    agregarEventosTactiles();
    
    // Animación de entrada militar
    const juegoCard = document.querySelector('.juego-card');
    if (juegoCard) {
        juegoCard.style.animation = 'marcha-militar 1.2s ease-out';
    }
});

// Precargar imágenes para mejor rendimiento
function precargarImagenes() {
    preguntas.forEach(pregunta => {
        pregunta.opciones.forEach(opcion => {
            const img = new Image();
            img.src = opcion.imagen;
        });
    });
}

// Precargar imágenes al inicializar
window.addEventListener('DOMContentLoaded', precargarImagenes);

// Verificar que el script se cargó correctamente
console.log('Script.js cargado correctamente. Total de preguntas:', preguntas.length);