const PREFIX = "/images";
const CERTIFICATES = `${PREFIX}/certificates`;
const EMPLOYMENT = `${PREFIX}/employment-letters`;

export const IMAGES = {
  CERTIFICATES: {
    GOOGLE: {
      DIGITAL_MARKETING_FUNDAMENTALS: `${CERTIFICATES}/digital-marketing-fundamental-google.webp`,
    },
    UDEMY: {
      FULLSTACK_GENERATIVE_AGENTIC_AI_PYTHON: `${CERTIFICATES}/fullstack-generative-agentic-ai-python.webp`,
      REACT_REDUX_MERN_ECOMMERCE: `${CERTIFICATES}/react-redux-mern-ecommerce.webp`,
    },
    HACKER_RANK: {
      JAVASCRIPT_BASICS: `${CERTIFICATES}/javascript-basics.webp`,
      JAVASCRIPT_INTERMEDIATE: `${CERTIFICATES}/javascript-intermediate.webp`,
      REACT_BASICS: `${CERTIFICATES}/react-basics.webp`,
      REACT_INTERMEDIATE: `${CERTIFICATES}/react-intermediate.webp`,
    },
    JAVASCRIPT_MASTERY: {
      NEXT_JS_15: `${CERTIFICATES}/nextjs-15.webp`,
    },
  },
  EMPLOYMENT: {
    NUCLEUSTEQ: {
      OFFER_LETTER: `${EMPLOYMENT}/offer-letters/nucleusteq-offer-letter.webp`,
      SPARKLING_STAR_2025: `${EMPLOYMENT}/certificates/nucleusteq-sparkling-star-2025.webp`
    },
    OASIS_INFOBYTE: {
      OFFER_LETTER: `${EMPLOYMENT}/offer-letters/oasis-infobyte-offer-letter.webp`,
      INTERNSHIP_CERTIFICATE: `${EMPLOYMENT}/certificates/oasis-infobyte-internship-certificate.webp`,
    },
  },
};
