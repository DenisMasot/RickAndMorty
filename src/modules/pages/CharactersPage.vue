<script lang="ts" setup>
  import { useCharactersStore } from "@/store/modules/characters";
  import { useRouter } from 'vue-router';

  import CardComponent from "@/components/CardComponent.vue";

  const router = useRouter();
  const characters = useCharactersStore();


  const { charactersList, nextPage } = characters.$state;
  if(!charactersList.length) characters.getCharacters();

  function goToDetails(id: number) {
    characters.setCharacter(id);
    router.push(`/character`);
  }
</script>

<template>
  <h1>Liste des Personnages</h1>
  <ul>
    <li
      v-for="(character, i) of characters.charactersList"
      :key="i"
    >
      <CardComponent
        :val="character"
        :goToDetails="goToDetails"
      />
    </li>
  </ul>
  <button @click="characters.getCharacters(nextPage)">
    Voir plus
  </button>
</template>
