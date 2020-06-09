import { shallowMount } from '@vue/test-utils';
import CarerPageIntro from '../CarerPageIntro.vue';

function shallowMountComponent() {
  return shallowMount(CarerPageIntro);
}

describe('CarePageIntro', () => {
  it('should render a component CarePageIntro', () => {
    const wrapper = shallowMountComponent();

    expect(wrapper.findComponent(CarerPageIntro).exists()).toBe(true);
  });
});
