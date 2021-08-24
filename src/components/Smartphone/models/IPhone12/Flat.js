import React from 'react';

// Components
import Pattern from '../../components/Pattern';

export const IPHONE_12_FLAT_COLOR = {
  BLACK: '#1D1E1E',
  BLUE: '#21385A',
  GREEN: '#91A48E',
  RED: '#D34B4B',
  WHITE: '#D2CFCA'
};

const SmartphoneIPhone12Flat = ({
  color = IPHONE_12_FLAT_COLOR.RED,
  id,
  src
}) => (
  <svg
    height="100%"
    version="1.1"
    viewBox="0 0 1314 2658"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Pattern id={id} src={src} />

    <g id="Device">
      <g id="Body">
        <path
          d="M1042.20177,-3.89198307e-15 C1133.58244,2.26135425e-15 1166.71928,9.51462514 1200.12668,27.3811021 C1233.53409,45.2475791 1259.75242,71.465908 1277.6189,104.873315 C1295.48537,138.280723 1305,171.417562 1305,262.798233 L1305,680 L1310,680 C1312.20914,680 1314,681.790861 1314,684 L1314,992 C1314,994.209139 1312.20914,996 1310,996 L1305,996 L1305,2395.20177 C1305,2486.58244 1295.48537,2519.71928 1277.6189,2553.12668 C1259.75242,2586.53409 1233.53409,2612.75242 1200.12668,2630.6189 C1166.71928,2648.48537 1133.58244,2658 1042.20177,2658 L271.796102,2658 C180.415431,2658 147.278592,2648.48537 113.871184,2630.6189 C80.4637767,2612.75242 54.2454479,2586.53409 36.3789709,2553.12668 C18.5124939,2519.71928 8.99786873,2486.58244 8.99786873,2395.20177 L8.997,1070 L4,1070 C2.34314575,1070 1,1068.65685 1,1067 L1,873 C1,871.343146 2.34314575,870 4,870 L8.997,870 L8.997,815 L4,815 C2.34314575,815 1,813.656854 1,812 L1,618 C1,616.343146 2.34314575,615 4,615 L8.997,615 L8.997,522 L3,522 C1.34314575,522 1.53517375e-15,520.656854 0,519 L0,426 C-2.02906125e-16,424.343146 1.34314575,423 3,423 L8.997,423 L8.99786873,262.798233 C8.99786873,171.417562 18.5124939,138.280723 36.3789709,104.873315 C54.2454479,71.465908 80.4637767,45.2475791 113.871184,27.3811021 C147.278592,9.51462514 180.415431,1.45993417e-14 271.796102,-2.51267094e-14 L1042.20177,-3.89198307e-15 Z"
          fill={color}
          id="Frame"
        />
        <g
          fill="#000000"
          id="Antenna-Bands"
          transform="translate(9.000000, 0.000000)"
        >
          <polygon
            id="Top-Right-Copy-7"
            opacity="0.400000006"
            points="1275 266 1296 266 1296 293 1275 293"
          />
          <polygon
            id="Top-Left-Copy-7"
            opacity="0.400000006"
            points="0 266 21 266 21 293 0 293"
          />
          <polygon
            id="Top-Copy-7"
            opacity="0.400000006"
            points="1012 0 1038 0 1038 21 1012 21"
          />
          <polygon
            id="Bottom-Left-Copy-7"
            opacity="0.400000006"
            points="0 2366 21 2366 21 2395 0 2395"
          />
          <rect
            height="21"
            id="Bottom-Copy-7"
            opacity="0.200000003"
            width="27"
            x="255"
            y="2637"
          />
          <rect
            height="26"
            id="Bottom-Right-Copy-7"
            opacity="0.400000006"
            width="21"
            x="1275"
            y="2367"
          />
        </g>
        <g
          fill="#141414"
          id="Glass"
          transform="translate(30.000000, 21.000000)"
        >
          <path
            d="M1254,234.595496 L1254,2381.4045 C1254,2462.97847 1245.50646,2492.55916 1229.55736,2522.38138 C1213.60826,2552.2036 1190.2036,2575.60826 1160.38138,2591.55736 C1130.55916,2607.50646 1100.97847,2616 1019.4045,2616 L234.595496,2616 C153.021531,2616 123.44084,2607.50646 93.6186181,2591.55736 C63.7963959,2575.60826 40.3917414,2552.2036 24.4426424,2522.38138 C8.49354342,2492.55916 1.21016516e-14,2462.97847 -2.08279721e-14,2381.4045 L-8.19072035e-15,234.595496 C4.7590444e-15,153.021531 8.49354342,123.44084 24.4426424,93.6186181 C40.3917414,63.7963959 63.7963959,40.3917414 93.6186181,24.4426424 C123.44084,8.49354342 153.021531,5.5069554e-15 234.595496,-9.47793882e-15 L1019.4045,9.47793882e-15 C1100.97847,-5.5069554e-15 1130.55916,8.49354342 1160.38138,24.4426424 C1190.2036,40.3917414 1213.60826,63.7963959 1229.55736,93.6186181 C1245.50646,123.44084 1254,153.021531 1254,234.595496 Z"
            id="Glass-Copy-6"
          />
        </g>
      </g>
      <g
        fill="#000000"
        id="Front"
        opacity="0.400000006"
        transform="translate(583.616000, 75.000000)"
      >
        <rect
          height="23"
          id="Speaker-Copy-6"
          rx="11.5"
          width="142"
          x="0"
          y="12"
        />
        <g id="Camera" transform="translate(178.000000, 0.000000)">
          <circle cx="23.5" cy="23.5" id="Frame-Copy-14" r="23.5" />
          <circle cx="23.6115905" cy="23.5" id="Mask-Copy-10" r="12.5" />
        </g>
      </g>
    </g>

    <path
      d="M341.647677,88.6422494 C341.647677,111.2539 358.239799,157.091878 405.628219,157.986412 L904.961847,157.986412 C955.200013,157.986412 972.342896,114.738376 972.342896,88.6422494 C972.342896,73.0336905 976.394615,63.1897137 992.498361,63 L1061.24609,63 C1124.09816,63 1146.88984,69.5442056 1169.86762,81.8328556 C1192.8454,94.1215056 1210.87849,112.1546 1223.16714,135.132378 C1235.45579,158.110156 1242,180.901835 1242,243.753907 L1242,2414.24609 C1242,2477.09816 1235.45579,2499.88984 1223.16714,2522.86762 C1210.87849,2545.8454 1192.8454,2563.87849 1169.86762,2576.16714 C1146.88984,2588.45579 1124.09816,2595 1061.24609,2595 L252.753907,2595 C189.901835,2595 167.110156,2588.45579 144.132378,2576.16714 C121.1546,2563.87849 103.121506,2545.8454 90.8328556,2522.86762 C78.6670921,2500.11962 72.1314586,2477.55402 72,2416.11968 L72,243.753907 C72,180.901835 78.5442056,158.110156 90.8328556,135.132378 C103.121506,112.1546 121.1546,94.1215056 144.132378,81.8328556 C166.880378,69.6670921 189.445983,63.1314586 250.880322,63 L319.000243,63 C335.61114,63 341.647677,70.1773083 341.647677,88.6422494 Z"
      fill={`url(#${id}_image)`}
      id="Screen"
    />
  </svg>
);

export default SmartphoneIPhone12Flat;
