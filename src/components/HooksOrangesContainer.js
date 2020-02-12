import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { buyOrange } from '../redux/oranges/orangesActions';


function HooksOrangesContainer() {
    
    // const initialNumOfOranges = 15;
    // const [numOfOranges, setNumOfOranges] = useState(initialNumOfOranges)
    const numOfOranges = useSelector(state => state.oranges.numOfOranges);
    const dispatch = useDispatch();
    
    return (
        <div>
<h2>Num of Oranges: {numOfOranges}</h2>
            <button disabled={numOfOranges < 1} onClick={()=> 
            dispatch(buyOrange())
            }>
                {numOfOranges < 1 ? <Nomore/> : <h3>Buy Oranges</h3>}</button>
        </div>
    );
    
     }     
    const Nomore = () => {
    return (
        <h3>Sorry, no more oranges</h3>
    )
    
}

export default HooksOrangesContainer;