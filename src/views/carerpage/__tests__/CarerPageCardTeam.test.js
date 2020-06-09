import { shallowMount } from '@vue/test-utils';
import CarerPageCardTeam from '../CarerPageCardTeam.vue';

describe('CarerPageCardTeam', () => {
  it('should render a component CarerPageCardTeam', () => {
    const wrapper = shallowMount(CarerPageCardTeam);

    expect(wrapper.findComponent(CarerPageCardTeam).exists()).toBe(true);
  });
});
