import NavBarItem from './NavBarItem'

export default function NavBar() {
  return (
    <div className='flex p-4 gap-4 justify-center bg-slate-300' >
      <NavBarItem title="Tendências" param="fetchTrending"/>
      <NavBarItem title="Mais bem avaliados" param="fetchTopRated"/>
    </div>
  )
}
