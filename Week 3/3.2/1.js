function fetchData() {
  try {
    fetch("https://fakerapi.it/api/v1/persons")
      .then((response) => response.json())
      .then((data) => console.log(data));
  } catch (error) {
    console.log(error);
  }
}

async function fetchData() {
  try {
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
