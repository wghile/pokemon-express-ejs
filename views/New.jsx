const React = require('react')

class New extends React.Component {
    render() {
        return (
            <div style={{fontFamily: 'Georgia', display: 'grid', justifyContent: 'center'}}>
                <h1>New Pokémon Submission Form</h1>
                <form action='/pokemon' method='POST' style={{lineHeight: '0.8in', marginLeft: '120px'}}>
                    Pokémon Name: <input type='text' name='name' style={{lineBreak: 'auto'}}></input> 
                    <br />
                    Image of Pokémon: <input type='url' name='img' placeholder='.jpeg or .png format only' style={{width: '200px'}}></input>
                    <br />
                    <input type='submit' style={{fontFamily: 'Georgia', marginLeft: '90px', backgroundColor: 'aliceblue', border: '2px lightblue solid', borderRadius: '10px', padding: '10px 40px', fontSize: '15px', cursor: 'pointer'}}></input>
                </form>
            </div>
        )
    }
}

module.exports = New