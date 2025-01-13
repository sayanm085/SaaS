import React from 'react'
import {WebsiteProduct,DesignProduct} from './ProductList/index'

function AllProduct() {
  return (
    <section className="h-auto w-full py-5 flex flex-col items-center justify-center relative z-50 ">


     <WebsiteProduct/>

     <DesignProduct/>



    </section>
  );
}

export default AllProduct
