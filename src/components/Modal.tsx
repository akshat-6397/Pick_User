type DataType = {
    id: number,
    image: string, 
    name: string,
    email: string,
}
type ModalType = {
    modalData: DataType[],
    handleModalItemClick: (ele: any) => void,
}
const Modal = ({modalData, handleModalItemClick}: ModalType) => {
    return <div className="modal">
        <ul>
            {modalData?.length > 0 ? modalData?.map((item: any) =>  <li key={item?.id} onClick={(e) => handleModalItemClick(item)}>
                <img className="image" src={item?.image}/>
                <h5 className="text">{item?.name}</h5>
                <p className="email">{item?.email}</p> 
            </li>) : <li>
                <p>No user left</p>
            </li> }
        </ul>
    </div>
};

export default Modal;