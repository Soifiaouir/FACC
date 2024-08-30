const BASE_URL = "https://raw.githubusercontent.com/Soifiaouir/FACC/master/db.json"; // Notez que nous utilisons un chemin relatif ici pour que le proxy fonctionne

export { BASE_URL };

export const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
export const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;