import React, { useEffect, useState } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";
import SocialMediaList from "./SocialMediaList";

const socials = [
  {
    name: "email",
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    name: "github",
    icon: faGithub,
    url: "https://github.com",
  },
  {
    name: "linkedin",
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    name: "medium",
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    name: "stackoverflow",
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // scrolling down
        setShow(false); // hide the header
      } else {
        setShow(true);  // if not, show the header
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      // cleanup
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    show && <Box // hide or show header based on scrolling direction
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <SocialMediaList data={socials}></SocialMediaList>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Link href="#projects" onClick={handleClick("projects")} alt="projects">
                Projects
              </Link>
              <Link href="#contact-me" onClick={handleClick("contactme")} alt="contact me">
                Contact me
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
