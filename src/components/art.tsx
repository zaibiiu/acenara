import { useId } from "react";

export function Art({
  kind = "ai",
  className = "",
}: {
  kind?: string;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  const blue = "#2F5061",
    ink = "#172C39",
    coral = "#E57F84",
    cream = "#F7F5F2";
  const is = (...types: string[]) => types.includes(kind);
  return (
    <div className={`art art-${kind} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 600 420" fill="none">
        <defs>
          <linearGradient
            id={`g${id}`}
            x1="180"
            y1="80"
            x2="410"
            y2="380"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#698390" />
            <stop offset="1" stopColor={ink} />
          </linearGradient>
          <pattern
            id={`p${id}`}
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill={blue} opacity=".15" />
          </pattern>
          <filter id={`s${id}`} x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow
              dx="0"
              dy="14"
              stdDeviation="12"
              floodColor={ink}
              floodOpacity=".12"
            />
          </filter>
        </defs>
        <rect
          width="600"
          height="420"
          fill={is("cloud", "security") ? "#E4EBEB" : "#ECEAE5"}
        />
        <rect width="600" height="420" fill={`url(#p${id})`} />
        {is("ai", "workflow") && (
          <g>
            <path
              d="M90 215H210M390 215H515M300 90V145M300 285V340M144 118L246 178M355 255L462 316M145 316L245 258M355 176L462 118"
              stroke={blue}
              strokeWidth="1.5"
              opacity=".3"
            />
            {[
              [90, 215],
              [300, 80],
              [510, 215],
              [300, 345],
              [140, 115],
              [460, 115],
              [140, 315],
              [460, 315],
            ].map(([x, y], i) => (
              <g key={i}>
                <rect
                  x={x - 28}
                  y={y - 26}
                  width="56"
                  height="52"
                  rx="13"
                  fill={i % 3 === 0 ? blue : "white"}
                  stroke="#D7DFDE"
                />
                <path
                  d={`M${x - 10} ${y}h20m-10-10v20`}
                  stroke={i % 3 === 0 ? "white" : blue}
                  strokeWidth="2"
                />
              </g>
            ))}
            <rect
              x="231"
              y="146"
              width="138"
              height="138"
              rx="32"
              fill={`url(#g${id})`}
              filter={`url(#s${id})`}
            />
            <path
              d="M300 177l10 25 26 9-26 10-10 27-10-27-26-10 26-9 10-25Z"
              fill={coral}
            />
            <circle cx="324" cy="185" r="4" fill={cream} />
            <rect
              x="359"
              y="259"
              width="140"
              height="46"
              rx="10"
              fill="white"
            />
            <circle cx="380" cy="282" r="5" fill={coral} />
            <text
              x="393"
              y="286"
              fill={blue}
              fontSize="11"
              fontFamily="sans-serif"
            >
              Human review
            </text>
          </g>
        )}
        {is("desktop", "analytics", "data", "rental") && (
          <g filter={`url(#s${id})`}>
            <rect x="62" y="68" width="476" height="286" rx="14" fill="white" />
            <path d="M62 103h476" stroke="#E2E7E6" />
            <circle cx="80" cy="85" r="3" fill={coral} />
            <circle cx="92" cy="85" r="3" fill="#CFD9D9" />
            <circle cx="104" cy="85" r="3" fill="#CFD9D9" />
            <rect x="78" y="121" width="67" height="214" rx="6" fill={blue} />
            {[145, 175, 205, 235].map((y, i) => (
              <rect
                key={y}
                x="91"
                y={y}
                width={i === 0 ? 40 : 30}
                height="5"
                rx="2"
                fill="white"
                opacity={i === 0 ? 1 : 0.35}
              />
            ))}
            <text
              x="164"
              y="140"
              fontSize="15"
              fill={ink}
              fontFamily="sans-serif"
            >
              Workspace overview
            </text>
            <text x="164" y="158" fontSize="9" fill={blue}>
              Illustrative interface
            </text>
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <rect
                  x={164 + i * 119}
                  y="177"
                  width="107"
                  height="51"
                  rx="7"
                  fill={i === 1 ? "#FAEEEE" : "#F0F3F2"}
                />
                <rect
                  x={177 + i * 119}
                  y="189"
                  width="44"
                  height="4"
                  rx="2"
                  fill={blue}
                  opacity=".45"
                />
                <rect
                  x={177 + i * 119}
                  y="201"
                  width="30"
                  height="12"
                  rx="3"
                  fill={i === 1 ? coral : blue}
                />
              </g>
            ))}
            <path d="M171 314H514M171 284H514M171 254H514" stroke="#E4E9E8" />
            {[30, 49, 38, 70, 58, 78, 53, 85, 96, 76, 106, 119].map((h, i) => (
              <rect
                key={i}
                x={177 + i * 27}
                y={328 - h * 0.65}
                width="13"
                height={h * 0.65}
                rx="3"
                fill={i > 8 ? coral : blue}
                opacity={0.5 + i * 0.035}
              />
            ))}
          </g>
        )}
        {is("cloud") && (
          <g>
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(0 ${i * -58})`}>
                <path
                  d="M300 175L473 263 300 353 127 263 300 175Z"
                  fill={i === 2 ? "#F7F5F2" : blue}
                  stroke="#9AB0B5"
                />
                <path
                  d="M127 263v20l173 91 173-91v-20l-173 90-173-90Z"
                  fill={i === 2 ? "#D5DFDE" : ink}
                />
                <path d="M300 353v21" stroke="#6E8790" />
              </g>
            ))}
            <path
              d="M300 66v61m-132 46v48m264-48v48"
              stroke={coral}
              strokeWidth="2"
              strokeDasharray="5 6"
            />
            <circle cx="300" cy="63" r="10" fill={coral} />
            <circle cx="168" cy="172" r="6" fill={coral} />
            <circle cx="432" cy="172" r="6" fill={coral} />
            <path
              d="M246 169l54-28 54 28-54 28-54-28Z"
              stroke={blue}
              strokeWidth="2"
            />
          </g>
        )}
        {is("security") && (
          <g>
            <circle cx="300" cy="210" r="147" stroke={blue} opacity=".12" />
            <circle
              cx="300"
              cy="210"
              r="117"
              stroke={blue}
              opacity=".15"
              strokeDasharray="4 10"
            />
            <path
              d="M300 68c44 30 75 37 111 42v109c0 65-46 108-111 139-65-31-111-74-111-139V110c36-5 67-12 111-42Z"
              fill={`url(#g${id})`}
              filter={`url(#s${id})`}
            />
            <path
              d="M300 98c30 19 56 27 83 32v88c0 50-32 84-83 112-51-28-83-62-83-112v-88c27-5 53-13 83-32Z"
              stroke="#829BA5"
            />
            <rect x="271" y="186" width="58" height="51" rx="9" fill={cream} />
            <path
              d="M283 186v-14a17 17 0 0 1 34 0v14"
              stroke={cream}
              strokeWidth="8"
            />
            <circle cx="300" cy="208" r="5" fill={coral} />
            <path d="M300 211v10" stroke={coral} strokeWidth="4" />
            <circle cx="430" cy="124" r="12" fill={coral} />
          </g>
        )}
        {is("mobile") && (
          <g transform="rotate(-8 300 210)" filter={`url(#s${id})`}>
            <rect x="207" y="29" width="186" height="362" rx="31" fill={ink} />
            <rect
              x="215"
              y="37"
              width="170"
              height="346"
              rx="24"
              fill={cream}
            />
            <rect x="267" y="45" width="66" height="15" rx="8" fill={ink} />
            <text
              x="233"
              y="97"
              fill={ink}
              fontSize="16"
              fontFamily="sans-serif"
            >
              Your day, simplified.
            </text>
            <rect x="231" y="115" width="138" height="70" rx="12" fill={blue} />
            <circle cx="254" cy="138" r="7" fill={coral} />
            <path
              d="M272 137h74m-74 13h45"
              stroke="white"
              strokeWidth="4"
              opacity=".7"
            />
            {[207, 253, 299].map((y, i) => (
              <g key={y}>
                <rect
                  x="231"
                  y={y}
                  width="138"
                  height="36"
                  rx="8"
                  fill="white"
                />
                <circle
                  cx="249"
                  cy={y + 18}
                  r="7"
                  fill={i === 1 ? coral : "#D8E2E1"}
                />
                <path
                  d={`M266 ${y + 14}h80m-80 9h49`}
                  stroke={blue}
                  strokeWidth="3"
                  opacity=".5"
                />
              </g>
            ))}
            <rect x="267" y="368" width="66" height="4" rx="2" fill={ink} />
          </g>
        )}
        {is("property", "commerce") && (
          <g filter={`url(#s${id})`}>
            <rect x="78" y="63" width="444" height="294" rx="15" fill="white" />
            <rect x="96" y="80" width="408" height="28" rx="5" fill={cream} />
            <path
              d="M112 94h50m214 0h28m13 0h28m14 0h28"
              stroke={blue}
              strokeWidth="4"
            />
            <rect
              x="96"
              y="123"
              width="229"
              height="215"
              rx="9"
              fill="#D4E0DF"
            />
            <path d="M134 259l80-90 80 90v79H134v-79Z" fill={blue} />
            <path d="M209 182l65 77v79h-65V182Z" fill={ink} />
            <rect x="158" y="266" width="33" height="72" fill={cream} />
            <rect x="234" y="267" width="20" height="32" fill={coral} />
            <circle cx="282" cy="154" r="18" fill={coral} />
            <path
              d="M348 144h130m-130 16h95m-95 32h115m-115 16h130m-130 16h80m-80 43h130"
              stroke={blue}
              strokeWidth="6"
              opacity=".4"
            />
            <rect x="348" y="295" width="137" height="32" rx="6" fill={blue} />
          </g>
        )}
        {is("education") && (
          <g filter={`url(#s${id})`}>
            <path
              d="M115 111q90-25 185 15 95-40 185-15v211q-95-25-185 12-90-37-185-12V111Z"
              fill="white"
            />
            <path d="M300 126v208" stroke="#D7DFDE" />
            <path
              d="M145 150q62-12 124 13m-124 10q62-12 124 13m-124 12q62-12 124 13m-124 12q62-12 124 13m-124 12q62-12 124 13"
              stroke={blue}
              strokeWidth="5"
              opacity=".5"
            />
            <rect x="330" y="153" width="123" height="93" rx="10" fill={blue} />
            <path d="M378 179l32 20-32 20v-40Z" fill={coral} />
            <path
              d="M330 272h123m-123 18h95"
              stroke={blue}
              strokeWidth="5"
              opacity=".4"
            />
          </g>
        )}
        {is("tracking") && (
          <g>
            <path
              d="M0 90l600 125M0 310L600 70M80 0l290 420M410 0L210 420M0 358l600-66"
              stroke="white"
              strokeWidth="25"
            />
            <path
              d="M100 310l130-120 95 60 144-137"
              stroke={blue}
              strokeWidth="4"
              strokeDasharray="8 6"
            />
            <circle cx="100" cy="310" r="12" fill={blue} />
            <path
              d="M469 91c-38 0-52 39-24 66l24 25 24-25c28-27 14-66-24-66Z"
              fill={coral}
            />
            <circle cx="469" cy="126" r="12" fill="white" />
            <rect x="251" y="227" width="136" height="47" rx="9" fill={blue} />
            <circle cx="272" cy="250" r="5" fill={coral} />
            <text
              x="286"
              y="254"
              fontSize="11"
              fill="white"
              fontFamily="sans-serif"
            >
              Route overview
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
