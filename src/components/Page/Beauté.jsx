import React from 'react';
import { connect } from 'react-redux';

const Beauté = () => {
    return (
        <div>
            <p>Aucun produit sur la Page Beauté</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    item:state.item
  })
  
  export default connect(mapStateToProps) (Beauté);