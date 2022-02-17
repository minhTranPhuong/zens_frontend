import React from 'react';

function Content(props){
    return (
        <div style={{margin:'3em 6em'}}>
            <div style={{padding: '1em 6em'}}>
                {   
                    props.data !== undefined && props.data.length !== 0 ? 
                    props.data.content : 
                    "That's all the jokes for today! Come back another day!"
                }
            </div>
            <hr style={{margin: '3em 12em 3em 12em'}}/>
        </div>
    )
}

export default Content;