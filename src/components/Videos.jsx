import React from 'react'
import { Stack, Box } from '@mui/material';
import { ChannelCard, VideoCard} from './';


const Videos = ({ videos }) => {
  console.log(videos)

  return (
    <Stack direction='row' flexwrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx} sx={{ width: { sx: '100%', md: '48%' }}}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}

    </Stack>
  )
}

export default Videos