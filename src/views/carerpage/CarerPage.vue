<template>
<div>
  <CarerPageIntro />
  <CarerPageCardTeam />
  <CarerPageBenefits />
  <CarerPageVacancies />
</div>
</template>

<script>
import CarerPageIntro from './CarerPageIntro.vue';
import CarerPageCardTeam from './CarerPageCardTeam.vue';
import CarerPageBenefits from './CarerPageBenefits.vue';
import CarerPageVacancies from './CarerPageVacancies.vue';

export default {
  name: 'CarerPage',
  components: {
    CarerPageIntro,
    CarerPageCardTeam,
    CarerPageBenefits,
    CarerPageVacancies,
  },
};
</script>
