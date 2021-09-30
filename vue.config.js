// vue.config.js
module.exports = {
    css: {
      loaderOptions: {
        // pass options to sass-loader
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.sass`
        // Note: this option is named as "prependData" in sass-loader v8
        less:{
          additionalData: `@import "@/assets/css/variables.less";`
          },

          
          },
        },
        chainWebpack: (config) => {
          const svgRule = config.module.rule('svg');
       
          svgRule.uses.clear();
       
          svgRule
            .use('babel-loader')
            .loader('babel-loader')
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
        }
      }
