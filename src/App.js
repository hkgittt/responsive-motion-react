import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import { TransitionMotion } from 'react-motion';
import { Watch } from 'scrollmonitor-react';
import logo from './logo.svg';
import './App.css';
import { media } from 'utils/style-utils';

const Card = styled.div`
  margin: 10px 0;
  width: 100%;
  height: auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: all 1s;
  border: 1px solid #AAAAAA;

  ${media.sm`
  `
  }

  ${media.lg`
    height: 500px;
    flex-direction: row;
  `
  }
`

const CardTitle = styled.div`
  width: 100%;
  color: #444444;
  text-align: left;
  transition: all 1s;
  flex-shrink: 1;
  padding-top: 100px;
  padding-left: 10px;

  ${media.sm`
    padding-top: 200px;
  `
  }

  ${media.lg`
    flex-basis: 50%;
    padding-top: 250px;
  `
  }
`

const CardContent = styled.div`
  background-color: white;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  flex-shrink: 0;
  flex-grow: 1;
  text-align: left;
  font-size: 0.7em;
  padding: 10px;

  ${media.sm`
    font-size: 1em;
  `
  }

  ${media.lg`
    flex-basis: 50%;
    border-bottom-left-radius: 0;
    border-top-right-radius: inherit;
  `
  }
`

const GoldCard = styled(Card)`
  background-color: #ffb700;
`

const BlueCard = styled(Card)`
  background-color: #357edd;
`

const WatchedComp = Watch(class Comp extends React.Component {
  render() {
    let text;
    if (this.props.isInViewport) {
      text = 'I AM in the viewport!';
    } else {
      text = 'You will never see this because it gets replaced when it enters the viewport.'
    }

    return (<span>
      {text}
      {this.props.children}
    </span>);
  }
})



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Grid>
          <Row>
            <Col xs={6} md={3} lg={6}>
              <GoldCard>
                <CardTitle>
                 First Card 
                </CardTitle>
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod iste voluptate nulla similique rem iure, eos nostrum asperiores quam mollitia, repellat, amet atque sed cupiditate neque accusamus ullam. Tempora, mollitia!                    
                  </p>
                </CardContent>
              </GoldCard>
            </Col>
            <Col xs={6} md={3} lg={6}>
              <GoldCard>
                <CardTitle>
                 Second Card 
                </CardTitle>
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod iste voluptate nulla similique rem iure, eos nostrum asperiores quam mollitia, repellat, amet atque sed cupiditate neque accusamus ullam. Tempora, mollitia!                    
                  </p>
                </CardContent>
              </GoldCard>
            </Col>
            <Col xs={6} md={3} lg={6}>
              <BlueCard>
                <CardTitle>
                 Third Card 
                </CardTitle>
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod iste voluptate nulla similique rem iure, eos nostrum asperiores quam mollitia, repellat, amet atque sed cupiditate neque accusamus ullam. Tempora, mollitia!                    
                  </p>
                </CardContent>
              </BlueCard>
            </Col>
            <Col xs={6} md={3} lg={6}>
              <BlueCard>
                <CardTitle>
                 Fourth Card 
                </CardTitle>
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod iste voluptate nulla similique rem iure, eos nostrum asperiores quam mollitia, repellat, amet atque sed cupiditate neque accusamus ullam. Tempora, mollitia!                    
                  </p>
                </CardContent>
              </BlueCard>
            </Col>
          </Row>
        </Grid>
        <WatchedComp>
        </WatchedComp>
      </div>
    );
  }
}

export default App;
