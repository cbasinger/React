import React from 'react';

class Header extends React.Component {
    render(){
        return(
        <div>
            <h1>Header</h1>
         </div>
        );
    }
    
    constructor(){
        super();
        this.state = {
            data:
            [{
              "id": 1,  
              "name": "Chelsea",
              "age": "Wouldnt you like to know"
            },
            {
                "id": 2,
                "name": "Devin",
                "age": "I have no idea"
            }
            ]
        }
    }
    render() {
    return (
        <div>
  {/* Can only have one parent Component */}
        <h1>Header</h1>
        <table>
            <tbody>
            {this.state.data.map((person, i) => <TableRow key = {i} 
                data = {person} />)}
            </tbody>
        </table>
        </div>
    );
    }
}
export default Header;