import './categories-styles.scss'
import { Fragment } from 'react';



const CategoryItem1=({category})=>{
    const {imageUrl,title,p}=category;
    
    return(
        <Fragment>
            <div className="category-container">
                <div className="background-image" style={{
                    backgroundImage:`url(${imageUrl})`
                }}/>
                <div className="category-body-container">
                    <h2 className="h2"><a href={title}>{title}</a></h2>
                    <p className="p">{p}</p>
                </div> 
            </div>
        </Fragment>
    )
}

export default CategoryItem1;