import React from 'react';

// Components
import Pattern from '../../components/Pattern';

export const PIXEL_FLAT_COLOR = {
  JUST_BLACK: '#1C1C1C',
  SORTA_SAGE: '#646F68'
};

const SmartphonePixelFlat = ({
  color = PIXEL_FLAT_COLOR.SORTA_SAGE,
  src = 'https://www.idownloadblog.com/wp-content/uploads/2020/10/Resonance_Blue_Dark-428w-926h@3xiphone.png'
}) => (
  <svg
    height="100%"
    version="1.1"
    viewBox="0 0 1204 2456"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Pattern src={src} />

    <defs>
      <filter
        filterUnits="objectBoundingBox"
        height="100.0%"
        id="filter-1"
        width="100.0%"
        x="-0.0%"
        y="-0.0%"
      >
        <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
      </filter>
      <path
        d="M0,0 L4,0 C6.209139,-4.05812251e-16 8,1.790861 8,4 L8,164 C8,166.209139 6.209139,168 4,168 L0,168 L0,168 L0,0 Z"
        id="path-2"
      />
    </defs>
    <g
      fill="none"
      fillRule="evenodd"
      id="15.06.2021"
      stroke="none"
      strokeWidth="1"
    >
      <g
        id="Google-Pixel-5---Flat"
        transform="translate(-1396.000000, -772.000000)"
      >
        <g
          id="Google-Pixel-5-Just-Black"
          transform="translate(1396.000000, 772.000000)"
        >
          <g id="Device">
            <g id="Frame">
              <path
                d="M197.41916,-7.97597037e-15 L998.58084,7.97597037e-15 C1067.22778,-4.63426848e-15 1092.12082,7.14757206 1117.21712,20.5692182 C1142.31342,33.9908643 1162.00914,53.6865845 1175.43078,78.7828808 C1188.85243,103.879177 1196,128.772217 1196,197.41916 L1196,2258.58084 C1196,2327.22778 1188.85243,2352.12082 1175.43078,2377.21712 C1162.00914,2402.31342 1142.31342,2422.00914 1117.21712,2435.43078 C1092.12082,2448.85243 1067.22778,2456 998.58084,2456 L197.41916,2456 C128.772217,2456 103.879177,2448.85243 78.7828808,2435.43078 C53.6865845,2422.00914 33.9908643,2402.31342 20.5692182,2377.21712 C7.14757206,2352.12082 1.15198603e-14,2327.22778 -1.98266598e-14,2258.58084 L5.31731358e-15,197.41916 C-3.08951232e-15,128.772217 7.14757206,103.879177 20.5692182,78.7828808 C33.9908643,53.6865845 53.6865845,33.9908643 78.7828808,20.5692182 C103.879177,7.14757206 128.772217,4.63426848e-15 197.41916,-7.97597037e-15 Z"
                fill={color}
                id="Outer-Bezel-Frame"
              />
              <path
                d="M192.344194,18 L1003.65581,18 C1064.27908,18 1086.26254,24.3121416 1108.42551,36.1650239 C1130.58847,48.0179062 1147.98209,65.4115292 1159.83498,87.5744922 C1171.68786,109.737455 1178,131.720919 1178,192.344194 L1178,2263.65581 C1178,2324.27908 1171.68786,2346.26254 1159.83498,2368.42551 C1147.98209,2390.58847 1130.58847,2407.98209 1108.42551,2419.83498 C1086.26254,2431.68786 1064.27908,2438 1003.65581,2438 L192.344194,2438 C131.720919,2438 109.737455,2431.68786 87.5744922,2419.83498 C65.4115292,2407.98209 48.0179062,2390.58847 36.1650239,2368.42551 C24.3121416,2346.26254 18,2324.27908 18,2263.65581 L18,192.344194 C18,131.720919 24.3121416,109.737455 36.1650239,87.5744922 C48.0179062,65.4115292 65.4115292,48.0179062 87.5744922,36.1650239 C109.737455,24.3121416 131.720919,18 192.344194,18 Z"
                fill="#141414"
                filter="url(#filter-1)"
                id="Glare"
              />
              <path
                d="M187.833112,34 L1008.16689,34 C1061.65801,34 1081.05519,39.5695367 1100.61074,50.0279622 C1120.1663,60.4863878 1135.51361,75.8337022 1145.97204,95.3892578 C1156.43046,114.944813 1162,134.341988 1162,187.833112 L1162,2268.16689 C1162,2321.65801 1156.43046,2341.05519 1145.97204,2360.61074 C1135.51361,2380.1663 1120.1663,2395.51361 1100.61074,2405.97204 C1081.05519,2416.43046 1061.65801,2422 1008.16689,2422 L187.833112,2422 C134.341988,2422 114.944813,2416.43046 95.3892578,2405.97204 C75.8337022,2395.51361 60.4863878,2380.1663 50.0279622,2360.61074 C39.5695367,2341.05519 34,2321.65801 34,2268.16689 L34,187.833112 C34,134.341988 39.5695367,114.944813 50.0279622,95.3892578 C60.4863878,75.8337022 75.8337022,60.4863878 95.3892578,50.0279622 C114.944813,39.5695367 134.341988,34 187.833112,34 Z"
                fill="#000000"
                id="Base-Inner"
              />
            </g>
            <g id="Buttons" transform="translate(1196.000000, 589.000000)">
              <path
                d="M0,338 L5,338 C6.65685425,338 8,339.343146 8,341 L8,679 C8,680.656854 6.65685425,682 5,682 L0,682 L0,682 L0,338 Z"
                fill="#444444"
                id="2"
              />
              <mask fill="white" id="mask-3">
                <use xlinkHref="#path-2" />
              </mask>
              <use fill="#444444" id="1" xlinkHref="#path-2" />
            </g>
            <g id="Camera" transform="translate(93.000000, 92.000000)">
              <circle cx="39" cy="39" fill="#0B0B0B" id="Base" r="39" />
              <circle cx="39" cy="39" fill="#000000" id="Inner-Iris" r="16" />
            </g>
          </g>
          <path
            d="M1014.93351,58 C1057.72641,58 1073.24415,62.4556293 1088.88859,70.8223698 C1104.53304,79.1891102 1116.81089,91.4669618 1125.17763,107.111406 C1133.54437,122.755851 1138,138.27359 1138,181.06649 L1138,2274.93351 C1138,2317.72641 1133.54437,2333.24415 1125.17763,2348.88859 C1116.81089,2364.53304 1104.53304,2376.81089 1088.88859,2385.17763 C1073.24415,2393.54437 1057.72641,2398 1014.93351,2398 L181.06649,2398 C138.27359,2398 122.755851,2393.54437 107.111406,2385.17763 C91.4669618,2376.81089 79.1891102,2364.53304 70.8223698,2348.88859 C62.4556293,2333.24415 58,2317.72641 58,2274.93351 L58,181.06649 C58,138.27359 62.4556293,122.755851 70.8223698,107.111406 C79.1891102,91.4669618 91.4669618,79.1891102 107.111406,70.8223698 C122.755851,62.4556293 138.27359,58 181.06649,58 L1014.93351,58 Z M132,92 C110.460895,92 93,109.460895 93,131 C93,152.539105 110.460895,170 132,170 C153.539105,170 171,152.539105 171,131 C171,109.460895 153.539105,92 132,92 Z"
            fill="url(#image)"
            id="Screen"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SmartphonePixelFlat;
