// Jika menggunakan functional programming
// function Card(){
//     return (
//         <div class="card">
//             <p class="title">Raya Maudy Azzahra</p>
//             <p>FrontEnd Dev</p>
//         </div>
//     );
// }

// Format ES6
const Card = (props) => {
    return (
        <div class="card">
            <p class="title">{props.name}</p>
            <p>{props.job}</p>
        </div>
    );
}

const App = () => {
    return (
        <div>
            <Card name="Raya Maudy Azzahra" job="Project Manager" />
            <Card name="Ahmad Fadly Dzil Jalal" job="CEO" />
        </div>
    )
    
}

ReactDOM.render(<App />, document.querySelector('#app'));