<script lang="ts" setup>
  import { useEpisodesStore } from "@/store/modules/episodes";
  import { storeToRefs } from "pinia";

  const episodes = useEpisodesStore();
  const { episodesName } = storeToRefs(episodes);
</script>

<template>
  <h3>About page</h3>
  <p>Pokemons list</p>
  <div>{{ episodesName }}</div>
</template>
