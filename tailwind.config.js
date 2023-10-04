module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue-default" : "#1D9BF0",
        "blue-hover" : "#1871CA",
        "blue-disabled" : "#1E5D87",
        "blue-wash" : "rgba(117, 190, 239, 0.20)",
        "button-stroke" : "#546A7A",
        "button-fill" : "#00000099",
        "searchbar-fill" : "#212327",
        "card-fill" : "#16181C",
        "success" : "#00BE74",
        "error" : "#8B141A",
        "secondary" : "#ffffff99",
        "neutral-50" : "#F9F9F9",
        "neutral-100" : "#F4F4F4",
        "neutral-200" : "#E4E4E4",
        "neutral-300" : "#D3D3D3",
        "neutral-400" : "#A2A2A2",
        "neutral-500" : "#737373",
        "neutral-600" : "#525252",
        "neutral-700" : "#404040",
        "neutral-800" : "#262626",
        "neutral-900" : "#171717",
        "neutral-950" : "#0A0A0A",
        "neutral-1000" : "#000"
      },
      fontSize: {
        "48px" : "48px",
        "31px" : "31px",
        "26px" : "26px",
        "24px" : "24px",
        "20px" : "20px",
        "19px" : "19px",
        "17px" : "17px",
        "16px" : "16px",
        "15px" : "15px",
        "14px" : "14px",
        "13px" : "13px",
        "12px" : "12px",
        "10px" : "10px"
      },
      fontFamily: {
        "inter" : [ 'Inter', 'sans-serif']
      },
      boxShadow: {
        "box" : "0px 8px 16px 0px rgba(0, 0, 0, 0.25)"
      },
      borderRadius: {
        "65px" : "4.0625rem",
        "30px" : "1.875rem",
      },
      gap: {
        "5px" : "0.3125rem"
      },
    },
  },
  plugins: [],
};
