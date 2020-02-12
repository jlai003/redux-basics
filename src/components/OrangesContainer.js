import React, { Component } from 'react';
import {connect} from 'react-redux';
import {buyOrange} from '../redux/oranges/orangesActions'

class OrangesContainer extends Component {
    
    render(props) {
        const {numOfOranges, buyOrange} = this.props
        return (
            <div>
                <h2>Num of oranges: {numOfOranges}</h2>
                <button onClick={buyOrange} disabled={numOfOranges<1}> 
        {numOfOranges < 1 ? <h3>No more oranges</h3> : <h3>Buy Orange</h3>}</button>
            </div>
        );
    }
}
const mapStateToProps=(state) => {
    return {
        numOfOranges: state.oranges.numOfOranges
    }
}
const mapDispatchToProps=(dispatch) => {
    return {
        buyOrange: () => dispatch(buyOrange())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (OrangesContainer);