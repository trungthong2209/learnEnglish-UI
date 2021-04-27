import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";


BlockLive.propTypes = {
    
};

// share


function BlockLive(props) {
    const loggedInUser = useSelector((state) => state.user.current);
    return (
        <div>
            {loggedInUser._id =="60768f44c3f0a0ade9846736" ? 
            <div>
                <button id='my-button-start'>Bắt đầu</button>
                <video autoplay id="video-share"></video>
            </div>
             : 
             <div>
                 <video autoplay id='video-view'></video>
                 <button id="my-button-view">Xem trực tiếp</button>
             </div>
        
        }
            
        </div>
    );
}

export default BlockLive;