import React, {useState} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from "./card.module.css"
import VisibilityIcon from '@material-ui/icons/Visibility';
import ButtonIcon from "../../../UI/ButtonIcon";
import Typography from "@material-ui/core/Typography";
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import CallMadeSharpIcon from '@material-ui/icons/CallMadeSharp';

const def_description = "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.";
// const def_image = "https://серебро.рф/img/placeholder.png"
const def_image = "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
const viewsNumber = 7500


const Card = ({image = def_image, description = def_description}) => {

    let [visibility, setVisibility] = useState(false)

    const handleMouseOverAndMouseOut = () => setVisibility(!visibility)

    return (
        <div onMouseOver={handleMouseOverAndMouseOut} onMouseOut={handleMouseOverAndMouseOut} className={styles.card}>
            <div className={styles.imageWrapper}>
                <div style={{backgroundImage: `url("${image}")`}} className={styles.image}>
                    <div className={styles.description}>
                        <ButtonIcon iconComponent={<AssignmentReturnedIcon className={styles.openCard} fontSize={"large"}/>}/>
                        <ButtonIcon iconComponent={<CallMadeSharpIcon className={styles.openCard} fontSize={"large"}/>}/>
                        <ButtonIcon iconComponent={<AssignmentReturnedIcon className={styles.openCard} fontSize={"large"}/>}/>
                    </div>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <FavoriteIcon fontSize={"small"}/>
                <p>45</p>
                <VisibilityIcon fontSize={"small"}/>
                <Typography>{viewsNumber / 1000}k</Typography>
            </div>
        </div>
    );
};

export default Card;