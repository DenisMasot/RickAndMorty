import { defineStore } from "pinia";
import { api } from "@/http/api";

type Episode = {
  id: number;
  characters: string[];
  name: string;
  air_date: string;
  episode: string;
  url: string;
  created: string;
}

export const useEpisodesStore = defineStore("episodes", {
  state: () => ({
    episodesList: [] as Episode[],
    currentId: 1,
  }),
  getters: {
    episodesName: (state) => state.episodesList.map((el) => el.name),
  },
  actions: {
    async getEpisodes(page = 1) {
      try {
        const res = await api.get(`/episode?page=${page}`);
        const results: Episode[] = res.data.results;
        if(page === 1) this.episodesList = [];
        this.episodesList = this.episodesList.concat(results);

        if(res.data.info.next) {
          const page = res.data.info.next.split("=")[1];
          this.getEpisodes(page);
        }
      } catch(error: any) {
        if (typeof error === "string") {
          error.toUpperCase();
        } else if (error instanceof Error) {
          error.message;
        }
      }
    },
    setEpisode(episode: number) {
      this.currentId = episode;
    }
  },
});
