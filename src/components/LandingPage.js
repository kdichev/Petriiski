import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
console.log(<Fade />);

const bgSrc = ["https://goo.gl/ztv8G3", "https://goo.gl/hBdTKY"];
const logoSrc = "https://goo.gl/7dXQ7i";

const FullScreenBackground = styled.div`
  background-image: ${props => `url(${bgSrc[1]})`};
  background-size: cover;
  background-position: center top;
  height: 100vh;
`;

const Shadow = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FullScreenSection = props => (
  <FullScreenBackground>
    <Shadow>
      <ContentWrapper>{props.children}</ContentWrapper>
    </Shadow>
  </FullScreenBackground>
);

const EnchancedAppBar = withStyles({
  colorDefault: { backgroundColor: "transparent" }
})(AppBar);

const Header = props => (
  <EnchancedAppBar position="fixed" color="default" elevation={0}>
    <Toolbar>{/*<img src={logoSrc} width="50" />*/}</Toolbar>
  </EnchancedAppBar>
);

const LandingPage = () => (
  <div>
    <FullScreenSection>
      <Header />
      <Fade in={true}>
        <img src={logoSrc} />
        <Typography color="secondary" variant="display3">
          WHERE ART AND FASHION COMES TOGETHER
        </Typography>
      </Fade>
    </FullScreenSection>
  </div>
);

export default LandingPage;
