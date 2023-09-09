import './directory-styles.scss'
import CategoryItem2 from '../categories-component/categories2-component'

const Directory2=({categories2})=>{
    return(
        <div className="categories-container">
       {categories2.map((category)=>(
       <CategoryItem2 key={category.id} category={category}/>
       ))}
       
      </div>
    )
}

export default Directory2;