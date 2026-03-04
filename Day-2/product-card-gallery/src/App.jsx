import './App.css'
import Gallery from './components/productCard'
import productImage from './components/productImage'
import ProductCard from './components/productCard'
import ProductImage from './components/productImage'


function App() {
  const products = [
  { name: "Ceramic vase", price: 300, url: "https://images.pexels.com/photos/6757651/pexels-photo-6757651.jpeg" },
  { name: "Glass vase", price: 200, url: "https://images.pexels.com/photos/4041361/pexels-photo-4041361.jpeg" },
  {name:"Brass vase", price:400, url:"https://images.pexels.com/photos/1708850/pexels-photo-1708850.jpeg"}
]
  
  return (
    <div className='product-gallery'>
    {products.map((product) => <ProductCard  key={product.name} name={product.name} price={product.price}>
    <ProductImage url={product.url} />
    </ProductCard>
    )}
    </div>
  )
}

export default App