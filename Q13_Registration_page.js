console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {
  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve('popcorn'), 3000);
  });

  const getCandy = new Promise((resolve, reject) => {
    setTimeout(() => resolve('candy'), 3000);
  });

  const getCoke = new Promise((resolve, reject) => {
    setTimeout(() => resolve('coke'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke]);

  console.log(`got ${popcorn}, ${candy}, ${coke}`);

  const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('cold drinks'), 2000);
  });

  const coldDrinks = await getColdDrinks;
  console.log(`got ${coldDrinks}`);

  return ticket;
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');


console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMoviePromises = () => {
  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve('popcorn'), 3000);
  });

  const getCandy = new Promise((resolve, reject) => {
    setTimeout(() => resolve('candy'), 3000);
  });

  const getCoke = new Promise((resolve, reject) => {
    setTimeout(() => resolve('coke'), 3000);
  });

  return person3PromiseToShowTicketWhenWifeArrives.then((ticket) => {
    console.log(`got ${ticket}`);

    return Promise.all([getPopcorn, getCandy, getCoke]).then(([popcorn, candy, coke]) => {
      console.log(`got ${popcorn}, ${candy}, ${coke}`);

      const getColdDrinks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('cold drinks'), 2000);
      });

      return getColdDrinks.then((coldDrinks) => {
        console.log(`got ${coldDrinks}`);

        return ticket;
      });
    });
  });
};

preMoviePromises().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');