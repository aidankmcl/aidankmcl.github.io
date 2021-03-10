import * as React from 'react';

import { Layout, Box } from '../components';

export const ArticleLayout = ({ children }) => {
  return (
    <Layout>
      <div className="article container my-5">
        <div className="row my-5 py-5 justify-content-center">
          <div className="col-12 col-md-10 col-lg-9">
            <Box className="p-4 p-lg-5">
              {children}
            </Box>
          </div>
        </div>
      </div>
    </Layout>
  )
};
