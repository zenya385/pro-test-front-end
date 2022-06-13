import { getResume } from "../../utils/fetchApi"
import s from "./ContactCard.module.scss"



const ContactCard = ({ contact }) => {

    const { avatar, name, job_title, comment, links } = contact;


    const downloadClickHandler = (e) => {
        e.preventDefault();
        getResume(links.resume)
    };

    const renderCheck = (data) => {
        if (data === "" || !data) {
            return false
        } else {
            return true
        }
    };

    return (
        <div>
            <img className={s.avatar} src={require(`../../images/avatar/${avatar}`)} alt={name} />
            <div className={s.conatcInf}>
                <p className={s.name}>{name}</p>
                <p className={s.jodTitle}>{job_title}</p>
                <p className={s.comment}>{comment}</p>
            </div>

            <ul className={s.social_list}>
                {renderCheck(links.linkedin) &&
                    <li className={s.social_list_item}>
                        <a href={links.linkedin} className={s.social_list_link}target="_blank" rel="no-referrer">
                            {/* <svg className={s.social_list_link_img}>
                                        <use href="./images/sprite.svg#instagram"></use>
                                    </svg> */}
                            <span>L</span>
                        </a>
                    </li>
                }

                {renderCheck(links.github) &&
                    <li className={s.social_list_item}>
                        <a href={links.github} className={s.social_list_link}target="_blank" rel="no-referrer">
                            {/* <svg className={s.social_list_link_img}>
                                        <use href="./images/sprite.svg#instagram"></use>
                                    </svg> */}
                            <span>G</span>
                        </a>
                    </li>
                }

                {renderCheck(links.email) &&
                    <li className={s.social_list_item}>
                        <a href="mailto:{links.email}" className={s.social_list_link}target="_blank" rel="no-referrer">
                            {/* <svg className={s.social_list_link_img}>
                                        <use href="./images/sprite.svg#instagram"></use>
                                    </svg> */}
                            <span>X</span>
                        </a>
                    </li>
                }

                {renderCheck(links.resume) &&
                    <li className={s.social_list_item}>
                        <a href="" className={s.social_list_link} target="_blank" rel="no-referrer" onClick={downloadClickHandler}>
                            {/* <svg className={s.social_list_link_img}>
                                        <use href="./images/sprite.svg#instagram"></use>
                                    </svg> */}
                            <span>R</span>
                        </a>
                    </li>
                }

            </ul>
        </div>
    )
};

export default ContactCard;