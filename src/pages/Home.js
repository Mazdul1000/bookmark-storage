import { Typography } from '@mui/material';
import React from 'react';
import { useGetBookmarksQuery } from '../features/bookmarks/bookmarkApi';

const Home = () => {
    const {
        data,
        isLoading,
        isError,
        error,
      } = useGetBookmarksQuery()|| {};
    return (
        <div>
            <Typography variant='h3'> Hello {data}</Typography>
        </div>
    );
};

export default Home;