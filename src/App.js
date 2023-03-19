import { LoadImages, SearchImages } from "./Api";
import Image from "./Image";
import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    LoadImages().then((data) => {
      setImages(data);
    });
  }, []);

  const searchImages = () => {
    SearchImages(query).then((data) => {
      setImages(data);
    });
  };

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    740: 3,
    320:2,
    200:1
  };

  return (
    < >
    
    
      <div className="flex gap-10 " >
        <div className="w-full" > 
        <input  type="text"
          className="w-full h-10 my-5 mx-2  p-2 border rounded-lg border-slate-900 text-sm "
          placeholder="Search for images here"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={query}
          onChange={(event) => setQuery(event.target.value)}/>
        </div>
<div>
<button className="hover  hover:bg-red-700 bg-black w-fit h-10 mt-12   p-2 text-white rounded-lg cursor-pointer "
          onClick={searchImages}
        >
          Search
        </button>
</div>
        
      </div>
      
      <h1 className="que">{query}</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid my-masonry-grid_column"
       
      >
        {images.map((img, key) => (
          <Image src={img.urls.thumb} key={key} />
        ))}
      </Masonry>
     
      
    </>
    
  );
}

export default App;
