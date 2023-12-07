// --------------------Immediatly Invoked Function ------------------

(function jack(){
    console.log(`ONE DB CONNECTED`);     // Named iife
})();




((name) => {
    console.log(`TWO DB CONNECTED ${name}`);    // Unnamed iife
})("Karan");