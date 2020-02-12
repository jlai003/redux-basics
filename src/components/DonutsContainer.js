import React from 'react';
import {connect} from 'react-redux'
import buyDonut from '../redux/donuts/donutsActions';

function DonutsContainer(props) {
    return (
        <div>
<h2>Num of Donuts: {props.numOfDonuts}</h2>
            <button onClick={props.buyDonut}disabled={props.numOfDonuts < 1}>
    {props.numOfDonuts < 1 ? <Nomore/> : <h3>Buy Donuts</h3>}</button>

        </div>
    );
}
const Nomore = () => {
    return (        
            <h3>Sorry, no more donuts</h3>
    )
}
const mapStateToProps= (state) => {
    return { numOfDonuts: state.donuts.numOfDonuts }
}
const mapDispatchToProps = (dispatch) => {
    return {buyDonut: () => dispatch(buyDonut())} 
}
export default connect(mapStateToProps, mapDispatchToProps) (DonutsContainer);