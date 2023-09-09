import CategoryItem1 from "../categories-component/categories1-component"
import './directory-styles.scss'


const Directory1=({categories1})=>{
    return(
        <div className="categories-container">
       {categories1.map((category)=>(
        <CategoryItem1 key={category.id} category={category}/>
       ))}
       
      </div>
    )
}

export default Directory1;