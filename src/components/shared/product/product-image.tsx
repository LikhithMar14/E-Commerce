'use client';
import { useState } from "react";
import Image from "next/image"
import { cn } from '@/lib/utils'
const ProductImages = ({images}:{images:string[]}) => {

    const [current,setCurrent] = useState(0);


    return (
        <div className="space-y-4">
                <Image src = {images[current]} alt="prodcut image" width={1000} height={1000} className="min-h-[300px] object-cover object-center rounded-md"/>
                <div className="flex">
                    {images.map((image,index)=>(
                        <div key={index} onClick={() => setCurrent(index)} className= {cn('border mr-2 cursor-pointer rounded-2xl hover:border-purple-600',current == index &&'border-orange-500')}>
                            <Image src = {image} alt='image' width={100} height={100}  className="object-cover object-center rounded-2xl"/>
                        </div>
                    ))

                }
                </div>
        </div>
        
    )
}

export default ProductImages