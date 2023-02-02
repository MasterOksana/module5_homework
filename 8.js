let children = new Map();
children.set("Анна", 2  );
children.set("Петя", 1  );
children.set("Иван", 3  );
children.set("Маша", 2  );

function printChildren() {
 children.forEach((value, key) => {
 console.log(`${key}, возраст - ${value} г.`);
 });
  for (let [key, value] of children) {
    console.log(`${key}, возраст - ${value} г.`);
  }
}

 printChildren();