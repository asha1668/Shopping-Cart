import "./Basketcard.css";

export const BasketCard = ({product}) => {
  const {image, price, name} = product;
  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="cartName">{name}</p>
      <p className="cartPrice">${price}</p>
      <button>Remove</button>
    </div>
  )
}


