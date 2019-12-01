import React from 'react';  

const Popup = (props) => {  
    return (  
        <div style={style.popup}>  
            <div style={style.popup_inner}>  
                {props.children}
            </div>  
        </div>  
    );  
}  

const style = {
    popup: {  
        position: 'fixed',  
        width: '100%',
        height: '100%',  
        top: 0,  
        left: 0,  
        margin: 'auto',  
        backgroundColor: 'rgba(0,0,0, 0.5)',
        alignItems: 'middle',
      },
    popup_inner: {
        position: 'absolute',  
        borderRadius: 10,  
        background: 'white',
        padding: 30,
        top: '20%',
        left: '50%',
        margin: '-100px 0 0 -400px',
        maxWidth: 800
      } 
  }

export default Popup;