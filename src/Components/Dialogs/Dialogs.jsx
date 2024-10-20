import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let DialogsData = [
        {id: 1, name: 'Romochka'},
        {id: 2, name: 'Utegen'},
        {id: 3, name: 'Sanzhar'},
        {id: 4, name: 'Hatch'},
    ]


    let Messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello dude, how it\'s going?'},
        {id: 3, message: 'I pull up 250 kg lol'},
        {id: 4, message: 'bye man'},
    ]
    let DialogsElements = DialogsData.map(Dialog => <DialogItem name={Dialog.name} id={Dialog.id}/>);
    let messagesElements = Messages.map(message => <Message message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {DialogsElements}
                {/*<DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>*/}
                {/*<DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>*/}

                {/*<DialogItem name="Romochka" id="1"/>*/}
                {/*<DialogItem name="Utegen" id="2"/>*/}
                {/*<DialogItem name="Sanzhar" id="3"/>*/}
                {/*<DialogItem name="Hatch" id="4"/>*/}

            </div>
            <div className={s.messages}>
                <Message message={Messages[0].message} id={Messages[0].id}/>
                <Message message={Messages[1].message} id={Messages[1].id}/>
                <Message message={Messages[2].message} id={Messages[2].id}/>
                <Message message={Messages[3].message} id={Messages[3].id}/>
            </div>
        </div>

    )
}


export default Dialogs;
