const React = require('react')

class Index extends React.Component {
    render () {

        const { pokemons } = this.props

        return (
            <div style={{height: '100vh', width: '100vw', background: 'linear-gradient(57.4deg, rgb(249, 206, 183) 4.6%, rgb(234, 174, 202) 26%, rgb(210, 182, 226) 49.1%, rgb(173, 209, 242) 86.5%)', display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
                <div style={{gridColumn: '1/2', margin: '100px 10px 100px 70px', fontFamily: 'Georgia'}}>
                    <h1 style={{color: 'mediumvioletred'}}>Learn All The Pokémon</h1>
                    <p style={{lineHeight: '0.3in', margin: 'auto 20px'}}>Just Kidding! With over 1000 Pokémon we won't be showing all of them here, that's <em>insaaaneee</em>. Instead, here's a list of some of the OG Pokémon that have been there since the start of it all with Ash, Misty, Brock and Team Rocket <span style={{fontWeight: 'bolder', color: 'red', background: 'white'}}>R</span>!</p>
                    <ul style={{listStyle: 'inside', lineHeight: '0.5in'}}>
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
                </div>
                <div style={{gridColumn: '2/3', display: 'grid', alignItems: 'center', marginLeft: '10vw'}}>
                    <img src='https://wallpapers.com/images/hd/all-pokemon-pictures-05kt8nfnxx11r6ew.jpg' alt='Pokemon' style={{width: '700px', borderRadius: '20px', border: '2px yellow inset'}}/>
                </div>
            </div>
        )
    }
}

module.exports = Index