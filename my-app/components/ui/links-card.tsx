import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

  import { FaCopyright } from "react-icons/fa";



  import {SocialIcon} from 'react-social-icons';

  export const LinksCard = () => {
    return (
      <div className="w-80 m-12 scale-75 md:scale-100" >
        <Card>
          <CardHeader>
              <CardTitle>Follow Us</CardTitle>
              <CardDescription>Stay up to date by subscribing to our socials</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
                <SocialIcon url="https://www.instagram.com/" className="m-4"/>
                <SocialIcon url="https://www.facebook.com/" className="m-4"/>
                <SocialIcon url="https://www.twitter.com/" className="m-4"/>
                <SocialIcon url="https://www.linkedin.com/" className="m-4"/>
                <SocialIcon url="https://www.youtube.com/" className="m-4"/>
                <SocialIcon url="https://www.pinterest.com/" className="m-4"/>
            </p>
          </CardContent>
          <CardFooter>
            <p className="font-thin italic font-serif inline-flex"><FaCopyright/>2024 Dynamic Solutions LLC all rights reserved</p>
          </CardFooter>
        </Card>
      </div>
    );
  };
  
  export default LinksCard;