import './categories-styles.scss'


const CategoryItem1=({category})=>{
    const {imageUrl,title,p}=category;
    return(
        <div className="category-container">
        <div className="background-image" style={{
            backgroundImage:`url(${imageUrl})`
        }}/>
            <div className="category-body-container">
                <h2 className="h2">{title}</h2>
                <p className="p">{p}</p>
            </div>
        </div>
    )
}

export default CategoryItem1;