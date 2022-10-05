<script lang="ts" setup>
  import { useEpisodesStore } from "@/store/modules/episodes";
  import { useRouter } from 'vue-router';

  import CardComponent from "@/components/CardComponent.vue";


  const router = useRouter();
  const episodes = useEpisodesStore();

  const { episodesList } = episodes.$state;
  if(!episodesList.length) episodes.getEpisodes();

  function goToDetails(id: number) {
    episodes.setEpisode(id)
    router.push(`/episode`)
  }
</script>

<template>
  <h1>Liste des épisodes</h1>
  <ul>
    <li
      v-for="(episode, i) of episodes.episodesList"
      :key="i"
    >
      <CardComponent
        :val="episode"
        :goToDetails="goToDetails"
      />
    </li>
  </ul>
</template>
