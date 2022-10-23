---
layout: page
title: Our Team
lang: en-US
tags:
- configuration
- theme
- indexing
---


<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/5669657?s=96&v=4',
    name: 'Tom Sapletta',
    title: 'Creator',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/tom-sapletta-com' }
    ]
  },
 {
    avatar: 'https://logo.dialogware.com/dialogware-logo-pivot.png',
    name: 'Join us!',
    title: 'Software Developer',
    links: [
       { icon: 'linkedin', link: 'https://www.linkedin.com/in/tom-sapletta-com' }
    ]
  }
]

const partners = [
  {
    avatar: '/assets/ionos.png',
    name: 'Ionos',
    title: 'Service provider',
    links: [
      { icon: 'website', link: 'https://www.ionos.de' }
    ]
  },
 {
    avatar: 'https://softreck.pl/wp-content/uploads/2020/10/softreck-logo-kwadrat-biale-tlo-1024x1024.png',
    name: 'softreck.com',
    title: 'DevOps',
    links: [
       { icon: 'website', link: 'https://softreck.pl' }
    ]
  }
]
</script>


<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead>The development of DIALOGWARE is guided by an international
      team, some of whom have chosen to be featured below.</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>Organization they support our project </template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>