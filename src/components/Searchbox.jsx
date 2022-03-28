import React, { useState } from "react";
import { connect } from "react-redux";
import '../Styles/Searchbox.css';
import { getItems } from '../components/actions/itemActions';


const Searchbox = (lang, url) => {

  // const dataSearBar = [
  //   {
  //     _id: 1,
  //     title: "Huile Calmante 1"
  // },
  // {
  //     _id: 2,
  //     title: "Huile Calmante 2"
  // },
  // {
  //     _id: 3,
  //     title: "Huile Calmante 3"
  // },
  // {
  //     _id: 4, 
  //     title: "Huile Relaxante 1"
  // },
  // {
  //     _id: 5, 
  //     title: "Huile Relaxante 2"
  // },
  // {
  //     _id: 6, 
  //     title: "Huile Relaxante 3"
  // },
  // {
  //     _id: 7, 
  //     title: "Huile Anti-Stress"
  // },
  // {
  //     _id: 8, 
  //     title: "Huile Anti-douleur 1"
  // },
  // {
  //     _id: 9, 
  //     title: "Huile Anti-douleur 2"
  // },
  // {
  //     _id: 10, 
  //     title: "Huile Anti-douleur 3"
  // },
  // {
  //     _id: 11, 
  //     title: "Infusion CBD Vitalité"
  // },
  // {
  //     _id: 12, 
  //     title: "Infusion CBD Digestion "
  // },
  // {
  //     _id: 13, 
  //     title: "Thé Anti-Stress"
  // },
  // {
  //     _id: 14, 
  //     title: "Gummies CBD 1"
  // },
  // {
  //     _id: 15, 
  //     title: "Gummies CBD 2"
  // },
  // {
  //     _id: 16, 
  //     title: "Bonbons colorés"
  // },
  // ]


  const [searchtext, setSearchtext] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [resfound, setResfound] = useState(true);


  const handleChange = (e) => {
    let searchval = e.target.value;
    let suggestion = [];
    if (searchval.length > 0) {
      suggestion = lang
        .sort()
        .filter((e) => e.toLowerCase().includes(searchval.toLowerCase()));
      setResfound(suggestion.length !== 0 ? true : false);
    }
    setSuggest(suggestion);
    setSearchtext(searchval);
  };

  const suggestedText = (value) => {
    console.log(value);
    setSearchtext(value);
    setSuggest([]);
  };

  const getSuggestions = () => {
    if (suggest.length === 0 && searchtext !== "" && !resfound) {
      return <p>Search Content Not Found</p>;
    }
  };
  
      // return (
      //   <ul>
      //     {suggest.map((item, index) => {
      //       return (
      //         <div key={index}>
      //           <li onClick={() => suggestedText(item)}>{item}</li>
      //           {index !== suggest.length - 1 && <hr />}
      //         </div>
      //       );
      //     })}
      //   </ul>
      // );

  // eslint-disable-next-line no-unreachable
  return (
    <div class="searchbox">
      <input type="text" className="search" placeholder="Cherchez votre produit" 
      onChange={handleChange}
      value={searchtext}
      />
      {getSuggestions()}
      <svg
        class="searchbox__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56.966 56.966"
      >
        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
      </svg>
      <div className="dataResults">
        <ul>
          {suggest.map((item, index) => {
            return (
              <div key={index}>
                <li onClick={() => suggestedText(item)}>{item}</li>
                {index !== suggest.length - 1 && <hr />}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );

};

const mapStateToProps = (state) => ({
    item:state.item
  })

  export default connect(mapStateToProps, {getItems}) (Searchbox);
