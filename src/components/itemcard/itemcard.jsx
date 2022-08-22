import './itemcard.css'

const Itemcard = props => {
  const {productData} = props
  const {title, brand, imageUrl, rating, price} = productData

  return (
    //   Wrap with Link from react-router-dom
    <li className="product-item">
      <img src={imageUrl} alt="product" className="thumbnail" />
      <h1 className="title">{title}</h1>
      <p className="brand">by {brand}</p>
      <div className="product-details">
        <p className="price">Rs {price}/-</p>
         
      </div>
    </li>
  )
}
export default Itemcard
