const React = require('react')

class Index extends React.Component {
    render () {

        const { pokemons } = this.props

        return (
            <div>
                <h1>See All The Pokemon!</h1>
                <ul>
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
        )
    }
}

module.exports = Index