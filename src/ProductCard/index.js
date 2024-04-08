
import './index.css'

const ProductCard = props => {
  const {productData} = props
  const {title, imageUrl,id,description} = productData

  return (
    
      <li className="product-item">
        <img src={imageUrl} alt={`image ${title}`} className="thumbnail" />
        <h1 className="title">{title}</h1>
          <div className="product-details">
              <p className='desc'>{description}</p>
          
        </div>
      </li>
  )
}
export default ProductCard