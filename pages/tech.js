import React from 'react';
import Title from '../components/Title';
import Picture from '../components/Picture';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line


const tech = () => (
  <div className="tech">
    <Title text="TECH" />
    <hr />
    <div className="section--1">
      <div className="hero">
        <Title text="RESEARCH:" />
      </div>
      <div className="section__container">
        <div className="section__subhead">
          I. Basics of Transesterification
        </div>
        <div className="section__info">
          Vegetable oil, also called triglyceride, is transesterified with methanol to
          produce fatty acid methyl esters, or biodiesel, and byproduct glycerin.
          <Picture url={prefixLink('/img/process .png')} />
        </div>
      </div>
      <div className="section__container">
        <div className="section__subhead">
          II. Titration of Sample
        </div>
        <div className="section__info">
          Used cooking oil contain high levels of free fatty acids (FFAs), which hinders
          the efficiency of the transesterification reaction. FFAs can be removed from the
          reaction by titration with alkaline base. This titration produces soap, which is
          simply the alkaline salt of fatty acids, and can be more easily removed during processing.
          <Picture url={prefixLink('/img/titrationsample.jpg')} />
        </div>
      </div>
      <div className="section__container">
        <div className="section__subhead">
          III. Reaction (Acid, Base, Reaction Parameters)
        </div>
        <div className="section__info">
          The transesterification of triglycerides is generally very slow and require the use of
          catalysts. Specifically for us, we work with potassium hydroxide, an alkaline base. Some
          reaction parameters we have studied in the lab so far include types and amount of
          catalyst, types and duration of mixing, reaction time, reaction temperature, and
          many others. After reaction, the biodiesel and glycerol layers separate, with
          the glycerol layer on the bottom.
          <Picture url={prefixLink('/img/layers.png')} />
        </div>
      </div>
      <div className="section__container">
        <div className="section__subhead">
          IV. Water Washing
        </div>
        <div className="section__info">
          Water washing is a liquid-liquid extraction step, and is also an essential
          post-processing step of biodiesel. Post-reaction biodiesel contains various
          impurities such as residual catalyst and methanol. Water washing removes
          most of these impurities. The residual water, however, must also be removed
          later in the process.

          <Picture url={prefixLink('/img/water.png')} />
        </div>
      </div>
      <div className="section__container">
        <div className="section__subhead">
          V. ASTM
        </div>
        <div className="section__info">
          In order to be sold commercially, our biodiesel must pass a series of quality
          tests outlined by ASTM D6751. Currently, we are working to obtain access to a
          gas chromatograph in order to quantify free and total glycerin in our biodiesel
          samples. This would give us an idea on the extent of conversion in our
          transesterification reaction.
          <Picture url={prefixLink('/img/titrationsample.jpg')} />
        </div>
      </div>
    </div>
    <div className="section--2">
      <div className="hero">
        <Title text="PILOT PLANT:" />
      </div>
      <div className="section__container">
        <div className="section__subhead">
          I. Filtration
        </div>
        <div className="section__info">
          The vegetable oil feedstock that we use is from the Berkeley dining commons
          and was used to cook various foods.  As such, the oil is contaminated with food
          particles of varying sizes that have the potential to harm the vehicles that are
          powered by our biodiesel.  Other impurities such as moisture can interfere with
          the biodiesel reaction.  Therefore, the oil must be purified of moisture and food
          particles prior to reaction.  This is accomplished by heated settling as well as
          microfiltration.  Settling at elevated temperatures helps remove heavy particulates
          and water by decreasing the viscosity of the mixture, which accelerates the process.
          Microfiltration proceeds in stages of 500µm, 100µm, 25µm and 10µm filters.
          <Picture url={prefixLink('/img/big bowl.png')} />
        </div>
      </div>
      <div className="section__container">
        <div className="section__subhead">
          II. Reactor
        </div>
        <div className="section__info">
          The Reactor Team is mainly concerned with the large-scale transesterification reaction of
          waste cooking oil to Biodiesel and the vessels, tubing, valves, pumps and chemical
          pathways that are involved in creating an efficient and optimal process. The type of
          reactor vessel and methoxide tank used in this system must meet the process
          specifications of capacity, chemical compatibility, geometry and cost.
          <Picture url={prefixLink('/img/diagram.png')} />
          The methoxide tank is first used to mix solid potassium hydroxide pellets with liquid
          methanol to produce a 0.5 molar methoxide solution. The tank used for the preparation
          of this methoxide catalyst must be made of material that is chemically compatible
          with methoxide as well as be able to withstand the heat produced in this exothermic
          reaction. Both stainless steel and HDPE materials are sufficient for these purposes.
          <Picture url={prefixLink('/img/whitebuc.png')} />
        </div>
      </div>
      <div className="section__container">
        <div className="section__subhead">
          III. Improvements for the Future
        </div>
        <div className="section__info">
          As our system further develops, we are investigating innovative ways to increase the
          efficiency and purity of our production of biodiesel. We are hoping to implement two
          major improvements to our process which include the addition of inline mixing as well
          as periodic glycerol draining.Inline Mixing: The inline mixer will consist of a tube
          with multiple fins/protrusions lining its inner walls and be added to the tubing used
          for the agitation of the reaction. This allows for the disruption of the flow profile
            and induces axial mixing within the tube to produce more molecular interactions and
          therefore pushing the reaction further towards the production of biodiesel, effectively
          increasing our conversion.Periodic Draining: The second improvement relies on Le
          Chatelier’s Principle by periodically removing the glycerol byproduct formed in the
          reaction in order to push the equilibrium transesterification reaction towards the
          right (products). In doing so, we are hoping to increase our conversion and optimize
          our process efficiency.
          <Picture url={prefixLink('/img/titrationsample.jpg')} />
        </div>
      </div>
      <div className="section__container">
        <div className="section__subhead">
          IV. Purifications
        </div>
        <div className="section__info">
          lmao filler things
          <Picture url={prefixLink('/img/titrationsample.jpg')} />
        </div>
      </div>
      <div className="section__container">
        <div className="section__subhead">
          V. Safety/Operations
        </div>
        <div className="section__info">
          We are committed to ensuring the health and safety of all our
          team members working on our production process. We have trained
          our team extensively in good safety practices and implemented
          comprehensive safety considerations into our standard operating
          procedures. Emergency contacts and instructions, safety data sheets,
          and a concise list of safety guidelines have been compiled into a
          document that we keep on site. Physical safeguards like spill containment,
          splash shields, ventilation, and personal protective equipment have also
          been constructed to provide maximum protection against our process hazards.
          <Picture url={prefixLink('/img/danger.png')} />
          Our team handles details and provides logistical solutions to minimize distractions
          for the rest of the team. We handle acquiring our used oil feedstock, removing our
          wastes, storing our products, and providing partners with our biodiesel in the future.
          We are heavily concerned with ascertaining chemical compatibility between our containers
          and liquids. Safe transfer of liquids between containers, either for transportation
          purposes or product/waste collection, is also important to us. With those mindsets, we
          create safe plans for our team’s logistical needs.
          <Picture url={prefixLink('/img/blackbuc.png')} />
        </div>
      </div>
    </div>
  </div>
);

export default tech;
