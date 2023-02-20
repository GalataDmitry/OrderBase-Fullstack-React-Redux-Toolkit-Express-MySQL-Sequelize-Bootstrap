import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import {getAllClientInfo, getAllClients} from "../toolkit/reducers/mainReducer"
import AddClient from "./AddClient"
import AddOrder from "./AddOrder"
import ClientInfo from "./ClientInfo"
import OrderInfo from "./OrderInfo"
import DestroyClient from "./DestroyClient"
import '../styles/App.css'

function App() {

    const dispatch = useDispatch()
    const allClients = useSelector(state => state.mainReducer.allClients)

    useEffect(() => {
        dispatch(getAllClients())
    }, [])

    return <div className="App">
        <header className="App-header">
            <AddClient/>
            {allClients?.length === 0 ?
                <>
                    <h5 className='mt-4'>Don`t have clients</h5>
                    <h4>LoooooseeeeeeR</h4>
                </> :
                allClients?.map(client => {
                    return <div className='container-fluid w-50'>
                        TEST#1
                        <hr/>
                        <div className='row'>
                            <div className='col'>
                                <Link
                                    onClick={() => dispatch(getAllClientInfo(client.id))}
                                    className='nav-link text-white' to={`/client_all_info/${client.id}`}>
                                    {client?.client_name}
                                </Link>
                            </div>
                            <div className='col'>
                                <ClientInfo clientId={client.id}/>
                            </div>
                            <div className='col'>
                                {client?.Orders?.length >= 1 ? <OrderInfo clientId={client.id}/> : 'Don`t have orders'}
                            </div>
                            <div className='col'>
                                <AddOrder clientId={client.id}/>
                            </div>
                            <div className='col'>
                                <DestroyClient clientId={client.id}/>
                            </div>
                        </div>
                    </div>
                })}
        </header>
    </div>
}

export default App
