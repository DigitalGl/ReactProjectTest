


const App = ({ initialButtonText, initalClassesList }) => {
    const [buttonText, setButtonText] = React.useState(props.initialButtonText)
    const [classesList, setClassesList] = React.useState('')

    const onButtonClick = () => {
        setButtonText('Hello from React') 
        setClassesList('green-btn')
    }

    return (
        <div className="app">
            <button className={classesList} onClick={onButtonClick}>{buttonText}</button>
        </div>
    )
}


const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText="Click me" initialClasslist="" />)

console.log(App);
console.log(App);
