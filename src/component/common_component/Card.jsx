import React, { useState } from 'react'
import Detail from './Detail';

function Card(props) {
    const [visible, setVisibility] = useState(false);

    const defineVisibility = () => {
        setVisibility(true);
    }
     let details= props;
    let cut = () => {
        setVisibility(false);
    }

    if(props.img!=undefined&&props.rate!=undefined)
        return (
            <>
                <div className='card-container' onClick={defineVisibility}>
                    <div className='card-div'>
                        <img src={props.img} alt="img" />
                        <div className='title-div'>
                            <h3>{props.title}</h3>
                            <h5>{`rate..=${props.rate}`}</h5>
                        </div>
                    </div>
                </div>
                {visible ? <Detail details={details} cut={cut} /> : null}
            </>
        );

}

export default Card;
