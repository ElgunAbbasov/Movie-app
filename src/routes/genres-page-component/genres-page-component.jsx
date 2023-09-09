import Directory1 from "../../components/directory/directory-component";
import Directory2 from "../../components/directory/directory2-component";
import { Outlet } from "react-router-dom";

const  Genres=()=>{
  const categories1=[
    {
        id:1,
        title:'Action',
        imageUrl:'https://pbblogassets.s3.amazonaws.com/uploads/2019/07/12130642/John-Wick.jpg',
        p:'Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats.'
    },
    {
        id:2,
        title:'Animtion',
        imageUrl:'https://thecinemaholic.com/wp-content/uploads/2015/02/_d_improd_/wall_e-wide_f_improf_1024x640.jpg',
        p:'Animation is the method and medium that encompasses myriad filmmaking techniques, by which still images are manipulated to create moving images. '
    },
    {
        id:3,
        title:'Fantasty',
        imageUrl:'https://cdn.mos.cms.futurecdn.net/VBTsDswJ3MPxTyZ43ZNXkJ.jpg',
        p:'Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds.'
    },
    {
        id:4,
        title:'Drama',
        imageUrl:'https://cdn.theasc.com/Shawshank-Featured.jpg',
        p:'Drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.'
    },
    {
        id:5,
        title:'Horror',
        imageUrl:'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-06/scariest-horror-movies-it-stephen-king-2x1-bn-220617-e38851.jpg',
        p:'Horror is a film genre that seeks to elicit fear or disgust in its audience for entertainment purposes.'
    },
    {
        id:6,
        title:'Adventure',
        imageUrl:'https://unitingartists.org/wp-content/uploads/2020/06/Adventure-Genre.jpg',
        p:'An adventure film is a form of adventure fiction, and is a genre of film.',
    },
    {
        id:7,
        title:'History',
        imageUrl:'https://i.ytimg.com/vi/9-hL8-Sf6-Q/maxresdefault.jpg',
        p:'A fiction film showing past events or set within a historical period.'
    }
 ]
 const categories2=[
    {
        id:1,
        title:'Comedy',
        imageUrl:'https://i.pinimg.com/originals/e7/d9/63/e7d963f1b981e0005ed2c71c8978fd8f.jpg',
        p:'A comedy film is a category of film which emphasizes on humor. These films are designed to make the audience laugh in amusement.'
    },
    {
        id:2,
        title:'Romance',
        imageUrl:'https://image.tmdb.org/t/p/original/mjTIKpQzxtFNpgLfZkrPN48shQt.jpg',
        p:'The romance genre is a storytelling genre that focuses on love and romantic relationships between two or more characters.'
    },
    
    {
        id:3,
        title:'Crime',
        imageUrl:'https://haberiskelesi.com/wp-content/uploads/2022/01/HD-wallpaper-the-godfather-marlon-brando-vito-corleone.jpg',
        p:'Films of this genre generally involve various aspects of crime and its detection.'
    },
    {
        id:4,
        title:'Science-fiction',
        imageUrl:'https://i.gadgets360cdn.com/large/avatar_re_release_india_date_1661319791360.jpg',
        p:'A genre characterized by stories involving conflicts between science and technology, human nature, and social organization in futuristic or fantastical settings, created in cinema through distinctive iconographies, images, and sounds often produced by means of special effects technology.'
    },
    {
        id:5,
        title:'Military',
        imageUrl:'https://wallpapercave.com/wp/wp5284041.jpg',
        p:'War film is a film genre concerned with warfare, typically about naval, air, or land battles, with combat scenes central to the drama. '
    },
    {
        id:6,
        title:'Detective',
        imageUrl:'https://wallpapercrafter.com/th8003/893916-Sherlock-Holmes-Sherlock-Benedict-Cumberbatch-1080P.jpg',
        p:'War film is a film genre concerned with warfare, typically about naval, air, or land battles, with combat scenes central to the drama. '
    },
    {
        id:7,
        title:'Thriller',
        imageUrl:'https://c4.wallpaperflare.com/wallpaper/674/452/19/thriller-4k-mystery-2017-wallpaper-preview.jpg',
        p:'Thriller is a genre of fiction with numerous, often overlapping, subgenres, including crime, horror, and detective fiction. '
    },
    {
        id:8,
        title:'Anime',
        imageUrl:'https://wallpaperaccess.com/full/1605734.jpg',
        p:'Anime is a style of Japanese film and television animation, typically aimed at adults as well as children.'
    },
    {
        id:9,
        title:'Spy',
        imageUrl:'https://images5.alphacoders.com/124/thumb-1920-1240042.jpg',
        p:'The spy film, also known as the spy thriller, is a genre of film that deals with the subject of fictional espionage, either in a realistic way (such as the adaptations of John le Carré) or as a basis for fantasy (such as many James Bond films).'
    },
    
 ]

 
 

  return (
    <div className="App">
      <Outlet/>
      <Directory1 categories1={categories1}/>
      <Directory2 categories2={categories2}/>
      
    </div>
  );
}

export default Genres;
