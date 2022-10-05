<script lang="ts" setup>
import { useEpisodesStore } from '@/store/modules/episodes'

const store = useEpisodesStore();
const { episodesList, currentId } = store.$state;

const currentEpisode = episodesList.find(episode => episode.id === currentId)
</script>

<template>
  <h1>Je suis un épisode => {{ currentEpisode?.name }}</h1>
</template>
