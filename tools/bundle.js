import webpack from 'webpack';
import config from './webpack.config.js';

async function bundle() {
  const compiler = webpack(config);
  await compiler.run((err, stats) => {
    if (err) {
      throw(err);
    }
    console.log(stats.toString(config.stats));
  });
}

export default bundle;