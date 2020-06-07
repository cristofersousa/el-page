import axios from 'axios';
import { getVacancies }  from './vacanciesService';


jest.mock('axios', () => ({
  get: Promise.resolve('value')
}))

describe('vacanciesService', () => {
  it('should get all vacancies', async () => {
    const mockVacancies = {
      data: {
      vagas: [
        {
          cargo: 'Desenvolvedor Mobile Senior (Android e iOS)',
          ativa: true,
          link: 'http://elo7.dev/vaga/desenvolvedor-mobile-senior',
          localizacao: {
            bairro: 'Vila Olímpia',
            cidade: 'São Paulo',
            pais: 'Brasil',
          },
        },
      ]},
    },

    axios.get(url)
      getVacancies.mockResolvedValue(mockVacancies);

    expect(await getVacancies()).toEqual(mockVacancies);
  });
});
