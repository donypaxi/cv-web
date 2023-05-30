import paxiAbogados from '../assets/img/imagePaxiAbogados.png'
import appVentas from '../assets/img/imageAppVentas.png'
import pokemon from '../assets/img/imagePokemon.png'
import pokemonCard from '../assets/img/imagePokemonCard.png'
export const ListProject = (name,description,img) => {
  
    const proyectos = [
        {
            name:'Paxi Abogados',
            description:'Pagina web - buffets de abogados de tacna, consta con un landinPage con rutas de inicio, sobre nosotros, derecho penal, derecho civil, Contáctenos,Iniciar Sesión, la cual tambien incluye una pagina administrable protegida por rutas  ',
            img:paxiAbogados,
            git:'https://github.com/donypaxi/paxiAbogados',
            page:'https://capable-fenglisu-0002cb.netlify.app/'
        },
        {
            name:'adivinaPokemon',
            description:'pequeño juego, que llama a PokeAPI con fetch',
            img:pokemon,
            git:'https://github.com/donypaxi/paxiAbogados',
            page:'https://zingy-bublanina-8180a4.netlify.app/'
        },
        {
            name:'Clone de Tareas',
            description:'copia de una app movil de registro de datos',
            img:appVentas,
            git:'https://github.com/donypaxi/aplicacion-ventas',
            page:'https://stately-elf-5b6217.netlify.app/'
        },
        {
            name:'Pokemon Cards',
            description:'Desarrollado con next, y subido a vercel, utiliza la pokeApi para traer datos',
            img:pokemonCard,
            git:'https://github.com/donypaxi/pokemon-next',
            page:'https://pokemon-next-five-zeta.vercel.app/'
        }
    ]
    return proyectos
    
}
