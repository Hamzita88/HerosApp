import CustomJumbotron from "@/components/custom/CustomJumbotron"
import HeroStats from "@/heroes/components/HeroStats"
import SearchControls from "./ui/SearchControls"

const SearchPage = () => {
  return (
    <>
    <CustomJumbotron 
        title="Busqueda de SuperHéroes"
        description="Descubre, explora y administra super heroes y villanos"
    />

     <HeroStats />
     
     <SearchControls />
    </>
  )
}

export default SearchPage
