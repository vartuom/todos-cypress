import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import s from './Empty.module.scss'

export const Empty = () => {

    return (
        <div className={s.wrapper}>
            <FolderOpenIcon sx={{color: '#d3d3d3', fontSize: '70px'}}/>
            <p>
                Добавьте задачи и они появятся в этом списке &#128578;
            </p>            
        </div>
    )
}
