import React, { useState } from "react";

const CatFoodMenu = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Delicious Tuna Treats",
      href: "#",
      price: 9.99,
      imageSrc:
        "https://images.pexels.com/photos/9735157/pexels-photo-9735157.jpeg?auto=compress&cs=tinysrgb&w=300",
      imageAlt: "Tuna cat treats",
      quantity: 0,
    },
    {
      id: 2,
      name: "Delicious Tuna Treats",
      href: "#",
      price: 9.99,
      imageSrc:
        "https://images.pexels.com/photos/10455928/pexels-photo-10455928.jpeg?auto=compress&cs=tinysrgb&w=300",
      imageAlt: "Tuna cat treats",
      quantity: 0,
    },
    {
      id: 2,
      name: "Delicious Tuna Treats",
      href: "#",
      price: 9.99,
      imageSrc:
        "https://images.pexels.com/photos/19478187/pexels-photo-19478187/free-photo-of-strawberry-cake-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=300",
      imageAlt: "Tuna cat treats",
      quantity: 0,
    },
    {
      id: 2,
      name: "Delicious Tuna Treats",
      href: "#",
      price: 9.99,
      imageSrc:
        "https://images.pexels.com/photos/16039681/pexels-photo-16039681/free-photo-of-a-small-cat-eating-cat-food.png?auto=compress&cs=tinysrgb&w=300",
      imageAlt: "Tuna cat treats",
      quantity: 0,
    },
    {
      id: 2,
      name: "Delicious Tuna Treats",
      href: "#",
      price: 9.99,
      imageSrc:
        "https://images.pexels.com/photos/5847900/pexels-photo-5847900.jpeg?auto=compress&cs=tinysrgb&w=300",
      imageAlt: "Tuna cat treats",
      quantity: 0,
    },
  ]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (productId) => {
    const productIndex = products.findIndex((p) => p.id === productId);
    const updatedProducts = [...products];

    updatedProducts[productIndex] = {
      ...updatedProducts[productIndex],
      quantity: (updatedProducts[productIndex].quantity || 0) + 1,
    };

    setProducts(updatedProducts);

    // Add the product to the cart
    const cartItem = updatedProducts[productIndex];
    setCart((prevCart) => [...prevCart, cartItem]);

    console.log(`Product ${productId} added to cart`);
  };

  const calculateTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Cat Food Menu</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-medium text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-500">${product.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(product.id)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add to Cart
              </button>
              {product.quantity > 0 && (
                <p className="text-green-500">In Cart: {product.quantity}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-2"
                >
                  <span>
                    {item.name} - Quantity: {item.quantity || 1}
                  </span>
                  <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                </div>
              ))}
              <hr className="my-4" />
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-lg font-bold">
                  ${calculateTotalPrice()}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatFoodMenu;
