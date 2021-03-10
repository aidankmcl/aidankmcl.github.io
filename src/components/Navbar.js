import React from "react";
import { Link } from "gatsby";
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from 'styled-components';

import { Colors, useWindowSize } from "../utilities";
import NavbarToggle from '../images/graphics/hamburger.svg';

export const links = [
  {
    link: '/#home',
    text: 'Home'
  },
  {
    link: '/#experience',
    text: 'Experience'
  },
  {
    link: '/#contact',
    text: 'Contact'
  },
];

const MOBILE_NAV_BREAKPOINT = 450;
const MOBILE_NAV_TOGGLE_SIZE = 50;

const NavbarContainer = styled.div`
  position: fixed;
  z-index: 10;
  padding: 0.5rem 0;
  top: 0;
  left: 0;
  width: 100%;
  transition: background 0.3s linear;
  background: ${({ atTop, isMobileNavOpen }) => atTop && !isMobileNavOpen ? 'none' : 'white'};
`;

const MobileNavToggle = styled.div`
  position: relative;
  text-align: right;
  padding-right: 0.5rem;
  z-index: 20;
  cursor: pointer;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  text-align: center;

  li {
    display-type: none;
    display: inline-block;
    font-family: 'Yeseva One', serif;
    font-size: 1.5rem;
    padding: 1rem;

    a {
      color: black;
      text-decoration: none;
    }
  }

  li.active {
    a {
      color: ${Colors.purple};
    }

    a::after {
      content: " ";
      display: block;
      width: 100%;
      height: 3px;
      background: ${Colors.purple};
      position: relative;
      bottom: 0;
    }
  }

  @media (max-width: ${MOBILE_NAV_BREAKPOINT}px) {
    transition: max-height 0.3s linear;
    transition-delay: 0s;
    max-height: 0;
    overflow: hidden;
    
    li a, li.active a {
      color: white;
      transition: color 0.2s linear;
    }

    li.active a::after {
      background: none;
      transition: background 0.2s linear;
    }

    ${({ isMobileNavOpen }) => isMobileNavOpen && `
      max-height: 50vh;

      li a {
        color: black;
      }

      li.active a {
        color: ${Colors.purple};
      }

      li.active a::after {
        background: ${Colors.purple};
      }
    `}
  }
`;

const getScroll = () => {
  if (typeof window.pageYOffset == 'number' ) {
    // IE
    return window.pageYOffset;
  } else if (document.body && document.body.scrollTop)  {
    return document.body.scrollTop;
  } 
}

const getScrollHeights = () => {
  const scrollHeights = {};
  document.querySelectorAll('.scroll-anchor').forEach((node) => {
    scrollHeights[node.id] = node.offsetTop;
  });
  return scrollHeights;
};

export const Navbar = ({ target, children }) => {
  const [activeSection, setActiveSection] = React.useState('');
  const [isAtPageTop, setPageTopFlag] = React.useState(true);
  const [isMobileNavOpen, setMobileNavOpen] = React.useState(false);
  const { width } = useWindowSize();
  // This will be used to determine section in view, reversed so that the first
  // item lower than scroll depth is the lowest available section
  var bottomToTopSections = React.useRef([]);

  React.useEffect(() => {
    // This target is passed down with Gatsby navigation logic, coming into play
    // when the page has been navigated to from an article page.
    if (target) scrollTo(target);
  }, [target]);

  // Looks at the current scroll height and determines which section is in view
  const updateSection = React.useCallback(() => {
    const rawScroll = getScroll();
    setPageTopFlag(rawScroll < 10);

    if (!bottomToTopSections.current.length) {
      bottomToTopSections.current = Object.entries(getScrollHeights())
        .sort((a, b) => b[1] - a[1]);

      if (!bottomToTopSections.current.length) return;
    };

    const scroll = rawScroll + window.innerHeight / 2;
    if (scroll + window.innerHeight / 2 > bottomToTopSections.current[0][1]) {
      setActiveSection('#' + bottomToTopSections.current[0][0]);
    } else {
      const section = bottomToTopSections.current.find(([id, height]) => scroll > height);
      if (section) setActiveSection('#' + section[0]);
    }
  }, [bottomToTopSections]);

  // When the section changes, the URL hash is changed to reflect the new location.
  React.useEffect(() => {
    // Make sure URL hash is updated
    if (window.location.pathname === '/' && window.history.pushState && activeSection) {
      window.history.pushState(null, null, activeSection);
    };

    // Otherwise confirm that activeSection is updated if user has just landed on the page
    if (!activeSection) updateSection();
  }, [activeSection, updateSection]);

  // This is to make sure scroll depths are set properly, so we must wait for the page to be loaded.
  React.useEffect(() => {
    const loadHandler = (event) => {
      bottomToTopSections.current = Object.entries(getScrollHeights())
        .sort((a, b) => b[1] - a[1]);

      if (window.location.hash) scrollTo(window.location.hash);
    };

    window.addEventListener('load', loadHandler);
    return () => window.removeEventListener('load', loadHandler);
  }, []);

  // Finally, this sets up the update run on every scroll
  React.useEffect(() => {
    window.addEventListener("scroll", updateSection, false);
    return () => window.removeEventListener("scroll", updateSection, false);
  }, [updateSection]);

  return (
    <NavbarContainer atTop={isAtPageTop} isMobileNavOpen={isMobileNavOpen}>
      {(width < MOBILE_NAV_BREAKPOINT) ? (
        <>
          <MobileNavToggle  onClick={() => setMobileNavOpen(!isMobileNavOpen)}>
            <NavbarToggle style={{ width: MOBILE_NAV_TOGGLE_SIZE, height: MOBILE_NAV_TOGGLE_SIZE }} />
          </MobileNavToggle>

          <List isMobileNavOpen={isMobileNavOpen}>
            {links.map(({ link, text }) => (
              <React.Fragment key={text}>
                <li  className={activeSection === link.slice(1) ? 'active' : ''}>
                  <Link to={activeSection ? '/' + activeSection : '/'} state={{ target: link.slice(1) }}>{text}</Link>
                </li>
                <br/>
              </React.Fragment>
            ))}
          </List>
        </>
      ) : (
        <List>
          {links.map(({ link, text }) => (
            <li key={text} className={activeSection === link.slice(1) ? 'active' : ''}>
              <Link to={activeSection ? '/' + activeSection : '/'} state={{ target: link.slice(1) }}>{text}</Link>
            </li>
          ))}
        </List>
      )}
    </NavbarContainer>
  );
};
