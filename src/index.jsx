import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Mask from './Mask';
import Source from './Source';

const wrapperStyle = {
  position: 'relative',
};

const videoStyle = {
  width: '100%',
};

export default class SublimeVideo extends React.Component {
  constructor(props) {
    super(props);

    this.handleMaskClick = this.handleMaskClick.bind(this);
  }

  handleMaskClick(playing) {
    const video = ReactDOM.findDOMNode(this.refs.video);
    if (playing) {
      setTimeout(() => video.play(), 600);
    } else {
      video.pause();
    }
  }

  render() {
    const { style, autoPlay, children, ...rest } = this.props;
    return (
      <section style={{...wrapperStyle, ...style}}>
        <video ref="video" {...rest} autoPlay={autoPlay} style={videoStyle}>
          { children }
        </video>
        <Mask defaultVisible={!autoPlay}
          onClick={this.handleMaskClick} />
      </section>
    );
  }
}

SublimeVideo.propTypes = {
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
};

SublimeVideo.Source = Source;