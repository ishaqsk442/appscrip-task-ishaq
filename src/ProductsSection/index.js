import { Component } from 'react'

import ProductCard from '../ProductCard'
import './index.css'

class ProductsSection extends Component {

    state = {
        productsList: [],
    }
   componentDidMount() {
    this.getProducts()
    }
    
    getProducts = async () => {
    
   
   
    const apiUrl = `https://fakestoreapi.com/products`
    const options = {
      method: 'GET',
    }
        const response = await fetch(apiUrl, options)
        
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.map(product => ({
        title: product.title,
       
        id: product.id,
        imageUrl: product.image,
        description: product.description,
      }))
        console.log(updatedData)
      this.setState({
        productsList: updatedData,
        
      })
    } 
  }
         
        render() {
            const { productsList } = this.state
             
            return (
            <ul className="products-list">
              {productsList.map(product => (
                <ProductCard productData={product} key={product.id} />
              ))}
            </ul>
            )
        }

    
    }

export default ProductsSection