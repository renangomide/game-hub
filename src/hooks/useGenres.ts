import useEndpoint from "./useEndpoint";

interface Genre {
  id: number;
  name: string;
}

const useGenres = () => useEndpoint<Genre>("/genres");

export default useGenres;
