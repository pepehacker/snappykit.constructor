import * as React from 'react';

// Style
import style from './Guide.scss';

const DomainGuide = () => (
  <div className={style.Root}>
    <div className={style.Title}>Where and how to specify name servers</div>

    <ol className={style.Steps}>
      <li>Go to the DNS Management page;</li>
      <li>On the DNS Management page, under Nameservers, click Change.</li>
      <li>Under Choose your new nameserver type, select Custom.</li>
      <li>
        Enter the custom nameservers your hosting provider gave you and click
        Save.
      </li>
    </ol>

    <div className={style.Description}>
      After updating your nameservers, allow 4 to 8 hours for other networks to
      access information for .com and .net domain names, and allow 24 to 48
      hours for other networks to access information for all other domain
      extensions. If you have difficulty, contact our 24/7 technical support
      team for assistance.
    </div>
  </div>
);

export default DomainGuide;
