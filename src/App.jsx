import { useState } from 'react'
import './App.css'


function App() {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const MIN = 1;
  const MAX = 10;
  const PRICE = 100000;
  const DISCOUNT_RATE = 10;

 
  const increase = () => {
    if (quantity < MAX) {
      setQuantity(quantity + 1);
      setAdded(false);
    }
  };

  const decrease = () => {
    if (quantity > MIN) {
      setQuantity(quantity - 1);
      setAdded(false);
    }
  };

  
  const totalPrice = quantity * PRICE;

  const discount =
    quantity >= 5
      ? (totalPrice * DISCOUNT_RATE) / 100
      : 0;

  const finalPrice = totalPrice - discount;

  const addToCart = () => {
    setAdded(true);
  };

 
  const formatPrice = (price) => {
    return price.toLocaleString("uz-UZ") + " so'm";
  };

  return (
    <div className="container">
      <div className="product-card">

        <div className="product-image">
          <span>🛍️</span>
        </div>

        <h1>Mahsulot kalkulyatori</h1>
        <p className="subtitle">
          Mahsulot miqdori va narxini hisoblang
        </p>

        <div className="price-box">
          <p>Mahsulot narxi</p>
          <h2>{formatPrice(PRICE)}</h2>
        </div>

        <div className="quantity-section">
          <h3>Mahsulot miqdori</h3>

          <div className="quantity-control">
            <button
              onClick={decrease}
              disabled={quantity <= MIN}
            >
              −
            </button>

            <span>{quantity}</span>

            <button
              onClick={increase}
              disabled={quantity >= MAX}
            >
              +
            </button>
          </div>

          <p className="limit">
            Min: {MIN} ta | Max: {MAX} ta
          </p>
        </div>

        <div className="calculation">
          <div>
            <span>Mahsulotlar soni:</span>
            <strong>{quantity} ta</strong>
          </div>

          <div>
            <span>Umumiy narx:</span>
            <strong>{formatPrice(totalPrice)}</strong>
          </div>

          <div>
            <span>Chegirma (10%):</span>
            <strong className="discount">
              - {formatPrice(discount)}
            </strong>
          </div>

          <hr />

          <div className="final-price">
            <span>Yakuniy narx:</span>
            <strong>{formatPrice(finalPrice)}</strong>
          </div>
        </div>

        {quantity >= 5 && (
          <div className="success">
            🎉 Sizga 10% chegirma berildi!
          </div>
        )}

        <button
          className="cart-button"
          onClick={addToCart}
        >
          Savatga qo'shish
        </button>

        {added && (
          <div className="added-message">
            ✅ Savatga qo'shildi!
          </div>
        )}

      </div>
    </div>
  );
}





export default App
