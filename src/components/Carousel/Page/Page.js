import './Page.css'
import { useContext } from 'react'
import { CarouselContext } from '../carousel-context'


export const Page = ({ children }) => {
  const { width } = useContext(CarouselContext)
  return( 
      <div className="page__main-container" style={{
        minWidth: `${width}px`, 
        maxWidth: `${width}px`
      }}>
        {children}
      </div>
  )
}