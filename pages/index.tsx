import React from "react";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

// import Navbar from "@/components/Navbar";
// import Billboard from "@/components/Billboard";
// import MovieList from "@/components/MovieList";
// import InfoModal from "@/components/InfoModal";
// import useMovieList from "@/hooks/useMovieList";
// import useFavorites from "@/hooks/useFavorites";
// import useInfoModalStore from "@/hooks/useInfoModalStore";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Home = () => {
  // const { data: movies = [] } = useMovieList();
  // const { data: favorites = [] } = useFavorites();
  // const { isOpen, closeModal } = useInfoModalStore();
  const { data: user } = useCurrentUser();

  return (
    <div>
      {/* <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div> */}
      <h1 className="text-white text-4xl">Fire Flies</h1>
      <p className="text-white text-2xl">Logged in as : {user?.name}</p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>
Log Out
      </button>
    </div>
  );
};

export default Home;
