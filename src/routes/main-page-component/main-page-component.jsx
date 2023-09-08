const MainPage=()=>{
    const categories=()=>[
        {
            id:1,
            title:'action',
            imageUrl:'https://pbblogassets.s3.amazonaws.com/uploads/2019/07/12130642/John-Wick.jpg'
        },
        {
            id:2,
            title:'animtion',
            imageUrl:'https://thecinemaholic.com/wp-content/uploads/2015/02/_d_improd_/wall_e-wide_f_improf_1024x640.jpg'
        },
        {
            id:3,
            title:'fantastic',
            imageUrl:'https://static-koimoi.akamaized.net/wp-content/new-galleries/2020/12/excited-for-jallikattus-oscar-entry-here-are-5-fantastic-award-winning-films-that-the-cinephile-in-you-cant-afford-to-miss-001.jpg'
        },
        {
            id:4,
            title:'dram',
            imageUrl:'https://cdn.theasc.com/Shawshank-Featured.jpg'
        }
    ]
    return(
        <div>
            {categories.map((title, id, imageUrl)=>{
                <div className="category-container" key={id}>
                    <div className="backgroud-image" style={{
                        backgroundImage:`${imageUrl}`
                    }}/>
                    <div>
                        <h2>{title}</h2>
                        <p>Shop Now</p>
                    </div>
                </div>
            })}
        </div>
    )
}


export default MainPage;