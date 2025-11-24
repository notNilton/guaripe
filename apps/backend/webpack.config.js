const path = require('path');

module.exports = function (options, webpack) {
  return {
    ...options,
    externals: [],
    output: {
      ...options.output,
      devtoolModuleFilenameTemplate: (info) => {
        const rel = path.relative(process.cwd(), info.absoluteResourcePath);
        return `webpack:///./${rel}`;
      },
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
          exclude: /node_modules/,
          include: [
            path.resolve(__dirname, 'src'),
            // Incluir pacotes do workspace para compilação
            path.resolve(__dirname, '../../packages/dtos'),
            path.resolve(__dirname, '../../packages/interfaces'),
            path.resolve(__dirname, '../../packages/config'),
          ],
        },
      ],
    },
    resolve: {
      ...options.resolve,
      extensions: ['.ts', '.js', '.json'],
      alias: {
        '@project-valkyrie/dtos': path.resolve(__dirname, '../../packages/dtos'),
        '@project-valkyrie/interfaces': path.resolve(__dirname, '../../packages/interfaces'),
        '@project-valkyrie/config': path.resolve(__dirname, '../../packages/config'),
      },
    },
  };
};
