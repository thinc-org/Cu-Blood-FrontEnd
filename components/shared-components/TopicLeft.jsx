import React from 'react';

export default ({ borderColor, english, thai, englishColor, thaiColor }) => {
    return (
        <div className="font-cu-heading py-10 h-auto flex flex-col items-start">
            <div className={`text-base tracking-wide font-normal ${englishColor}`}>{english}</div>
            <div className={`text-3xl font-black ${thaiColor}`}>{thai}</div>
            <hr className={`w-24 mx-0 mt-2 ${borderColor}`} style={{ borderBottomWidth: "6px" }} />
        </div>
    );
}