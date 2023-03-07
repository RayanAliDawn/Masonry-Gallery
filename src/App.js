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
    default: 4,
    1100: 2,
    700: 1,
  };

  return (
    <>
    
    
      <div className="input-group   head">
        <input
          type="text"
          className="form-control"
          placeholder="Search for images here"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          className="btn btn-primary"
          type="button"
          id="button-addon2"
          onClick={searchImages}
        >
          Search
        </button>
      </div>
      
      <h1 className="que">{query}</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((img, key) => (
          <Image src={img.urls.thumb} key={key} />
        ))}
      </Masonry>
     
     
    </>
    
  );
}

export default App;
