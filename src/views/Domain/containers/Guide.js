import * as React from 'react';

// Style
import style from './Guide.scss';

const DomainGuide = () => (
  <div className={style.Root}>
    <div className={style.Title}>How to add a domain?</div>

    <ol className={style.Steps}>
      <li>Add your domain on Snappykit</li>

      <li>
        Go to the website where you purchased the domain, in the domain settings
        (DNS servers)
      </li>

      <li>
        Specify our Name Servers on the side of the domain provider:
        <ul className={style.NS}>
          <li>ns1.digitalocean.com</li>
          <li>ns2.digitalocean.com</li>
          <li>ns3.digitalocean.com</li>
        </ul>
      </li>

      <li>
        That&apos;s all. Within 24 hours, the website will be available. Usually
        2-8 hours.
      </li>
    </ol>
  </div>
);

export default DomainGuide;
