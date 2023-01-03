// let hotCoffees = [];
//   let icedCoffees = [];
//   try {
//     hotCoffees = (await axios("https://api.sampleapis.com/coffee/hot")).data;
//     icedCoffees = (await axios("https://api.sampleapis.com/coffee/iced")).data;
//   } catch (e) {
//     console.log(e);
//   }

/*
const newShop = shops.map((item) => {
    console.log(item);
    let list = [];
    for (let i = 0; i < 10; i++)
      if (i < 5)
        list.push(
          coffees.hotCoffees[
            Math.floor(Math.random() * coffees.hotCoffees.length)
          ]
        );
      else
        list.push(
          coffees.icedCoffees[
            Math.floor(Math.random() * coffees.icedCoffees.length)
          ]
        );

    return {
      ...item,
      coffees: list,
      rate: Math.floor(Math.random() * 6),
    };
  });*/

function mapCoffee(coffees) {
  return coffees.map((item) => {
    const calories = item.ingredients.includes("Milk")
      ? Math.floor(Math.random() * (200 - 100) + 100)
      : Math.floor(Math.random(100));
    return {
      ...item,
      caffeine: Math.floor(Math.random() * (140 - 70) + 70),
      calories,
      price: Number((Math.random() * (2 - 0.8) + 0.8).toFixed(2)),
      proteins: Number((Math.random() * 10).toFixed(2)),
      rate: Math.floor(Math.random() * 6),
    };
  });
}
