import route from './utils/routing';

export const homePage = route('/home');
export const registerPage = route('/register');
export const confirmationMail = route('/register/confirmation/mail/send');
export const registerLoginPage = route('/register/confirmation/login');
export const confirmationLink = route('/register/confirmation/:token');
export const loginPage = route('/login');
export const scoresPage = route('/scores');
export const networksPage = route('/networks');
export const runsPage = route('/runs');
export const subgraphsPage = route('/subgraphs');
export const nodeSetsPage = route('/nodesets');
export const parameterSetsPage = route('/parameterSets');

export default {
  homePage,
  registerPage,
  confirmationMail,
  registerLoginPage,
  confirmationLink,
  loginPage,
  scoresPage,
  networksPage,
  runsPage,
  subgraphsPage,
  nodeSetsPage,
  parameterSetsPage,
};
