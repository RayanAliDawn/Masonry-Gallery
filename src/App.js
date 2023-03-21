import { LoadImages, SearchImages } from "./Api";
import Image from "./Image";
import { useState, useEffect } from "react";


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


  return (
    < >
    
    <div className="laptop:mx-48 laptop:my-10 tablet:mx-3 ">
      <div className="flex gap-3 " >
        
        <input  type="text"
          className="w-full h-10 my-5 mx-2  p-2 border rounded-lg  "
          placeholder="Search for images here"
          value={query}
          onChange={(event) => setQuery(event.target.value)}/>
        

<button className="hover  hover:bg-red-700 bg-black w-fit h-10 mt-12   p-2 text-white rounded-lg cursor-pointer "
          onClick={searchImages}
        >
          
          Search
        </button>

        
      </div>
      <span>
      <h6 className="text-center text-base">{query}</h6>
      </span>
     
      <div 
        
        className="columns tablet:columns-2 laptop:columns-3 desktop:columns-4"
       
      >
        {images.map((img, key) => (
          <Image src={img.urls.thumb} key={key} />
        ))}
      </div>
     
      </div>
    </>
    
  );
}

export default App;
