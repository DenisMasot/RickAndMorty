import { defineStore } from "pinia";
import { api } from "@/http/api";

type Characters = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: Array<string>,
  url: string,
  created: string
}

export const useCharactersStore = defineStore("characters", {
  state: () => ({
    charactersList: [] as Characters[],
    nextPage: 1,
    nbPages: 3,
    currentId: 1,
  }),
  getters: {
    charactersName: (state) => state.charactersList.map((el) => el.name),
  },
  actions: {
    async getCharacters(page = 1) {
      try {
        const res = await api.get(`/character?page=${page}`);
        const results: Characters[] = res.data.results;
        if(page === 1) this.charactersList = [];
        this.charactersList = this.charactersList.concat(results);
        this.nbPages = res.data.info.pages
        if(this.nextPage <= this.nbPages) {
          console.log("if", this.nextPage, this.nbPages)
          this.nextPage = res.data.info.next.split("=")[1];
        } else {
          console.log("else", this.nextPage, this.nbPages)
        }
      } catch(error: any) {
        if (typeof error === "string") {
          error.toUpperCase();
        } else if (error instanceof Error) {
          error.message;
        }
      }
    },
    setCharacter(character: number) {
      this.currentId = character;
    }
  },
});
