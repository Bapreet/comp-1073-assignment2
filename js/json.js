// Output div element
const div_output = document.querySelector("#output");
// Order button
const btn = document.querySelector('#order-btn');

// Smoothie class definition
class Smoothie{
    // Properties
    size;
    fruit;
    base;
    topping;
    // Constructor
    constructor(size, fruit, base, topping){
        this.size = size;
        this.fruit = fruit;
        this.base = base;
        this.topping = topping
    }

    // Method to display smoothie details
    showSmoothie(){
        // Generating smoothie description
        const smoothieDescription = `You ordered ${this.size} size ${this.fruit} Smoothie with ${this.base} and ${this.topping} topping.`;
        // Displaying smoothie description in output div
        div_output.textContent = smoothieDescription;

        // Displaying smoothie image
        const fruitImage = document.createElement("img");
        let image;
        
        if (this.fruit.toLowerCase() === 'banana'){
            image = 'images/banana_smoothie.webp';
        }
        else if (this.fruit.toLowerCase() === 'strawberry'){
            image = 'images/strawberry_smoothie.jpeg'
        }
        else if (this.fruit.toLowerCase() === 'mango'){
            image = 'images/mango-smoothie.webp'
        }
        else if (this.fruit.toLowerCase() === 'kiwi'){
            image = 'images/kiwi_smoothie.jpeg'
        }
        else if (this.fruit.toLowerCase() === 'apple'){
            image = 'images/apple_smoothie.webp'
        }
        else if (this.fruit.toLowerCase() === 'blueberry'){
            image = 'images/blueberry-smoothie.jpg'
        }
        else {
            image = '';
        }
        fruitImage.setAttribute("src", image);
        div_output.appendChild(fruitImage);

    }
}

// Function to place order
function placeOrder(){
    // Getting form data
    const form = document.querySelector("#smoothie-form");
    const fruit = form.querySelector('#fruit').value;
    const base = form.querySelector('#base').value;
    const topping = form.querySelector('#topping').value;
    const size = form.querySelector('#size').value;

    // Creating new Smoothie object
    const smoothie = new Smoothie(size, fruit, base, topping);
    // Displaying smoothie details
    smoothie.showSmoothie();
}
// Event listener for order button click
btn.addEventListener("click", placeOrder);


