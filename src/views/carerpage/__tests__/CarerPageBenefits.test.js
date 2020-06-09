import { shallowMount } from '@vue/test-utils';
import CarePageBenefits from '../CarerPageBenefits.vue';

function shallowMountComponent() {
  return shallowMount(CarePageBenefits);
}

describe('CarePageBenefits', () => {
  it('should render a component CarePageBenefits', () => {
    const wrapper = shallowMountComponent();

    expect(wrapper.findComponent(CarePageBenefits).exists()).toBe(true);
  });
});
