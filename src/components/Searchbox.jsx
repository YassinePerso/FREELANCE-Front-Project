import React, { useState} from "react";
import { connect } from "react-redux";
import styles from '../Styles/Searchbox.module.css';
import { getItems } from '../components/actions/itemActions';
import { Link } from 'react-router-dom';


const Searchbox = () => {

  const dataSearhcBar = [
    {
      _id: 1,
      title: "Huile Calmante 1"
  },
  {
      _id: 2,
      title: "Huile Calmante 2"
  },
  {
      _id: 3,
      title: "Huile Calmante 3"
  },
  {
      _id: 4, 
      title: "Huile Relaxante 1"
  },
  {
      _id: 5, 
      title: "Huile Relaxante 2"
  },
  {
      _id: 6, 
      title: "Huile Relaxante 3"
  },
  {
      _id: 7, 
      title: "Huile Anti-Stress"
  },
  {
      _id: 8, 
      title: "Huile Anti-douleur 1"
  },
  {
      _id: 9, 
      title: "Huile Anti-douleur 2"
  },
  {
      _id: 10, 
      title: "Huile Anti-douleur 3"
  },
  {
      _id: 11, 
      title: "Infusion CBD Vitalité"
  },
  {
      _id: 12, 
      title: "Infusion CBD Digestion "
  },
  {
      _id: 13, 
      title: "Thé Anti-Stress"
  },
  {
      _id: 14, 
      title: "Gummies CBD 1"
  },
  {
      _id: 15, 
      title: "Gummies CBD 2"
  },
  {
      _id: 16, 
      title: "Bonbons colorés"
  },
  ]

  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search ", searchTerm);
  };

  
  return (
    <div class={styles.searchbox}>
      <input type="text" value={value} onChange={onChange} className={styles.searchboxInput} placeholder="Cherchez votre produit" 
      />
      <svg
        class={styles.searchbox__icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56.966 56.966"
      >
        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
      </svg>
            <div className={styles.dropdown}>
            {dataSearhcBar
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const title = item.title.toLowerCase();

                return (
                  searchTerm &&
                  title.startsWith(searchTerm) &&
                  title !== searchTerm
                );
              })
              .slice(0, 10)
              .map((item) => (
                <Link to={`/details/${item._id}`}>
                <div
                  onClick={() => onSearch(item.title)}
                  className={styles.dropdownRow}
                  key={item.title}
                >
                  {item.title}
                </div>
                </Link>
              ))}
          </div>
    </div>

  );

};

const mapStateToProps = (state) => ({
    item:state.item
  })

  export default connect(mapStateToProps, {getItems}) (Searchbox);
