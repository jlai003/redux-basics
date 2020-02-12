import React from 'react';
// import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import buyBanana from '../redux/bananas/bananasActions'
// import buyBanana from '../redux/index'

function BananasContainer(props) { 
    return (
        <div>
<h2 id="count">Num of Bananas: {props.numOfBananas}</h2>
            <button onClick={props.buyBanan } disabled={props.numOfBananas < 1}>
            {props.numOfBananas < 1 ? <Nomore /> :  <h3>Buy Banana</h3> }</button>
    <div> </div>
        </div>
    );
}
const Nomore = () => {
    return (        
            <h3>Sorry, no more bananas</h3>
    )
}
const mapStateToProps = state => {
    return {
        numOfBananas: state.bananas.numOfBananas
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyBanan: () => dispatch(buyBanana())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BananasContainer);