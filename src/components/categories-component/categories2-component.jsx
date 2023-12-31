import './categories-styles.scss'


const CategoryItem2=({category})=>{
    const {imageUrl,title,p}=category;
    return(
        <div className="category-container">
        <div className="background-image" style={{
            backgroundImage:`url(${imageUrl})`
        }}/>
            <div className="category-body-container">
                <h2 className="h2"><a href={title}> {title}</a></h2>
                <p className="p">{p}</p>
            </div>
        </div>
    )
}

export default CategoryItem2;