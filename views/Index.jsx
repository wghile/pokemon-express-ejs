const React = require('react')

class Index extends React.Component {
    render () {

        const { pokemons } = this.props

        return (
            <div style={{height: '100vh', width: '100vw', background: 'linear-gradient(57.4deg, rgb(249, 206, 183) 4.6%, rgb(234, 174, 202) 26%, rgb(210, 182, 226) 49.1%, rgb(173, 209, 242) 86.5%)', display: 'grid', gridTemplateColumns: '600px 1fr'}}>
                <div style={{gridColumn: '1/2', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Georgia', margin: '20px 70px'}}>
                    <h1 style={{color: 'mediumvioletred', position: 'relative', top: '20px', left: '10px', letterSpacing: '0.01in'}}>
                        Learn All The Pokémon
                    </h1>
                    <p style={{lineHeight: '0.3in', paddingLeft: '20px'}}>
                        Just Kidding! With over 1000 Pokémon we won't be showing all of them here, that's <em>insaaaneee</em>. Instead, here's a list of some of the OG Pokémon that have been there since the start of it all with Ash, Misty, Brock and Team Rocket <span style={{fontWeight: 'bolder', color: 'red', background: 'white'}}>R</span>!
                    </p>
                    <ul style={{listStyle: 'inside', lineHeight: '0.3in', position: 'relative', bottom: '10px', right: '120px'}}>
                        {pokemons.map((pokemon, index) => {
                            return(
                                <li key={pokemon.name} style={{textTransform: 'capitalize'}}>
                                    <a href={`/pokemon/${index}`}>
                                        {pokemon.name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <p style={{margin: 'auto 10px', color: 'steelblue', fontStyle: 'italic', fontSize: '18px', position: 'absolute', top: '700px'}}>
                        Not Happy With this List?
                        <a style={{marginLeft: '10px', fontSize: '15px', padding: '10px', borderRadius: '10px', border: '2px inset orange', cursor: 'pointer', fontFamily: 'Georgia', backgroundColor: 'orange', color: 'white', textDecoration: 'none'}} href='/pokemon/new'>
                            Click Here to Add More
                        </a>
                    </p>
                </div>
                <div style={{gridColumn: '2/3', display: 'grid', alignItems: 'center', marginLeft: '3vw'}}>
                    <img src='https://wallpapers.com/images/hd/all-pokemon-pictures-05kt8nfnxx11r6ew.jpg' alt='Pokemon' style={{width: '700px', borderRadius: '20px', border: '2px yellow inset'}}/>
                </div>
            </div>
        )
    }
}

module.exports = Index