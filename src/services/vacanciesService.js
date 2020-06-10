import api from '../helpers/api';

const url = 'https://run.mocky.io/v3/12ddb9a7-ad24-493a-8f18-b2ffbd2fb9c9';

export default async function getVacancies() {
  const { data: { vagas } } = await api.get(url);
  return vagas;
}
