<script setup lang="ts">
// @ts-ignore
import WelcomeItem from '../components/WelcomeItem.vue'
// @ts-ignore
import DocumentationIcon from './icons/IconDocumentation.vue'
// @ts-ignore
import ToolingIcon from './icons/IconTooling.vue'
// @ts-ignore
import EcosystemIcon from './icons/IconEcosystem.vue'
// @ts-ignore
import CommunityIcon from './icons/IconCommunity.vue'
// @ts-ignore
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation Heading</template>

    But yes now it will slot in
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation Heading</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>
</template>
