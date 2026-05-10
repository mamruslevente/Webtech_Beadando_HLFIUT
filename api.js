const NEPTUN_CODE = 'HLFIUT';
const API_URL = `https://iit-playground.arondev.hu/api/${NEPTUN_CODE}/car`;

async function getCars() {
    const res = await fetch(API_URL);
    return await res.json();
}

async function getCar(id) {
    const res = await fetch(`${API_URL}/${id}`);
    return await res.json();
}

async function createCar(car) {
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car)
    });
}

async function updateCar(id, car) {
    car.id = parseInt(id);
    await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car)
    });
}

async function deleteCar(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
}