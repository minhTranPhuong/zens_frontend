import React from 'react';

function Voted(props){
    return (
        <div>
            <button 
            style={{backgroundColor: 'blue' , color: 'white', padding:'0.6em 2em' , borderRadius:'0.3em' , marginRight:'0.3em' , poiter:'cursor'}}
             onClick={()=>{props.data.handleLike('like' , props.data.content.id)}}
            >
                This is funny!
            </button>
            <button 
            style={{backgroundColor: 'green' , color: 'white' , padding:'0.6em 2em' , borderRadius:'0.3em' , marginRight:'0.3em' , poiter :'cursor'}}
            onClick={()=>{props.data.handleLike('dislike', props.data.content.id)}}
            >
                This is not funny.
            </button>
        </div>
    )
}

export default Voted;