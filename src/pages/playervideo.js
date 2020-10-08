import React, { Component } from 'react';
import { Player, ControlBar, BigPlayButton, LoadingSpinner } from 'video-react';
import {
    MDBBtnGroup,
    MDBContainer, MDBCol, MDBRow, MDBBtn, MDBCard, MDBChip, MDBScrollspyText,
    MDBCardBody, MDBRotatingCard, MDBIcon, MDBCardVideo, MDBBox
} from "mdbreact";



/*Video source*/
const sources = {
    VideoOne: 'https://snowtv-converted-public.s3-ap-southeast-2.amazonaws.com/assets/brittCox/h264/britt.mp4',

};
export default class Playervideo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { source: sources.VideoOne };
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
    setMuted(muted) { return () => { this.player.muted = muted; }; }
    handleStateChange(state) {
        // copy player state to this component's state
        this.setState({ player: state });
    }
    play() { this.player.play(); }
    toggleFullscreen() { this.player.toggleFullscreen(); }
    pause() { this.player.pause(); }
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
    state = {
        flipped1: false,
    }
    
    handleFlipping = id => () => {
        const cardId = `flipped${id}`;
        this.setState({ [cardId]: !this.state[cardId] });
    }

    render() {
        return (
            <MDBContainer rounded  className="AccommodationCard1">
<MDBRow between>
          <MDBCol >
            <MDBRotatingCard flipped={this.state.flipped1} className="text-center h-100 w-100">
              <MDBCard border="default" className="face front">
               
                
                    <Player className="VideoPlayer1"
                        ref={player => {
                            this.player = player;
                        }}
                        autoplay="false"

                        poster="images/mountainwhite.svg"// current poster source needs to be dynamic from the video
                    >
                        <source src={this.state.source} />
                        <ControlBar autoHide={false} />
                        <LoadingSpinner />
                        <BigPlayButton position="center" />
                    </Player>
                    <MDBBtnGroup size="sm" blue gradient="blue"  >
                        <MDBBtn gradient="blue" onClick={this.pause}><MDBIcon size="2x" icon="pause-circle"></MDBIcon></MDBBtn>
                        <MDBBtn gradient="blue" onClick={this.changeVolume(-0.2)}><MDBIcon size="2x" icon="volume-down"></MDBIcon></MDBBtn>
                        <MDBBtn gradient="blue" onClick={this.changeVolume(0.2)}><MDBIcon size="2x" icon="volume-up"></MDBIcon></MDBBtn>
                        <MDBBtn gradient="blue" onClick={this.toggleFullscreen}><MDBIcon size="2x" icon="expand"></MDBIcon></MDBBtn>
                    </MDBBtnGroup >
                    <MDBCardBody>

                

                  <MDBRow>
                    
                    <MDBBtn
                      className="CardMainButton1"
                      float
                      size="sm"
                      href="/VideoIframePage"
                      color="default"
                      rounded
                    >
                      Falls Creek Motel {this.props.resortname}
                    </MDBBtn>
                    </MDBRow>
                    <MDBRow>
                    <p>In  Falls Creek</p>
                    </MDBRow>
                    
                  
                  <MDBCol >
                    <img
                      src="https://snowtv-converted-public.s3-ap-southeast-2.amazonaws.com/assets/FallsCreekMotel/thumbnail/FallsCreekMotel.png"
                      alt="AccommodationPicture"
                      className="img-thumbnail"
                      maxWidth
                    />
                  </MDBCol>
                  <MDBRow>
                  <MDBChip
                  className="flags1"
                        size="sm"
                        rounded
                        outline
                        src="./flags/au.png"
                        alt="Australia"
                        bgColor="white"
                        text="black"
                        waves
                        onClick={this.handleFlipping(1)}
                      >
                        {" "}
                        Accommodation
                      </MDBChip>
                  <MDBChip
                    size="sm"
                    rounded
                    outline
                    primary
                    className="rotate-btn text-dark"
                    onClick={this.handleFlipping(1)}
                  >  <MDBIcon icon="redo"  />
                  </MDBChip>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
              <MDBCard className="face back" >
                <MDBCardBody>
                <MDBBtn
                      className="CardMainButton1"
                      float
                      size="sm"
                      href="/VideoIframePage"
                      color="default"
                      rounded
                    >
                      Falls Creek Motel {this.props.resortname}
                    </MDBBtn>
                  <MDBScrollspyText className="scrollspy1"
                    onScroll={this.handleScroll}
                    scrollSpyRef={this.scrollSpyText}
                  >
                    <h4 id="section1">Section1 - Accommodation</h4>
                    <p id="section1-text">
                    Falls Creek Motel is situated in tehheart of the village
                        bowl right opposite the iconic summit run.
                      </p>

                    <h4 id="section1">Section 2 - Snow Sports Hire</h4>
                    <p id="section1-text">
                    Along with accomodation it also has in house ski and
                        snowboard hire.
                      
                      
                      
                      </p>
                  </MDBScrollspyText>



                  <MDBChip
                    size="sm"
                    rounded
                    outline
                    primary
                    className="rotate-btn text-dark"
                    onClick={this.handleFlipping(1)}
                  >  <MDBIcon icon="redo"  />
                  </MDBChip>
                </MDBCardBody>
              </MDBCard>
            </MDBRotatingCard>
          </MDBCol>
        </MDBRow>










            </MDBContainer>
        );
    }
}