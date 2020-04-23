module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let newItem = {...item};
  if(newItem.enhancement < 20){
    newItem.enhancement += 1;
  }
  return newItem;
}

function fail(item) {
  let newItem = {...item};
  if(newItem.enhancement < 15){
    newItem.durability -= 5;
  } else if (newItem.enhancement > 15){
    newItem = {
      ...newItem,
      durability: newItem.durability - 10,
      enhancement: newItem.enhancement - 1
    }
  } else {
    newItem.durability -= 10;
  }
  return newItem;
}

function repair(item) {
  return { 
    ...item,
    durability: 100
   };
}

function get(item) {
  let newItem = {...item};
  if(newItem.enhancement > 0){
    newItem.name = `[+${newItem.enhancement}] ${newItem.name}`;
  }
  return newItem;
}
