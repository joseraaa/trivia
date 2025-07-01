// Preguntas de la trivia sobre la Batalla del 5 de Mayo
const preguntas = [
    {
        id: 1,
        pregunta: "¿En qué año tuvo lugar la Batalla del 5 de Mayo?",
        opciones: [
            {
                id: "a",
                texto: "1861",
                imagen: "img/1861.jpg"
            },
            {
                id: "b",
                texto: "1862",
                imagen: "img/1862.jpg"
            },
            {
                id: "c",
                texto: "1863",
                imagen: "img/1863.jpg"
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
                imagen: "img/zaragoza.jpg"
            },
            {
                id: "b",
                texto: "General Porfirio Díaz",
                imagen: "img/diaz.jpg"
            },
            {
                id: "c",
                texto: "General Miguel Negrete",
                imagen: "img/negrete.jpg"
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
                imagen: "img/espana.jpg"
            },
            {
                id: "b",
                texto: "Francia",
                imagen: "img/francia.jpg"
            },
            {
                id: "c",
                texto: "Inglaterra",
                imagen: "img/inglaterra.jpg"
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
                imagen: "img/loreto.jpg"
            },
            {
                id: "b",
                texto: "Fuerte de San Juan y Santa María",
                imagen: "img/sanjuan.jpg"
            },
            {
                id: "c",
                texto: "Fuerte de la Cruz y San Miguel",
                imagen: "img/guadalupe.jpg"
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
                imagen: "img/forey.jpg"
            },
            {
                id: "b",
                texto: "General Charles de Lorencez",
                imagen: "img/lorencez.jpg"
            },
            {
                id: "c",
                texto: "General François Achille Bazaine",
                imagen: "img/bazaine.jpg"
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
                imagen: "img/deudas.jpg"
            },
            {
                id: "b",
                texto: "Establecer un imperio católico",
                imagen: "img/imperio.jpg"
            },
            {
                id: "c",
                texto: "Control de rutas comerciales",
                imagen: "img/comercio.jpg"
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
                imagen: "img/juarez.jpg"
            },
            {
                id: "b",
                texto: "Sebastián Lerdo de Tejada",
                imagen: "img/lerdo.jpg"
            },
            {
                id: "c",
                texto: "Miguel Miramón",
                imagen: "img/miramon.jpg"
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
                imagen: "img/4000.jpg"
            },
            {
                id: "b",
                texto: "6,000 soldados",
                imagen: "img/6000.jpg"
            },
            {
                id: "c",
                texto: "8,000 soldados",
                imagen: "img/8000.jpg"
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
                imagen: "img/europa.jpg"
            },
            {
                id: "b",
                texto: "Demostró que Francia no era invencible",
                imagen: "img/invencible.jpg"
            },
            {
                id: "c",
                texto: "Fortaleció la posición de Estados Unidos",
                imagen: "img/eeuu.jpg"
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
                imagen: "img/independencia.jpg"
            },
            {
                id: "b",
                texto: "Defensa de la soberanía nacional",
                imagen: "img/soberania.jpg"
            },
            {
                id: "c",
                texto: "Fin definitivo de conflictos",
                imagen: "img/conflictos.jpg"
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
        window.location.href = 'final.html';
        return;
    }
    
    mostrarPregunta();
}

// Mostrar la pregunta actual
function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    
    // Actualizar elementos de la interfaz
    document.getElementById('pregunta-actual').textContent = `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;
    document.getElementById('intentos').textContent = `Intentos: ${intentosPreguntaActual}`;
    document.getElementById('pregunta-texto').textContent = pregunta.pregunta;
    
    // Actualizar barra de progreso
    const progreso = ((preguntaActual + 1) / preguntas.length) * 100;
    document.getElementById('progreso-fill').style.width = `${progreso}%`;
    
    // Generar opciones simplificadas
    const opcionesContainer = document.getElementById('opciones-container');
    opcionesContainer.innerHTML = '';
    
    pregunta.opciones.forEach(opcion => {
        const opcionElement = document.createElement('button');
        opcionElement.className = 'opcion';
        opcionElement.onclick = () => seleccionarRespuesta(opcion.id);
        
        opcionElement.innerHTML = `
            <img src="${opcion.imagen}" alt="${opcion.texto}" class="opcion-imagen" loading="lazy">
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
        window.location.href = 'final.html';
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
    inicializarJuego();
    agregarEventosTactiles();
    
    // Animación de entrada militar
    document.querySelector('.juego-card').style.animation = 'marcha-militar 1.2s ease-out';
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