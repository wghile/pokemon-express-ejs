const React = require('react')

class Index extends React.Component {
    render () {

        const { pokemons } = this.props

        return (
            <div>
                <h1>See All The Pokemon!</h1>
                <ul>
                    {pokemons.map((pokemon) => {
                        return(
                            <li key={pokemon.name} style={{textTransform: 'capitalize'}}>
                                {pokemon.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = Index