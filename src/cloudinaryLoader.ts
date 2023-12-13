

import { ImageLoaderProps } from "next/image"
// Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
const normalizeSrc = (src: any) => src[0] === '/' ? src.slice(1) : src

export default  function cloudinaryLoader({ src, width, quality } : ImageLoaderProps) {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
    return `https://res.cloudinary.com/duydzrckb/image/upload/${params.join(',')}/${normalizeSrc(src)}`
  }