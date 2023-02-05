import {useSelector, useDispatch} from "react-redux"

const WithQueries = (Component) => {
    return () => {
        const getData = () => {
            fetch('http://localhost:5000/api/get')
                .then(response => response.text())
                .then(result => console.log(result))
        }
        const setData = (name, lastname) => {
            let options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, lastname})
            }
            fetch('http://localhost:5000/api/set', options)
                .then(response => response.text())
                .then(result => console.log(result))
        }
        return <Component
            getData={getData}
            setData={setData}
        />
    }

}

export default WithQueries