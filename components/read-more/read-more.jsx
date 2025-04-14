"use client"
import React, { useState } from "react";

const ReadMore = ({ text, defaultWords = 20 }) => {
    const wordsArray = text.split(" ");
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <p>{isExpanded ? text : wordsArray.slice(0, defaultWords).join(" ") + "..."}</p>
            {/* {wordsArray.length > defaultWords && <button type="button" className="btn btn-sm btn-light border" onClick={handleToggle}>{isExpanded ? "read less..." : "read more..."}</button>} */}
        </div>
    );
};

export default ReadMore;