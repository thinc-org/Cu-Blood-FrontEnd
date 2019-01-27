import React from 'react';

export default ({bigText, smallText, isBold, align}) => {
    let al = '' // defaut is text-left
    if(align === 'text-right') {
        al = 'text-right'
    } else if(align === 'text-center') {
        al = 'text-center'
    }

    return(
        <div className="flex flex-col font-cu-heading mb-4 md:mb-0 text-center md:text-left">
            <div className={"text-xl mb-1 " + (isBold ? 'font-bold' : '')} style={{color: "#333333"}}>{bigText}</div>
            <div className={"text-lg text-cb-pink " + al}>{smallText}</div>
        </div>
    );
}