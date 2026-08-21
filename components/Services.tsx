import Reveal from "./Reveal";
import ServiceDeck from "./ServiceDeck";
import WhatWeDo from "./WhatWeDo";

export default function Services() {
  return (
    <section id="services" className="border-t border-line py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <WhatWeDo />
        </Reveal>

        <ServiceDeck />
      </div>
    </section>
  );
}
