import React, { useContext, useState ,useEffect } from 'react'
import { ShopeContext } from '../context/ShopContext'
import Title from './Title'; // Adjust the path as necessary
import ProductsItem from './ProductsItem';


const BestSeller = () => {

    const {products} = useContext(ShopeContext);
    const [BestSeller,setbestSeller] = useState([]);

    useEffect(()=>{
       const bestProduct = products.filter((item)=>(item.bestseller));
       setbestSeller(bestProduct.slice(0,5));
    },[])




  return (
    <div  className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-base text-gray-600'>
            Our best sellers are the most popular products in our store. They are the top-rated products that
            </p>

        </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                BestSeller.map((item,index)=>(
                    <ProductsItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))
            }
      </div>
    </div>
  )
}

export default BestSeller