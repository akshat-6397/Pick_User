type DataType = {
    id: number,
    image: string, 
    name: string,
    email: string,
}
type ChipDataType = {
    chipData: DataType[],
    handleCrossClick: (ele: any) => void,
}
const Chip = ({chipData, handleCrossClick}: ChipDataType) => {
    console.log(chipData, "aaa");
    return <div className="chip">
        <ul>
            {chipData?.length > 0 && chipData.map((item: any) => 
                <li key={item?.id}><img className="profileImage" src={item?.image}/><p>{item?.name}</p> <img onClick={(e) => handleCrossClick(item)} className="cross" src="https://www.svgrepo.com/download/80301/cross.svg" alt="cross"/></li>
            )}
        </ul>
    </div>
};

export default Chip;