import React, { useRef, useState } from 'react';
import "./Home.scss";
import Chip from './Chip';
import Modal from './Modal';
import data from "./data.json";
type DataType = {
    id: number,
    image: string, 
    name: string,
    email: string,
}

const Home = () => {
    const [modalData, setModalData] = useState<DataType[]>(data);
    const [chipData, setChipData] = useState<DataType[]>([]);
    const [lastUpdatedModalData, setLastUpdatedModalData] = useState<DataType[]>(data);
    const inputRef = useRef<any>(null);
    const handleCrossClick = (item: any) => {
        setChipData(chipData?.filter((ele) => ele?.id !== item?.id));
        setModalData([...modalData, item]);
        setLastUpdatedModalData([...lastUpdatedModalData, item]);
    };
    const handleModalItemClick = (item:any) => {
        setModalData(lastUpdatedModalData.filter((ele) => ele?.id !== item?.id));
        setChipData([...chipData, item]);
        setLastUpdatedModalData(lastUpdatedModalData?.filter((ele) => ele?.id !== item?.id));
        if(inputRef.current){
            inputRef.current.value="";
        }
    };
    const handleChange = (e: any) => {
        if(e.target.value.length === 0){
            setModalData(lastUpdatedModalData);
        }else{
            const filteredData = lastUpdatedModalData?.filter((item) => item?.name?.toLowerCase()?.includes(e.target.value?.toLowerCase()));
            setModalData(filteredData);
        }
    };
    const handlBarClick = () => {
        if(inputRef.current){
            inputRef?.current?.focus();
        }
    }
    return <div className='root'>
        <div className='heading'>Pick Users</div>
        <div className='container' onClick={handlBarClick}>
            <Chip chipData={chipData} handleCrossClick={handleCrossClick}/>
            <div className='input'><input ref={inputRef} type="text" onChange={(e) => handleChange(e)} placeholder={`${chipData.length === 0? 'Type User from below': ''}`}/></div>
        </div>
     <Modal modalData={modalData} handleModalItemClick={handleModalItemClick}/>
    </div>
};

export default Home;