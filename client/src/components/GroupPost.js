import React from 'react'
import Post from './Post'
import { Box } from "@mui/material";

const GroupPost = () => {
  return (
    <div>
       <Box flex={4} p={{ xs: 0 }} sx={{ marginLeft: '27%',width:'40%' }}>
          <Post />
          <Post />
          <Post />
          <Post />
    </Box>
    </div>
  )
}

export default GroupPost;
