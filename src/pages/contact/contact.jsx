import { Social } from "../../components/social/social";
import "./contact.scss";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.png";
import twitch from "../../assets/twitch.png";
import deviantart from "../../assets/deviantart.png";
import vimeo from "../../assets/vimeo.png";

export const Contact = () => {
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, ex.
        Numquam iure nemo tenetur tempora, neque quidem dolorem assumenda vel.
      </span>

      <div className="socials">
        <Social logo={github} title="GitHub" />
        <Social logo={linkedin} title="Linkedin" />
        <Social logo={twitter} title="Twitter" />
        <Social logo={discord} title="Discord" />
        <Social logo={whatsapp} title="Whatsapp" />
        <Social logo={facebook} title="Facebook" />
        <Social logo={twitch} title="twitch" />
        <Social logo={deviantart} title="Deviantart" />
        <Social logo={vimeo} title="Vimeo" />
      </div>

      <footer>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          consequuntur reprehenderit in quas iure necessitatibus, fugiat.
        </span>
      </footer>
    </div>
  );
};
