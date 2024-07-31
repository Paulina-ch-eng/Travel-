// a lo siguiente se refiere con control de flujo, o toda esta información debe estar en el codigo HTML?


const activities = {
    trekking: {
        title: "TREKKING",
        location: "Volcán Villarrica",
        image: "assets/img/trekking.jpg",
        description: "Modalidad de excursionismo que consiste en recorrer a pie largas distancias o zonas determinadas, generalmente de alta montaña y poco frecuentadas por el turismo convencional."
    },
    natacion: {
        title: "NATACION",
        location: "Lago Cochrane",
        image: "assets/img/natación.jpg",
        description: "Deporte o ejercicio que consiste en nadar: en las pruebas de natación se compite en velocidad, en cualquiera de los cuatro estilos: braza, crol, espalda y mariposa."
    },
    ferry: {
        title: "FERRY",
        location: "Lago Llanquihue",
        image: "assets/img/ferry.jpg",
        description: "Embarcación que realiza alternativamente el mismo recorrido entre dos puntos: especialmente la de grandes dimensiones destinada al transporte de cargas pesadas o pasajeros."
    }
};

function updateActivity() {
    const selectedActivity = document.getElementById('activity-select').value;
    const activity = activities[selectedActivity];

    document.getElementById('activity-image').src = activity.image;
    document.getElementById('overlay-title').textContent = activity.title;
    document.getElementById('overlay-location').textContent = activity.location;
    document.getElementById('activity-description').textContent = activity.description;
}

document.getElementById('activity-select').addEventListener('change', updateActivity);

// se inicializa la actividad
updateActivity();