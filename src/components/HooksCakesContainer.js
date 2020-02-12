import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {buyCake} from '../redux/cakes/cakesActions'

function HooksCakesContainer(props) {
    const numOfCakes = useSelector(state => state.cakes.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of cakes: {numOfCakes}</h2>
            <button disabled ={numOfCakes <1 } onClick={()=> dispatch(buyCake())}>
                {numOfCakes <1 ? <Nomore/> : <h3>Buy cake </h3>}</button>

        </div>
    );
}
const Nomore = () => {
    return (        
            <h3>Sorry, no more cakes</h3>
    )
}

export default HooksCakesContainer;
