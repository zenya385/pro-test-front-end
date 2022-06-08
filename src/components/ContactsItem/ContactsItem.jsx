// import contacts from "../../pages/Contacts/contacts/contacts.json";
import s from './ContactsItem.module.scss';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getContacts} from '../../redux/contacts/contOperations';


const ContactsItem = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contacts.items.ResponseBody);
    useEffect(() => {
        dispatch(getContacts())
      },[dispatch])
    console.log(contacts);
    return (<>
        {contacts.map(cont => 
            <li className={s.contactItem} key={cont._id} id={cont._id} onClick={() => {
                
            }}>
                {/* <img className={s.avatar} src={cont.avatar} alt={cont.name} /> */}
                <img className={s.avatar} src={require(`./avatar/${cont.avatar}`)} alt={cont.name} />
                <div className={s.conatcInf}>
            <p className={s.name}>{cont.name}</p>
            <p className={s.jodTitle}>{cont.job_title}</p>
            <p className={s.comment}>{cont.comment}</p>
                </div>
            </li>
        )
        }
    </>)
}

export default ContactsItem;