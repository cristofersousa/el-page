import { shallowMount } from '@vue/test-utils';
import CarerPage from '../CarerPage.vue';

describe('CarerPage', () => {
  it('should render a component CarerPage', () => {
    const wrapper = shallowMount(CarerPage);

    expect(wrapper.findComponent(CarerPage).exists()).toBe(true);
  });
});
