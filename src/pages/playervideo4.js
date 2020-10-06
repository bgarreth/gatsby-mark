import React, { Component } from 'react';
import { Player, ControlBar, BigPlayButton, LoadingSpinner } from 'video-react';
import {
    MDBBtnGroup,
    MDBContainer, MDBCol, MDBRow, MDBBtn, MDBCard, MDBChip, MDBScrollspyText,
    MDBCardBody, MDBRotatingCard, MDBIcon, MDBCardVideo, MDBBox
} from "mdbreact";


const sources = {
    VideoOne: 'https://snowtv-converted-public.s3-ap-southeast-2.amazonaws.com/assets/brittCox/h264/britt.mp4',
    VideoTwo: 'https://snowtv-converted-public.s3-ap-southeast-2.amazonaws.com/assets/thredbo/h264/LucyMacSwiney.mp4',
    VideoThree: 'https://snowtv-converted-public.s3-ap-southeast-2.amazonaws.com/assets/thredbo/h264/JohnFalkiner2.mp4',
    VideoFour: 'https://snowtv-converted-public.s3-ap-southeast-2.amazonaws.com/assets/thredbo/h264/ColinMorison.mp4',
};

export default class PlayerVideo4 extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            source: sources.VideoOne
        };
        this.play = this.play.bind(this);
        this.toggleFullscreen = this.toggleFullscreen.bind(this);
        this.pause = this.pause.bind(this);
        this.load = this.load.bind(this);
        this.changeCurrentTime = this.changeCurrentTime.bind(this);
        this.seek = this.seek.bind(this);
        this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.setMuted = this.setMuted.bind(this);
    }

    componentDidMount() {
        // subscribe state change
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    setMuted(muted) {
        return () => {
            this.player.muted = muted;
        };
    }

    handleStateChange(state) {
        // copy player state to this component's state
        this.setState({
            player: state
        });
    }

    play() {
        this.player.play();
    }
    toggleFullscreen() {
        this.player.toggleFullscreen();
    }

    pause() {
        this.player.pause();
    }

    load() {
        this.player.load();
    }

    changeCurrentTime(seconds) {
        return () => {
            const { player } = this.player.getState();
            this.player.seek(player.currentTime + seconds);
        };
    }

    seek(seconds) {
        return () => {
            this.player.seek(seconds);
        };
    }

    changePlaybackRateRate(steps) {
        return () => {
            const { player } = this.player.getState();
            this.player.playbackRate = player.playbackRate + steps;
        };
    }

    changeVolume(steps) {
        return () => {
            const { player } = this.player.getState();
            this.player.volume = player.volume + steps;
        };
    }

    changeSource(name) {
        return () => {
            this.setState({
                source: sources[name]
            });
            this.player.load();
        };
    }

    render() {
        return (
            <div>
                <MDBBox className="VideoPlayer1">
                    <Player
                        ref={player => {
                            this.player = player;
                        }}
                        autoplay="false"
                        poster="/images/mountainwhite.svg"
                    >
                        <source src={this.state.source} />
                        <ControlBar autoHide={false} />
                        <LoadingSpinner />
                        <BigPlayButton position="center" />
                    </Player>
                    <MDBBtnGroup size="sm" blue gradient="blue" className="mr-2">
                        <MDBBtn rounded gradient="blue" onClick={this.play}><MDBIcon size="2x" icon="play-circle"></MDBIcon></MDBBtn>
                        <MDBBtn gradient="blue" onClick={this.pause}><MDBIcon size="2x" icon="pause-circle"></MDBIcon></MDBBtn>
                        <MDBBtn gradient="blue" onClick={this.changeVolume(-0.2)}><MDBIcon size="2x" icon="volume-down"></MDBIcon></MDBBtn>
                        <MDBBtn gradient="blue" onClick={this.changeVolume(0.2)}><MDBIcon size="2x" icon="volume-up"></MDBIcon></MDBBtn>
                        <MDBBtn gradient="blue" onClick={this.changeVolume(0.2)}><MDBIcon size="2x" icon="volume-up"></MDBIcon></MDBBtn>
                        <MDBBtn rounded gradient="blue" onClick={this.toggleFullscreen}><MDBIcon size="2x" icon="expand"></MDBIcon></MDBBtn>
                        <MDBBtn gradient="blue" onClick={this.changeSource('VideoOne')}> Video 1</MDBBtn >
                        <MDBBtn gradient="blue" onClick={this.changeSource('VideoTwo')}> Video 2</MDBBtn >
                        <MDBBtn gradient="blue" onClick={this.changeSource('VideoThree')}> Video 3</MDBBtn >
                        <MDBBtn rounded gradient="blue" onClick={this.changeSource('VideoFour')}> Video 4</MDBBtn >
                    </MDBBtnGroup >

                </MDBBox>












            </div >
        );
    }
}