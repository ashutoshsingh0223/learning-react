import React from 'react';

const seasonConfig = {
    summer: {text: 'summer', icon: 'sun icon'},
    winter: {text: 'winter', icon: 'snowflake icon'}
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // const text = season === 'summer' ? 'Lets hit the bach' : 'Burrr, it is chilly';
    // const icon = season === 'summer' ? 'sun icon' : 'snowflake icon';
    
    return (
        <div>
            <i className={seasonConfig[season].icon} />
            <h1>{seasonConfig[season].text}</h1>
            <i className={seasonConfig[season].icon} />
        </div>
    )
}



export default SeasonDisplay;