import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { MenuList } from '../data/data';

const Menu = () => {
  return (
    <Layout>
      <Box>
        {MenuList.map((menu) => (
          <Card key={menu.name}> {/* Add a unique key for each Card */}
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: '400px' }}
                component={'img'}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant='h5' gutterBottom component={'div'}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
