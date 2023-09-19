const React = require('react')

class Show extends React.Component {
    render() {

        const { pokemon } = this.props

        return(
            <div style={{height: '100vh', width: '100vw', display: 'grid', gridTemplateRows: '100px 1fr', fontFamily: 'Georgia', backgroundColor: 'lavender'}}>
                <div style={{gridRow: '1/2', display: 'flex', alignItems: 'center', paddingLeft: '40px'}}>
                    <span style={{fontSize: '40px'}}>☜</span> <a href='/pokemon' style={{textDecoration: 'none', fontSize: '20px', paddingLeft: '10px', color: 'darkturquoise', textTransform: 'uppercase'}}>Back</a>
                    <h1 style={{paddingLeft: '28vw', color: 'salmon', letterSpacing: '0.02in'}}>Gotta Catch 'Em All!</h1>
                </div>
                <div style={{gridRow: '2/3', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{background: 'white', height: '65vh', width: '30vw', borderRadius: '10px', display: 'grid', gridTemplateRows: '100px 1fr', justifyContent: 'center', alignItems: 'center'}}>
                        <h2 style={{textTransform: 'capitalize', color: 'olive', paddingLeft: '110px', letterSpacing: '0.02in'}}>{pokemon.name}</h2>
                        <img src={`${pokemon.img}.jpg`} alt={`${pokemon.name}`}/>
                        <br />
                    </div>    
                </div>
            </div>
        )
    }
}

module.exports = Show