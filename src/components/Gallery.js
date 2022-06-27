import React, { Component } from "react";
import ReactDOM from "react-dom";

const Gallery = ({ images, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="gallery">
    {images?.map(img => (
      <div className='photo' key={img.id}>
        <a href={img.url}>
        <img src={img.src.original} alt={img.alt}></img>
        </a>
        <a href={img.photographer_url}>
            <h3 className="photographer">{img.photographer}</h3>
        </a>
      </div>
    ))}
    </div>
  );
};

export default Gallery;


// <div className="gallery">{renderedPhotos}</div>





// function Image(props) {
//     // Each individual image
//     const {
//     authorName, imgUrl, authorUrl, photoName
//     } = props;
//     return (
//     <div className="photo">
//         <a href={imgUrl}>
//         <img src={imgUrl} alt={photoName}></img>
//         </a>
//         <a href={authorUrl}>
//             <h3 className="photographer">{authorName}</h3>
//         </a>
//     </div>
//     );
// }


// class Gallery extends Component {
//     constructor(props) {
//         // Initialize mutable state
//         super(props);
//         this.state = { photos: [], baseUrl: 'https://api.pexels.com/v1/curated?per_page=10'};
//         this.handler = this.handler.bind(this);
//       }
      
//       async componentDidMount() {
//         // This line automatically assigns this.props.url to the const variable url
//         //const { baseUrl } = this.props;
//         const baseUrl = "https://api.pexels.com/v1/curated?per_page=10";
//         const APIKEY = "563492ad6f917000010000011d926482db804d428065948e1fd51837";
//         // Call REST API to get the post's information
//         await fetch(baseUrl, { method: 'GET', headers: {Accept: 'application/json', Authorization: APIKEY} })
//           .then((response) => {
//             if (!response.ok) throw Error(response.statusText);
//             return response.json();
//           })
//           .then((data) => {
//             const { photos } = this.state;
//             console.log(data);
//             for (let i = 0; i < data.photos.length; i += 1) {
//               photos.push(data.photos[i]);
//             }
//             this.setState({
//               photos,
//               baseUrl: data.next_page,
//             });
//           })
//           .catch((error) => console.log(error));
//       }

//       handler(data) {
//         const { photos, baseUrl } = this.state;
//         //photos.push(data);
//         this.setState({
//           photos,
//         });
//       }
      
//       renderPhoto(i) {
//         const { photos, baseUrl } = this.state;
//         const photoToRender = photos[i];
//         return (
//           <Image
//             key = {(photoToRender.id).toString()}
//             authorName = {photoToRender.photographer}
//             imgUrl = {photoToRender.src.original}
//             authorUrl = {photoToRender.photographer_url}
//             photoName = {photoToRender.alt}
//           />
//         );
//       }
      
//       render() {
//         // This line automatically assigns this.state.imgUrl to the const variable imgUrl
//         // and this.state.owner to the const variable owner
//         const { photos, baseUrl } = this.state;
//         const renderedPhotos = [];
//         for (let i = 0; i < photos.length; i += 1) {
//           renderedPhotos.push(this.renderPhoto(i));
//         }

//         return (
//         <div className="gallery">{renderedPhotos}</div>
//         );
//     }

//   }

// export default Gallery