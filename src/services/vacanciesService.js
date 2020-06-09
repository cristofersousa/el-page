import api from '../helpers/api';

const url = 'http://www.mocky.io/v2/5d6fb6b1310000f89166087b';

export default async function getVacancies() {
  const { data: { vagas } } = await api.get(url);
  return vagas;
}
