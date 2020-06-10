import { mount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import getVacancies from '../../../services/vacanciesService';
import CarerPageVacancies from '../CarerPageVacancies.vue';

jest.mock('../../../services/vacanciesService');

function mountComponent() {
  return mount(CarerPageVacancies);
}

describe('CarerPageVacancies', () => {
  beforeEach(() => {
    getVacancies.mockClear();
    getVacancies.mockResolvedValue({
      data: {
        vagas: [],
      },
    });
  });
  it('should render a component CarerPageVacancies', async () => {
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
          {
            cargo: 'Desenvolvedor Front-End',
            ativa: false,
            link: 'http://elo7.dev/vaga/desenvolvedor-frontend',
            localizacao: {
              bairro: 'Vila Olímpia',
              cidade: 'São Paulo',
              pais: 'Brasil',
            },
          },
        ],
      },
    };

    getVacancies.mockResolvedValue(mockVacancies);
    const wrapper = mountComponent(CarerPageVacancies);
    await flushPromises();

    expect(wrapper.vm.loading).toBe(true);
    await flushPromises();
    expect(wrapper.findComponent(CarerPageVacancies).exists()).toBe(true);
  });
});
