async function getData() {
    const response = await fetch(`http://localhost:3000/api/data.json`);
    return await response.json();
}

export {
    getData
}