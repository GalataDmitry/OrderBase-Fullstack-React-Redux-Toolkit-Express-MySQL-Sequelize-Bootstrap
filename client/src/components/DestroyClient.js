import {useDispatch, useSelector} from "react-redux"
import {destroyClient} from '../toolkit/reducers/mainReducer'
import {DESTROY_DATA} from "../toolkit/actions/actions"

const DestroyClient = ({clientId}) => {

    const dispatch = useDispatch()
    const destroyData = useSelector(state => state.mainReducer.destroyData)

    return <>
        <button onClick={() => dispatch(DESTROY_DATA(clientId))}
                type="button" className="btn btn-info btn-sm" data-bs-toggle="modal"
                data-bs-target="#destroyOrderModal">
            Destroy
        </button>
        <div className="modal fade" id="destroyOrderModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content" style={{backgroundColor: '#282c34'}}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Destroy order</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>When you click on destroy, the data will disappear forever, think carefully before making
                            your choice.</p>
                        <div className="row">
                            <div className="col">
                                <button
                                    onClick={() => dispatch(destroyClient(destroyData))}
                                    type="button" className="btn btn-danger btn-sm mt-3 me-1" data-bs-dismiss="modal">
                                    Destroy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default DestroyClient