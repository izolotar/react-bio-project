import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HStack, Link } from "@chakra-ui/react";
// This new list component uses the data provided in the Header component and displays
// a list of buttons with icons for the corresponding social media that open those social media
// on a button click

const SocialMediaList = (props) => {
    const socialMediaList = props.data
      .map((socialMedia) => {
        return (
            <Link
                key={socialMedia.name}
                href={socialMedia.url}
                target="_blank"
                alt={socialMedia.name}
                data-testid={socialMedia.name}
            >
                <FontAwesomeIcon icon={socialMedia.icon} size="2x" />
            </Link>
        );
      });
    return <HStack spacing={8}>{socialMediaList}</HStack>;
  };
  
  export default SocialMediaList;