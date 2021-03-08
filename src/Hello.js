import React from 'react';

function Hello({color, name, isSpecial}) {
    return (
        <div style={{color}}>
        {isSpecial && <b>*</b>}
        안녕하세요!!zzz {name}
        </div>);
}


Hello.defaultProps = {
    name : ': default, 이름없다'
}

export default Hello;