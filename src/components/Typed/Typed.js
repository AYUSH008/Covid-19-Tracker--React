import React from 'react';
import Typed from 'react-typed';
import { Typography } from '@material-ui/core';


class TypedText extends React.Component {

    render() {
        return (
            <div>
                <Typography variant="h5" color="primary" gutterBottom>
                <Typed
                    strings={['World Corona Tracker.','India Corona Tracker.','Detailed Corona Analysis']}
                    typeSpeed={60}
                    backspeed={40} 
                    loop/>
                <br />
                </Typography>
            </div>

        );

    }
}

export default TypedText;