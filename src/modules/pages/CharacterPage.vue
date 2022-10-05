<script lang="ts" setup>
import { useCharactersStore } from '@/store/modules/characters'

const store = useCharactersStore();
const { charactersList, currentId } = store.$state;

const currentCharacter = charactersList.find(character => character.id === currentId)
</script>

<template>
  <h1>Je suis un Personnage => {{ currentCharacter?.name }}</h1>
</template>
