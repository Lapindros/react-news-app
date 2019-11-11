import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import './spinner.less';

class Spinner extends React.Component {

    render() {
        return (
            <div className='spinner'>
                <Loader
                    type="TailSpin"
                    color="#000000"
                    height={50}
                    width={50}
                />
            </div>
        );
    };
}

export default Spinner;