import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { carouselData, goalData } from "../../../mocks/mockData";
import { CarouselItem } from "../../molecules/carouselItem/carouselItem";
import { DiscoverFoodCard } from "../../molecules/discoverFoodCard/discoverFoodCard";
import { Footer } from "../../molecules/footer/footer";
import { GoalCard } from "../../molecules/goalCard/goalCard";
import styles from './home.module.css'

const HomeTemplate = () => {
  return (
    <div className={styles.homeContainer}>

      <section className={styles.titleTextSection}>
        <p className={styles.titleText}>Hello There!</p>
        <p className={styles.subtitleText}>Find, track and eat heathy food.</p>
      </section>

      <section className={styles.challengeCarousel}>
        <Carousel swipeable={true} autoPlay showArrows={false} showStatus={false} showThumbs={false} useKeyboardArrows={true} infiniteLoop={true}
          renderIndicator={(onClickHandler, isSelected, index) => {
            const defStyle = { marginLeft: 6, width: 12, height: 8, color: "white", cursor: "pointer", backgroundColor: "#D6D8DA", borderRadius: 16, display: "inline-block" };
            const style = isSelected
              ? { ...defStyle, width: 20, height: 10, backgroundColor: "#8338ec", }
              : { ...defStyle };
            return (
              <p
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
              />
            );
          }}
        >
          {carouselData.map((item, key) => {
            return <CarouselItem key={key} imgUrl={item.imgUrl} newText={item.newText} challengeText={item.challengeText} />
          })}
        </Carousel>
      </section>

      <section>
        <DiscoverFoodCard />
      </section>

      <section className={styles.goalSection}>
        <p className={styles.goalTitle}>Start a new goal</p>
        <div className={styles.goalCards}>
          {goalData.map((item, key) => {
            return <GoalCard key={key} imgUrl={item.imgUrl} title={item.title} timeLimit={item.timeLimit} />
          })}
        </div>
      </section>
    </div >
  );
};

export default HomeTemplate;
