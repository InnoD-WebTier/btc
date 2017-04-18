import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Picture from '../components/Picture';
import Title from '../components/Title';

const IndexComponent = () => (
  <div className="home">
    <Helmet
      title="Biofuels Technology Club"
      meta={[
        {
          name: 'BTC @ Berkeley',
          content: 'BTC @ Berkeley',
        },
        {
          name: 'Biofuels Technology Club',
          content: 'Biofuels Technology Club',
        },
      ]}
    />
    <div className="hero">
      <Picture url={prefixLink('/img/wallpaper.jpg')} />
    </div>
    <div className="section section--about">
      <div className="section__container">
        <Title text="ABOUT US" />
        <div className="subtitle">Mission</div>
        <div className="section__content">
          We are a student organization inspired by the unbounded potential and
          sustainability of biofuel technologies and driven to explore beyond classroom theory.
          Our dream is to utilize all the biowaste
          streams of UC Berkeley by implementing cutting-edge
          biofuels research into a scaled bioenergy manufacturing plant and ultimately bring clean
          and renewable energy back into UC Berkeley and the surrounding city.
        </div>
        <div className="subtitle">Values</div>
        <div className="section__content">
          <b>Ingenuity</b> - As students, we pride ourselves in exploring the unexplored.
          Surrounded by the brilliance and inventiveness rooted in our university culture,
          we dare to pioneer and actualize “crazy” ideas.<br /><br />

          <b>Safety</b> - Taking satisfaction in the extremely hands-on work we do,
          we conclude there are no shortcuts or expectations in safety;
          our utmost priority is to keep our team safe.<br /><br />

          <b>Teamwork</b> - Our team of diverse individuals share a passion for problem-solving,
          sustainability, and most importantly, having fun; we find these are the
          perfect ingredients for synergy.<br /><br />
        </div>
      </div>
    </div>
    <div className="section section--partners">
      <div className="section__container">
        <Title text="PARTNERS" />
        The Biofuels Initiative began in 2012 as a simple idea:
        turning waste cooking oil from the dining commons into usable biodiesel.
        Two years later, this idea grew into a proposal project written
        by four students in their Technical Communications (CBE 185) course.
      </div>
    </div>
  </div>
);

export default IndexComponent;

