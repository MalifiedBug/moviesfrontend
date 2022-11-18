import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import IconButton from '@mui/material/IconButton';

import Badge from '@mui/material/Badge';

import { useState } from 'react';




export default function Counter(){

    const[like,setLike] = useState(null)
    const[dislike, setDislike] = useState(null)

    return(

        <div className='counterdiv'>
            <Badge badgeContent={like} color="primary">
            <IconButton onClick={()=>{setLike(like+1)}}>
               <ThumbUpIcon />
            </IconButton>
            </Badge>

            <Badge badgeContent={dislike} color="error">
            <IconButton onClick={()=>{setDislike(dislike+1)}}>
               <ThumbDownIcon />
            </IconButton>
            </Badge>
            
                        
        </div>
    )
}