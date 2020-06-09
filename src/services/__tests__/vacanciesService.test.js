
import api from '../../helpers/api';
import getVacancies from '../vacanciesService';

jest.mock('../../helpers/api');

describe('vacanciesService', () => {
  it('should get vacancies', async () => {
    const mockObj = {
      data: {
        vagas: [],
      },
    };
    api.get.mockResolvedValue(mockObj);
    const vacancies = await getVacancies();

    expect(api.get).toHaveBeenCalledWith('http://www.mocky.io/v2/5d6fb6b1310000f89166087b');
    expect(vacancies).toBe(mockObj.data.vagas);
  });
});
