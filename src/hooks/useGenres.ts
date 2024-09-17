import useEndpoint from "./useEndpoint";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useEndpoint<Genre>("/genres");

export default useGenres;
