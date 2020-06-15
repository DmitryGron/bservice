import React from 'react';
import Logo from '../components/Logo';
import ActionButton from '../components/Buttons/ActionButton'
import MainContainer from "../components/MainContainer";
import burger from '../assets/burger.svg'
import {InfoContainerBlack} from "../components/InfoContainer";
import Modal from '../components/Modal';

const Privacy: React.FC = () => {   
    const [open, setOpen] = React.useState<boolean | undefined>(undefined);

    const handleOpen = () => {
        open === undefined ? setOpen(true) : setOpen(!open);
      };

    return (
        <MainContainer>
            <Logo red={true}/>
                <ActionButton src={burger} onClick={handleOpen}/>
                <Modal isOpen={open} />
            <InfoContainerBlack/>
        </MainContainer>
    )
};
export default Privacy;
