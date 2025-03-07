const user = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
  },
};

console.log(user.age);

const userJSON = `{
    "name": "Alice",
    "age": 25,
    "isStudent": false,
    "courses": ["Math", "Science"],
    "address": {
      "city": "New York",
      "zip": "10001"
    }
  }
  `;

console.log(userJSON);

const userJSONObj = JSON.parse(userJSON);

console.log(userJSONObj);

userJSONObj.name = "Chiamaka";

console.log(userJSONObj);

const data = JSON.stringify(userJSONObj);

console.log(data);

// Working with JSON - API calls

const getTodoItems = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  console.log(res);

  const data = await res.json();

  console.log(data);
};

getTodoItems();
