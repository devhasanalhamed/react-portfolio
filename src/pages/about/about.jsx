import { InfoCard } from "../../components/info_card/info_card";
import "./about.scss";

export const About = () => {
  return (
    <div className="about">
      <div className="name">
        <div>
          {" "}
          <h1 className="txt">
            AB <br />
            OU
          </h1>
        </div>
        <h1 className="txt lg">T</h1>
        <div className="me">ME</div>
      </div>
      <div className="info">
        <InfoCard
          title="About Me"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vero?
        Tempore cupiditate dolores nulla molestiae itaque sapiente voluptate
        facere numquam maxime. Qui animi nobis consectetur autem quibusdam,
        veritatis debitis tempora ea ipsam. Architecto sequi libero beatae,
        ipsam quam fuga reiciendis laudantium labore quae odio quia, perferendis
        deleniti perspiciatis veritatis nulla."
        />
        <InfoCard
          title="Education"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vero?
        Tempore cupiditate dolores nulla molestiae itaque sapiente voluptate
        facere numquam maxime. Qui animi nobis consectetur autem quibusdam,
        veritatis debitis tempora ea ipsam. Architecto sequi libero beatae,
        ipsam quam fuga reiciendis laudantium labore quae odio quia, perferendis
        deleniti perspiciatis veritatis nulla."
        />
        <InfoCard
          title="Skills"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vero?
        Tempore cupiditate dolores nulla molestiae itaque sapiente voluptate
        facere numquam maxime. Qui animi nobis consectetur autem quibusdam,
        veritatis debitis tempora ea ipsam. Architecto sequi libero beatae,
        ipsam quam fuga reiciendis laudantium labore quae odio quia, perferendis
        deleniti perspiciatis veritatis nulla."
        />
        <InfoCard
          title="Social Life"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vero?
        Tempore cupiditate dolores nulla molestiae itaque sapiente voluptate
        facere numquam maxime. Qui animi nobis consectetur autem quibusdam,
        veritatis debitis tempora ea ipsam. Architecto sequi libero beatae,
        ipsam quam fuga reiciendis laudantium labore quae odio quia, perferendis
        deleniti perspiciatis veritatis nulla."
        />
      </div>
    </div>
  );
};
